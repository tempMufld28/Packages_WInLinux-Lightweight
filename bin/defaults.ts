import { PakeCliOptions } from './types.js';

export const DEFAULT_PAKE_OPTIONS: PakeCliOptions = {
  icon: '',
  height: 780,
  width: 1200,
  fullscreen: false,
  maximize: false,
  resizable: true,
  alwaysOnTop: false,
  appVersion: '1.0.0',
  darkMode: false,
  disabledWebShortcuts: false,
  activationShortcut: '',
  userAgent: '',
  showSystemTray: false,
  targets: (() => {
    switch (process.platform) {
      case 'linux':
        return 'deb,appimage';
      case 'win32':
        return 'msi';
      default:
        return 'deb';
    }
  })(),
  useLocalFile: false,
  systemTrayIcon: '',
  proxyUrl: '',
  debug: false,
  inject: [],
  installerLanguage: 'en-US',
  hideOnClose: undefined,
  incognito: false,
  wasm: false,
  enableDragDrop: false,
  keepBinary: false,
  multiInstance: false,
  multiWindow: false,
  startToTray: false,
  forceInternalNavigation: false,
  internalUrlRegex: '',
  safeDomain: '',
  enableFind: false,
  iterativeBuild: false,
  zoom: 100,
  minWidth: 0,
  minHeight: 0,
  ignoreCertificateErrors: false,
  newWindow: false,
};
