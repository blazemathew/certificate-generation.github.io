import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import './template.scss';

const Template = () => {
    const tokenValue = JSON.parse(localStorage.getItem('templates')) || [];
    const [ templateCode,setTemplateCode ] = useState(tokenValue);

    console.log(templateCode)
   
    const history = useHistory();

    const selectHandler = (e,index) => {
        switch(e.target.value){
            case 'edit':
                history.push(`/user/templates/create/${index}`)
                break
            case 'delete':
                confirmAlert({
                    title: 'Confirm to submit',
                    message: 'Are you sure you want to delete this template',
                    buttons: [
                      {
                        label: 'Yes',
                        onClick: () => {
                            templateCode.splice(index,1)
                            localStorage.setItem('templates',JSON.stringify(templateCode))
                            const temp=JSON.parse(localStorage.getItem('templates'));
                            setTemplateCode(temp)
                        }
                      },
                      {
                        label: 'No',
                        onClick: () => false
                      }
                    ]
                  });
                break
            default:
                return
        }
    }

    return(
        <div>  
            <button onClick={() => (history.push('/user/templates/create'))}>Create Template</button>
            { templateCode.length ? templateCode.map((___,index) => 
                
                <div className="template-lists box-display">
                    <div className="selectOption">
                        <select value="select" onChange={(e)=>  selectHandler(e,index)}>
                            <option value="select">Actions</option>
                            <option value="edit">Edit</option>
                            <option value="delete">Delete</option>
                        </select>
                    </div>

                    <div className="template-name"
                        onClick={()=> history.push(`/user/templates/display/${index}`)}
                    >
                        Template {index+1}
                    </div> 
                    
                </div>
            ): <h2>Template list is empty</h2>}
           
        </div>
    );
}

export default Template;