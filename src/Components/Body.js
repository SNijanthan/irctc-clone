import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Courier New", monospace;
`;

const H4 = styled.h3`
  color: #0f3164;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Courier New", monospace;
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  font-family: "Courier New", monospace;
  height: 30px;
  text-indent: 5px;

  &::placeholder {
    font-family: "Courier New", monospace;
  }
`;

const Search = styled.button`
  background-color: #0f3164;
  color: white;
  padding: 10px;
  font-family: "Courier New", monospace;
  margin-top: 20px;
  cursor: pointer;
`;

const Body = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <H4>Book Your Train Ticket</H4>
      <Form>
        <Label>From</Label>
        <Input type="text" placeholder="Enter Departure Station" />
        <Label>To</Label>
        <Input type="text" placeholder="Enter Arrival Station" />
        <Label>Date</Label>
        <Input type="date" />
        <Search onClick={handleSubmit}>Search Trains</Search>
      </Form>
    </Container>
  );
};

export default Body;
