import { test, expect } from "@playwright/test";

test("capture full page screenshot", async ({ page }) => {
  //navigate to the url
  await page.goto("https://jquery.com/", { waitUntil: "domcontentloaded" });
  //verify the page title
  await expect(page).toHaveTitle("jQuery");
  // Wait for login input to ensure the page is rendered
  await page.waitForSelector("h2[class='logo'] a");
  //capture full page screenshot
  await page.screenshot({
    path: "tests/Screenshots" + Date.now() + "fullPagescreenshot.png",fullPage:true
  });
  await page.waitForTimeout(3000);
});

test("capture page screenshot", async ({ page }) => {
  //navigate to the url
  await page.goto("https://jquery.com/", { waitUntil: "domcontentloaded" });
  //verify the page title
  await expect(page).toHaveTitle("jQuery");
  // Wait for login input to ensure the page is rendered
  await page.waitForSelector("h2[class='logo'] a");
  //capture full page screenshot
  await page.screenshot({
    path: "tests/Screenshots" + Date.now() + "pagescreenshot.png",
  });
  await page.waitForTimeout(3000);
});

test("capture element screenshot", async ({ page }) => {
  //navigate to the url
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    { waitUntil: "domcontentloaded" }
  );
  //verify the page title
  await expect(page).toHaveTitle("OrangeHRM");
  await page
    .locator("img[alt='company-branding']")
    .screenshot({
      path: "tests/screenshot" + Date.now() + "elementScreenshot.png",
    });
  await page.waitForTimeout(3000);
});
