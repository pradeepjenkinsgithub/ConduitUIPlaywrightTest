const { test, expect } = require('@playwright/test');
const { ConduitLogin } = require('../pages/ConduitLogin');
const { validUser, invalidUser } = require('../utils/mate_conduit_data');

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new ConduitLogin(page);
    await page.goto('https://conduit.mate.academy/user/login');
  });

  test('Valid Login', async ({ page }) => {
    await loginPage.login(validUser.email, validUser.password);
    await expect(page.locator('text=Your Feed')).toBeVisible();
  });

  test('Invalid Login - Wrong Password', async ({ page }) => {
    await loginPage.login(invalidUser.email, invalidUser.password);
    await expect(loginPage.errorMessage).toHaveText('email or password:is invalid');
  });
});
