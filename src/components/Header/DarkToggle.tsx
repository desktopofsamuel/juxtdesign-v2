import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from '../ThemeContext';

// const InvisibleButton = styled('button', {
//   background: 'none',
//   color: 'inherit',
//   border: 'none',
//   padding: '0 !important',
//   font: 'inherit',
//   cursor: 'pointer',
// });

const Wrapper = styled('div', {
  padding: '0 $3',
});

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  const nextColor = colorMode !== 'dark' ? 'dark' : 'light';
  const darkchecked = colorMode === 'dark';
  const title = `Activate ${nextColor} mode`;

  return (
    <Wrapper>
      <DarkModeSwitch
        aria-label={title}
        title={title}
        onChange={() => {
          setColorMode(nextColor);
        }}
        checked={darkchecked}
      />
    </Wrapper>
  );
};

export default DarkToggle;
