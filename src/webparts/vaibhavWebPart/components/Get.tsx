import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import './css.css';
import Example from './Model';
function Test(){


const [state, setState] = React.useState([])
const [show, setShow] = React.useState(false);
const handleShow = () => {setShow(true);
}

    const constloadGmBHTaskUsers = function () {


        const varAllTaskusers = []

        axios.get("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Prashant/Vaibhav/_api/web/lists/getbyid('653EAEB8-CA8F-406B-9764-96638124C1EE')/items?$select=Id,LastName,FirstName")

            .then(function(response: AxiosResponse) {

                const GmBHtaskUsers= response.data.value;
                setState(GmBHtaskUsers);
                console.log(state);

            },

                function(error) {

                    alert(JSON.stringify(error));

                });

    };

    React.useEffect(()=> {

        constloadGmBHTaskUsers();
        





    },[]);
    return(
        <div>
           <Example />
           
            <>
            <table style={{border: "1px solid", width: "100%" }}>
            <tr style={{border: "1px solid"}}>
                <th> <h1>Id</h1></th>
                <th><h1>FirstName</h1></th>
                <th><h1>LastName</h1></th>
                <th><h1>Edit</h1></th>
                </tr>
            {state.map(item=>{
            return(
                <tr style={{border: "1px solid"}}>
                <td> <h1>{item.Id}</h1></td>
                <td><h1>{item.FirstName}</h1></td>
                <td><h1>{item.LastName}</h1></td>
                <td><button id="abc" className='btn btn-danger' onClick={()=>handleShow} >Edit</button></td>
                </tr>



                ) })}
            </table>
            </>
            {/* {show?<Example />:null}
         */}

               
        </div>
    )
}

export default Test