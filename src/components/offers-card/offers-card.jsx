import React from 'react';
import PropTypes from 'prop-types';

const OffersCard = (props) => {
  console.log(props);
  const {offer} = props;
  const {title, type, price, photo, isPremium} = offer;

  const premium = !isPremium ? `` : (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>);

  return (
    <article className="cities__place-card place-card">
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={photo} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `93%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OffersCard.propTypes = {
  onCardClick: PropTypes.func,
  offer: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    photo: PropTypes.string,
    price: PropTypes.string,
    isPremium: PropTypes.bool,
  }).isRequired,
};

export default OffersCard;
