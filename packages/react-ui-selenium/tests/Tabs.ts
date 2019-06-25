import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe('Tabs', function() {
  describe('simple', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
    it.skip(['ie11'], 'hovered', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hovered');
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('mouseLeave', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('mouseLeave');
    });
    it('focused', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('focused');
    });
    it('tabPress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
    it('enterPress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .sendKeys(Key.TAB)
        .sendKeys(Key.ENTER)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('enterPress');
    });
    it('move focus forward', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(1)')))
        .sendKeys(Key.ARROW_RIGHT)
        .sendKeys(Key.ARROW_DOWN)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('move focus forward');
    });
    it('move focus backward', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(1)')))
        .sendKeys(Key.ARROW_RIGHT)
        .sendKeys(Key.ARROW_DOWN)
        .sendKeys(Key.ARROW_LEFT)
        .sendKeys(Key.ARROW_UP)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('move focus backward');
    });
    it('reset focus after click', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(1)')))
        .sendKeys(Key.ARROW_RIGHT)
        .sendKeys(Key.ARROW_DOWN)
        .sendKeys(Key.ARROW_LEFT)
        .sendKeys(Key.ARROW_UP)
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(3)')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('reset focus after click');
    });
  });
  describe('vertical', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
    it.skip(['ie11'], 'hovered', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hovered');
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('mouseLeave', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('mouseLeave');
    });
    it('focused', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('focused');
    });
    it('tabPress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
    it('enterPress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="Tab-root"]:nth-child(2)')))
        .sendKeys(Key.TAB)
        .sendKeys(Key.ENTER)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('enterPress');
    });
  });
});
