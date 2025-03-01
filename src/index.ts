import { DeviceUtil } from "./util";

export enum PlatformName {
  Tizen = "tizen",
  WebOS = "webOS",
  Sony = "sony",
  Panasonic = "panasonic",
  Apple = "apple",
  TiVo = "tivo",
  Toshiba = "toshiba",
  Browser = "browser",
  iOS = "ios",
  Android = "android",
  Hisense = "hisense",
}

export type TypePlatformName = keyof typeof PlatformName;

export class Platform {
  public PlatformName = PlatformName;
  private platformName: PlatformName = PlatformName.Browser;

  constructor() {
    this._init();
  }

  private _init() {
    if (DeviceUtil.isTizen()) {
      this.platformName = PlatformName.Tizen;
    } else if (DeviceUtil.isWebOS()) {
      this.platformName = PlatformName.WebOS;
    } else if (DeviceUtil.isHisense()) {
      this.platformName = PlatformName.Hisense;
    } else {
      this.platformName = PlatformName.Browser;
    }
  }

  public isSmartTV(): boolean {
    return (
      DeviceUtil.isTizen() || DeviceUtil.isWebOS() || DeviceUtil.isHisense()
    );
  }

  public getPlatformName(): PlatformName {
    return this.platformName;
  }

  public isTizen(): boolean {
    return DeviceUtil.isTizen();
  }

  public isWebOS(): boolean {
    return DeviceUtil.isWebOS();
  }

  public isHisense(): boolean {
    return DeviceUtil.isHisense();
  }

  public isApple(): boolean {
    return DeviceUtil.isApple();
  }

  public isChrome(): boolean {
    return DeviceUtil.isChrome();
  }

  public isSony(): boolean {
    return DeviceUtil.isSony();
  }

  public isToshiba(): boolean {
    return DeviceUtil.isToshiba();
  }

  public isChromecast(): boolean {
    return DeviceUtil.isChromecast();
  }

  public isIE(): boolean {
    return DeviceUtil.isIE();
  }

  public isEdge(): boolean {
    return DeviceUtil.isEdge();
  }

  public isTizenVersion(version: number | string = 0): boolean {
    return DeviceUtil.isTizenVersion(version);
  }

  public isVideoFutur(): boolean {
    return DeviceUtil.isVideoFutur();
  }

  public isTiVo(): boolean {
    return DeviceUtil.isTiVo();
  }

  public isAppleTV(): boolean {
    return DeviceUtil.isApple();
  }
}

export const PlatformInstance: Platform = new Platform();
