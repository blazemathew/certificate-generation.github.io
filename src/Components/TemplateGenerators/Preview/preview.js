import React from 'react';
import * as Handlebars from 'handlebars';
import { useHistory } from 'react-router-dom';

let arr=[]
let dataObj = {}
let i=0;

const Preview = ({editorValue,editorData,id}) => {    
    arr=localStorage.getItem('templates') ? JSON.parse(localStorage.getItem('templates')): [];
    
    const history = useHistory();
    const template = Handlebars.compile(editorValue);
    const result = template(editorData);

    const saveTemplateHandler = () => {
        if(id){
            const templateCode = JSON.parse(localStorage.getItem('templates'));
            templateCode[+id].code = editorValue;
            localStorage.setItem('templates',JSON.stringify(templateCode));
            history.push('/user/templates');
        }
        else{
        dataObj.names = "test-"+i
        dataObj.code = editorValue
        dataObj.data = editorData
        arr.push(dataObj)
        localStorage.setItem('templates',JSON.stringify(arr));
        i=i+1;
        history.push('/user/templates');
    }
    }
    return(
        <div>
            <div dangerouslySetInnerHTML={{__html: result}} />
            <button onClick={()=>saveTemplateHandler()}>Save Template</button>
        </div>
    );
}

export default Preview;