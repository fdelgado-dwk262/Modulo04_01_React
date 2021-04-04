import React from 'react';
import { useParams } from 'react-router-dom';
import { GalleryListComponent } from './gallery-list.component';
import { PictureInfo } from './gallery-list.vm';
import { mapDibujoListFromApiToVm, mapFotoListFromApiToVm } from './gallery-list.mapper';
import { getDibujoList, getFotoList } from './api';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

export const GalleryListContainer: React.FunctionComponent<any> = (Props) => {

  const { section } = useParams();

  const [list, setList] = React.useState<PictureInfo[]>([]);
  const history = useHistory();


  const onLoadPictureList = async () => {
    const apiPictureList = await (section === 'dibujo' ? getDibujoList() : getFotoList());

    const viewModelPictueList = (section === 'dibujo' ? mapDibujoListFromApiToVm(apiPictureList) : mapFotoListFromApiToVm(apiPictureList));
    setList(viewModelPictueList);
  };

  React.useEffect(() => {
    onLoadPictureList();
  }, []);

  return (
    <>
      <h1>seccion .- {section}</h1>
      <GalleryListComponent
        picture={list}
        section={section}
      />
    </>
  );
};
