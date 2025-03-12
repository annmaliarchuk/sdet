import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path');

test.describe('Upload file', () => {
    let cartPage: CartPage;

    const fileName = ['logo.png', '3mb-file.pdf']

    for (const name of fileName) {
        test(`should upload a ${name} file`, async ({page}) => {
            cartPage = new CartPage(page);
    
            await page.goto('https://practice.sdetunicorns.com/cart/');
            const filePath = path.join(__dirname, `../data/${name}`);
        
            cartPage.uploadComponent().uploadFile(filePath);
    
            await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', {timeout: 10000});
        })
    }

    

    test('should upload a test file on a hidden input field', async ({page}) => {
        await page.goto('https://practice.sdetunicorns.com/cart/');
        const filePath = path.join(__dirname, '../data/logo.png');
        //DOM manipulation
        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
                selector.className =''
            }
        })
        // it's important to select input type=file for the upload field
        await page.setInputFiles('input#upfile_1', filePath);
        await page.locator('#upload_1').click();
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');

    })
})