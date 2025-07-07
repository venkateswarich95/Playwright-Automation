import { test, expect } from '@playwright/test';

test('handle right click or context click', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

  // Identify the right click target
  const rightClickTarget = page.locator("//span[normalize-space()='right click me']");

  // Perform a right-click (context click)
  await rightClickTarget.click({ button: 'right' });

  // Wait for the context menu to appear
  const contextMenu = page.locator('.context-menu-list');
  await expect(contextMenu).toBeVisible();

  // Optionally, you can click an item like 'Edit' from the context menu
  // await page.locator('li.context-menu-item span:has-text("Edit")').click();
});
