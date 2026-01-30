export class FormPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async open() {
    await this.goto();
  }

  async fillForm() {
    await this.page.fill('#firstName', 'Wendell');
    await this.page.fill('#lastName', 'Nocido');
    await this.page.fill('#userEmail', 'test@example.com');
    await this.page.getByLabel('Female').check();
    await this.page.fill('#userNumber', '09091234567');
  }

  async submitForm() {
    await this.page.click('#submit');
  }

  async getSuccessText() {
    await this.page.waitForSelector('.modal-content', { timeout: 5000 });
    return await this.page.textContent('.modal-content');
  }
}
