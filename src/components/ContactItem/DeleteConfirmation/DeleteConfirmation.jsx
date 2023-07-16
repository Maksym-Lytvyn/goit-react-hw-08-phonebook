import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';


const DeleteConfirmation = ({ contact, onCancel }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contact.id));
    if (deleteContact) {
      Notiflix.Notify.success(`Контакт: ${contact.name} видалено`);
    }
    onCancel();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ backgroundColor: 'purple', padding: 20, borderRadius: 4, color: 'white' }}>
        <div>Are you sure you want to delete this contact?</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
          <button style={{marginLeft: 10, backgroundColor: 'red', color: 'white'}} onClick={handleConfirmDelete}>
            Видалити
          </button>
          <button style={{marginLeft: 10}} onClick={onCancel}>
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;




