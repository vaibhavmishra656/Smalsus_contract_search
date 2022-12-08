import * as React from 'react'
import{ Modal, Button }from 'react-bootstrap';

type dataType={
    state:boolean;
    items:any;
}

export default function ModalPopup(props:dataType) {
    console.log(props.state);
    console.log(props.items);
  return (
    <div>
        {props.state ? <h1>d</h1> : null}
    </div>
  )
}
