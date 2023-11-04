import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit, isNameHas }) => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contactsOperation.name);
  const number = useSelector(state => state.contactsOperation.number);

  const handleSubmit = event => {
    event.preventDefault();

    if (isNameHas(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const data = {
      name,
      number,
    };

    // Виклик дії для додавання контакту без використання окремих дій (actions)
    dispatch({
      type: 'contactsOperation/setContacts', // для збереження контакту
      payload: data,
    });

    // скидання значень полів `name` та `number` в Redux-стейт після додавання контакту
    dispatch({
      type: 'contactsOperation/resetForm',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zAЗа-яА-Я]*)*$"
          required
          value={name}
          onChange={event =>
            dispatch({
              type: 'contactsOperation/setName',
              payload: event.target.value,
            })
          } // Встановити ім'я в Redux-стейт
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          required
          value={number}
          onChange={event =>
            dispatch({
              type: 'contactsOperation/setNumber',
              payload: event.target.value,
            })
          } // Встановити номер в Redux-стейт
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
