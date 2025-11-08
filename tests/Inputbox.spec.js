import {test, expect} from '@playwright/test'

test('handle input box', async({page}) => {

    await page.goto('https://stag2.fly.tiptec.com/signup');

    //input box first name

    await expect (page.locator("//input[@id='firstName-input']")).toBeVisible();
    await expect (page.locator("//input[@id='firstName-input']")).toBeEmpty();
    await expect (page.locator("//input[@id='firstName-input']")).toBeEditable();
    await expect (page.locator("//input[@id='firstName-input']")).toBeEnabled();

    //providing input 
    await page.locator("//input[@id='firstName-input']").fill('Adms');
    //await page.fill("//input[@id='firstName-input']", 'James')

    await page.waitForTimeout(5000); //pausing code

})