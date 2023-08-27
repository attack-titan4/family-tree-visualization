import React, { useState } from 'react';

function FamilyInput({ onAddFamilyMember }) {
    const [name, setName] = useState('');
    const [parent, setParent] = useState('');
    const [relationship, setRelationship] = useState('');

    const handleAddFamilyMember = () => {
        if (name && parent && relationship) {
            onAddFamilyMember({ name, parent, relationship });
            setName('');
            setParent('');
            setRelationship('');
        }
    };

    return (
        <div>
            <h2>Add Family Member</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Parent's Name"
                value={parent}
                onChange={(e) => setParent(e.target.value)}
            />
            <input
                type="text"
                placeholder="Relationship"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
            />
            <button onClick={handleAddFamilyMember}>Add</button>
        </div>
    );
}

export default FamilyInput;