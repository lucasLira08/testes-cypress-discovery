class signupPage{

 
    go(){
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        //Click in the access button
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliveryman){
        cy.get('input[name="name"]').type(deliveryman?.name)
        cy.get('input[name="cpf"]').type(deliveryman?.cpf)
        cy.get('input[name="email"]').type(deliveryman?.email)
        cy.get('input[name="whatsapp"]').type(deliveryman?.whatsapp)

        //Fill the fields referring to the deliveryman adress
        cy.get('input[name="postalcode"]').type(deliveryman?.address.zip_code)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliveryman?.address.number)
        cy.get('input[name="address-details"]').type(deliveryman?.address.landmark)
        
        //Fill validation:
        cy.get('input[name="address"]').should('have.value', deliveryman?.address.street)
        cy.get('input[name="district"]').should('have.value', deliveryman?.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliveryman?.address.city_uf)

        cy.contains('.delivery-method li', deliveryman?.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile(deliveryman?.driving_licence)
    }

    submit(){
       //Confirm
       cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
    }
}

export default signupPage;

