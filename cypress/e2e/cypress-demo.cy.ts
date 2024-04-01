/// <reference types="cypress" />

describe('Azure Active Directory Authentication', () => {
    beforeEach(() => {
      // log into Azure Active Directory through our sample SPA using our custom command
      // cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
      // cy.visit('https://cgtms-dev.central.co.th/')
    })
  
    it('project demo', () => {
      cy.visit('https://cgtms-dev.central.co.th/')
      const log = Cypress.log({
        displayName: 'Azure Active Directory Login',
        message: [`🔐 Authenticating | ${Cypress.env('tms_admin_username')}`],
        autoEnd: false,
      })
      // cy.screenshot()
      log.snapshot('before login')
      cy.origin('https://centralgroupb2cdev.b2clogin.com', () => {
        cy.get('#emailForm').type(`${Cypress.env('tms_admin_username')}`)
        cy.get('#password').type(`${Cypress.env('tms_admin_password')}`)
        cy.get('#next').click()
      })
      log.snapshot('after login')
      log.end()
      cy.wait(5000)
      cy.get('body').screenshot()      
      cy.get('.list-menu-sidebar > :nth-child(9) > :nth-child(1)').click()
      cy.get('.li-header.active > :nth-child(2) > :nth-child(1) > a').click()
    })
  
    
  })