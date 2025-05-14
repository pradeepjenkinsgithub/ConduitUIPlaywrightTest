class ConduitEditor {
  constructor(page) {
    this.page = page;
    this.titleInput = page.locator("input[placeholder='Article Title']");
    this.descriptionInput = page.locator('input[placeholder="What\'s this article about?"]');
    this.bodyInput = page.locator('textarea[placeholder="Write your article (in markdown)"]');
    this.tagsInput = page.locator('input[placeholder="Enter tags"]');
    this.publishButton = page.locator('button:has-text("Publish Article")');
  }

  async createArticle(title, description, body, tag) {
    await this.titleInput.fill(title);
    await this.descriptionInput.fill(description);
    await this.bodyInput.fill(body);
    await this.tagsInput.fill(tag);
    await this.publishButton.click();
  }
}

module.exports = { ConduitEditor };
