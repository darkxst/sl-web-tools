export declare const mdiFirmware =
  'M9.5,8.5L11,10L8,13L11,16L9.5,17.5L5,13L9.5,8.5M14.5,17.5L13,16L16,13L13,10L14.5,8.5L19,13L14.5,17.5M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M21,20H3V6H21V20Z';
export declare const mdiThread =
  'M12 0C5.383 0 0 5.384 0 12.002 0 18.574 5.31 23.928 11.865 24V12.012H7.938A2.12 2.12 0 0 0 5.82 14.13a2.12 2.12 0 0 0 2.116 2.117v2.616a4.738 4.738 0 0 1-4.731-4.733 4.738 4.738 0 0 1 4.731-4.734h3.928V8.074a3.943 3.943 0 0 1 3.938-3.94 3.944 3.944 0 0 1 3.94 3.94 3.944 3.944 0 0 1-3.94 3.939H14.48v11.731C19.911 22.598 24 17.77 24 12.002 24 5.384 18.617 0 12 0Zm5.127 8.073a1.325 1.325 0 0 0-1.324-1.324 1.325 1.325 0 0 0-1.323 1.324v1.323h1.323a1.325 1.325 0 0 0 1.324-1.323z';
export declare enum ApplicationType {
  GECKO_BOOTLOADER = 'bootloader',
  CPC = 'cpc',
  EZSP = 'ezsp',
  SPINEL = 'spinel',
}
export declare const ApplicationNames: {
  bootloader: string;
  cpc: string;
  ezsp: string;
  spinel: string;
};
export declare enum FirmwareType {
  NCP_UART_HW = 'ncp-uart-hw',
  RCP_UART_802154 = 'rcp-uart-802154',
  ZIGBEE_NCP_RCP_UART_802154 = 'zigbee-ncp-rcp-uart-802154',
  OT_RCP = 'ot-rcp',
}
export declare const FirmwareIcons: {
  'ncp-uart-hw': string;
  'rcp-uart-802154': string;
  'zigbee-ncp-rcp-uart-802154': string;
  'ot-rcp': string;
};
export declare const FirmwareNames: {
  'ncp-uart-hw': string;
  'rcp-uart-802154': string;
  'zigbee-ncp-rcp-uart-802154': string;
  'ot-rcp': string;
};
export declare const ApplicationTypeToFirmwareType: {
  cpc: FirmwareType;
  ezsp: FirmwareType;
  spinel: FirmwareType;
  bootloader: undefined;
};
export interface USBFilter {
  pid: number;
  vid: number;
}
export interface Firmware {
  name: string;
  url: string;
  type: FirmwareType;
  version: string;
}
export interface ManifestBaudrates {
  bootloader: number[];
  cpc: number[];
  ezsp: number[];
  spinel: number[];
}
export interface Manifest {
  product_name: string;
  baudrates: ManifestBaudrates;
  usb_filters: USBFilter[];
  firmwares: Firmware[];
  allow_custom_firmware_upload: boolean;
}
