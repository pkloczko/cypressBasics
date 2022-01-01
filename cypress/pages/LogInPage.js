import locators from '../locators/logInPageLocators.js';

class LoginPage {

    openPage() {
        var appUrl = Cypress.config().baseUrl;
        cy.visit(appUrl);
    }

    getUsernameInput() {
        return cy.get(locators.userNameInput)
    }

    getPasswordInput() {
        return cy.get(locators.userPasswordInput)
    }

    getLoginButton() {
        return cy.get(locators.logInButton)
    }

    invalidMessage() {
        return cy.get(locators.invalidMessage)
    }

    typeUserName(username) {
        return this.getUsernameInput().type(username);
    }

    typeUserPassword(password) {
        return this.getPasswordInput().type(password);
    }
    
}

export default LoginPage