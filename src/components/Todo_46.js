import React, { useState } from 'react'
import Modal_46 from "../components/Modal_46"
import Backup_46 from '../components/Backup_46';

function Todo_46(props) {
    
    const [showModal, setShowModal] = useState();

    function showModalHandler(){
        setShowModal(true);
    }

    function CloseModalHandler(){
        setShowModal(false);
    }

    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick = {showModalHandler}>Delete</button>
                </div>
            </div>
            {showModal && <Modal_46 text='Are you sure?' onClose = {CloseModalHandler}/>}
            {showModal && <Backup_46 onClose = {CloseModalHandler}/>}
        </div>
    )
}

export default Todo_46
