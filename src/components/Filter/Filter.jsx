import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "pages/redux/contacts/filterSlice";
import { selectFilter } from "pages/redux/contacts/selectors";
import { Box, Input, Label } from "./Filter.styled";

export const Filter = () => {
  const value = useSelector(selectFilter); 
  const dispatch = useDispatch(); 

  // Обробник зміни значення фільтра
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue)); 
  };

  return (
    <Box>
      <Label>Find contacts by name</Label>
      <Input type="text" value={value} onChange={onChange} />
    </Box>
  );
};