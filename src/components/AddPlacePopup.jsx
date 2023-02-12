import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({isOpen, onClose, onAddPlace}) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange (evt) {
    setName(evt.target.value);
  }

  function handleLinkChange (evt) {
    setLink(evt.target.value);
  }

  function handleSubmit (evt) {
    evt.preventDefault();
    onAddPlace({
      name,
      link})

  }

  return (
    <PopupWithForm
    name='add'
    title='Новое место'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    children={
      <>
        <input id="name-input" type="text" className="popup__input popup__input_name" name="name" minLength="2" maxLength="30" required placeholder="Название" onChange={handleNameChange}/>
        <span className="popup__span-error name-input-error"></span>
        <input id='url-input' type="url" className="popup__input popup__input_url" name="url" required placeholder="Ссылка на картинку" onChange={handleLinkChange}/>
        <span className="popup__span-error url-input-error"></span>
        <button className="popup__save-button" type="submit">Создать</button>
      </>
    }
  />
  );
}

export default AddPlacePopup;
