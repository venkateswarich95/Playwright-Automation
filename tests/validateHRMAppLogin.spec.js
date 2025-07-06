import{test,expect} from '@playwright/test'

test('HRM app login',async({page})=>{
//navigate to the app
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//verify orangehrm image
await expect(page.getByAltText('company-branding')).toBeVisible();
//enter username in username editbox
await page.getByPlaceholder('Username').fill('Admin');
//enter password in password editbox
await page.getByPlaceholder('Password').fill('admin123');
//click on login button
await page.getByRole('button',{type:'submit'}).click();
//verify profile picture is visible 
const profilePicture=await page.locator('img.oxd-userdropdown-img');
//verify profile picture is visible
await expect(profilePicture).toBeVisible();
await profilePicture.click();

//verify logout button is visible
const logoutButton=await page.getByText('Logout');
await expect(logoutButton).toBeVisible();
await logoutButton.click();
//verify the url
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.close();
})