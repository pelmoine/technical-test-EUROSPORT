import React from 'react';
import renderer from 'react-test-renderer';
import ProfilePicture from "./index";

describe('ProfilePicture', () => {
  test('snapshot renders ProfilePicture', () => {
    const component = renderer.create(
        <ProfilePicture
        country={"https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png"}
        profil={"https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png"}
      />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
