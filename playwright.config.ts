import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch: '**/*.test.ts',
  projects: [
    {
      name: 'Chromium Desktop',
      use: {
        ...devices['Desktop Chrome']
      },
    },
    {
      name: 'Chromium Android',
      use: {
        ...devices['Pixel 7']
      },
    },
    {
      name: 'WebKit Desktop',
      use: {
        ...devices['Desktop Safari']
      },
    },
    {
      name: 'WebKit iOS',
      use: {
        ...devices['iPhone 14']
      },
    },
  ],
  webServer: {
    command: 'npm run serve',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  }
});