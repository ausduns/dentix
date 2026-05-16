const { chromium } = require('playwright');
const fs = require('fs');

const url = process.argv[2];
if (!url) {
  console.error('Usage: node extract-layout-metrics.js <URL>');
  process.exit(1);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const components = await page.$$eval('[data-framer-name]', (els) =>
    els.map((el) => ({
      name: el.getAttribute('data-framer-name'),
      layout: {
        display: getComputedStyle(el).display,
        paddingTop: getComputedStyle(el).paddingTop,
        paddingRight: getComputedStyle(el).paddingRight,
        paddingBottom: getComputedStyle(el).paddingBottom,
        paddingLeft: getComputedStyle(el).paddingLeft,
        gap: getComputedStyle(el).gap,
        gridTemplateColumns: getComputedStyle(el).gridTemplateColumns,
        flexDirection: getComputedStyle(el).flexDirection,
        backgroundColor: getComputedStyle(el).backgroundColor,
        borderRadius: getComputedStyle(el).borderRadius,
      },
      dimensions: el.getBoundingClientRect(),
    }))
  );

  fs.writeFileSync('layout-metrics.json', JSON.stringify(components, null, 2));
  console.log('Saved layout-metrics.json');
  await browser.close();
})();
