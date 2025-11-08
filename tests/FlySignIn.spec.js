//const {test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test';


test('Sign in Page', async({page})=>{

await page.goto('https://stag2.fly.tiptec.com/signin');

const pageTitle = await page.title();
console.log('Page title is:', pageTitle);

/*
await expect(page).toHaveTitle('Forwardly');

const pageURL = page.url();
console.log('Page URL is:', pageURL )
await expect(page).toHaveURL('https://stag2.fly.tiptec.com/signin');
*/

//Locators

//provide email //property
await page.locator('id=email-input').fill('umesh.kalyankar+sfly1@forwardai.com')
                            //OR
//await page.fill('id=email-input', 'umesh.kalyankar+sfly1@forwardai.com')


//click on continue   //xpath locator
await page.locator("//button[@id='sign-in-button']").click()
                            //OR
//await page.click("//button[@id='sign-in-button']")

//provide password //property
await page.locator('id=password-input').fill('Test@1234')
                            //OR
//await page.fill('id=password-input', 'Test@1234')

//click on signin button //property
await page.locator('id=sign-in-button').click()
                            //OR
//await page.click('id=sign-in-button')

//verify text present
const element = page.getByText('Verify Your Mobile Number')
await expect(element).toBeVisible()

// Get and print the text
const text = await element.innerText()
console.log('Text on page:', text)

await page.close()


})
