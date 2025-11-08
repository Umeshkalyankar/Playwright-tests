import {test, expect} from '@playwright/test'

test('Inner Frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const parentFrame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}); //capturing Parent frame
    //await parentFrame.fill("//input[@name='mytext3']", 'Welcome');

    //handling Inner/Nested frame    
    const childFrames = parentFrame.childFrames();
    await childFrames[0].locator("//*[@id='i6']/div[3]/div").click();

    await childFrames[0].locator("//*[@id='i21']/div[2]").click();

    await page.waitForTimeout(5000);

})