import React from 'react';
import renderer from 'react-test-renderer';
import ProfessionalInfo from "./index";

describe('ProfessionalInfo', () => {
  test('snapshot renders ProfessionalInfo', () => {
    const component = renderer.create(
        <ProfessionalInfo
            rank={"https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png"}
            points={"https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png"}
            totalWin={5}
            totalLost={3}
      />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
