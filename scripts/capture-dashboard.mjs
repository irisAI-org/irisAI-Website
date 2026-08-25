import puppeteer from 'puppeteer-core'

const OUT = 'C:/Users/Akash Yadav/OneDrive/Desktop/irisAI_Project/irisAIWebsite/public/images/admin-dashboard.png'

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--no-first-run', '--disable-extensions', '--hide-scrollbars', '--force-device-scale-factor=2'],
})

try {
  const page = await browser.newPage()
  // 2x scale for a crisp marketing image
  await page.setViewport({ width: 1500, height: 940, deviceScaleFactor: 2 })

  await page.goto('http://localhost:8080/login', { waitUntil: 'networkidle2', timeout: 45000 })

  await page.waitForSelector('input[placeholder="Enter your username"]', { timeout: 20000 })
  await page.type('input[placeholder="Enter your username"]', 'admin')
  await page.type('input[placeholder="Enter your password"]', 'ChangeMe#123')
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 45000 }).catch(() => {}),
    page.click('button[type="submit"]'),
  ])

  // land on the admin dashboard and wait for the charts to draw
  await page.goto('http://localhost:8080/dashboard', { waitUntil: 'networkidle2', timeout: 45000 })
  await page.waitForSelector('.recharts-surface', { timeout: 30000 })
  await new Promise((r) => setTimeout(r, 2500)) // chart animations settle

  await page.screenshot({ path: OUT, type: 'png' })
  console.log('SAVED', OUT)
} finally {
  await browser.close()
}
