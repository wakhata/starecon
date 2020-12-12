import React from "react";
import { Button } from "semantic-ui-react";

export default function TranListItem({ tran, selectTran, deleteTran }) {
  return (
    <>
      <tr>
        <td>{tran.date}</td>
        <td>{tran.cycle}</td>
        <td>{tran.vote}</td>
        <td className='right aligned'>{tran.debit}</td>
        <td className='right aligned'>{tran.credit}</td>
        <td className='right aligned'>{tran.balance}</td>
        <td className='right aligned'>
          <Button
            onClick={() => selectTran(tran)}
            icon='pencil'
            color='green'
            size='mini'
          />
          <Button icon='eye' color='teal' size='mini' />
          <Button onClick={()=>deleteTran(tran.id)} icon='trash' color='red' size='mini' />
        </td>
      </tr>
    </>
  );
}
