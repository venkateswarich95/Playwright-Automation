const { test, expect } = require("@playwright/test");

test("Validate HRM App title and url", async ({ page }) => {
  //navigate to the url
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //get the title of the page
  const title = await page.title();
  console.log("Page title is", title);
  //verify the page title
  await expect(title).toBe("OrangeHRM");
  await expect(title).toContain("HRM");
  await expect(title).toMatch(/Orangehrm/i)
  await expect(page).toHaveTitle("OrangeHRM");
  //get the url of the page
  const url = await page.url();
  console.log("Page url is", url);
  //verify the page url
  expect(url).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});
