import{test,expect} from '@playwright/test'

test('Handle Dropdowns Test', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator('h1')).toHaveText('Automation Testing Practice')
    await page.locator('#country').scrollIntoViewIfNeeded()
    await page.locator('#country').selectOption('India') 
    await page.waitForTimeout(3000)
    await page.selectOption('#country', { value: 'france' });
    await expect(page.locator("//*[@value='france']")).toHaveText('France')

await page.waitForTimeout(5000)
})

test('Handle Multiselection Dropdown Test', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator('h1')).toHaveText('Automation Testing Practice')

    const dropdownOptions=await page.$$('#colors')
    
});