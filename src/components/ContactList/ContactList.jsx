import {
  Button,
  ContactItem,
  Contacts,
  ContactTxt,
} from 'components/Style/Element.styled';
import { FaUserAlt } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

import {
  useGetContactQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactsApi.js';

import { getFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  //const dispatch = useDispatch();
  //const contacts = useSelector(state => state.contacts);

  const { data } = useGetContactQuery();
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteClick = id => {
    deleteContact(id);
  };

  const searchFilter = useSelector(getFilter);

  const getVisibleContacts = () => {
    if (searchFilter !== '') {
      return data.filter(({ name }) =>
        name.toLowerCase().includes(searchFilter)
      );
    }
    return data;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Suspense fallback={<Loader />}>
      <Contacts>
        {visibleContacts.map(({ name, number, id }) => {
          return (
            <ContactItem key={id}>
              <FaUserAlt />
              <ContactTxt>
                {name} : {number}
              </ContactTxt>
              <Button type="button" onClick={() => handleDeleteClick(id)}>
                Delete
              </Button>
            </ContactItem>
          );
        })}
      </Contacts>
    </Suspense>
  );
};
