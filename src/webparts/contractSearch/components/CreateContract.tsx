import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './createcontact.css'
import { useState,useEffect } from "react";
import {Web} from "sp-pnp-js";
import {Panel } from "office-ui-fabric-react";
// import { Dialog, DialogSurface, DialogTitle, DialogBody, DialogActions, DialogContent } from "@fluentui/react-components";
import Modal from 'react-bootstrap/Modal';
import { Col,Form,Row,Button } from "react-bootstrap";
const CreateContract=(prop:any)=>{  
    const [show, setShow] = useState(prop.prop);
    const [contractTypepopup, setcontractTypepopup] = useState(false);
    const [ContactDetailspopup, setContactDetailspopup] = useState(false);
    const[Titlecontract,setTitlecontract]=useState("");
    const[checkContractitem,setcheckContractitem]=useState("");
    const[checkContactitem,setcheckContactitem]=useState("");
    const[ContactDetailsItem,setContactDetailsitem]=useState("");
    const[contractTypeItem,setcontractTypeItem]=useState("");
    const [contractTypeId, setcontractTypeId] = useState();
    const [contactDetailsId, setcontactDetailsId] = useState();
    const [contractTypeSuffix, setcontractTypeSuffix] = useState("");
    const [smarttaxonomy, setSmarttaxonomy] = useState([]);
    const[ContactsDetails,setContactsDetails]=useState([]);
    const[search,setsearch]:any=useState(false);
    const[employeedataa,setemployeedataa]=useState([])



    const handleClose = () =>{
      prop.callback();
     setShow(false);
       } 
    
       const poupcloseContractType=(item:any)=>{
        if(item=="contract"){
          setcontractTypepopup(false);
        }
        else if(item=="contact"){
          setContactDetailspopup(false);
        }
       
       }
          useEffect(()=>{
      LoadSmartTaxonomy();
      loadContactDetails();
          },[])
    const LoadSmartTaxonomy=async()=>{
      const web = new Web('https://hhhhteams.sharepoint.com/sites/HHHH');
       await web.lists.getById("D1C6D7C3-F36E-4F95-8715-8DA9F33622E7").items.select("Id,Title,TaxType,Suffix").filter("TaxType eq 'Contract'").get()
       .then((Data: any[])=>{
         console.log("smart metadata",Data);
         let smarttaxonomyArray:any=[];
         Data.map((item,index)=>{
          if(item.TaxType!=undefined&& item.TaxType!=null){
            if (item.TaxType == 'Contract'){
              smarttaxonomyArray.push(item);
            }
          }
          
         })
      
         setSmarttaxonomy(smarttaxonomyArray);
         
       }) 
       .catch((err) => {
             console.log(err.message);
          });
         }
        const loadContactDetails=async()=>{
          const web = new Web('https://hhhhteams.sharepoint.com/sites/HHHH/Smalsus');
          await web.lists.getById('69e59417-fa02-4431-9d7d-100560cf3aff').items.select("Id,Title,ItemType,FirstName,FullName,Company,JobTitle,Item_x0020_Cover,EmployeeID/Title,StaffID,EmployeeID/Id").expand("EmployeeID").orderBy("Created",true).get()
          .then((Data: any[])=>{
            console.log(Data);
            var employecopyData:any=[];
            Data.map((item,index)=>{
              if(item.ItemType!=undefined&& item.ItemType!=""){
                    if(item.ItemType=="Contact"){
                      employecopyData.push(item);
                    }
              }
            })
            setContactsDetails(employecopyData);
            setemployeedataa(employecopyData);
       
            }) 
          .catch((err) => {
                console.log(err.message);
             });
        }

        // const esearch = () =>{


        // }
      
        const openContractTypepopup=(item:any)=>{
          setcontractTypepopup(true);
       }
       const openEmployeeDetailspopup=()=>{
        setContactDetailspopup(true); 
       }
       
       const saveContractType=(checkitem:any,type:any)=>{
          if(checkitem!=undefined&& checkitem!=""&& type==="contract"){
            smarttaxonomy.map ((items,index)=>{
              if(items.Title===checkitem){
                setcontractTypeId(items.Id);
            
                setcontractTypeSuffix(items.Suffix);
              }
           
            })
            setcontractTypeItem(checkitem);
            poupcloseContractType("contract");
           }
           else if(checkitem!=undefined&& checkitem!=""&&type==="contact"){
            ContactsDetails.map((items,index)=>{
              if(items.FullName===checkitem){
                setcontactDetailsId(items.Id);
                
             }
            })
              setContactDetailsitem(checkitem)
            poupcloseContractType("contact");
           }
         }
         console.log("contractType Id:",contractTypeId);
         console.log("contract type suffix",contractTypeSuffix);
         console.log("employename hhhhstaff Id:",contactDetailsId);

        
         const createnewcontract = async () => {
       
          var contractNumber:any;
          var contractId:any;
          console.log("contractType Id:",contractTypeId);
          console.log("contractType Id:",contractTypeItem);
          if(contractTypeItem!=undefined&& contractTypeItem!=""){
            const web = new Web('https://hhhhteams.sharepoint.com/sites/HHHH/Smalsus');
            await web.lists.getById('e183a16b-edd1-4962-99ed-f2d36d2a4816').items.select("Id,contractNumber,Title,ContractId,typeOfContractId").filter("typeOfContractId eq'"+contractTypeId+ "'").orderBy("Created",false).top(1).get()
            .then((Data: any[])=>{
              
              var contractNumberlength:any;
             
              console.log("contract list data ",Data);
              if(Data!=undefined&& Data.length>0){
                
                contractNumber=Data[0].contractNumber+1;
                console.log(contractTypeSuffix+"-"+contractNumber);
                var Contractlength= contractNumber.toString();
                contractNumberlength=Contractlength.length;
                console.log("length of contract number ",contractNumberlength);
                // setContractNumber(contractNumber) ;
              } if(Data==undefined|| Data.length==0){
                contractNumber=1;
                var Contractlength= contractNumber.toString();
                contractNumberlength=Contractlength.length;
                // setContractNumber(contractNumber);
              }
              if(contractNumberlength==0&&contractNumberlength==""){
                contractId=contractTypeSuffix+"-"+"0000"+contractNumber;
                // setcontractId(contractId);
              }
              
              else if(contractNumberlength==1 && contractNumberlength>0 && contractNumberlength!="" && contractNumberlength!=undefined){
                contractId=contractTypeSuffix+"-"+"0000"+contractNumber;
                // setcontractId(contractId);
              }
             else  if(contractNumberlength==2 && contractNumberlength>0&&contractNumberlength!="" && contractNumberlength!=undefined){
                 contractId=contractTypeSuffix+"-"+"000"+contractNumber;
                // setcontractId(contractId);
              }
              else  if(contractNumberlength==3 && contractNumberlength>0&&contractNumberlength!="" && contractNumberlength!=undefined){
                contractId=contractTypeSuffix+"-"+"00"+contractNumber;
                // setcontractId(contractId);
              }
              else  if(contractNumberlength==4 && contractNumberlength>0&&contractNumberlength!="" && contractNumberlength!=undefined){
               contractId=contractTypeSuffix+"-"+"0"+contractNumber;
                // setcontractId(contractId);
              }
            
            
            }) 
            .catch((err) => {
                  console.log(err.message);
               });

          }
          console.log(contractNumber)
          console.log(contractId)
          console.log(contactDetailsId)
          
             if(Titlecontract!=""&&Titlecontract!=undefined&&ContactDetailsItem!=undefined&&ContactDetailsItem!=""&&contractTypeItem!=""&&contractTypeItem!=undefined){
             const web = new Web(
            "https://hhhhteams.sharepoint.com/sites/HHHH/Smalsus"
           );
           await web.lists.getById("e183a16b-edd1-4962-99ed-f2d36d2a4816").items.add(
                  {
                   Title:Titlecontract,
                   typeOfContractId:contractTypeId,
                  //  typeOfContract:contractTypeItem,
                   HHHHStaffId:contactDetailsId,
                   contractNumber:contractNumber,
                   ContractId:contractId
                  
                  }
            )
           .then((res:any)=>{
             console.log(res);
             handleClose();
             
           })
           .catch((err) => {
             console.log(err.message);
            });
            }
            else{
              alert("please Fill All the input field");
            }
        };

        const searchcontact = (e:any)=>{

          var key=e.target.value;
          if(key.length>0)
          {
            setsearch(true);
            const filterAll: any = ContactsDetails.filter((items: any) =>
            items.FullName?.toLowerCase().includes(key)
          )
          setContactsDetails(filterAll)
          }
          else if (key.length==0){
            setsearch(false)
            setContactsDetails(employeedataa);
          }

        }


    


      
        return(
         <div  className="modal show"
         style={{ display: 'block', position: 'initial' }}>
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

      {/* <Panel >
      <Dialog>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Create Contract</DialogTitle>
          <span onClick={handleClose} >x</span>
          <DialogContent>
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
          </DialogContent>
          <DialogActions>
           <Button variant="primary" onClick={handleClose}>
           Add New Employee
          </Button>
          <Button variant="primary" onClick={createnewcontract}>
         Create
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
    </Panel> */}

    <Panel 
            headerText="Create Contract" 
            isOpen={show} 
            onDismiss={handleClose}
            isFooterAtBottom={true}
           
        >
          <>
          <Form>
          <Row className="mb-6 ms-Panel--lg">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Title</Form.Label>
          <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setTitlecontract(e.target.value)}></input>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Employee Name</Form.Label>
          <div> 
            <input type="text"  className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"value={ContactDetailsItem}></input>
          <span className="toltrippopup">
        <img  onClick={openEmployeeDetailspopup} src="https://hhhhteams.sharepoint.com/sites/HHHH/SiteCollectionImages/ICONS/Foundation/EMMCopyTerm.png" data-themekey="#"/>
         </span>
         </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Contract Type</Form.Label>
          <div>
          <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"value={contractTypeItem}></input>
          <span className="toltrippopup-2">
            <img  onClick={()=>openContractTypepopup(contractTypeItem)} src="https://hhhhteams.sharepoint.com/sites/HHHH/SiteCollectionImages/ICONS/Foundation/EMMCopyTerm.png" data-themekey="#"/>
            </span>
          </div>
         
   
        </Form.Group>
      </Row>
    </Form>
    </>

      <div className="buttons">
           <Button className="btmbtn" variant="primary" onClick={handleClose}>
           Add New Employee
          </Button>
          <Button variant="primary" className="btmbtn" onClick={createnewcontract}>
         Create
          </Button>
          <Button variant="secondary" className="btmbtn" onClick={handleClose}>
            Close
          </Button>
      </div>          
        </Panel>





                {/* =========================contract type poup open===================  */}


        <Modal show={contractTypepopup} onHide={()=>poupcloseContractType("contract")} size="lg"aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Contract Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <div className='bodypoup col-sm-12 row'>
         {
        smarttaxonomy.map((item,index)=>{
           return(
           <div className="radio col-sm-4">
            <div key={index}> <input type="radio" id="html" name="fav_language"  defaultChecked={checkContractitem==item.Title} value={item.Title}onChange={(e)=>setcheckContractitem(e.target.value)}></input>
            <label >{item.Title}</label></div>
               </div>
          )
        })  
        }
         </div>
     </Modal.Body>
        <Modal.Footer>
      
          <Button variant="primary" onClick={()=>saveContractType(checkContractitem,"contract")}>
             save
          </Button>
          <Button variant="secondary" onClick={()=>poupcloseContractType("contract")}>
            Cancel
          </Button>
        
        </Modal.Footer>
      </Modal>
              
              {/* ===============employedetails poup========================== */}


              <Modal show={ContactDetailspopup} onHide={()=>poupcloseContractType("contact")} size="lg"aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header>
       
          <Modal.Title>Contacts</Modal.Title>
          <div role={"Button"} onClick={handleClose} >&#x2715;</div>
          </Modal.Header>
        <Modal.Body>

        <>
          <input type="text" className="main-search" placeholder=" Search All"  onChange={(e)=>searchcontact(e)}/>

          </>
         {search? <div className='bodypoup col-sm-12 row'>
          
          {
         ContactsDetails.map((item,index)=>{
            return(
            <div className="radio col-sm-4">
             <div key={index} > <input type="radio" id="html" name="fav_language"  defaultChecked={checkContactitem==item.FullName} value={item.FullName}onChange={(e)=>setcheckContactitem(e.target.value)}></input>
             <label >{item.FullName}</label></div>
                </div>
           )
         })  
         }
          </div>:null} 
         
     </Modal.Body>
        <Modal.Footer>
      
          <Button variant="primary" onClick={()=>saveContractType(checkContactitem,"contact")}>
             save
          </Button>
          <Button variant="secondary" onClick={()=>poupcloseContractType("contact")}>
            Cancel
          </Button>
        
        </Modal.Footer>
      </Modal>

</div>
)
}
CreateContract.defaultProps ={
    prop:false,
    }
    
export default CreateContract;