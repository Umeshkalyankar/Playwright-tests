import {test, expect} from '@playwright/test'

test('Handle Bootstrap dropdown', async({page})=>{

    await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/');

    //click on dropdown 
    await page.locator('.multiselect').click();

    //1. check number of options from dropdown
    //const options=await page.locator('ul>li label input');
   // await expect(options).toHaveCount(7);

   //2. check number of options from dropdown using js array format
   //const options=await page.$$('ul>li label input');
   //await expect(options.length).toBe(7);
   //console.log('The number of options test is passed');

   //3. Select multiple options from dropdown
   const options =await page.$$('ul>li label')
   for(let option of options)
   {
        const value=await option.textContent();
        //console.log("Value is", value)
        if(value.includes('Java') || value.includes('.Net'))
        {
            await option.click();
        }
   }

    await page.waitForTimeout(5000);
})