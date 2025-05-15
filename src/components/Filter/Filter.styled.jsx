import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    
`;

export const Input = styled.input`
  padding: 4px;
  font: inherit;
  background-color: transparent ;
  border: 1px solid black;
  width: 250px;
  margin-top: 4px;
  font-size: 12px;
  padding: 6px 12px 6px 12px;
`;