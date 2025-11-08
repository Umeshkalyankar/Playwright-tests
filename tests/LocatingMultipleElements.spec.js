
import { test, expect } from '@playwright/test';

test('LocateMultileElements', async({page}) =>{
    
    await page.goto('https://stag2.fly.tiptec.com/signin')

    const links = await page.$$('a')

    for (const link of links)
    {
        const linktext = await link.textContent()
        console.log(linktext)
    }



})