import background from './assets/background.png';
import foreground from './assets/foreground.gif';
import logo from './assets/logo.png'

export const manifest = {
    1: {
        background,
        foreground,
        logo,
    }
};

export type MaifestType = typeof manifest;