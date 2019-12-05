import React from 'react';
import renderer from 'react-test-renderer';
import PersonalInfo from "./index";

describe('PersonalInfo', () => {
  test('snapshot renders PersonalInfo', () => {
    const component = renderer.create(<PersonalInfo age={12} height={196} wheight={95000} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
