import { useDispatch, useSelector } from 'react-redux';
import { Input, P } from 'components/Style/Element.styled';
import { getFilter, setFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div>
      <P>Find contacts by name</P>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
        value={filter}
        placeholder="Enter name"
      />
    </div>
  );
};
