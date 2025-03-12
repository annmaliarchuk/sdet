import {Page, Locator} from '@playwright/test';

class BlogPage {
    page: Page;
    recentPosts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.recentPosts = page.locator('#recent-posts-3 li');
       
    } 

    async navigate() {
        await this.page.goto('/blog');
    }

}

export default BlogPage;