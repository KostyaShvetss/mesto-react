import React from "react";
import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card.jsx";

function Main ({handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialData().then(([user, cards]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setCards(cards);
    }).catch(err => console.log(err));
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__person">
          <div className="profile__avatar-wrapper">
            <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar" onClick={handleEditAvatarClick}/>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about">{userDescription}</p>
            <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return <Card card={card} key={card._id} onCardClick={onCardClick}/>
        })}
      </section>
    </main>
  )
}

export default Main;
