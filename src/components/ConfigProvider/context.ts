import { createContext } from 'react';

export type Config = {
  getPrefixClassName: (suffix?: string, customPrefixCls?: string) => string;
};

const DEFAULT_PREFIX_CLASSNAME = 'gdg-kuds';

export const ConfigContext = createContext<Config>({
  getPrefixClassName: (suffix, customPrefixCls) => {
    if (customPrefixCls) return customPrefixCls;
    return suffix ? `${DEFAULT_PREFIX_CLASSNAME}-${suffix}` : DEFAULT_PREFIX_CLASSNAME;
  },
});
