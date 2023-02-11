import React from "react";

function PopupWithForm ({name, title, isOpen, onClose, onSubmit, children}) {

  return (
    <div className={`popup ${name}-popup` + (isOpen ? ' popup_opened' : '') }>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть окно" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className={`popup__form ${name}-popup__form`} onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
