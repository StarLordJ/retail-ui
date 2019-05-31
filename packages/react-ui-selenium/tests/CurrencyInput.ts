import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe('CurrencyInput', function() {
  describe('Sample', function() {
    it('Plain', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['button'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focus', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['button'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[data-comp-name*="CurrencyInput"] input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focus');
    });
    it('Input value', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['button'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[data-comp-name*="CurrencyInput"] input')))
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['1'])
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['2'])
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['3'])
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['4'])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Input value');
    });
    it('External focus and input', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['button'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[data-comp-name*="CurrencyInput"] input')))
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['1'])
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['2'])
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['3'])
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['4'])
        .click(this.browser.findElement(By.css('button')))
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['5'])
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['6'])
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['7'])
        .pause(500)
        .sendKeys(selector('[data-comp-name*="CurrencyInput"] input'), Key['8'])
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('External focus and input');
    });
  });
});
