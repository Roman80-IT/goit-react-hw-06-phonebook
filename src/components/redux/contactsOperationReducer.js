import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

export const contactsOperationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `contactsOperation/setContacts`: {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case `contactsOperation/setFilter`: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case 'contactsOperation/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'contactsOperation/deleteContact': {
      // action.payload - 1
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case 'contactsOperation/resetForm': {
      return {
        ...state,
        name: '', // Нове поле
        number: '', // Нове поле
      };
    }

    default:
      return state;
  }
};
