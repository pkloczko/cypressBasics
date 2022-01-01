import mainPageSelectors from '../../locators/logInPageLocators.js';
import LoginPage from "../../pages/LoginPage"

describe('Orange HRM Tests', () => {

    let admin = "Admin";
    let adminPass = "admin123";
    let incorrectAdminPass = "admin1234";
    let appUrl = Cypress.config().baseUrl;

    it('Should login to OrangeHRM with correct admin credentials', () => {
        cy.visit(appUrl)
        cy.get(mainPageSelectors.userNameInput).should('be.visible').type(admin).should('have.value', admin);
        cy.get(mainPageSelectors.userPasswordInput).type(adminPass).should('have.value', adminPass);
        cy.get(mainPageSelectors.logInButton).should('be.visible').click();
        cy.get('#menu_admin_viewAdminModule').invoke("text").should('equal','Admin');
    })

    it('Should not login to OrangeHRM with incorrect admin credentials', () => {
        cy.visit(appUrl)
        cy.get(mainPageSelectors.userNameInput).should('be.visible').type(admin).should('have.value', admin);
        cy.get(mainPageSelectors.userPasswordInput).type(incorrectAdminPass);
        cy.get(mainPageSelectors.logInButton).should('be.visible').click();
        cy.get(mainPageSelectors.invalidLoginMessage).invoke("text").should('equal', 'Invalid credentials');
    })

    it('Should login to OrangeHRM with correct admin credentials (POM)', () => {
        const loginPage = new LoginPage();
        loginPage.openPage();
        loginPage.typeUserName(admin).should('have.value', admin);
        loginPage.typeUserPassword(adminPass).should('have.value', adminPass);
        loginPage.getLoginButton().should('be.visible').click();
        cy.get('#menu_admin_viewAdminModule').invoke("text").should('equal', 'Admin');
    })
})