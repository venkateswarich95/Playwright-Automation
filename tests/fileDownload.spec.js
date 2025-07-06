const { test, expect } = require('@playwright/test');
import path from 'path';
import fs from 'fs';

test('FileDownload Test', async ({ page }) =>{

await page.goto('https://the-internet.herokuapp.com/')

await expect(page.locator('h1')).toHaveText('Welcome to the-internet')

await expect(page.locator('h2')).toHaveText('Available Examples')

await page.locator("//a[text()='File Download']").click()

await expect(page.locator('h3')).toHaveText("File Downloader")

const [download]= await Promise.all([
page.waitForEvent('download'),
await page.locator("//a[text()='upload-me.txt']").click()

])

//save the file into specified path
const downloadPath = path.join(__dirname,'..','download', await download.suggestedFilename());
await download.saveAs(downloadPath)

//assert the file downloaded successfully
const fileExist= fs.existsSync(downloadPath);
console.log(`file is downloaded successfully:", ${fileExist}`)
expect(fileExist).toBe(true);

})