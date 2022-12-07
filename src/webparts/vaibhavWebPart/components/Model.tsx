import { Modal } from 'office-ui-fabric-react';
import * as React from 'react';
import  { useState } from 'react';


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <button className='btn btn-danger' onClick={handleShow}>
        Launch demo modal
      </button>
<Modal
 isOpen={show}

 onDismiss={handleClose}

 isBlocking={false}

 isModeless={false}
>
    <input  type ="text" placeholder='id'></input>
    <input  type ="text" placeholder='FirstName'></input>
    <input  type ="text" placeholder='LastName'></input>
    
</Modal>
     
    </>
  );
}
export default Example