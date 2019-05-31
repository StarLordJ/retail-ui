import { expect } from 'chai';
import { By } from 'selenium-webdriver';

describe('DropdownContainer', function() {
  describe('various aligns, portals, items and scrolls', function() {
    it('shot', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await expect(await element.takeScreenshot()).to.matchImage('shot');
    });
    it('shot_0', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .executeJS()
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('shot_0');
    });
    it('shot_1', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await expect(await element.takeScreenshot()).to.matchImage('shot_1');
    });
    it('shot_2', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .executeJS()
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('shot_2');
    });
  });
});
