

describe('test',()=>{
    it('test',()=>{
        cy.visit('https://chrval59279.azurewebsites.net/')
        cy.get('h1').should('contain','RahulShettyAcademy.com Learning')
    })
})