import React, { useState } from "react";
import Header from './Header.jsx';
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";

function App() {
  const [isEditProfileOpened, setIsEditProfileOpened] = useState(false);
  const [isAddPlaceOpened, setIsAddPlaceOpened] = useState(false);
  const [isEditAvatarOpened, setIsEditAvatarOpened] = useState(false);


  function handleEditProfileClick () {
    setIsEditProfileOpened(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlaceOpened(true);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarOpened(true);
  }

  function closeAllPopups () {
    setIsEditProfileOpened(false);
    setIsAddPlaceOpened(false);
    setIsEditAvatarOpened(false);
  }


  return (
    <div className="page">
      <Header />
      <Main handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick} handleEditAvatarClick={handleEditAvatarClick}/>
      <Footer/>
      {
        isEditProfileOpened && (
          <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfileOpened} onClose={closeAllPopups}/>
        )
      }
      {
        isAddPlaceOpened && (
          <PopupWithForm name='add' title='Новое место' isOpen={isAddPlaceOpened} onClose={closeAllPopups}/>
        )
      }
      {
        isEditAvatarOpened && (
          <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarOpened} onClose={closeAllPopups}/>
        )
      }
      <ImagePopup/>
    </div>
  );
}

export default App;
