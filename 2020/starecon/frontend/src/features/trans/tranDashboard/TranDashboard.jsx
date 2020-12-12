import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import TranForm from "../tranForm/TranForm";
import TranList from "./TranList";
import { sampleData } from "../../../app/api/sampleData";

export default function TranDashboard({
  formOpen,
  setFormOpen,
  selectTran,
  selectedTran,
}) {
  const [trans, setTrans] = useState(sampleData);

  function handleCreateTrans(tran) {
    setTrans([...trans, tran]);
  }

  function handleUpdateTran(updatedTran) {
    setTrans(
      trans.map((txn) => (txn.id === updatedTran.id ? updatedTran : txn))
    );
    selectTran(null);
  }

  function handleDeleteTran(tranId) {
    setTrans(trans.filter((txn) => txn.id !== tranId));
  }

  return (
    <Grid>
      <Grid.Column width={4}>
        {formOpen && (
          <TranForm
            setFormOpen={setFormOpen}
            setTrans={setTrans}
            updatedTran={handleUpdateTran}
            selectedTran={selectedTran}
            createTran={handleCreateTrans}
            key={selectedTran ? selectedTran.id : null}
          />
        )}
      </Grid.Column>
      <Grid.Column width={12}>
        <TranList
          trans={trans}
          selectTran={selectTran}
          deleteTran={handleDeleteTran}
        />
      </Grid.Column>
    </Grid>
  );
}
