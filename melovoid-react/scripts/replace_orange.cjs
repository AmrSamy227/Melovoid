const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('PlayerBar.tsx') && !fullPath.includes('Navbar.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const original = content;
      content = content.replace(/text-orange-500/g, 'text-[var(--page-accent)]');
      content = content.replace(/bg-orange-500/g, 'bg-[var(--page-accent)]');
      content = content.replace(/border-orange-500/g, 'border-[var(--page-accent)]');
      content = content.replace(/hover:text-orange-500/g, 'hover:text-[var(--page-accent)]');
      content = content.replace(/hover:bg-orange-500/g, 'hover:bg-[var(--page-accent)]');
      content = content.replace(/hover:border-orange-500/g, 'hover:border-[var(--page-accent)]');
      content = content.replace(/border-l-2 border-orange-500/g, 'border-l-2 border-[var(--page-accent)]');
      content = content.replace(/text-orange-600/g, 'text-[var(--page-accent)]');
      content = content.replace(/bg-orange-600/g, 'bg-[var(--page-accent)]');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(path.join(__dirname, '../src'));
console.log("Done.");
