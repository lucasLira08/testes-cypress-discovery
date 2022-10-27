describe('Sign up', () => {
    it('Be a deliveryman', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        //Click in the access button
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        
        //Deliveryman object:
        var deliveryman = {
            name: 'David Eduardo',
            cpf: '01234567895',
            email: 'eduardo.ti@gmail.com',
            whatsapp: '11988888888',
            //Object within an object:
             address:{
                zip_code: '63024060',
                street: 'Rua José Vitorino Sobrinho',
                number:'0101',
                district: 'São José',
                landmark: 'Green house',
                city_uf: 'Juazeiro do Norte/CE'
            },
            //In this case, the delivery method was Motocycle
            delivery_method: 'Moto',
            driving_licence: 'driving_licence.jpg'
        }
        //Fill the fields referring to the deliveryman
        cy.get('input[name="name"]').type(deliveryman.name)
        cy.get('input[name="cpf"]').type(deliveryman.cpf)
        cy.get('input[name="email"]').type(deliveryman.email)
        cy.get('input[name="whatsapp"]').type(deliveryman.whatsapp)

        //Fill the fields referring to the deliveryman adress
        cy.get('input[name="postalcode"]').type(deliveryman.address.zip_code)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliveryman.address.number)
        cy.get('input[name="address-details"]').type(deliveryman.address.landmark)
        
        //Fill validation:
        cy.get('input[name="address"]').should('have.value', deliveryman.address.street)
        cy.get('input[name="district"]').should('have.value', deliveryman.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliveryman.address.city_uf)

        cy.contains('.delivery-method li', deliveryman.delivery_method).click()

        cy.get('input[accept^="image"]').attachFile(deliveryman.driving_licence)

        //Confirm
        cy.get('form button[type="submit"]').click()
        //validation
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
    });
});