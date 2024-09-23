import { test, expect } from '@playwright/test';
import { NcaaFootball } from '../page_objects/ncaa/ncaa_football';

/*test.beforeAll(async ({page})=> {
  
}) */

test('Go To ESPN', async ({ page }) => {
  const ncaa = new NcaaFootball(page);
  await page.goto("https://www.espn.com");
  await ncaa.navigate_to_ncaaf_standings();
});