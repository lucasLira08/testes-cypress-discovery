import singupPage from '../pages/signuPage'
describe('Sign up', () => {
    
    var signup = new singupPage()

    before(function(){
        cy.log('Everything here will be executed once BEFORE ALL test cases.')
    })

    beforeEach(function(){
        cy.log('Everything here will be executed everytime BEFORE ALL test cases.')
    })
    
    after(function(){
        cy.log('Everything here will be executed once AFTER ALL test cases.')
    })

    afterEach(function(){
        cy.log('Everything here will be executed everytime AFTER ALL test cases.')
    })
    
    it('Be a deliveryman', () => {
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
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        
        signup.go()
        signup.fillForm(deliveryman)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)

    });

    it('CPF not valid', () => {
        //Deliveryman object:
        var deliveryman = {
            name: 'David Eduardo',
            cpf: '012345678AA', //Change the two last numbers into letters
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

        signup.go()
        signup.fillForm(deliveryman)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

     

    });
});