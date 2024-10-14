const { expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

class SearchResultsPage {
  constructor(page) {
    this.page = page;
  }

  async verifyResults(expectedText) {
    await allure.step(`Проверка, что результаты поиска содержат текст "${expectedText}"`, async () => {
      const resultLocator = this.page.locator(`span.render_svg:has-text("${expectedText}")`).first();
      await expect(resultLocator).toBeVisible();
    });
  }

  async verifyUrlContains(query) {
    await allure.step(`Проверка, что URL содержит текст "${query}"`, async () => {
      await expect(this.page).toHaveURL(new RegExp(`search/\\?query=${query}`));
    });
  }
}

module.exports = { SearchResultsPage };