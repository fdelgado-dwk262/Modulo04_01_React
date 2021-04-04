import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from 'core/theme';
import { AuthProvider } from 'common-app/auth';
import { MyComponent, MyContextProvider } from './OurContext';

const App: React.FunctionComponent = () => {

  return (
    <MyContextProvider>
      {/* <MyComponent /> <-------- componente dumy pruebas de contexto */}
      <ThemeProviderComponent>
        <AuthProvider>
          <RouterComponent />
        </AuthProvider>
      </ThemeProviderComponent>
    </MyContextProvider>
  );
};

export default hot(App);
