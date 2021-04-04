import React, { useContext } from 'react'
import { cx } from 'emotion';
import { ItemComponent, ClassesProps } from './components';
import { DashboardItemProps } from './dashboard.vm';
import * as innerClasses from './dashboard.styles';
import { MyContext } from '../../../OurContext';

interface ClassNameProps {
  root?: string;
  items?: string;
  item?: ClassesProps;
}

interface Props {
  items: DashboardItemProps[];
  classes?: ClassNameProps;
  dataTestId?: string;
}

export const DashboardComponent: React.StatelessComponent<Props> = props => {
  const { items, classes, dataTestId } = props;

  const myContext = React.useContext(MyContext);
  // const { prueba, newColor } = useContext(MyContext)
  console.log(myContext)
  return (
    <div
      data-testid={dataTestId}
      className={cx(innerClasses.root, classes.root)}
    >
      {/* recuperamos el color del contexto */}
      {/* <h3 style={{ color: myContext.color }}>Secciones disponibles </h3> */}
      {/* llamanos a una funcion del contexto */}
      <a style={{ color: myContext.color }} onClick={myContext.pruebaconsole}>si mempulsas llamo al contexto</a>

      <a onClick={() => myContext.prueba('red')}>paso rojo al contexto ???</a>

      <div className={cx(innerClasses.items, classes.items)}>
        {items.map(
          item =>
            Boolean(item) && (
              <ItemComponent
                key={item.title}
                classes={{
                  ...classes.item,
                  root: cx(innerClasses.item, classes.item.root),
                }}
                item={item}
              />
            )
        )}
      </div>
    </div>
  );
};

DashboardComponent.defaultProps = {
  classes: {
    root: '',
    items: '',
    item: {
      root: '',
      icon: '',
      title: '',
    },
  },
};
