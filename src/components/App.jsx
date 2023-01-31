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
  const [isImagePopupOpened, setIsImagePopupOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


  function handleEditProfileClick () {
    setIsEditProfileOpened(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlaceOpened(true);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarOpened(true);
  }

  function handleCardClick () {
    setIsImagePopupOpened(true);
  }

  function closeAllPopups () {
    setIsEditProfileOpened(false);
    setIsAddPlaceOpened(false);
    setIsEditAvatarOpened(false);
    setIsImagePopupOpened(false);
  }

  return (
    <div className="page">
      <Header />
      <Main handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick} handleEditAvatarClick={handleEditAvatarClick} onCardClick={(card) => {
        handleCardClick();
        setSelectedCard(card)}}/>
      <Footer/>
      {
        isEditProfileOpened && (
          <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            isOpen={isEditProfileOpened}
            onClose={closeAllPopups}
            children={
              <form className={`popup__form profile-popup__form`}>
                <input id="data-name-input" type="text" className="popup__input popup__input_data_name" name="name" required minLength="2" maxLength="40" placeholder="Введите Ваше имя"/>
                <span className="popup__span-error"></span>
                <input id='data-about-input' type="text" className="popup__input popup__input_data_about" name="about" required minLength="2" maxLength="200" placeholder="Введите информацию о себе"/>
                <span className="popup__span-error"></span>
                <button className="popup__save-button" type="submit">Сохранить</button>
              </form>
            }
          />
        )
      }
      {
        isAddPlaceOpened && (
          <PopupWithForm
            name='add'
            title='Новое место'
            isOpen={isAddPlaceOpened}
            onClose={closeAllPopups}
            children={
              <form className="popup__form add-popup__form">
                <input id="name-input" type="text" className="popup__input popup__input_name" name="name" minLength="2" maxLength="30" required placeholder="Название"/>
                <span className="popup__span-error name-input-error"></span>
                <input id='url-input' type="url" className="popup__input popup__input_url" name="url" required placeholder="Ссылка на картинку"/>
                <span className="popup__span-error url-input-error"></span>
                <button className="popup__save-button" type="submit">Создать</button>
              </form>
            }
          />
        )
      }
      {
        isEditAvatarOpened && (
          <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            isOpen={isEditAvatarOpened}
            onClose={closeAllPopups}
            children={
              <form className="popup__form avatar-popup__form" name="add-popup__form">
                <input id='avatar-input' type="url" className="popup__input popup__input_avatar" name="avatar" required placeholder="Ссылка на картинку"/>
                <span className="popup__span-error avatar-input-error"></span>
                <button className="popup__save-button" type="submit">Да</button>
              </form>
            }
          />
        )
      }
      {
        <ImagePopup isOpen={isImagePopupOpened} card={selectedCard} onClose={closeAllPopups}/>
      }
    </div>
  );
}

export default App;
