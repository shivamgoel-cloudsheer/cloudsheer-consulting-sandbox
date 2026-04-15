const fs = require('fs');
const lines = fs.readFileSync('C:/Users/USER/salesforce_knowledge_base.txt', 'utf8').split('\n').filter(l => l.includes('|||'));

let chatbot = fs.readFileSync('src/components/Chatbot.jsx', 'utf8');

// Build entries
let entries = '';
for (const line of lines) {
  const idx = line.indexOf('|||');
  if (idx === -1) continue;
  const k = line.substring(0, idx).trim();
  const v = line.substring(idx + 3).trim();
  const ke = JSON.stringify(k);
  const ve = JSON.stringify(v);
  entries += '  ' + ke + ': ' + ve + ',\n';
}

// Replace knowledge block
const startMarker = 'const knowledge = {';
const endMarker = "\n}\n\n// Find best";
const startIdx = chatbot.indexOf(startMarker);
const endIdx = chatbot.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const before = chatbot.substring(0, startIdx);
  const after = chatbot.substring(endIdx);
  chatbot = before + 'const knowledge = {\n' + entries + after;
  fs.writeFileSync('src/components/Chatbot.jsx', chatbot);
  console.log('Done: ' + lines.length + ' entries');
} else {
  console.log('Markers not found: start=' + startIdx + ' end=' + endIdx);
}
