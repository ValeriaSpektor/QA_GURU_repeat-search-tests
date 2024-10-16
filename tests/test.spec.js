import { test, expect } from '@playwright/test';
import { TopMenuPage } from '../src/Page Object/topMenupage';
import { SearchResultsPage } from '../src/Page Object/SearchResultsPage';
const { allure } = require('allure-playwright');

test('Search for Pushkin and Italy without resetting search results', async ({ page }) => {
  const topMenu = new TopMenuPage(page);
  const searchResults = new SearchResultsPage(page);

  // Открываем главную страницу
  await allure.step('Открываем главную страницу', async () => {
    await page.goto('https://www.tretyakovgallery.ru/?lang=ru');
    await page.screenshot({ path: 'screenshot-step-1.png' });
  });

  // Шаг 1: Нажимаем на иконку поиска и вводим "Пушкин"
  await topMenu.clickSearchIcon();
  await topMenu.searchFor('Пушкин');

  // Шаг 2: Проверяем, что результаты поиска отображают "Пушкин"
  await allure.step('Проверяем результаты поиска для "Пушкин"', async () => {
    await searchResults.verifyResults('Пушкинская Италия');
    await page.screenshot({ path: 'screenshot-step-2.png' });
  });

  // Шаг 3: Нажимаем на иконку поиска и вводим "Италия"
  await topMenu.clickSearchIcon();
  await topMenu.searchFor('Италия');

  // Шаг 4: Проверяем, что результаты поиска отображают "Италия"
  await allure.step('Проверяем результаты поиска для "Италия"', async () => {
    await searchResults.verifyResults('Пушкинская Италия');
    await page.screenshot({ path: 'screenshot-step-4.png' });
  });

  // Сохранение результата в Allure
  await allure.step('Сохраняем скриншоты для Allure', async () => {
    const screenshot = await page.screenshot();
    allure.attachment('Search Results', screenshot, 'image/png');
  });
});
