import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('blog', () => {
    let blogPage: BlogPage;
    test('verify', async({page}) => {
        blogPage = new BlogPage(page);
        await blogPage.navigate();
        
        // loop trhough the list and assert the char length > 10
        for (const el of await blogPage.recentPosts.elementHandles()) {
            expect(((await el.textContent())!.trim())?.length).toBeGreaterThan(10);
        }
        // assert the total length of the list is 5
        expect(await blogPage.recentPosts.count()).toEqual(5);
    }) 
})