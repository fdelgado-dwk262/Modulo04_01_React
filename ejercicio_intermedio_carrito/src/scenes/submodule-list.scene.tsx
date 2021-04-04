import React from 'react';
import { AppLayout } from './../layouts/app.layout';
import { SubmoduleListContainer } from './../pods/submodulelist';
import { MyContext } from './../OurContext';

export const SubmoduleListScene: React.FC<any> = () => {

  const myContext = React.useContext(MyContext);

  console.log('dentro de submodule list', myContext.show)

  return (
    <AppLayout>
      <SubmoduleListContainer />
    </AppLayout>
  );
};