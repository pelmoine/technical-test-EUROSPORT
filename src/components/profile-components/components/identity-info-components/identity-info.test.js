import React from 'react';
import renderer from 'react-test-renderer';
import IdentityInfo from "./index";

describe('IdentityInfo', () => {
  test('snapshot renders IdentityInfo', () => {
    const component = renderer.create(<IdentityInfo firstname={"firstname"} lastname={"lastname"} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
