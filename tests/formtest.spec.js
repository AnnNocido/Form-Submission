import { test, expect } from '@playwright/test';
import { FormPage } from '../pages/formPage';

test('Form submission test using POM', async ({ page }) => {
  const form = new FormPage(page);

  await form.open();        
  await form.fillForm();    
  await form.submitForm();  
  const msg = await form.getSuccessText();  

  expect(msg).toContain('Thanks for submitting the form');  
});
