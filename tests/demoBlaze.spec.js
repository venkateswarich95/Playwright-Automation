const{test,expect}=require('@playwright/test')

test('Fetch all the links',async({page})=>{
    //navigate to the url
    await page.goto('https://demoblaze.com/')
    //verify the title
    await expect(page).toHaveTitle('STORE')
    //verify the url
    await expect(page).toHaveURL('https://demoblaze.com/')
    //Approach1-to fetch all the links & print the textContent
    const linksList=await page.locator("//div[@id='tbodyid']/div/div//h4/a")
    const links=await linksList.allTextContents()   
    console.log(links)
    //Approach2-to fetch all the links & print the textContent
   /* const linksList1=awaitpage.$$("//div[@id='tbodyid']/div/div//h4/a")
    for(let link of linksList1){
        console.log(await link.textContent())
        }*/

})