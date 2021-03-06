import React from 'react';
import renderer from 'react-test-renderer';
import  App from './App';
import ProfessionalInfo
  from "./components/profile-components/components/professional-info-components";

describe('App', () => {
  test('snapshot renders App', () => {
    const component = renderer.create(
        <App
            rank={"https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png"}
            points={"https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png"}
            totalWin={5}
            totalLost={3}
        />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
