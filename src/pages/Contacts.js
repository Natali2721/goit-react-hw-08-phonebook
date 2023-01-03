import { ContactsContainer } from 'components/Style/Element.styled';
import { Filter } from 'components/Filter/Filter';
import { H1, H2 } from 'components/Title/Title';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

const Contacts = () => {
  return (
    <ContactsContainer>
      <H1 title="Phonebook" />
      <ContactForm />
      <H2 title="Contacts" />
      <Filter title="Find contact by name" />
      <ContactList />
    </ContactsContainer>
  );
};
export default Contacts;
