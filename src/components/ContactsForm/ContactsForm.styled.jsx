import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
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

export const Button = styled.button`
    border: 1px solid #0063cc;
    background-color: #0063cc;

    color: white;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;

    display: flex;
    align-items: center;

    border-radius: 5px;

    padding: 8px 25px;

    font-family: system-ui;
    text-transform: uppercase;

    margin: 20px auto 0 auto;
    gap: 5px;
`;
