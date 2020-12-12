import React from "react";
import { Segment, Header } from "semantic-ui-react";
import TranListItem from "./TranListItem";

export default function TranList({ trans, selectTran, deleteTran }) {
  return (
    <Segment.Group>
      <Segment>
        <Header textAlign='center' content='Bank Statement' />
        <p>Bank statement for the Period 1/7/2017 to 31/12/2020</p>
        <table className='ui striped small compact table'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Payroll Cycle</th>
              <th>Name of Institution</th>
              <th className='right aligned'>Debit</th>
              <th className='right aligned'>Credit</th>
              <th className='right aligned'>Balance</th>
              <th className='center aligned'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trans.map((tran) => (
              <TranListItem
                tran={tran}
                key={tran.id}
                selectTran={selectTran}
                deleteTran={deleteTran}
              />
            ))}
          </tbody>
        </table>
      </Segment>
    </Segment.Group>
  );
}
