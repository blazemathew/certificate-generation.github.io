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

    const editNameHandler = () => {
        setEditAction(!editAction)
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    return(
        <div className="user-certificate">
            <CertificateDisplay name={name} refValue={refValue} />
            <div className="userProfile" >
                <div className="download"> 
                    <ReactToPdf targetRef={refValue} filename="neo-certificate.pdf" options={options} x={.5} y={.4} scale={1}>
                        {({toPdf}) => (
                            !editAction && <button className="download-button" onClick={toPdf}><b>Download</b></button>
                        )}
                    </ReactToPdf>
                </div>

                <b>Profile Details</b>
                <div className="user-Profile-details">
                    <div className="user-certificate space">
                        <div className="user-certificate-name"><b>Name</b></div>
                        {!editAction && <div className="edit-details" onClick={editNameHandler}><b>Edit</b> </div>}
                    </div>
                    
                    <input 
                        className={editAction ? "inputEnabled" : "inputDisabled"}
                        value={name}
                        onChange={(e) => nameHandler(e)}
                        disabled={!editAction}
                    /> 

                    <div className="save">
                        {editAction && <button className="save-Button" onClick={editNameHandler}><b>Save</b></button>}
                    </div>
 
                </div>
            </div>
        </div>  
    );
}

export default UserCertificate;