import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OffersCard from "./offers-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockTitle = `Hello world`;

it(`Should city card link be pressed correctly`, () => {
  const onTitleLinkClick = jest.fn();

  const cityPlace = shallow(
      <OffersCard
        title = {mockTitle}
        onTitleLinkClick={onTitleLinkClick}
      />
  );

  const cityPlaceTitleLink = cityPlace.find(`.place-card__name a`);

  cityPlaceTitleLink.props().onClick();

  expect(onTitleLinkClick.mock.calls.length).toBe(1);
});
