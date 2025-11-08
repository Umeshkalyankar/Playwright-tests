import {test, expect} from '@playwright/test'
import { skip } from 'node:test';

test.skip('Alert with OK', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Alert handling (Dialog window handler)- Need to write this before doing action on the alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })
    //Action to oprn the alert
    await page.click("//button[@id='alertBtn']");
    //await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');

    await page.waitForTimeout(5000);
});

test.skip('Confirmation dialog Alert with OK and Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); //close by using OK button
        //await dialog.dismiss(); //close by using Cancel button
        
    })
    //Action to open the alert
    await page.click("//button[@id='confirmBtn']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');

    await page.waitForTimeout(5000);
});

test('Prompt dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Dialog window handler
    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        //await dialog.accept('James');//close by using OK button
        await dialog.dismiss('David');//close by using Cancel button
    })

    //Action to open the alert
    await page.click("//button[@id='promptBtn']");
    //await expect(page.locator("//p[@id='demo']")).toHaveText('Hello James! How are you today?');
    await expect(page.locator("//p[@id='demo']")).toHaveText('User cancelled the prompt.');

    await page.waitForTimeout(5000);
})