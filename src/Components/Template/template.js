import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './template.scss';

const Template = () => {
    const [ arrayTemplate,setArrayTemplate ] = useState('');

    let templateCode = JSON.parse(localStorage.getItem('templates'));
    console.log(templateCode)
   
    const history = useHistory();

    const selectHandler = (e,index) => {
        switch(e.target.value){
            case 'edit':
                let editConfirm = window.confirm("Do you want to edit this template")
                if(editConfirm){
                    history.push(`/user/templates/create/${index}`)
                }
                break
            case 'delete':
                let deleteConfirm = window.confirm("Do you want to delete this template")
                if(deleteConfirm){
                    const arrayTemplate = (templateCode.filter((____,ind)=> ind !== index))
                    localStorage.setItem('templates',JSON.stringify(arrayTemplate))
                    setArrayTemplate(arrayTemplate)
                }
                break
            default:
                return
        }
    }

    return(
        <div>
            
            <button onClick={() => (history.push('/user/templates/create'))}>Create Template</button>
            { templateCode.length !== 0 ? templateCode.map((___,index) => 
                
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