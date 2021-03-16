import React from 'react';
import * as Handlebars from 'handlebars';
import { useHistory } from 'react-router-dom';

let arr=[]
let dataObj = {}
let i=0;

const Preview = ({editorValue,editorData}) => {
    const history = useHistory();
    const template = Handlebars.compile(editorValue);
    const result = template(editorData);
    console.log(result)

    const saveTemplateHandler = () => {
        dataObj.names = "test-"+i
        dataObj.code = editorValue
        dataObj.data = editorData
        arr=[...arr,dataObj]
        console.log(JSON.stringify(arr))

        localStorage.setItem('templates',JSON.stringify(arr));
        history.push('/user/templates');
        i=i+1;
    }
    return(
        <div>
            <div dangerouslySetInnerHTML={{__html: result}} />
            <button onClick={()=>saveTemplateHandler()}>Save Template</button>
        </div>
    );
}

export default Preview;