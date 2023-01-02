import { useState } from 'react';
import Notiflix from 'notiflix';
//import { useDispatch, useSelector } from 'react-redux';
//import { addContact } from 'redux/phonebookSlice';
import { nanoid } from 'nanoid';
import ButtonAdd from 'components/ContactForm/ButtonAdd';
import ContactForm from 'components/ContactForm/ContactForm';
import InputName from 'components/ContactForm/InputName';
import InputTel from 'components/ContactForm/InputTel';
import { LabelContact } from 'components/ContactForm/LabelContact';
import {
  useGetContactQuery,
  useAddContactMutation,
} from '../../redux/contacts/contactsApi';

export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const { data } = useGetContactQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const clickOnBtnAdd = async event => {
    event.preventDefault();
    try {
      data.find(contact => contact.name === name)
        ? Notiflix.Notify.info(`${name} is already in contacts.`)
        : (await addContact({ name, number })) &&
          Notiflix.Notify.success(`${name} added to your phonebook 🚀`);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <>
      <ContactForm onSubmit={clickOnBtnAdd}>
        <LabelContact title="Name" htmlFor={nameInputId}>
          <InputName value={name} onChange={handleChange} />
        </LabelContact>
        <LabelContact title="Number" htmlFor={numberInputId}>
          <InputTel value={number} onChange={handleChange} />
        </LabelContact>
        <ButtonAdd text="Add contact" />
      </ContactForm>
    </>
  );
};
