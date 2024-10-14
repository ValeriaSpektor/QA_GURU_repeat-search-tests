const { allure } = require('allure-playwright');

class TopMenuPage {
  constructor(page) {
    this.page = page;
    this.searchIcon = page.locator('button.header-top__actions-link[aria-label="Поиск"]');
    this.searchInput = page.locator('input[placeholder="Что вы ищете?"]');
  }

  async clickSearchIcon() {
    await allure.step('Нажать на иконку поиска', async () => {
      await this.searchIcon.click({ force: true });
    });
  }

  async searchFor(text) {
    await allure.step(`Ввести текст "${text}" в поле поиска`, async () => {
      await this.searchInput.fill(text);
      await this.page.keyboard.press('Enter');
    });
  }
}

module.exports = { TopMenuPage };
