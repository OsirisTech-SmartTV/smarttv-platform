const userAgent = window.navigator.userAgent || ''

const userAgentContains = (key: string): boolean => userAgent.includes(key)

export const DeviceUtil = {
  isToshiba: (): boolean => userAgentContains('Toshiba') || userAgentContains('TSBNetTV'),
  isSony: (): boolean => userAgentContains('Sony'), // CEBrowser
  isWebOS: (): boolean => userAgentContains('Web0S'),
  isEdge: (): boolean => userAgentContains('Edg/'),
  isIE: (): boolean => userAgentContains('Trident/'),
  isTizen: (): boolean => userAgentContains('Tizen'),
  isTizenVersion: (version: number | string = 0): boolean => {
    if (Number(version) < 2) return false
    return userAgentContains('Tizen ' + parseInt('' + version, 10))
  },
  isVideoFutur: (): boolean => userAgentContains('VITIS'),
  isTiVo: (): boolean => userAgentContains('TiVo'),
  isChromecast: (): boolean => userAgentContains('CrKey'),
  isChrome: (): boolean => userAgentContains('Chrome') && !DeviceUtil.isEdge(),
  isApple: (): boolean => !!navigator.vendor && navigator.vendor.includes('Apple') && !DeviceUtil.isTizen(),
  isHisense: (): boolean => userAgentContains('Hisense'),
}
