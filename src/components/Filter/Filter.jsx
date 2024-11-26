import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "pages/redux/contacts/filterSlice";
import { selectFilter } from "pages/redux/contacts/selectors";

export const Filter = () => {
  const value = useSelector(selectFilter); 
  const dispatch = useDispatch(); 

  // Обробник зміни значення фільтра
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue)); 
  };

  return (
    <div>
      <label>Find contacts by name</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};