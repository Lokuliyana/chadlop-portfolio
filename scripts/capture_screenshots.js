const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const projects = [
  {
    url: 'https://danidu.com',
    output: 'danidu.png',
  },
  {
    url: 'https://room-booking.chandupa.dev',
    output: 'room-booking.jpg',
  },
  {
    url: 'https://euphoria-hiru.vercel.app/',
    output: 'euphoria.png',
  },
  {
    url: 'https://vogue-essentials-store.vercel.app/',
    output: 'vogue-essentials.png',
  },
  {
    url: 'https://artisan-roast.vercel.app/',
    output: 'artisan-roast.png',
  },
  {
    url: 'https://luminous-eta.vercel.app/',
    output: 'luminous.png',
  },
  {
    url: 'https://chandupadev.vercel.app/',
    output: 'chandupa-portfolio.png',
  },
  {
    url: 'https://sri-ananda-dhamma-school-4i9y.vercel.app/',
    output: 'dhamma-school.png',
  },
];

const outputDir = path.join(__dirname, '../public/projects');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const project of projects) {
    const page = await browser.newPage();
    try {
      console.log(`Navigating to ${project.url}...`);
      await page.setViewport({ width: 1280, height: 720 });
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 60000 });
      
      const outputPath = path.join(outputDir, project.output);
      await page.screenshot({ path: outputPath });
      console.log(`Saved screenshot to ${outputPath}`);
    } catch (error) {
      console.error(`Failed to capture ${project.url}:`, error.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Screenshot capture complete.');
})();
