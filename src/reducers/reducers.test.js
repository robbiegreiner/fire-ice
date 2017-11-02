import houseData from './houseData';

describe('houseData reducer', () => {
  it('should have a default state', () => {
    expect(houseData(undefined, [])).toEqual([]);
  });

  it('should give houseData', () => {
    const mockData = [{
      name: 'sure',
      founded: 'why not',
      seats: ['ok', 'cool'],
      titles: ['ok', 'cool'],
      coatOfArms: 'cool dude',
      ancestralWeapons: ['ok', 'cool'],
      words: ['whatever']
    }];
    const action = { type: 'HOUSES_SUCCESS', houses: mockData };

    expect(houseData(undefined, action)).toEqual(mockData);
  });
});
