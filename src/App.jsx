// Run this in your eva-os project folder:
//   node fix-app.js
// It reads src/App.jsx, removes SkillMatrix, writes src/App.jsx

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove SKILL MATRIX comment block + HS_PLAN + SkillMatrix function
const skillMatrixComment = '// SKILL MATRIX - Handshake AI role skills + confidence tracking';
const idx = content.indexOf(skillMatrixComment);
if (idx === -1) {
  console.error('ERROR: Could not find SKILL MATRIX comment');
  process.exit(1);
}

// Go back to the ═══ line before it
let blockStart = content.lastIndexOf('\n// ', idx);
blockStart = content.lastIndexOf('\n', blockStart - 1) + 1;

// Find "function WorkTab(){" which comes after SkillMatrix
const workTabIdx = content.indexOf('function WorkTab(){');
if (workTabIdx === -1) {
  console.error('ERROR: Could not find WorkTab function');
  process.exit(1);
}

// Remove everything from blockStart to workTabIdx
content = content.substring(0, blockStart) + content.substring(workTabIdx);

// 2. Fix WorkTab tabs - remove Handshake
const oldTabs = 'const tabs=[{k:"income",l:"Income Stream"},{k:"skills",l:"Handshake"},{k:"career",l:"Career Compass"}];';
const newTabs = 'const tabs=[{k:"income",l:"Income Stream"},{k:"career",l:"Career Compass"}];';
content = content.replace(oldTabs, newTabs);

// 3. Remove SkillMatrix render line  
content = content.replace('    {view==="skills"&&<SkillMatrix/>}\n', '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done! SkillMatrix removed from src/App.jsx');
console.log('You can now: git add . && git commit -m "Remove SkillMatrix" && git push');
