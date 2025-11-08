import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stag2.fly.tiptec.com/signin');
  
  await page.getByRole('textbox', { name: 'e.g. email@domain.com' }).fill('umesh.kalyankar+sfly1@forwardai.com');
  await page.getByRole('button', { name: 'Continue' }).click();
 
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Test@1234');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.locator('#undefined-otp-input-0').click();
  await page.locator('#undefined-otp-input-0').fill('4');
  await page.locator('#undefined-otp-input-1').fill('3');
  await page.locator('#undefined-otp-input-2').fill('9');
  await page.locator('#undefined-otp-input-3').fill('9');
  await page.locator('#undefined-otp-input-4').fill('6');
  await page.locator('#undefined-otp-input-5').fill('1');
  await page.getByRole('checkbox', { name: 'Trust this device for 30 days' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'US', exact: true }).click();
  await page.getByText('Sign Out').click();
});