const{test,expect}=require('@playwright/test')

test('Login to swag labs',async({page})=>{
    //navigate to the url
    await page.goto('https://www.saucedemo.com/')
    //verify the page title
    const pgTitle=await page.title();
    console.log('Swag Labs pagetitle',pgTitle)
    await expect(page).toHaveTitle('Swag Labs')
    await expect(pgTitle).toBe('Swag Labs')
    await expect(pgTitle).toContain('Labs')
    //verify the swag labs url
    const pgUrl=await page.url();
    console.log('Swag labs url is',pgUrl)
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await expect(pgUrl).toBe('https://www.saucedemo.com/')
    //Verift the logo
    const swagLabsLogo= await page.getByText('Swag Labs')
    await expect(swagLabsLogo).toHaveText('Swag Labs')
    //Enter the username
    await page.getByPlaceholder('Username').fill('standard_user')
    //Enter the password
    await page.getByPlaceholder('Password').fill('secret_sauce')
    //click on Login button
    await page.locator('#login-button').click();
    //Verify next page url
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    //verify products header
    const productHeader=await page.getByText('Products')
    await expect(productHeader).toHaveText('Products')
    //Fetch text of each item
    const items=await page.$$("//div[@class='inventory_list']/div/div[2]/div/a")
    //const itemsText=await items.allTextContents()
   // console.log('Items text',itemsText)
    for(var item of items){
        const itemTxt=await item.textContent();
        console.log('Item text',itemTxt)
    }
    //click on open menu button
    await page.getByText('Open Menu').click();
    //Verify the menu is open
    const logOutBtn=await page.locator("//nav[@class='bm-item-list']/a[text()='Logout']")
    await expect(logOutBtn).toBeVisible();
    //click on logout button
    await logOutBtn.click();
    //Verify Swag Labs Home page url
    await expect(page).toHaveURL('https://www.saucedemo.com/')
     await page.close();

})