import{test,expect} from '@playwright/test'

test('handle keyboard actions', async({page})=>{

    //navigate to the url
    await page.goto('https://gotranscript.com/text-compare')
    //verify the page title
    await expect(page).toHaveTitle('Free online text compare tool | GoTranscript')
    //verify the page url
    await expect(page).toHaveURL('https://gotranscript.com/text-compare')
    //Identify 1st editbox
    const editbox1 = page.locator("textarea[name='text1']")
    //type the value in editbox1
    await editbox1.fill('Harshini')
    //select the content in editbox1
    await page.keyboard.press('Control+A')
    //copy the content in editbox1
    await page.keyboard.press('Control+c')
    //press the tab
    await page.keyboard.down('Tab')
    //release the tab
    await page.keyboard.up('Tab')
    //paste the content in editbox2
    await page.keyboard.press('Control+v')
    const editbox2 = page.locator("textarea[name='text2']")
    //verify the content in editbox2
    await expect(editbox2).toHaveValue('Harshini')

    await page.waitForTimeout(2000)

})