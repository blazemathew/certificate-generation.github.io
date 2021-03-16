import React from 'react';
import { useHistory } from 'react-router-dom';

import './template.scss';

const Template = () => {
    const templates = JSON.parse(localStorage.getItem('templates'));
   
    console.log(templates);
    const history = useHistory();

    return(
        <div>
            <button onClick={() => (history.push('/user/templates/create'))}>Create Template</button>
            {templates ? templates.map((temp,index) => 
                <div className="template-lists box-display" onClick={()=> history.push({
                    pathname: '/user/templates/display',
                    search: `k=${index}`,
                })}>
                    Template
                </div>
            ): <h2>Template list is empty</h2>}
           
        </div>
    );
}

export default Template;