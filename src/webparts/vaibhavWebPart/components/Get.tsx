import * as React from 'react';
import axios, { AxiosResponse } from 'axios';

function Test(){


const [state, setState] = React.useState([])


    const constloadGmBHTaskUsers = function () {

        const varAllTaskusers = []

        axios.get("https://hhhhteams.sharepoint.com/sites/HHHH/Gmbh/_api/web/lists/getbyid('aebcb136-f18d-4beb-bb86-1194a7cf485d')/items?$select=Id,UserGroupId,Suffix,Title,Email,SortOrder,Role,IsShowTeamLeader,Company,ParentID1,Status,Item_x0020_Cover,AssingedToUserId,isDeleted,AssingedToUser/Title,AssingedToUser/Id,AssingedToUser/EMail,ItemType&$expand=AssingedToUser&$orderby=SortOrder asc,Title asc")

            .then(function(response: AxiosResponse) {

                const GmBHtaskUsers= response.data.value;
                setState(GmBHtaskUsers);
                console.log(state);

            },

                function(error) {

                    alert(JSON.stringify(error));

                });

    };
    return(
        <div>
           <h1>My Goal</h1>     
        </div>
    )
}

export default Test