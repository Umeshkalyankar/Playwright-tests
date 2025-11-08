import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stag2.fly.tiptec.com/signin');
  
  await page.getByRole('textbox', { name: 'e.g. email@domain.com' }).fill('umesh.kalyankar+sfly1@forwardai.com');
  
  await page.getByRole('button', { name: 'Continue' }).click();
 
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Test@1234');

  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
 
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

  await page.locator('#sign-in-phone-verification-dialog-close-button').click();

});