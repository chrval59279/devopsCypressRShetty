

describe('test localhost',()=>{
    beforeEach(()=>{
        cy.visit('localhost:8080/webapp')
    })
    
    it('url',()=>{
        cy.url().should('include','8080')
    })
    it('test H1',()=>{
        cy.get('h1').should('contain','RahulShettyAcademy.com Learning')
    })
    it('test H2',()=>{
        cy.get('h2').should('contain','changes')
    })
    it('test H3',()=>{
        cy.get('h3').should('contain','cypress tests')
    })
})
