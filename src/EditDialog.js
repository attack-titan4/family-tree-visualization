import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

function EditDialog({ isOpen, onClose, onSave, initialValue, initialRelationship }) {
    const [editedName, setEditedName] = useState(initialValue);
    const [editedRelationship, setEditedRelationship] = useState(initialRelationship);


    const handleSave = () => {
        onSave(editedName, editedRelationship);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>

            <h2>Edit Name</h2>
            <label>Name:</label>
            <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
            />
            
            <h2>Edit Relationship</h2>
            <label>Relationship:</label>
            <input
                type="text"
                value={editedRelationship}
                onChange={(e) => setEditedRelationship(e.target.value)}
            />

            <button onClick={handleSave}>Save</button>
        </Modal>
    );
}

export default EditDialog;