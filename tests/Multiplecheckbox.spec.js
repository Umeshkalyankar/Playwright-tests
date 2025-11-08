import {test, expect} from '@playwright/test'

test('Handling of multiplecheckboxes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //selection of multiple checkbox
    const checkboxlocators=[
                             "//input[@id='sunday' and @type='checkbox']",
                             "//input[@id='tuesday' and @type='checkbox']",
                             "//input[@id='saturday' and @type='checkbox']"
    ];

    for(const locator of checkboxlocators)
    {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000);

    //unselect multiple checkbox which are already selected

    for (const locator of checkboxlocators)

        if (await page.locator(locator).isChecked())
    {
        await page.locator(locator).uncheck();
    }

    await page.waitForTimeout(5000);
})