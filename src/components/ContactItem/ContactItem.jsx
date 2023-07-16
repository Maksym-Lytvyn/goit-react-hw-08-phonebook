import React, { useState } from 'react';
import DeleteConfirmation from 'components/ContactItem/DeleteConfirmation/DeleteConfirmation';

const ContactItem = ({ contact }) => {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  return (
    <div style={{ marginBottom: '10px', display: 'flex' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h6 style={{ color: 'purple', fontSize: 16 }}>{contact.name}</h6>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ color: 'white', fontSize: 16, marginLeft: 20 }}>{contact.number}</p>
      <button
        color="error"
        onClick={handleDeleteClick}
        style={{
          backgroundColor: 'red',
          color: 'white',
          width: 150,
          height: 30,
          fontSize: 22,
          marginLeft: 20,
        }}
      >
        Видалити
      </button>  
      </div>
      

      {isConfirmingDelete && (
        <DeleteConfirmation contact={contact} onCancel={handleCancelDelete} />
      )}
    </div>
  );
};

export default ContactItem;
