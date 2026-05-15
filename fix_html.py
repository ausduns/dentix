import os
import re

with open('index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()

nav_match = re.search(r'(<nav class="navbar">.*?</nav>)', idx_content, re.DOTALL)
footer_match = re.search(r'(<footer class="footer">.*?</footer>)', idx_content, re.DOTALL)

if not nav_match or not footer_match:
    print("Could not find nav or footer in index.html")
    exit(1)

nav_html = nav_match.group(1)
footer_html = footer_match.group(1)

def fix_paths(html_block):
    # Prefix local links with ../
    def repl(m):
        url = m.group(1)
        if not url.startswith('http') and not url.startswith('mailto') and not url.startswith('tel') and not url.startswith('#'):
            return f'href="../{url}"'
        return m.group(0)
    html_block = re.sub(r'href="([^"]+)"', repl, html_block)
    
    def repl_src(m):
        url = m.group(1)
        if not url.startswith('http') and not url.startswith('data:'):
            return f'src="../{url}"'
        return m.group(0)
    html_block = re.sub(r'src="([^"]+)"', repl_src, html_block)
    
    return html_block

nav_html_sub = fix_paths(nav_html)
footer_html_sub = fix_paths(footer_html)

for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html') and file != 'index.html':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # replace nav
            content = re.sub(r'<nav class="navbar"[^>]*>.*?</nav>', nav_html_sub if '/' in filepath else nav_html, content, flags=re.DOTALL)
            # replace footer
            content = re.sub(r'<footer class="footer"[^>]*>.*?</footer>', footer_html_sub if '/' in filepath and not filepath.startswith('./') else footer_html, content, flags=re.DOTALL)
            
            # Since os.walk('.') gives './services/x.html', we should check for subdirectory correctly.
            is_subdir = filepath.count('/') > 1
            if is_subdir:
                content = re.sub(r'<nav class="navbar"[^>]*>.*?</nav>', nav_html_sub, content, flags=re.DOTALL)
                content = re.sub(r'<footer class="footer"[^>]*>.*?</footer>', footer_html_sub, content, flags=re.DOTALL)
            else:
                content = re.sub(r'<nav class="navbar"[^>]*>.*?</nav>', nav_html, content, flags=re.DOTALL)
                content = re.sub(r'<footer class="footer"[^>]*>.*?</footer>', footer_html, content, flags=re.DOTALL)

            # Fix phone number
            content = content.replace('+37129514734', '(503) 370-8787')
            content = content.replace('tel:(503) 370-8787', 'tel:+15033708787')
            
            # Fix old buttons
            content = content.replace('btn-primary', 'btn-olive')
            content = content.replace('btn-secondary', 'btn-outline')
            
            # Fix images
            content = content.replace('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', 'https://framerusercontent.com/images/4HytcC5SH5wppXFXnFHsYwunVHM.png')
            content = content.replace('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', 'https://framerusercontent.com/images/gfKDEeDTH0gNXnMcLZHSxVUqFKI.png')
            content = content.replace('https://images.unsplash.com/photo-1594824476967-48c8b964dc31?w=400&q=80', 'https://framerusercontent.com/images/kLPW7o56Zt8gw0D96XHDliaFNM.png')
            content = content.replace('https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80', 'https://framerusercontent.com/images/iYjcCRZeo67UEB1OUxgbZyT2ig.png')
            content = content.replace('https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80', 'https://framerusercontent.com/images/iYjcCRZeo67UEB1OUxgbZyT2ig.png')
            content = content.replace('https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=400&q=80', 'https://framerusercontent.com/images/kLPW7o56Zt8gw0D96XHDliaFNM.png')

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

print("Updates complete.")
