const { devices } = require('@playwright/test');
const config = {
  reporter: [['line'], ['allure-playwright']],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};
module.exports = config;
