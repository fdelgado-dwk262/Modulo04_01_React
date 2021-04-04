import React from 'react';
import { SumoduleListComponent } from './submodule-list.component';
import { DashboardItemProps } from 'common/components';
import { routes } from 'core/router';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GroupIcon from '@material-ui/icons/Group';
// import { PhotoCamera, ShoppingCart } from '@material-ui/icons';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import ImageIcon from '@material-ui/icons/Image';

export const SubmoduleListContainer: React.FunctionComponent = () => {
  const items: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      // {
      //   title: 'Banco de imagenes',
      //   linkTo: routes.gallery, // No link defined
      //   icon: PhotoCamera,
      // },
      // {
      //   title: 'Fotografias',
      //   linkTo: routes.employees('foto'),
      //   icon: CameraEnhanceIcon,
      // },
      // {
      //   title: 'Dibujos',
      //   linkTo: routes.employees('dibujo'),
      //   icon: ImageIcon,
      // },
      {
        title: 'FotografiasGaleria',
        linkTo: routes.gallerys('foto'),
        icon: CameraEnhanceIcon,
      },
      {
        title: 'DibujosGaleria',
        linkTo: routes.gallerys('dibujo'),
        icon: ImageIcon,
      },
    ],
    []
  );

  return <SumoduleListComponent items={items} />;
};
