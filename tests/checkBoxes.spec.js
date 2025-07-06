const{test,expect}=require('@playwright/test')

test('Valifdate checkboxes',async({page})=>{
//navigate to the url
await page.goto('https://testautomationpractice.blogspot.com/')

const CheckBoxesTest =[
    await page.locator("#sunday"),
    await page.locator("#monday"),
    await page.locator("#saturday")
]

for(const checkbox of CheckBoxesTest){
    await checkbox.click()
}

await page.waitForTimeout(5000);

for(const checkbox of CheckBoxesTest){
    if(await checkbox.isChecked()){
    await checkbox.uncheck()
}
}
await page.waitForTimeout(5000);


})