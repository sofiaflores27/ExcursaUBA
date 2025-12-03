import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000, // 60 segundos por test
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 10000,
    baseURL: 'http://localhost:3000',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], headless: true },
    },
    // Puedes deshabilitar WebKit si no lo necesitás
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], headless: false },
    // },
  ],
  webServer: {
    command: 'npm run dev',
    port: 3000,
    timeout: 120 * 1000, // 2 minutos para que levante Next.js
    reuseExistingServer: !process.env.CI,
  },
});
