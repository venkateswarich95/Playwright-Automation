// Import required modules from Playwright
import { test, expect } from '@playwright/test';
import path from 'path';

/**
 * Test Case 1: Upload a file using an absolute file path
 * Scenario:
 * - Navigate to the File Upload page
 * - Upload a file from a known absolute location on disk
 * - Verify the file is successfully uploaded and displayed
 */
test('FileUpload Test using absolute path', async ({ page }) => {

  // Step 1: Navigate to the main page
  await page.goto('https://the-internet.herokuapp.com/');

  // Step 2: Click on the "File Upload" link
  await page.locator("//a[text()='File Upload']").click();

  // Step 3: Verify that the "File Uploader" header is displayed
  await expect(page.locator('h3')).toHaveText("File Uploader");

  // Step 4: Check if the file input field is enabled and click it (optional visual interaction)
  const choosefilebutton = page.locator("#file-upload");
  await expect(choosefilebutton).toBeEnabled();

  // Step 5: Define the full absolute path to the file on local machine
  const filepath = 'C:/Users/Dell/Documents/AmynthaGroup/TestCases_NotOtherwiselisted.xlsx';

  // Step 6: Set the file input to the selected file
  await page.setInputFiles("input[type='file']", filepath);

  // Step 7: Click the "Upload" button
  await page.locator('#file-submit').click();

  // Step 8: Verify that the success message is displayed
  await expect(page.locator('h3')).toHaveText("File Uploaded!");

  // Step 9: Confirm that the uploaded file name is displayed correctly
  await expect(page.locator("//div[contains(text(),'TestCases_NotOtherwiselisted.xlsx')]"))
    .toHaveText("TestCases_NotOtherwiselisted.xlsx");
});


/**
 * Test Case 2: Upload a file from a relative path (inside project folder)
 * Scenario:
 * - Navigate to the File Upload page
 * - Upload a file stored in the 'testdata' folder relative to the project structure
 * - Validate upload success and filename display
 */
test('Upload file from same project directory', async ({ page }) => {

  // Step 1: Navigate to the main page
  await page.goto('https://the-internet.herokuapp.com/');

  // Step 2: Click on the "File Upload" link
  await page.locator("//a[text()='File Upload']").click();

  // Step 3: Verify that the "File Uploader" header is displayed
  await expect(page.locator('h3')).toHaveText("File Uploader");

  // Step 4: Ensure the file input element is ready
  const choosefilebutton = page.locator("#file-upload");
  await expect(choosefilebutton).toBeEnabled();

  // Step 5: Resolve the path to the Excel file located in the 'testdata' folder
  // Assumes this script is inside /tests/ and testdata is at root level or same level
  const filepath = path.resolve(__dirname, '..', 'testdata', 'TestCases_NotOtherwiselisted.xlsx');

  // Step 6: Set the file input field with the resolved file
  await page.setInputFiles("input[type='file']", filepath);

  // Step 7: Click the "Upload" button
  await page.locator('#file-submit').click();

  // Step 8: Confirm the upload success message appears
  await expect(page.locator('h3')).toHaveText("File Uploaded!");

  // Step 9: Confirm the uploaded file name is visible
  await expect(page.locator("//div[contains(text(),'TestCases_NotOtherwiselisted.xlsx')]"))
    .toHaveText("TestCases_NotOtherwiselisted.xlsx");
});

test('Upload File without input tag', async ({ page }) =>{

await page.goto('https://easyupload.io/')

//verify the header text
await expect(page.locator('h1')).toHaveText("Upload files, transfer them easily");

// const filepath=path.resolve(__dirname,'..','testdata','TestCases_NotOtherwiselisted.xlsx')
// await page.setInputFiles("input[type='file']", filepath)

await page.setInputFiles("input[type='file']", 'testdata/TestCases_NotOtherwiselisted.xlsx')

await page.waitForSelector("text=Your files are ready!", { timeout: 30000 });
await expect(page.locator("text=Your files are ready!")).toBeVisible();

await page.locator("//*[text()='Done']").click()

await page.waitForTimeout(3000)
})