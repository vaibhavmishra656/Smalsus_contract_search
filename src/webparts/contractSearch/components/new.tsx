{/* <Modal show={show} onHide={handleClose} size="lg"aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header >
          <Modal.Title>Create Contract</Modal.Title>
        <span onClick={handleClose} >x</span>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Title</Form.Label>
          <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"onChange={(e)=>setTitlecontract(e.target.value)}></input>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Employee Name</Form.Label>
          <div> <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"value={ContactDetailsItem}></input>
          <span className="toltrippopup">
        <img  onClick={openEmployeeDetailspopup} src="https://hhhhteams.sharepoint.com/sites/HHHH/SiteCollectionImages/ICONS/Foundation/EMMCopyTerm.png" data-themekey="#"/>
         </span>
         </div>
         
         
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Contract Type</Form.Label>
          <div>
          <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"value={contractTypeItem}></input>
          <span className="toltrippopup-2" >
            <img  onClick={()=>openContractTypepopup(contractTypeItem)} src="https://hhhhteams.sharepoint.com/sites/HHHH/SiteCollectionImages/ICONS/Foundation/EMMCopyTerm.png" data-themekey="#"/>
            </span>
          </div>
         
   
        </Form.Group>
      </Row>
    </Form>
   </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
           Add New Employee
          </Button>
          <Button variant="primary" onClick={createnewcontract}>
         Create
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal> */}