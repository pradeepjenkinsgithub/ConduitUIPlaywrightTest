const { test, expect } = require('@playwright/test');
const { ConduitLogin } = require('../pages/ConduitLogin');
const { ConduitEditor } = require('../pages/ConduitEditor');
const { validUser, article } = require('../utils/mate_conduit_data');

test('Create New Article', async ({ page }) => {
  const loginPage = new ConduitLogin(page);
  const editorPage = new ConduitEditor(page);

  await page.goto('https://conduit.mate.academy/user/login');
  await loginPage.login(validUser.email, validUser.password);

  await expect(page.locator("//a[normalize-space()='Home']")).toContainText("Home");
  
  await page.getByRole('link', { name: 'New Article' }).click();

  await page.goto('https://conduit.mate.academy/editor');
  await editorPage.createArticle(article.title, article.description, article.body, article.tags);

  const titleValue = await page.locator("input[placeholder='Article Title']").inputValue();
  expect(titleValue).toContain('Mate');
});
