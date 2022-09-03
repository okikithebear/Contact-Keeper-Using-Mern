import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../Types'

const ContactState = props => {
    const initialState ={
        contacts: [
            { 
              id:1,
              name: 'Jude William',
              email: 'judewilliam@gmail.com',
              phone: '1212-11-333',
              type: 'personal'
            },
            { 
                id:2,
                name: 'Brandy William',
                email: 'brandywilliam@gmail.com',
                phone: '1212-11-000',
                type: 'professional'
              },
              { 
                id:3,
                name: 'Blake William',
                email: 'blakewilliam@gmail.com',
                phone: '1000-11-333',
                type: 'professional'
              }
        ]
    };



    // Add Contact

    // Delete Contact

    // Set Current Contact

   //  Clear Current contact

    // Update  Contact

    // Filter Contacts

    // Clear Filter

    const {state, dispatch} = useReducer(contactReducer, initialState);
    return (
        <ContactContext.Provider
          value={ {contacts: state.contacts}}
        >
          {props.children}
        </ContactContext.Provider>
      )
        };
export default ContactState;