import { createContext } from 'react';

type ContextValue = {
  prefix: string;
  getPrefixClassName: () => string;
};

export const DEFAULT_PREFIX_CLASSNAME = 'gdg-kuds';

export const ConfigContext = createContext<ContextValue>({
  prefix: DEFAULT_PREFIX_CLASSNAME,
  getPrefixClassName: (suffix?: string) => {
    if (suffix) {
      return `${DEFAULT_PREFIX_CLASSNAME}-${suffix}`;
    }

    return DEFAULT_PREFIX_CLASSNAME;
  },
});
