import json

with open('/Users/austindunsworth/.gemini/antigravity/brain/77b41d9b-6037-4ac4-90d8-1f4062ab468a/.system_generated/steps/5/output.txt', 'r') as f:
    data = json.load(f)

screens = data.get('screens', [])
desktop_screens = [s for s in screens if s.get('deviceType') == 'DESKTOP']
mobile_screens = [s for s in screens if s.get('deviceType') == 'MOBILE']

desktop_titles = {s.get('title').lower().replace(' (desktop)', '').replace(' - desktop', '').strip(): s for s in desktop_screens}
mobile_titles = {s.get('title').lower().replace(' (mobile)', '').replace(' - mobile', '').strip(): s for s in mobile_screens}

print(f"Total screens: {len(screens)}")
print(f"Desktop screens: {len(desktop_screens)}")
print(f"Mobile screens: {len(mobile_screens)}")
print("\nDesktop screens without a clear mobile equivalent:")

missing = 0
for title in desktop_titles.keys():
    # Attempt fuzzy matching or direct matching
    found = False
    for m_title in mobile_titles.keys():
        if title in m_title or m_title in title:
            found = True
            break
    if not found:
        print(f"- {desktop_titles[title]['title']}")
        missing += 1

print(f"\nTotal missing: {missing}")
