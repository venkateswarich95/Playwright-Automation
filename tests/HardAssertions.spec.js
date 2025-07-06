import {test,expect} from '@playwright/test';

test('HardAssertions Test', async ({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/')

//verify the page title
const title = await page.title()
expect(title).toBe('Automation Testing Practice')

//verify the toHaveURL or not
const url = await page.url()
expect(url).toBe('https://testautomationpractice.blogspot.com/')

//verify the text is presence or not
await expect(await page.locator('h1')).toHaveText("Automation Testing Practice")

//verify the logo is presence or not
await expect(await page.locator('.wikipedia-icon')).toBeVisible()

//toBeEnabled()
await expect(await page.locator('.wikipedia-input-box')).toBeEnabled()

//toBeChecked()
await expect(await page.locator('#sunday')).not.toBeChecked();

const saturdayCheckbox=await page.locator('#saturday').check()
await expect(await page.locator('#saturday')).toBeChecked()

//toContainText()
await expect(await page.locator("//p[text()='Move the mouse over the button to open the dropdown menu.']")).toContainText("Move the mouse over")

//toHaveAttribute()
await expect(await page.locator('//button[@class="submit-btn"]')).toHaveAttribute('class')

//tohaveClass()
await expect(await page.locator('//button[@class="submit-btn"]')).toHaveClass('submit-btn')

//toHaveValue()
const val=await expect(await page.locator('#field1')).toHaveValue('Hello World!')

//toHaveCount()
await expect(await page.locator("div[class='form-group']")).toHaveCount(7)

//toBeGretertahn()
const checkboxes=await page.$$("div[class='form-group']")
const count=await checkboxes.length
await expect(count).toBeGreaterThan(5)

await expect(count).toBeGreaterThanOrEqual(7)

await expect(count).not.toBeLessThan(7)

await expect(count).not.toBeLessThanOrEqual(6)

//await page.waitForTimeout(5000)

})