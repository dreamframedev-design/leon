const fs = require('fs');
const files = ['index.html', 'news.html', 'contact.html'];
files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/href="[/#]*about"/g, 'href="/about.html"');
    c = c.replace(/href="[/#]*services"/g, 'href="/services.html"');
    c = c.replace(/href="[/#]*products"/g, 'href="/products.html"');
    c = c.replace(/href="[/#]*frjet"/g, 'href="/frjet.html"');
    c = c.replace(/href="[/#]*nanoscreen"/g, 'href="/nanoscreen.html"');
    c = c.replace(/href="[/#]*nanolab"/g, 'href="/nanolab.html"');
    c = c.replace(/href="[/#]*nanome"/g, 'href="/nanome.html"');
    c = c.replace(/href="[/#]*nanous"/g, 'href="/nanous.html"');
    fs.writeFileSync(f, c);
});
console.log('Replaced links in 3 files');
