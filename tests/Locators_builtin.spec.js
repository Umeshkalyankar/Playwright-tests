
import {test, expect} from '@playwright/test';

test('Built-inLocators', async ({page}) => {

    await page.goto('https://stag2.fly.tiptec.com/signin')

    //page.getByAltTest = attribute used is alt > mostly for Images/logo this attribute used

    const logo = await page.getByAltText('Forwardly')
    await expect(logo).toBeVisible()

    console.log(logo)

    // page.getByPlaceholder = attribute used is placeholder > to locate an element by placeholder 
    await page.getByPlaceholder('e.g. email@domain.com').fill('umesh.kalyankar+sfly1@forwardai.com')

    //page.getByRole = to locate by explicit and implicit accessibility attributes
    await page.getByRole('button', { name: 'Continue' }).click();

    // page.getByPlaceholder 
    await page.getByPlaceholder('Enter your password').fill('Test@1234')

    //click on signin button //property
    await page.locator('id=sign-in-button').click()

    //page.getByRole = to locate by explicit and implicit accessibility attributes
    await page.getByRole('button', { name: 'Continue' }).click();

    //page.getByRole = to capture page heading
    await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();
    








    function newFunction() {
        console.log(pageheading);
    }
}
)