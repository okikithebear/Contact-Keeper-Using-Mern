import React, {useReducer} from 'react';
import {v4 as uuidv4} from "uuid";
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
import { text } from 'express';

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
        ],
        current: null,
        filtered: null
      };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
const addContact = contact => {
contact.id = uuidv4();
dispatch({type: ADD_CONTACT, payload: contact});  
}
    // Delete Contact
    const deleteContact = id => {
      dispatch({type: DELETE_CONTACT, payload: id});  
      }
    // Set Current Contact
    const setCurrent = contact => {
      dispatch({type: SET_CURRENT, payload: contact});  
      }
   //  Clear Current contact
   const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT});  
    }
    // Update  Contact
    const updateContact = contact => {
      dispatch({type: UPDATE_CONTACT, payload: contact});  
      }
    // Filter Contacts
    const filterContact = text => {
      dispatch({type: FILTER_CONTACTS, payload: text});
    }
    // Clear Filter
    const clearFilter = () => {
      dispatch({type: CLEAR_FILTER});  
      }
   
    return (
        <ContactContext.Provider
          value={ { contacts: state.contacts,
          addContact,
          current: state.current,
          deleteContact,
          setCurrent,
          clearCurrent,
          updateContact,
          filterContact,
          clearFilter
          }}
        >
          {props.children}
        </ContactContext.Provider>
      )
        };
export default ContactState;