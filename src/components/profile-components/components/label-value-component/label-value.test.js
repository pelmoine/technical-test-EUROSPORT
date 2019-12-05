import React from 'react';
import renderer from 'react-test-renderer';
import LabelValue from "./index";

describe('LabelValue', () => {
  test('snapshot renders LabelValue', () => {
    const component = renderer.create(<LabelValue label={"label"} lastname={"value"} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
