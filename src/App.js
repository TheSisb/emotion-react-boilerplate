// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import {jsx} from '@emotion/core';
import React, {Component} from 'react';
import styled from '@emotion/styled';

import {css} from 'theme-ui';

const Button = styled.button`
  color: hotpink;
`;

const style = css({
  fontWeight: 'bold',
  fontSize: 4, // picks up value from `theme.fontSizes[4]`
  color: 'primary', // picks up value from `theme.colors.primary`
});

const SomeComponent = ({children}) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: 'underline',
});

const AnotherComponent = () => <div css={anotherStyle}>Some text with an underline.</div>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>

        <SomeComponent>
          <AnotherComponent />
        </SomeComponent>

        <Button>Hotpink button</Button>
      </div>
    );
  }
}

export default App;
