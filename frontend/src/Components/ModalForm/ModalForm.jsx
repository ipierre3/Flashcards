import React, { useState } from 'react';
import './ModalForm.css'

const ModalForm = (props) => {
  const [formData, setFormData] = useState({});
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // props.createNewCard(formData);
    props.setShowModal(false);
  }
 
  return (
    <div className='modal-form'>
      <form onSubmit={handleSubmit}>
        <input className='input-box'
            type="text" 
            name="word"
            placeholder="Enter title..." 
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        />
        <div>
        <input className='input-box'
            type="text" 
            name="definition"
            placeholder="Enter definition" 
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        />
        </div>
        <div>
        <button className='saveBtn' type="submit"> Save </button>
        </div>
      </form>
    </div>
  );
}
export default ModalForm;