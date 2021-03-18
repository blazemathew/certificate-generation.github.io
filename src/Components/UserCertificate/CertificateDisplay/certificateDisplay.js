import React from 'react';
import * as Handlebars from 'handlebars';
import './certificateDisplay.scss';

const CertificateDisplay = ({templateCode,dataValues,refValue}) => {
    const template = Handlebars.compile(templateCode);
    // dataValues.image=image;
    const result = template(dataValues);
    console.log(dataValues)
   
    const certificateHtml = () => {
        return {__html: result};
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