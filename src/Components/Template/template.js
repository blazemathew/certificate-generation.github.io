import React, { useState ,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './template.scss';

const Template = () => {
    const [ arrayTemplate,setArrayTemplate ] = useState('');

    let templateCode = JSON.parse(localStorage.getItem('templates'));
   
    const history = useHistory();

    const selectHandler = (e,index) => {
        switch(e.target.value){
            case 'edit':
                // console.log("heii",editorValue)
                history.push({
                    pathname: '/user/templates/create',
                    search: `i=${index}`,
                })
                break
            case 'delete':
                let arrayTemplate = (templateCode.filter((____,ind)=> ind !== index))
                localStorage.setItem('templates',JSON.stringify(arrayTemplate))
                setArrayTemplate(arrayTemplate)
                break
            default:
                return
        }
    }

    return(
        <div>
            
            <button onClick={() => (history.push('/user/templates/create'))}>Create Template</button>
            { templateCode ? templateCode.map((___,index) => 
                
                <div className="template-lists box-display">
                    <div className="selectOption">
                        <select value="select" onChange={(e)=> selectHandler(e,index)}>
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
                        onClick={()=> history.push({
                            pathname: '/user/templates/display',
                            search: `k=${index}`,
                        })}>
                        Template {index+1}
                    </div> 
                    
                </div>
            ): <h2>Template list is empty</h2>}
           
        </div>
    );
}

export default Template;