import { title } from 'common/components/dashboard/components/item.styles';
import { PictureInfo } from './gallery-list.api-model';

export const mockFotoList: PictureInfo[] = [
  {
    id: 'f1',
    picUrl: 'src/assets/images/photo/photo01.jpg',
    title: 'Tunel',
  },
  {
    id: 'f2',
    picUrl: 'src/assets/images/photo/photo02.jpg',
    title: 'Concéntricos',
  },
  {
    id: 'f3',
    picUrl: 'src/assets/images/photo/photo03.jpg',
    title: 'Filomena',
  },
];

export const mockDibujosList: PictureInfo[] = [
  {
    id: 'd1',
    picUrl: 'src/assets/images/photo/dibujo01.jpg',
    title: 'Casa de campo',
  },
  {
    id: 'd2',
    picUrl: 'src/assets/images/photo/dibujo02.jpg',
    title: 'Bocetos de plantas',
  },
];