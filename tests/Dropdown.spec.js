import {test, expect} from '@playwright/test'

test( 'Handle Dropdown', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //multiple ways to select option from dropdown

    // await page.locator("#country").selectOption({label:'India'}); //label -by visible text

    //await page.locator("#country").selectOption('Canada'); // by visible text  - - mostly used

    //await page.locator("#country").selectOption({value:'uk'}); // by value attribute

    //await page.locator("#country").selectOption({index:5}); // by using index

    //await page.selectOption("#country", 'India'); //by visible text - mostly used

    //Assertions:
    //1. check number of options in dropdown -Approach 1
    //const options = await page.locator('#country option');
    //await expect(options).toHaveCount(10);

    //2. check number of options in dropdown -Approach 2(Array format)
    //const options = await page.$$('#country option')
    //console.log("Number of options:", options.length) //printing the options
   // await expect(options.length).toBe(10)

   //3. Check presence of value in the dropdown >> Approach 1

   //const content = await page.locator('#country').textContent();
  // await expect(content.includes('India')).toBeTruthy();

  //4. Check presence of value in the dropdown >> Approach 2 - using looping

    /* const options = await page.$$('#country option')
    let status=false;

     for(const option of options)
     {
        //console.log(await option.textContent())
        let value = await option.textContent();
        if(value.includes('France'))
        {
            status=true;
            break;
        }
     }
     expect(status).toBeTruthy();
*/
     //5. select option from the dropdown using loop

     const options = await page.$$('#country option')

     for(const option of options)
     {
        let value = await option.textContent();
        if(value.includes('France'))
        {
            await page.selectOption("#country", value)
            break;
        }
     }

    await page.waitForTimeout(4000);
})
