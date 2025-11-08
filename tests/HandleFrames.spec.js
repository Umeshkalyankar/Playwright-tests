import{test, expect} from '@playwright/test'

test('Handling frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total number of frames
    const allframes = await page.frames();
    console.log("Number of frames:", allframes.length);

    //Approach-1 using Name or URL
    //const frame1= await page.frame('name');//if frame name is present
    //const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    //await frame1.fill("//input[@name='mytext1']", 'Handling Frames');

    //Approach-2 using Frame Locator
    const inputbox= await page.frameLocator('[src*="frame_1.html"]').getByRole('textbox');
    await inputbox.fill('Frame handling by frame locator');

    await page.waitForTimeout(5000);
})