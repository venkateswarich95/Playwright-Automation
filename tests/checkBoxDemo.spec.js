const{test,expect}=require('@playwright/test')

test('Valifdate checkboxes',async({page})=>{
//navigate to the url
await page.goto('https://testautomationpractice.blogspot.com/')
//Verify the title
await expect(page).toHaveTitle('Automation Testing Practice')
//verify the page header
await expect(page.locator('h1.title')).toHaveText('Automation Testing Practice')
//checkboxes
const sundatChckBox=await page.locator("input[id='sunday']")
await sundatChckBox.check();
//verify the checkbox is checked
await expect(sundatChckBox).toBeChecked();

const mondayChckBox=await page.locator("input[id='monday']")
await mondayChckBox.check();
//verify the checkbox is checked
await expect(mondayChckBox).toBeChecked();

const saturdayChckBox=await page.locator("input[id='saturday']")
await saturdayChckBox.check();
//verify the checkbox is checked
await expect(saturdayChckBox).toBeChecked();

const daysCheckBoxs=await page.locator("//div[@class='post-body entry-content']/div[4]/div/input")
const count= await daysCheckBoxs.count();

for(let i=0;i<count;i++){
   const checkbox=daysCheckBoxs.nth(i);
   if((await checkbox.isChecked())){
        await checkbox.uncheck();
        }
    }



 await page.waitForTimeout(5000)







})