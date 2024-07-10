import {Version} from 'root/app/settings-store/settings_store';
import {SettingsV15, AccountV12, HotkeysSettingsV2, OverlaySettingsV9} from './v15';

export interface SettingsV16 extends Omit<SettingsV15, 'version'> {
  version: Version.v16;
  accounts: AccountV13[];
}

export interface AccountV13 extends AccountV12 {
  overlaySettings?: OverlaySettingsV10;
}

export interface OverlaySettingsV10 extends OverlaySettingsV9 {
  hidesessionstats: boolean;
}

export type {HotkeysSettingsV2};
