import React from 'react';
import * as classes from './cart.styles';
import { MyContext } from '../../../OurContext';

export const CartComponent: React.FC<any> = () => {

  const myContext = React.useContext(MyContext);

  React.useEffect(() => {
  }, [myContext.item]);

  return (
    <div className={classes.content}>
      {' Mi  carrito de compra contiene .- '}
      {myContext.item && myContext.item.map(row => (
        <div key={row.id}>
          {row.id}
          <img className={classes.imagen} src={row.picUrl} />
          {row.title}
          <button id={row.id} onClick={(e) => { myContext.handleDelete(e, row.id) }}>elimina</button>
        </div>
      ))}
    </div>
  );
};
