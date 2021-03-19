import React from 'react';
import * as Handlebars from 'handlebars';
import { useHistory } from 'react-router-dom';

const dataObj = {}
let i=0;

const Preview = ({editorValue,editorData,id}) => {    
    let arr = JSON.parse(localStorage.getItem('templates')) || [];
    
    const history = useHistory();
    const template = Handlebars.compile(editorValue);
    const result = template(editorData);

    const saveTemplateHandler = () => {
        if(id){
            arr = JSON.parse(localStorage.getItem('templates'));
            arr[+id].code = editorValue; 
        }
        else{
            dataObj.names = "test-"+i;
            dataObj.code = editorValue;
            dataObj.data = editorData;
            arr.push(dataObj);
            i=i+1;
        }
        localStorage.setItem('templates',JSON.stringify(arr));
        history.push('/user/templates');
    }
    return(
        <div>
            <div dangerouslySetInnerHTML={{__html: result}} />
            <button onClick={()=>saveTemplateHandler()}>Save Template</button>
        </div>
    );
}

export default Preview;