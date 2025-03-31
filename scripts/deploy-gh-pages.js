/**
 * This script handles the deployment to GitHub Pages
 * It creates a gh-pages branch (or uses existing one)
 * and copies the content from 'out' directory to the root of this branch
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

// Helper function to execute shell commands
function runCommand(command) {
  try {
    console.log(`${colors.yellow}➤ Running:${colors.reset} ${command}`);
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`${colors.red}✖ Error:${colors.reset} ${error.message}`);
    return false;
  }
}

// Save the current branch name
let currentBranch;
try {
  currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  console.log(`${colors.cyan}ℹ Current branch:${colors.reset} ${currentBranch}`);
} catch (error) {
  console.error(`${colors.red}✖ Error getting current branch:${colors.reset} ${error.message}`);
  process.exit(1);
}

// Main deployment process
(async function deploy() {
  console.log(`\n${colors.bright}${colors.cyan}Starting GitHub Pages deployment...${colors.reset}\n`);
  
  // Ensure the output directory exists
  if (!fs.existsSync('out')) {
    console.log(`${colors.yellow}⚠ Warning: 'out' directory does not exist. Creating it now...${colors.reset}`);
    fs.mkdirSync('out', { recursive: true });
    
    // Copy public directory if it exists
    if (fs.existsSync('public')) {
      console.log(`${colors.cyan}ℹ Copying files from public directory...${colors.reset}`);
      try {
        const publicFiles = fs.readdirSync('public');
        for (const file of publicFiles) {
          const srcPath = path.join('public', file);
          const destPath = path.join('out', file);
          
          if (fs.lstatSync(srcPath).isDirectory()) {
            fs.cpSync(srcPath, destPath, { recursive: true });
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      } catch (error) {
        console.log(`${colors.yellow}⚠ Warning: Error copying public files: ${error.message}${colors.reset}`);
      }
    }
    
    // Copy index.html if it exists
    if (fs.existsSync('index.html')) {
      console.log(`${colors.cyan}ℹ Copying index.html...${colors.reset}`);
      fs.copyFileSync('index.html', 'out/index.html');
    } else {
      console.error(`${colors.red}✖ Error: No index.html found.${colors.reset}`);
      process.exit(1);
    }
  }
  
  // Verify the out directory has content
  try {
    const outFiles = fs.readdirSync('out');
    if (outFiles.length === 0) {
      console.error(`${colors.red}✖ Error: The 'out' directory exists but is empty.${colors.reset}`);
      process.exit(1);
    } else {
      console.log(`${colors.green}✓ 'out' directory contains ${outFiles.length} files/directories${colors.reset}`);
    }
  } catch (error) {
    console.error(`${colors.red}✖ Error reading 'out' directory: ${error.message}${colors.reset}`);
    process.exit(1);
  }
  
  // Create a temporary directory to preserve the out directory content
  // This is necessary because the out directory is lost when switching branches
  const tempDir = path.join(os.tmpdir(), 'gh-pages-deploy-' + Date.now());
  console.log(`${colors.cyan}ℹ Creating temporary directory: ${tempDir}${colors.reset}`);
  fs.mkdirSync(tempDir, { recursive: true });
  
  // Copy out directory to temporary location
  try {
    console.log(`${colors.cyan}ℹ Copying 'out' directory to temporary location...${colors.reset}`);
    fs.cpSync('out', tempDir, { recursive: true });
    console.log(`${colors.green}✓ Files backed up to temporary directory${colors.reset}`);
  } catch (error) {
    console.error(`${colors.red}✖ Error backing up files: ${error.message}${colors.reset}`);
    process.exit(1);
  }
  
  // Check if there are any uncommitted changes
  try {
    const status = execSync('git status --porcelain').toString().trim();
    if (status) {
      console.log(`${colors.yellow}⚠ Warning: You have uncommitted changes.${colors.reset}`);
      console.log(`${colors.yellow}It's recommended to commit or stash them before deploying.${colors.reset}`);
      
      // Prompt to continue (just a message, we'll continue anyway in this script)
      console.log(`${colors.yellow}Press Ctrl+C to cancel or wait to continue...${colors.reset}`);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  } catch (error) {
    console.error(`${colors.red}✖ Error checking git status:${colors.reset} ${error.message}`);
  }
  
  // Try to create the gh-pages branch if it doesn't exist
  try {
    execSync('git show-ref --verify --quiet refs/heads/gh-pages');
    console.log(`${colors.cyan}ℹ Branch gh-pages already exists${colors.reset}`);
  } catch (error) {
    console.log(`${colors.cyan}ℹ Creating gh-pages branch${colors.reset}`);
    if (!runCommand('git checkout --orphan gh-pages') || 
        !runCommand('git rm -rf .') || 
        !runCommand('git commit --allow-empty -m "Initial gh-pages commit"')) {
      console.error(`${colors.red}✖ Failed to create gh-pages branch${colors.reset}`);
      runCommand(`git checkout ${currentBranch}`);
      process.exit(1);
    }
    runCommand(`git checkout ${currentBranch}`);
  }
  
  // Now checkout the gh-pages branch
  if (!runCommand('git checkout gh-pages')) {
    console.error(`${colors.red}✖ Failed to checkout gh-pages branch${colors.reset}`);
    process.exit(1);
  }
  
  // Remove all files (except .git)
  try {
    const files = fs.readdirSync('.');
    for (const file of files) {
      if (file !== '.git') {
        const filePath = path.join('.', file);
        if (fs.lstatSync(filePath).isDirectory()) {
          fs.rmSync(filePath, { recursive: true, force: true });
        } else {
          fs.unlinkSync(filePath);
        }
      }
    }
    console.log(`${colors.green}✓ Cleared gh-pages branch${colors.reset}`);
  } catch (error) {
    console.error(`${colors.red}✖ Error clearing gh-pages branch:${colors.reset} ${error.message}`);
    runCommand(`git checkout ${currentBranch}`);
    process.exit(1);
  }
  
  // Copy all files from temporary directory to the root
  try {
    // List all files in the temporary directory
    const tempOutDir = path.join(tempDir);
    const files = fs.readdirSync(tempOutDir);
    for (const file of files) {
      const srcPath = path.join(tempOutDir, file);
      const destPath = path.join('.', file);
      
      if (fs.lstatSync(srcPath).isDirectory()) {
        fs.cpSync(srcPath, destPath, { recursive: true });
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
    console.log(`${colors.green}✓ Copied static files to gh-pages branch${colors.reset}`);
    
    // Clean up the temporary directory
    fs.rmSync(tempDir, { recursive: true, force: true });
    console.log(`${colors.green}✓ Cleaned up temporary directory${colors.reset}`);
  } catch (error) {
    console.error(`${colors.red}✖ Error copying files:${colors.reset} ${error.message}`);
    runCommand(`git checkout ${currentBranch}`);
    process.exit(1);
  }
  
  // Create a .nojekyll file to disable Jekyll processing
  fs.writeFileSync('.nojekyll', '');
  console.log(`${colors.green}✓ Created .nojekyll file${colors.reset}`);
  
  // Add all files, commit and push
  if (!runCommand('git add .') || 
      !runCommand('git commit -m "Deploy to GitHub Pages"')) {
    console.error(`${colors.red}✖ Failed to commit changes${colors.reset}`);
    runCommand(`git checkout ${currentBranch}`);
    process.exit(1);
  }
  
  // Push to remote immediately without asking
  if (!runCommand('git push origin gh-pages --force')) {
    console.error(`${colors.red}✖ Failed to push to GitHub${colors.reset}`);
    runCommand(`git checkout ${currentBranch}`);
    process.exit(1);
  }
  
  // Switch back to the original branch
  if (!runCommand(`git checkout ${currentBranch}`)) {
    console.error(`${colors.red}✖ Failed to switch back to original branch${colors.reset}`);
    process.exit(1);
  }
  
  console.log(`\n${colors.bright}${colors.green}✓ GitHub Pages deployment completed successfully!${colors.reset}`);
  console.log(`${colors.cyan}ℹ The site will be available shortly at:${colors.reset} https://[username].github.io/[repository]`);
})(); 