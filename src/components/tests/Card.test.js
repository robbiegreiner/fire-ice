import React from "react";
import Card from '../Card';
import { shallow } from "enzyme";

describe('Card component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<Card
    house={{
      name: 'sure',
      founded: 'why not',
      seats: ['ok', 'cool'],
      titles: ['ok', 'cool'],
      coatOfArms: 'cool dude',
      ancestralWeapons: ['ok', 'cool'],
      words: ['whatever']
    }}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
