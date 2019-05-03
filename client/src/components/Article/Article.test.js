import React from 'react';
import Article from './Article';
import { create } from 'react-test-renderer';

describe("Article component", () => {
  test('it matches snapshot', () => {
    const component = create(
    <Article text="render me" />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

