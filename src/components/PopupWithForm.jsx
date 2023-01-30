import React from "react";

function PopupWithForm ({name, title, isOpen, onClose}) {
  return (
    <div className={`popup ${name}-popup` + (isOpen ? ' popup_opened' : '') }>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть окно" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className={`popup__form ${name}-popup__form`} name={`${name}-popup__form`}>
            <input id="data-name-input" type="text" className="popup__input popup__input_data_name" name="name" required minLength="2" maxLength="40" />
            <input id='data-about-input' type="text" className="popup__input popup__input_data_about" name="about" required minLength="2" maxLength="200" />
            <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
