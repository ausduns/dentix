const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Wrap hero in hero-wrap
html = html.replace('<section class="hero container">', '<div class="hero-wrap">\n<section class="hero">');
// Note: we might need to remove 'container' from hero if hero-wrap handles it, but let's see.
html = html.replace('</section>\n\n<!-- EXPERIENCE -->', '</section>\n</div>\n\n<!-- EXPERIENCE -->');

// Add hero-gradient
html = html.replace('<div class="hero-bg">', '<div class="hero-gradient"></div>\n  <div class="hero-bg">');

fs.writeFileSync('index.html', html);
