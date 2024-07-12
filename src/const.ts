import { LogoParams } from './types/types';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

type LogoType = {
  ForHeader: LogoParams;
  ForFooter: LogoParams;
}

const LogoType: LogoType = {
  ForHeader: {
    prefixName: 'header',
    width: 81,
    height: 41,
  },
  ForFooter: {
    prefixName: 'footer',
    width: 64,
    height: 33,
  }
} as const;

export {CITIES, LogoType};
