
let sel
import { faker } from '@faker-js/faker';


before(() => {
    Cypress.on('uncaught:exception', () => {
        return false
    })

    cy.fixture('selectors').then((selectors) => {
        sel = selectors
    })

    cy.visit('/')

})


Cypress.Commands.add('signUpPage', () => {

    const password = Cypress.env('password');

    cy.get(sel.signUpButton).should('be.visible').click()
    cy.get(sel.fullNameField).type(faker.person.fullName())
    cy.get(sel.businessNameField).type(faker.company.buzzNoun())
    cy.get(sel.businessEmail).type(faker.internet.email())
    cy.get(sel.phoneNumberField).type(faker.phone.number('+23480########'))
    cy.get(sel.nextButton).click()
    cy.get(sel.websiteField).should('be.visible').type(faker.internet.domainName())
    cy.get(sel.instragramField).type(faker.company.buzzVerb())
    cy.get(sel.twitterField).type(faker.company.buzzVerb())
    cy.get(sel.heardAboutUs).click()
    cy.get(sel.instagramOption).click()
    cy.get(sel.passwordField).type(password)
    cy.get(sel.signUpBtn).click()


})