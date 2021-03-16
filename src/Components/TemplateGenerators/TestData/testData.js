import React from 'react';

const TestData = ({editorData}) => {
    return(
        <div dangerouslySetInnerHTML={{__html: JSON.stringify(editorData)}} />
    );
}

export default TestData;