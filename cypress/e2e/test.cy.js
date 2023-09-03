

describe('test',()=>{
    beforeEach(()=>{
        cy.visit('https://chrivale.azurewebsites.net/webapp/')
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
