import {test, expect} from '@playwright/test'

test('Softassertions', async ({page}) => {

    await page.goto('https://stag2.fly.tiptec.com/signin');
/*
    // Hard assertion - failed hard assertions will terminate further code execution
    await expect(page).toHaveTitle('Forwrdly');

    await expect(page).toHaveURL('https://stag2.fly.tiptec.com/signin');
*/
    //Soft assertion - failed soft assertions do not terminate further test execution but will mark test case as failed.

    await expect.soft(page).toHaveTitle('Forwrdly');

    await expect.soft(page).toHaveURL('https://stag2.fly.tiptec.com/signin');
})