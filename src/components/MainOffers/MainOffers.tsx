import React from 'react';

import { IOffer } from '../../interfaces/offer';
import Map from '../Map/Map';
import OffersList from '../OffersList/OffersList';
import OffersSort from '../OffersSort/OffersSort';

interface MainOffersProps {
  offers: IOffer[];
  activeCity: string;
}

const MainOffers: React.FC<MainOffersProps> = ({offers, activeCity}) => (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeCity}</b>
          <OffersSort />
          <OffersList offers={offers} />
        </section>
        <Map offers={offers}/>
      </div>
    </div>
  );

export default MainOffers;
