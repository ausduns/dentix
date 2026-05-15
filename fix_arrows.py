import os

svg_icon = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" style="margin-left:8px;vertical-align:middle;"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'

for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content.replace(' ↗', svg_icon)
            new_content = new_content.replace('↗', svg_icon)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

print("Fixed arrows.")
