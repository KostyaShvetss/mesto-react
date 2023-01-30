import React from "react";

function Main ({handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick}) {

  return (
    <main>
      <section className="profile">
        <div className="profile__person">
          <div className="profile__avatar-wrapper">
            <img src="#" alt="Аватар пользователя" className="profile__avatar" onClick={handleEditAvatarClick}/>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <p className="profile__about">Исследователь океана</p>
            <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
      </section>
    </main>
  )
}

export default Main;
