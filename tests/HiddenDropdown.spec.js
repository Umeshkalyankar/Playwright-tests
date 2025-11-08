import { test, expect } from '@playwright/test';

test('Handle Hidden Dropdown', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
//login to the application
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
 
  // click on pim link
  await page.getByRole('link', { name: 'PIM' }).click();

  //click on dropdown
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]").click();

  //waiting for options
  await page.waitForTimeout(3000);

  const options=await page.$$("//div[@role='listbox']//span");

  for(let option of options)
  {
    const jobTitle=await option.textContent();
    //console.log(jobTitle);
    if(jobTitle.includes('QA Engineer'))
    {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});