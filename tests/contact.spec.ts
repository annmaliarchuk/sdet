import {test, expect} from '@playwright/test';
import ContactPage from '../pages/contact.page';
import {faker} from '@faker-js/faker';

test.describe('Contact page', () => {
    let contactPage: ContactPage;

    test('Submit contact form', async ({page}) => {
        contactPage = new ContactPage(page);
        contactPage.navigate();
        await contactPage.submitForm(faker.person.firstName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(2));
        await expect(contactPage.successMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
})