import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import ContactForm from './components/ContactForm';


test( 'renders and test', () =>{
    render( <ContactForm/>);

    const firstNameInput = screen.getByPlaceholderText( 'Edd' );
    const lastNameInput = screen.getByPlaceholderText( 'Burke' );
    const emailInput = screen.getByPlaceholderText( 'bluebill1049@hotmail.com');
    const messageInput = screen.getByLabelText( /message/i );

    userEvent.type( firstNameInput, 'Terry' )
    userEvent.type( lastNameInput, 'Brown' )
    userEvent.type( emailInput, 'tabrownj@gmail.com' )
    userEvent.type( messageInput, 'Hello from the other side.' )
    
    expect( firstNameInput ).toHaveValue( 'Terry' )
    expect( lastNameInput ).toHaveValue( 'Brown' )
    expect( emailInput ).toHaveValue( 'tabrownj@gmail.com' )
    expect( messageInput ).toHaveValue( 'Hello from the other side.' )
})