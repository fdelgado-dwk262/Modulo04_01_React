import { PictureInfo } from './gallery-list.api-model';
import { mockFotoList, mockDibujosList } from './gallery-list.mock-data';

let fotoList = [...mockFotoList];

let dibujoList = [...mockDibujosList];

export const getFotoList = async (): Promise<PictureInfo[]> => {
  return fotoList;
};

export const getDibujoList = async (): Promise<PictureInfo[]> => {
  return dibujoList;
};