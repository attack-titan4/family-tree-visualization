import React, { useState } from 'react';
import './App.css';
import FamilyInput from './FamilyInput';
import FamilyTree from './FamilyTree';
import EditDialog from './EditDialog';

function App() {
  const [familyData, setFamilyData] = useState([
    { name: 'Start', parent: '', relationship: '' }, 
  ]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editName, setEditName] = useState('');
  const [editId, setEditId] = useState(null);

  const handleEditClick = (name, id, relationship) => {

    const familyMemberToEdit = familyData.find((member) => member.id === id);

    if (familyMemberToEdit) {
      setEditName(familyMemberToEdit.name);
      setEditId(id); 
      setIsEditDialogOpen(true);
    }
  };




  const handleEditSave = (newName, newRelationship) => {
    if (editId !== null) {
    
      const familyMemberToEdit = familyData.find((member) => member.id === editId);

      if (familyMemberToEdit) {
        familyMemberToEdit.name = newName;
        familyMemberToEdit.relationship = newRelationship; 
        setFamilyData([...familyData]);
      }
    }
  };


  const handleAddFamilyMember = (member) => {
    setFamilyData([...familyData, member]);
  };

  
  const generateFamilyTree = () => {
    const treeData = [];

    
    const familyMap = {};

    
    familyData.forEach((member) => {
      const { name, parent, relationship } = member;
      familyMap[name] = { name, children: [], relationship };
      if (!parent) {
        treeData.push(familyMap[name]);
      }
    });

  
    familyData.forEach((member) => {
      const { name, parent } = member;
      if (parent && familyMap[parent]) {
        familyMap[parent].children.push(familyMap[name]);
      }
    });

    return treeData;
  };

  return (
    <div className="App">
      <h1>Family Tree Visualization</h1>
      <FamilyInput onAddFamilyMember={handleAddFamilyMember} />
      <FamilyTree
        data={generateFamilyTree()}
        onEditClick={handleEditClick} 
      />
      <EditDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        onSave={handleEditSave}
        initialValue={editName}
      />
    </div>
  );
}

export default App;
