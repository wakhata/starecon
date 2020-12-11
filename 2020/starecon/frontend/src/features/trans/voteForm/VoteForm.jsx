import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function VoteForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header content='Create new Vote' />
      <Form>
        <Form.Field>
          <input type='text' placeholder='Name of Institution' />
        </Form.Field>
        <Form.Field>
          <input type='date' placeholder='Pay Period' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Code' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Batch' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Type' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Amount' />
        </Form.Field>
        <Form.Field>
          <input type='date' placeholder='Date' />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
