import { Page, Locator, expect } from "@playwright/test";

export class NcaaFootball {
    readonly page: Page;
    readonly menu_ncaa_football: Locator;
    readonly nav: Locator;
    readonly home: Locator;
    readonly standings: Locator;
    readonly standings_header: Locator;

    constructor(page: Page) {
        this.menu_ncaa_football = page.locator('a[data-track-nav_item="ncaaf"] span[class="link-text"]:has-text("NCAAF")');
        this.nav = page.locator("nav#global-nav-secondary");
        this.home = this.nav.locator('a[data-track-nav_item="home"] span[class="link-text"]:has-text("HOME")');
        this.standings = this.nav.locator('a[data-track-nav_item="standings"]');
        this.standings_header = page.locator('h1:has-text("College Football Standings - 2024")');
    }
  // Navigate to NCAAF standings
  
  // Select Conference
  //getByLabel('Standings Conferences').selectOption('SEC');
  // > Kentucky Wildcats
 // await page.getByRole('link', { name: 'Kentucky Wildcats' }).click();
  // > Statistics
 //await page.getByRole('link', { name: 'Statistics', exact: true }).click();

 async navigate_to_ncaaf_standings() {
    await this.menu_ncaa_football.click();
    // Hover over home to remove drop down modal, covering up standings element
    await this.home.hover();
    await this.standings.click();
    await expect(this.standings_header).toBeVisible();
 }

}