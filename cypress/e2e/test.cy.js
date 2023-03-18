

describe('test',()=>{
    beforeEach(()=>{
        cy.visit('https://chrval59279.azurewebsites.net/')
    })
    it('test H1',()=>{
        
        cy.get('h1').should('contain','RahulShettyAcademy.com Learning')
    })
    it('test H',()=>{
        cy.get('h3').should('contain','Cypress')
    })
})