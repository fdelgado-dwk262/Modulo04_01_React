import React from 'react';
import { AppLayout } from './../layouts';
import { GalleryListContainer } from './../pods/gallery-list';
import { CartComponent } from '../common/components/cart/cart.component';
import { useParams } from 'react-router-dom';

export const GalleryListScene: React.FC<any> = (Props) => {

  const {
    handletoggleShow, show
  } = Props

  // const {
  //   handleSection, handletoggleShow, show
  // } = Props

  // const { section } = useParams();

  // React.useEffect(() => {
  //   handleSection(section)
  // }, []);

  return (
    <AppLayout handletoggleShow={handletoggleShow} >
      {show && <CartComponent/>}
      <GalleryListContainer/>
      {/* {show && <CartComponent {...Props} />}
      <GalleryListContainer {...Props} /> */}
    </AppLayout>
  );
};
