import React from 'react';
import Nullcast from '../../../Assets/nullcast.svg';
import './certificateDisplay.scss';

const  months = ["January", "February", "March", "April", "May", "June", "July",
                 "August", "September", "October", "November", "December"];


const CertificateDisplay = ({name,refValue}) => {
    const today = new Date();
    const monthName=months[today.getMonth()];
    const date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
    console.log(date);

    const certificatePdf = `
    <center><img src=${Nullcast} width="300" height="300"/><center><br /><br /><br />
    <h1>Certification of Completion</h1> 
    <p>This is to certify that <b>${name}</b> successfully completed 
        <b>Internship Course</b> from <b>Neoito</b> on 
        <b>${today.getDate()}</b> <b>${monthName}</b>,<b>${today.getFullYear()}</b>
    </p>`

    const certificateHtml = () => {
        return {__html: certificatePdf};
    }
    return(
        <div 
            ref={refValue} 
            className="certificate" 
            dangerouslySetInnerHTML={certificateHtml()}
        />
    );
}

export default CertificateDisplay;