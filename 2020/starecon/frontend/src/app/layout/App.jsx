import React, { useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import TransDashboard from "../../features/trans/transDashboard/TransDashboard";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Segment>
        <Container fluid className='main'>
          <TransDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
        </Container>
      </Segment>
    </>
  );
}
