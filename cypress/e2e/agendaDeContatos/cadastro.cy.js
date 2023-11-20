/// <reference types="cypress" /> 

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve incluir um novo contato a lista', () => {
        cy.get('input[type="text"').type('Carolina')
        cy.get('input[type="email"').type('mattos@gmail.com')
        cy.get('input[type="tel"').type('11 123456789')
        cy.get('.adicionar').click()
        cy.get('.contato').should('have.length', 1)
    })
    it('Deve alterar o contato', () => {
        cy.get('.edit').click()
        cy.get('input[type="text"').type('Carolina Mattos')
        cy.get('.alterar').click()
        cy.get('li').should('contain', 'Carolina Mattos')
    })
    it('Deve deletar o contato', () => {
        cy.get('.delete').click()
        cy.get('.contato').should('have.length', 0)
    })
})
