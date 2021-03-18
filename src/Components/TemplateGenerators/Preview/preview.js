import React from 'react';
import * as Handlebars from 'handlebars';
import { useHistory,useLocation } from 'react-router-dom';

let arr=[]
let dataObj = {}
let i=0;

const Preview = ({editorValue,editorData}) => {
    const param = useLocation();
    const search = parseInt(new URLSearchParams(param.search).get('i'));
    
    arr=localStorage.getItem('templates') ? JSON.parse(localStorage.getItem('templates')): [];
    const history = useHistory();
    const template = Handlebars.compile(editorValue);
    const result = template(editorData);

    const saveTemplateHandler = () => {
        if(!isNaN(search)){
            const templateCode = JSON.parse(localStorage.getItem('templates'));
            let arrayTemplate = (templateCode.filter((____,ind)=> ind !== search))
            localStorage.setItem('templates',JSON.stringify(arrayTemplate))
            arr=localStorage.getItem('templates') ? JSON.parse(localStorage.getItem('templates')): [];
            console.log(arr)
        }
        dataObj.names = "test-"+i
        dataObj.code = editorValue
        dataObj.data = editorData
        arr.push(dataObj)
        localStorage.setItem('templates',JSON.stringify(arr));
        dataObj ={}
        i=i+1;
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