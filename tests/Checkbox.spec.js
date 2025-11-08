import {test, expect} from '@playwright/test'

test('handle checkbox', async ({page})=> {

    await page.goto('https://stag2.fly.tiptec.com/signup');

    //checkbox
    //await page.locator("//button[@id='isAgree-checkbox']").check();
    await page.check("//button[@id='isAgree-checkbox']");

    //assertions
    await expect(page.locator("//button[@id='isAgree-checkbox']")).toBeChecked();
    console.log('Checkbox is checked! & Verification is done');

    await expect(page.locator("//button[@id='isAgree-checkbox']").isChecked()).toBeTruthy();
    
    await page.waitForTimeout(5000);
})