import application from '../../packages/application/src/ali-miniapp/index';
import env from '../../packages/base/env/src/index';
import canIUse from '../../packages/base/canIUse/src/index';
import unitTool from '../../packages/base/unit-tool/src/index';
import canvas from '../../packages/canvas/src/ali-miniapp/index';
import accelerometer from '../../packages/device/accelerometer/src/ali-miniapp/index';
import clipboard from '../../packages/device/clipboard/src/ali-miniapp/index';
import systemInfo from '../../packages/device/systemInfo/src/ali-miniapp/index';
import scan from '../../packages/device/scan/src/ali-miniapp/index';
import file from '../../packages/file/src/ali-miniapp/index';
import actionSheet from '../../packages/interactive/actionSheet/src/ali-miniapp/index';
import alert from '../../packages/interactive/alert/src/ali-miniapp/index';
import animation from '../../packages/interactive/animation/src/ali-miniapp/index';
import toast from '../../packages/interactive/toast/src/ali-miniapp/index';
import loading from '../../packages/interactive/loading/src/ali-miniapp/index';
import navigationBar from '../../packages/interactive/navigationBar/src/ali-miniapp/index';
import pullDownRefresh from '../../packages/interactive/pullDownRefresh/src/ali-miniapp/index';
import element from '../../packages/interactive/element/src/ali-miniapp/index';
import intersectionObserver from '../../packages/interactive/intersectionObserver/src/ali-miniapp/index';
import confirm from '../../packages/interactive/confirm/src/ali-miniapp/index';
import _location from '../../packages/location/src/ali-miniapp/index';
import image from '../../packages/media/image/src/ali-miniapp/index';
import navigate from '../../packages/navigate/src/ali-miniapp/index';
import request from '../../packages/network/request/src/ali-miniapp/index';
import storage from '../../packages/storage/src/ali-miniapp/index';
import recorder from '../../packages/media/recorder/src/ali-miniapp/index';
import video from '../../packages/media/video/src/ali-miniapp/index';

export {
  application,
  env,
  canIUse,
  unitTool,
  canvas,
  accelerometer,
  clipboard,
  systemInfo,
  scan,
  file,
  actionSheet,
  alert,
  animation,
  toast,
  loading,
  navigationBar,
  pullDownRefresh,
  element,
  intersectionObserver,
  confirm,
  _location as location,
  image,
  navigate,
  request,
  storage,
  recorder,
  video,
};


export default {
  application,
  env,
  canIUse,
  unitTool,
  canvas,
  accelerometer,
  clipboard,
  systemInfo,
  scan,
  file,
  actionSheet,
  alert,
  animation,
  toast,
  loading,
  navigationBar,
  pullDownRefresh,
  element,
  intersectionObserver,
  confirm,
  location: _location,
  image,
  navigate,
  request,
  storage,
  recorder,
  video,
};
