describe("ComboBox", function() {
  describe("simple combobox", function() {
    it("plain", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect(await element.takeScreenshot()).to.matchImage("plain");
    });
    it("opened", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("opened");
    });
    it("hovered", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .move({
          origin: this.browser.findElement(By.css('[data-comp-name="MenuItem"]:nth-of-type(4)'))
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("hovered");
    });
    it("selected", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .move({
          origin: this.browser.findElement(By.css('[data-comp-name="MenuItem"]:nth-of-type(4)'))
        })
        .click(this.browser.findElement(By.css('[data-comp-name="MenuItem"]:nth-of-type(4)')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("selected");
    });
    it("search result", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .sendKeys(selector("input"), Key["Second"])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("search result");
    });
    it("selcted", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .sendKeys(selector("input"), Key["Second"])
        .sendKeys(Key["ENTER"])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("selcted");
    });
    it("opened again", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .sendKeys(selector("input"), Key["Second"])
        .sendKeys(Key["ENTER"])
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("opened again");
    });
    it("search result_0", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .sendKeys(
          selector("input"),
          Key["\u0422\u0430\u043A\u043E\u0433\u043E \u0442\u043E\u0447\u043D\u043E \u043D\u0435\u0442\u0443"]
        )
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("search result_0");
    });
    it("select", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .sendKeys(Key["ARROW_DOWN"])
        .sendKeys(Key["ARROW_DOWN"])
        .sendKeys(Key["ARROW_DOWN"])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("select");
    });
    it("submit", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .sendKeys(Key["ARROW_DOWN"])
        .sendKeys(Key["ARROW_DOWN"])
        .sendKeys(Key["ARROW_DOWN"])
        .sendKeys(Key["ENTER"])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("submit");
    });
    it("editing", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .sendKeys(selector("input"), Key["Second"])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("editing");
    });
    it("select_1", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .sendKeys(selector("input"), Key["Second"])
        .click(this.browser.findElement(By.css("body")))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("select_1");
    });
    it("selected_2", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .sendKeys(selector("input"), Key["Second"])
        .click(this.browser.findElement(By.css("body")))
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("selected_2");
    });
  });
  describe("always reject", function() {
    it("opened", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("opened");
    });
  });
  describe("open to top", function() {
    it("plain", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect(await element.takeScreenshot()).to.matchImage("plain");
    });
    it("opened", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("opened");
    });
    it("hovered", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .move({
          origin: this.browser.findElement(By.css('[data-comp-name="MenuItem"]:nth-of-type(4)'))
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("hovered");
    });
    it("selected", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-comp-name="InputLikeText"]')))
        .move({
          origin: this.browser.findElement(By.css('[data-comp-name="MenuItem"]:nth-of-type(4)'))
        })
        .click(this.browser.findElement(By.css('[data-comp-name="MenuItem"]:nth-of-type(4)')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("selected");
    });
  });
  describe("with external value", function() {
    it("initial value", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect(await element.takeScreenshot()).to.matchImage("initial value");
    });
    it("reset value", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-tid="resetBtn"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("reset value");
    });
    it("set value", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css('[data-tid="resetBtn"]')))
        .click(this.browser.findElement(By.css('[data-tid="setValueBtn"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("set value");
    });
  });
  describe("toogle error", function() {
    it("plain", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect(await element.takeScreenshot()).to.matchImage("plain");
    });
    it("with error", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css("[data-comp-name='Toggle']")))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("with error");
    });
    it("plain again", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .click(this.browser.findElement(By.css("[data-comp-name='Toggle']")))
        .click(this.browser.findElement(By.css("[data-comp-name='Toggle']")))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("plain again");
    });
  });
  describe("with autoFocus", function() {
    it("plain", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect(await element.takeScreenshot()).to.matchImage("plain");
    });
  });
  describe("focus flow", function() {
    it("before", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect(await element.takeScreenshot()).to.matchImage("before");
    });
    it("after Enter on Item", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .sendKeys(Key["ENTER"])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("after Enter on Item");
    });
    it("after click back on the first field", async function() {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser
        .actions({
          bridge: true
        })
        .sendKeys(Key["ENTER"])
        .click(this.browser.findElement(By.css('[class^="Input-root"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("after click back on the first field");
    });
  });
});
