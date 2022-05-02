import { ThemeProvider } from 'styled-components';
import { theme as themeLib, GlobalStyles } from 'octane-common-ui';

interface ThemeInterface {
  colors: {
    primary: string;
  };
}

const theme: ThemeInterface = {
  ...themeLib,
  colors: {
    ...themeLib.colors,
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
