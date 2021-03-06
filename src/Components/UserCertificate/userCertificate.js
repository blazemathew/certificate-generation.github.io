import React,{ useState,useEffect } from 'react';
import CertificateDisplay from './CertificateDisplay';
import ReactToPdf from "react-to-pdf";
import './userCertificate.scss';

const refValue = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [835,525]
};

const UserCertificate = ({match}) => {
    const [ dataValues,setdataValues ] = useState('');
    const [ templateCode,setTemplateCode ] = useState('');
    const [ editAction,setEditAction ] = useState(false);

    const templates = JSON.parse(localStorage.getItem('templates'));

    useEffect(()=>{
        setTemplateCode(templates[+match.params.id].code);
        setdataValues(templates[+match.params.id].data);
    },[])

    const editActionHandler = () => {
        setEditAction(!editAction)
    }

    const nameHandler = (e) => {
        setdataValues({...dataValues,name:e.target.value})
    }

    const characterCheck =dataValues.name ? (dataValues.name.match(/^[A-Za-z ]+$/)) : false;

    const disableDownloadButton = ( characterCheck || editAction );

    return( 
        <div className="user-certificate">
            <CertificateDisplay templateCode={templateCode}  dataValues={dataValues} refValue={refValue} /> 

            <div className="userProfile" >
                <div className="download"> 
                    <ReactToPdf targetRef={refValue} filename={dataValues.name+" certificate"} options={options} x={.5} y={.4} scale={1}>   
                        {({toPdf}) => ( 
                            <button 
                                className={ disableDownloadButton ? "button-disabled" : ""} 
                                onClick={toPdf} 
                                disabled={ disableDownloadButton }>
                                    <b>Download</b>
                            </button>
                        )}
                    </ReactToPdf>
                </div>

                <b>Profile Details</b>
                <div className="user-Profile-details">
                    <div className="user-certificate space">
                        <div className="user-certificate-name"><b>Name</b></div>
                        {!editAction && <div className="edit-details" onClick={editActionHandler}><b>Edit</b> </div>}
                    </div>
                    
                    <input 
                        className={editAction ? "inputEnabled" : "inputDisabled"}
                        placeholder="Enter your name"
                        value={dataValues.name}
                        onChange={(e) => nameHandler(e)}
                        disabled={!editAction}
                    /> 
                    {characterCheck ? <div className="error-message">Only characters will accept</div> :""}

                    <div className="save">
                        
                        {editAction && <button 
                            className={( characterCheck ) ? "button-disabled" : ""} 
                            onClick={editActionHandler} 
                            disabled={ characterCheck }>
                                <b>Save</b>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default UserCertificate;
