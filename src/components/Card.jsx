import React from "react";

function Card ({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <article className="element">
        <button aria-label="Удалить карточку" className="element__trash-bin" type="button"></button>
        <img src={card.link} alt={card.name} className="element__image" onClick={handleClick}/>
        <div className="element__bar">
          <h2 className="element__name">{card.name}</h2>
          <div className="element__container">
            <button aria-label="Мне нравится" className="element__heart" type="button"></button>
            <span className="element__counter">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </>
  )
}

export default Card;
