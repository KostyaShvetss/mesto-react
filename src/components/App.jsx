import React from "react";
import { useState, useEffect } from "react";
import Header from './Header.jsx';
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from './EditAvatarPopup.jsx';

function App() {
  const [isEditProfileOpened, setIsEditProfileOpened] = useState(false);
  const [isAddPlaceOpened, setIsAddPlaceOpened] = useState(false);
  const [isEditAvatarOpened, setIsEditAvatarOpened] = useState(false);
  const [isImagePopupOpened, setIsImagePopupOpened] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


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

  function handleUpdateUser (data) {
    api
      .editProfile(data)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
    })
    .catch(err => console.log(err));
  }

  function handleUpdateAvatar (data) {
    api
      .changeAvatar(data)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete (card) {
    api.deleteCard(card._id)
    .then((newCard) => {
      const newCardState = cards.filter((cardElement) => {
        return cardElement._id === card._id ? "" : newCard;
      })
      setCards(newCardState);
    }).catch(err => console.log(err));
  }

  function handleCardLike (card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (isLiked) {
      api.deleteLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
    } else {
      api.putLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
    }

}

  useEffect(() => {
    api.getInitialData().then(([user, cards]) => {
      setCurrentUser(user);
      setCards(cards);
    }).catch(err => console.log(err));
  }, [])

  function closeAllPopups () {
    setIsEditProfileOpened(false);
    setIsAddPlaceOpened(false);
    setIsEditAvatarOpened(false);
    setIsImagePopupOpened(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
            <Header />
            <Main
              handleEditProfileClick={handleEditProfileClick}
              handleAddPlaceClick={handleAddPlaceClick}
              handleEditAvatarClick={handleEditAvatarClick}
              cards={cards}
              onCardLike = {handleCardLike}
              onCardDelete = {handleCardDelete}
              onCardClick={(card) => {
                handleCardClick();
                setSelectedCard(card)}}/>
            <Footer/>
            {
              isEditProfileOpened && (
                <EditProfilePopup
                  isOpen={isEditProfileOpened}
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}/>
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
                    <>
                      <input id="name-input" type="text" className="popup__input popup__input_name" name="name" minLength="2" maxLength="30" required placeholder="Название"/>
                      <span className="popup__span-error name-input-error"></span>
                      <input id='url-input' type="url" className="popup__input popup__input_url" name="url" required placeholder="Ссылка на картинку"/>
                      <span className="popup__span-error url-input-error"></span>
                      <button className="popup__save-button" type="submit">Создать</button>
                    </>
                  }
                />
              )
            }
            {
              isEditAvatarOpened && (
                <EditAvatarPopup
                  isOpen={isEditAvatarOpened}
                  onClose={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}/>
              )
            }
            {
              <ImagePopup isOpen={isImagePopupOpened} card={selectedCard} onClose={closeAllPopups}/>
            }
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
