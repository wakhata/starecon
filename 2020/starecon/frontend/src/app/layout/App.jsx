import React, { useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import TranDashboard from "../../features/trans/tranDashboard/TranDashboard";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedTran, setSelectedTran] = useState(null);

  function handleSelecTran(tran) {
    setSelectedTran(tran);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedTran(null);
    setFormOpen(true);
  }
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Segment>
        <Container fluid className='main'>
          <TranDashboard
            formOpen={formOpen}
            setFormOpen={setFormOpen}
            selectTran={handleSelecTran}
            selectedTran={selectedTran}
          />
        </Container>
      </Segment>
    </>
  );
}
