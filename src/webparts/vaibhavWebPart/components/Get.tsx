import * as React from 'react';
import axios, { AxiosResponse } from 'axios';

function Test(){


const [state, setState] = React.useState([])


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
           <h1>My Goal</h1>
           {state.map(item=>{
            return(
            <>
            <h1>{item.Id}</h1>
            <h1>{item.FirstName}</h1>
            <h1>{item.LastName}</h1>
            </>
           )})}

               
        </div>
    )
}

export default Test