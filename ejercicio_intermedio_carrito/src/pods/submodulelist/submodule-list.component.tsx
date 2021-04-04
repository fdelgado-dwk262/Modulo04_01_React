import React from 'react';
import { DashboardComponent, DashboardItemProps } from 'common/components';
import * as classes from './submodule-list.styles'

interface Props {
  items: DashboardItemProps[];
}

export const SumoduleListComponent: React.FunctionComponent<Props> = props => {
  const { items } = props;
  return (
    <div className={ classes.content }>
      <h1>Secciones disponibles</h1>
      <DashboardComponent items={items} />
    </div>
  );
};
