import { test, expect } from '@playwright/test'
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async({page}) => {
        homePage = new HomePage(page);
        await homePage.navigate()
    })

    test('Open Homepage and verify title', async ({page}) => {
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    })

    test.skip('Check the title of the About page', async({page}) => {
        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
    })

    test('Click get started button using CSS selector', async ({page}) => {
        await homePage.getStartedBtn.click();
        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verify heding text is visible using text selector', async({page}) => {
        const headingText = homePage.headingText;
        await expect(headingText).toBeVisible();
    })

    test('Verify home link is enabled using text and css selector', async({page}) => {
        const homeText = await homePage.homeLink;
        await expect(homeText).toBeEnabled();
        
    })

    test('Verify search icon is visible using xpath selector', async({page}) => {
        const searchIcon = await homePage.searchIcon;
        await expect(searchIcon).toBeVisible();
    })
    
    test('Verify text of all nav links', async({page}) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    })

    
})