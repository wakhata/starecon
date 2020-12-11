import React from "react";
import { Button } from "semantic-ui-react";

export default function TransListItem({ recon }) {
  return (
    <>
      <tr>
        <td>{recon.date}</td>
        <td>{recon.cycle}</td>
        <td>{recon.vote}</td>
        <td className='right aligned'>{recon.debit}</td>
        <td className='right aligned'>{recon.credit}</td>
        <td className='right aligned'>{recon.balance}</td>
        <td className='right aligned'>
          <Button icon='pencil' color='green' size='mini' />
          <Button icon='eye' color='blue' size='mini' />
          <Button icon='trash' color='red' size='mini' />
        </td>
      </tr>
    </>
  );
}
