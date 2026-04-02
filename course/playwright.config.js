// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 100 * 1000,
  expect:
  {
    timeout: 40*1000,
  },
  reporter: 'html',

  use: {
    headless: false,
    browserName: 'chromium',
    trace: 'on',
    sources: true,
    launchOptions: {
      slowMo: 1000, // Delays actions by 1 second so the video is readable
    },
    
  },

  
});

