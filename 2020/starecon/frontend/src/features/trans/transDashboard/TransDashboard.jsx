import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import VoteForm from "../voteForm/VoteForm";
import TransList from "./TransList";
import { sampleData } from "../../../app/api/sampleData";

export default function TransDashboard({formOpen, setFormOpen}) {
  const [trans, setTrans] = useState(sampleData);
  return (
    <Grid>
      <Grid.Column width={4}>{formOpen && <VoteForm setFormOpen={setFormOpen} />}</Grid.Column>
      <Grid.Column width={12}>
        <TransList trans={trans} />
      </Grid.Column>
    </Grid>
  );
}
