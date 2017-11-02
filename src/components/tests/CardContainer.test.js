import React from "react";
import CardContainer from '../CardContainer';
import { shallow } from "enzyme";

describe('CardContainer component', () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<CardContainer
    store
    houseData={[{
      name: 'sure',
      founded: 'why not',
      seats: ['ok', 'cool'],
      titles: ['ok', 'cool'],
      coatOfArms: 'cool dude',
      ancestralWeapons: ['ok', 'cool'],
      words: ['whatever']
    }]}/>);


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
