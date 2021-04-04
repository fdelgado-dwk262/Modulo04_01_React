import * as apiModel from './api/gallery-list.api-model';
import * as viewModel from './gallery-list.vm';

const mapFotoFromApiToVm = (
  foto: apiModel.PictureInfo
): viewModel.PictureInfo => ({
  ...foto,
});

export const mapFotoListFromApiToVm = (
  fotoList: apiModel.PictureInfo[]
): viewModel.PictureInfo[] => fotoList.map(e => mapFotoFromApiToVm(e));


const mapDibujoFromApiToVm = (
  dibujo: apiModel.PictureInfo
): viewModel.PictureInfo => ({
  ...dibujo,
});

export const mapDibujoListFromApiToVm = (
  dibujoList: apiModel.PictureInfo[]
): viewModel.PictureInfo[] => dibujoList.map(e => mapDibujoFromApiToVm(e));