import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe('Input', function() {
  describe('Inputs with different sizes', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focused', async function() {
      const element = await this.browser.findElement(By.css('#small-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#small-input-wrapper input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused');
    });
    it('With typed text', async function() {
      const element = await this.browser.findElement(By.css('#small-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#small-input-wrapper input')))
        .sendKeys(selector('#small-input-wrapper input'), Key['Test...'])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With typed text');
    });
    it('With long typed text', async function() {
      const element = await this.browser.findElement(By.css('#small-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#small-input-wrapper input')))
        .sendKeys(selector('#small-input-wrapper input'), Key['Test...'])
        .sendKeys(
          selector('#small-input-wrapper input'),
          Key.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa,
        )
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With long typed text');
    });
    it('Plain_0', async function() {
      const element = await this.browser.findElement(By.css('#medium-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_0');
    });
    it('Focused_1', async function() {
      const element = await this.browser.findElement(By.css('#medium-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#medium-input-wrapper input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused_1');
    });
    it('With typed text_2', async function() {
      const element = await this.browser.findElement(By.css('#medium-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#medium-input-wrapper input')))
        .sendKeys(selector('#medium-input-wrapper input'), Key['Test...'])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With typed text_2');
    });
    it('With long typed text_3', async function() {
      const element = await this.browser.findElement(By.css('#medium-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#medium-input-wrapper input')))
        .sendKeys(selector('#medium-input-wrapper input'), Key['Test...'])
        .sendKeys(
          selector('#medium-input-wrapper input'),
          Key.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa,
        )
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With long typed text_3');
    });
    it('Plain_4', async function() {
      const element = await this.browser.findElement(By.css('#large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_4');
    });
    it('Focused_5', async function() {
      const element = await this.browser.findElement(By.css('#large-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#large-input-wrapper input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused_5');
    });
    it('With typed text_6', async function() {
      const element = await this.browser.findElement(By.css('#large-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#large-input-wrapper input')))
        .sendKeys(selector('#large-input-wrapper input'), Key['Test...'])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With typed text_6');
    });
    it('With long typed text_7', async function() {
      const element = await this.browser.findElement(By.css('#large-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#large-input-wrapper input')))
        .sendKeys(selector('#large-input-wrapper input'), Key['Test...'])
        .sendKeys(
          selector('#large-input-wrapper input'),
          Key.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa,
        )
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With long typed text_7');
    });
  });
  describe('Inputs with different states', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#warning-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain_0', async function() {
      const element = await this.browser.findElement(By.css('#warning-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_0');
    });
    it('Plain_1', async function() {
      const element = await this.browser.findElement(By.css('#error-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_1');
    });
    it('Plain_2', async function() {
      const element = await this.browser.findElement(By.css('#error-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_2');
    });
    it('Plain_3', async function() {
      const element = await this.browser.findElement(By.css('#disabled-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_3');
    });
    it('Plain_4', async function() {
      const element = await this.browser.findElement(By.css('#disabled-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_4');
    });
    it('Plain_5', async function() {
      const element = await this.browser.findElement(By.css('#disabled-text-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_5');
    });
    it('Plain_6', async function() {
      const element = await this.browser.findElement(By.css('#disabled-text-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_6');
    });
    it('Plain_7', async function() {
      const element = await this.browser.findElement(By.css('#placeholder-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_7');
    });
    it('Plain_8', async function() {
      const element = await this.browser.findElement(By.css('#placeholder-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_8');
    });
    it('Plain_9', async function() {
      const element = await this.browser.findElement(By.css('#password-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_9');
    });
    it('Plain_10', async function() {
      const element = await this.browser.findElement(By.css('#password-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_10');
    });
    it('Plain_11', async function() {
      const element = await this.browser.findElement(By.css('#borderless-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_11');
    });
    it('Plain_12', async function() {
      const element = await this.browser.findElement(By.css('#borderless-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_12');
    });
    it('Plain_13', async function() {
      const element = await this.browser.findElement(By.css('#left-icon-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_13');
    });
    it('Plain_14', async function() {
      const element = await this.browser.findElement(By.css('#left-icon-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_14');
    });
    it('Plain_15', async function() {
      const element = await this.browser.findElement(By.css('#right-icon-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_15');
    });
    it('Plain_16', async function() {
      const element = await this.browser.findElement(By.css('#right-icon-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_16');
    });
  });
  describe('Select all by prop', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focused', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('label')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused');
    });
  });
  describe('Select all by button', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Selected', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Selected');
    });
  });
  describe('Input with phone mask', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focused', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused');
    });
    it('Editing', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .sendKeys(selector('input'), Key['9'])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Editing');
    });
    it('Blured', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .sendKeys(selector('input'), Key['9'])
        .sendKeys(selector('input'), Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Blured');
    });
  });
  describe('Placeholder and Mask', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
  });
  describe('Prefix and suffix', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-small'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('First input focused', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-small'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#inputWithPrefixOrSuffx-small input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('First input focused');
    });
    it('Plain_0', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-medium'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_0');
    });
    it('First input focused_1', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-medium'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#inputWithPrefixOrSuffx-medium input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('First input focused_1');
    });
    it('Plain_2', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-large'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain_2');
    });
    it('First input focused_3', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-large'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#inputWithPrefixOrSuffx-large input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('First input focused_3');
    });
  });
  describe('text styles reset', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
});
