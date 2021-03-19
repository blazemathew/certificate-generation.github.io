import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './template.scss';


const Template = () => {
    const [ templateCode,setTemplateCode ] = useState(JSON.parse(localStorage.getItem('templates')));
   
    const history = useHistory();

    const selectHandler = (e,index) => {
        let actionConfirm;
        switch(e.target.value){
            case 'edit':
                actionConfirm = window.confirm("Do you want to edit this template")
                if(actionConfirm){
                    history.push(`/user/templates/create/${index}`)
                }
                break
            case 'delete':
                actionConfirm = window.confirm("Do you want to delete this template")
                if(actionConfirm){
                    const temp = templateCode.filter((____,ind)=> ind !== index)
                    localStorage.setItem('templates',JSON.stringify(temp))
                    setTemplateCode(temp)
                }
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

                    {/* {template = Handlebars.compile(temp.code)}
                                   
                    <div  dangerouslySetInnerHTML={{__html: `<div style="width: 250px;
                        height: 250px;border:1px solid black;
                        box-sizing: border-box;justifyContent:center >${template(temp.data)}</div>`}} /> */}

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