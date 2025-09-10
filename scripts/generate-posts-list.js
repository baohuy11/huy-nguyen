const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(__dirname, '../frontend/public/posts');
const outputPath = path.join(__dirname, '../frontend/src/posts-list.json');

const filenames = fs.readdirSync(postsDirectory);
const mdFilenames = filenames.filter(name => name.endsWith('.md'));

fs.writeFileSync(outputPath, JSON.stringify(mdFilenames, null, 2));
console.log('Successfully generated posts-list.json containing:', mdFilenames);
