import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";

export default function TranForm({
  setFormOpen,
  setTrans,
  createTran,
  selectedTran,
  updatedTran,
}) {
  const initialValues = selectedTran ?? {
    cycle: "",
    date: "",
    vote: "",
    batch: "",
    Code: "",
    debit: "",
    credit: "",
    balance: "",
  };
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedTran
      ? updatedTran({...selectedTran, ...values})
      : createTran({ ...values, id: cuid(), postedBy: "Joshua" });
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <Segment clearing>
      <Header content={selectedTran ? "Edit Transaction" : "New Transaction"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Name of Institution'
            name='vote'
            value={values.vote}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            name='cycle'
            value={values.cycle}
            onChange={(e) => handleInputChange(e)}
            placeholder='Pay Period'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='Code'
            value={values.Code}
            onChange={(e) => handleInputChange(e)}
            placeholder='Code'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='batch'
            value={values.batch}
            onChange={(e) => handleInputChange(e)}
            placeholder='Batch'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='debit'
            value={values.debit}
            onChange={(e) => handleInputChange(e)}
            placeholder='Debit'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='credit'
            value={values.credit}
            onChange={(e) => handleInputChange(e)}
            placeholder='Credit'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='balance'
            value={values.balance}
            onChange={(e) => handleInputChange(e)}
            placeholder='Balance'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
            placeholder='Date'
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button type='submit' floated='right' content='Cancel' />
      </Form>
    </Segment>
  );
}
