import React from 'react';
import renderer from 'react-test-renderer';
import  Profile , {findNumberOfDigitInArray, round} from './index';
const player = {
      "firstname": "Stan",
      "lastname": "Wawrinka",
      "shortname": "S.WAW",
      "sex": "M",
      "country": {
        "picture": "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
        "code": "SUI"
      },
      "picture": "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
      "data": {
        "rank": 21,
        "points": 1784,
        "weight": 81000,
        "height": 183,
        "age": 33,
        "last": [
          1,
          1,
          1,
          0,
          1
        ]
      }
    };
jest.mock('./components/picture-components/index', () => () => 'ProfilePicture');
jest.mock('./components/identity-info-components/index', () => () => 'IdentityInfo');
jest.mock('./components/personal-info-components/index', () => () => 'PersonalInfo');
jest.mock('./components/professional-info-components/index', () => () => 'ProfessionalInfo');

describe('Profile', () => {
  test('snapshot renders Profile', () => {
    const component = renderer.create(<Profile player={player} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('round', () => {
    it('should return the number rounded by one digit', () => {
      const value = 11.456;
      const precision = 1;
      const result = round(value, precision);
      expect(result).toEqual(11.5);
    });
    it('should return the number rounded', () => {
      const array = 11.456;
      const result = round(array);
      expect(result).toEqual(11);
    });
  });describe('findNumberOfDigitInArray', () => {
    it('should return the number of digit in the array', () => {
      const array = [0,1,1,0,0];
      const digit = 0;
      const result = findNumberOfDigitInArray(array, digit);
      expect(result).toEqual(3);
    });
    it('should return 0 if the array is empty', () => {
      const array = [];
      const digit = 0;
      const result = findNumberOfDigitInArray(array, digit);
      expect(result).toEqual(0);
    });
  });
});
