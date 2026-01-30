import { test, expect } from '@playwright/test';

test('Practice Form Submission', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded', timeout: 60000 });

  const fixedBan = page.locator('#close-fixedban');
  if (await fixedBan.isVisible()) {
    await fixedBan.click();
  }
  await page.getByRole('textbox', { name: 'First Name' }).fill('Wendell');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Nocido');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('Ann@gmail.com');
  await page.getByText('Female', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('0999780671');
  await page.locator('#subjectsInput').fill('Science');
  await page.getByText('Computer Science', { exact: true }).click();
  await page.getByText('Sports').click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('21 Dupax 1 Taytay');
  await page.getByText('Select State').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.getByText('Select City').click();
  await page.getByText('Delhi', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(
    page.getByRole('dialog', { name: 'Thanks for submitting the form' })
  ).toBeVisible();
});
