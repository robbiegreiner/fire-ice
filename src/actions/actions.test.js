import * as actions from './index.js';

describe('actions', () => {
  it('should create an action to detect if house fetch succeeded', () => {
    const mockData = [{
      name: 'sure',
      founded: 'why not',
      seats: ['ok', 'cool'],
      titles: ['ok', 'cool'],
      coatOfArms: 'cool dude',
      ancestralWeapons: ['ok', 'cool'],
      words: ['whatever']
    }];

    const expectedAction = {
      type: 'HOUSES_SUCCESS',
      houses: mockData
    };

    expect(actions.fetchHousesSuccess(mockData)).toEqual(expectedAction);
  });
});
