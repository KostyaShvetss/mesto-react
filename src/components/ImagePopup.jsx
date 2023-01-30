import React from "react";

function ImagePopup () {
  return (
    <div className="popup popup-image">
      <article className="popup-image__container">
        <button className="popup__close" aria-label="Закрыть картинку" type="button"></button>
        <img src="." alt="" className="popup-image__content"/>
        <p className="popup-image__caption"></p>
      </article>
    </div>
  )
}

export default ImagePopup;
