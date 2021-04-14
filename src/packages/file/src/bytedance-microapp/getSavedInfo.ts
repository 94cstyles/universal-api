import {
  GetSavedInfoResponseData,
  GetSavedInfoOptions,
} from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getSavedInfo = normalize.getSavedInfo((options: GetSavedInfoOptions) => {
  const { filePath, success, fail, complete } = options;
  tt.getFileInfo({
    filePath,
    success(res: GetSavedInfoResponseData) {
      success && success(res);
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
}, CONTAINER_NAME.BYTE);


export default getSavedInfo;
