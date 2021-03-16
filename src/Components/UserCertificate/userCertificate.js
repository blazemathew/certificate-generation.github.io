import React,{ useState } from 'react';
import CertificateDisplay from './CertificateDisplay';
import ReactToPdf from "react-to-pdf";
import './userCertificate.scss';

const refValue = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [835,525]
};

const UserCertificate = () => {
    const [ name,setName ] = useState('your_name');
    const [ editAction,setEditAction ] = useState(false);

    const editActionHandler = () => {
        setEditAction(!editAction)
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const characterCheck = !(name.match(/^[A-Za-z ]+$/))
    
    const disableDownloadButton = ( characterCheck || editAction );

    return( 
        <div className="user-certificate">

            <CertificateDisplay name={name} refValue={refValue} />

            <div className="userProfile" >
                <div className="download"> 
                    <ReactToPdf targetRef={refValue} filename={name+" certificate"} options={options} x={.5} y={.4} scale={1}>   
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
                        onChange={(e) => nameHandler(e)}
                        disabled={!editAction}
                    /> 
                    {characterCheck && name !== "your_name"  ? <div className="error-message">Only characters will accept</div> :""}

                    <div className="save">
                        {console.log(name)}
                        {editAction && <button className={(name === "your_name" || characterCheck ) ? "button-disabled" : ""} onClick={editActionHandler} disabled={name === "your_name" || characterCheck }><b>Save</b></button>}
                    </div>
 
                </div>
            </div>
        </div>  
    );
}

export default UserCertificate;