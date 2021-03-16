import React, { useState } from 'react';
import Nullcast from '../../../Assets/nullcast.svg';

import AceEditor from '../../TemplateGenerators/AceEditor';
import Preview from '../../TemplateGenerators/Preview';
import TestData from '../../TemplateGenerators/TestData';

const  months = ["January", "February", "March", "April", "May", "June", "July",
                 "August", "September", "October", "November", "December"];

const today = new Date();
    const monthName=months[today.getMonth()];
    const date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
    console.log(date);
    

const SOURCE = `<div 
    style="width: 1020px;
           height: 620px;
           border:1px solid black;
           box-sizing: border-box;
           ">
    <center><img src={{Nullcast}} width="300" height="300"/><center>
    <br /><br /><br />
    <h1>Certification of Completion</h1> 
    <p>This is to certify that <b>{{name}}</b> successfully completed 
        <b>Internship Course</b> from <b>Neoito</b> on 
        <b>${today.getDate()}</b> <b>${monthName}</b>,<b>${today.getFullYear()}</b>
    </p>
    </div>`;

//dummy content for Ace Editor
const data = { "name": "Alan", Nullcast };

const CreateTemplate = () => {
    const [editorValue,setEditorValue] = useState(SOURCE);
    const [editorState,setEditorState] = useState('Editor');

    // //Convert Object keys to array
    // const arrayData = Object.keys(data); 

    // //Regular Expression for seprating data values into array
    // const value = [...editorValue.matchAll(/{{([a-zA-Z}]+)}}/gm)]
    // console.log(value)
    // // value.forEach(val => (arrayData.includes(val[1]))? 
    // //     null : 
    // //     data[val[1]] = " test_"+val[1], arrayData = Object.keys(data))

    // value.forEach(([, name]) => {
    //     if(!(arrayData.includes(name))) {
    //         data[name] = " test_"+name;
    //     }
    // })

    const buttonEditor = () => {
        switch(editorState){
            case 'Editor':
                return <AceEditor editorValue={editorValue} setEditorValue={setEditorValue}/>
            case 'Preview':
                return <Preview editorValue={editorValue} editorData={data}/>
            case 'Test_data':
                return <TestData editorData={data} />
            default:
                return;
        }
    }

    return(
        <div>
            <h1>Create Templates</h1>
            <button onClick={() => setEditorState('Editor')}>Editor</button>
            <button onClick={() => setEditorState('Preview')}>Preview</button>
            <button onClick={() => setEditorState('Test_data')}>Test_Data</button>
            {buttonEditor()}
        </div>
    );
}

export default CreateTemplate;