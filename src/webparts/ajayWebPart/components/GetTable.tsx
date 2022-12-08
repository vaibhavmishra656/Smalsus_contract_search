import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import ModalPopup from './ModalPopup';

function GetTable(){

const [state, setState] = React.useState([])
const [trueFalse, setTrueFalse]=React.useState(false)
const [item,setItem]=React.useState("");

const takeData=(a:boolean,b:any)=>{
setTrueFalse(a);
setItem(b);
}



    const constloadGmBHTaskUsers = function () {

        const varAllTaskusers = []

        axios.get("https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Prashant/Ajay/_api/web/lists/getbyId('854E5770-C0B7-4AAF-9CA2-5D70E0A2D702')/items?$select=Id,FirstName,LastName,Salary,Department/Title&$expand=Department")

            .then(function(response: AxiosResponse) {

                const GmBHtaskUsers = response.data.value;
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
            
            <ModalPopup state={trueFalse} items={item}/>
            <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
                <th>View</th>
                </tr>
            {state.map(item=>{
            return(
                <tr>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.Salary}</td>
                <td><button onClick={()=>takeData(true,item)}>View/Edit</button></td>
                </tr>
                ) })}
            </table>
            
        </div>
    )
}

export default GetTable;