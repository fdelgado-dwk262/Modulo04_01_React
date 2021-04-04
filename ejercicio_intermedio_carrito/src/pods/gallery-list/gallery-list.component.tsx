import React from 'react';
import { PictureInfo } from './gallery-list.vm';
import { MyContext } from '../../OurContext'
import * as classes from './gallery-list.styles';

interface Props {
  picture: PictureInfo[];
  section: 'dibujo';
}

export const GalleryListComponent: React.FunctionComponent<Props> = ({
  picture,
  section,
}) => {

  const accesoamiContext = React.useContext(MyContext);
  console.log('accesoamiContext .- ', accesoamiContext)

  return (
    <div className={classes.section}>
      {`sección ${section}`}
      <div className={classes.content}>
        {picture.map(row => (
          <div key={row.id} className={classes.item}>
            {row.id}
            <img className={classes.imagen} src={row.picUrl} />
            {row.title}
            <input type="checkbox" id={row.id} value={row.title} onChange={(e) => { accesoamiContext.handleOnChangeCOntexto(e, picture); accesoamiContext.prueba('green') }} {...accesoamiContext.isChecked(row.id)} />
            <label htmlFor={row.id}>{'Añadir a mi carrito'}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
