const fs = require('fs');
const lines = fs.readFileSync('combined_knowledge.txt', 'utf8').split('\n').filter(l => l.includes('|||'));

let chatbot = fs.readFileSync('src/components/Chatbot.jsx', 'utf8');

let entries = '';
const seen = new Set();
for (const line of lines) {
  const idx = line.indexOf('|||');
  if (idx === -1) continue;
  const k = line.substring(0, idx).trim();
  const v = line.substring(idx + 3).trim();
  if (!k || !v || seen.has(k)) continue;
  seen.add(k);
  entries += '  ' + JSON.stringify(k) + ': ' + JSON.stringify(v) + ',\n';
}

const startMarker = 'const knowledge = {';
const endMarker = '\n}\n\n// Find best';
const startIdx = chatbot.indexOf(startMarker);
const endIdx = chatbot.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const before = chatbot.substring(0, startIdx);
  const after = chatbot.substring(endIdx);
  chatbot = before + 'const knowledge = {\n' + entries + after;
  fs.writeFileSync('src/components/Chatbot.jsx', chatbot);
  console.log('Done: ' + seen.size + ' unique entries (deduped from ' + lines.length + ')');
} else {
  console.log('Markers not found: start=' + startIdx + ' end=' + endIdx);
}
