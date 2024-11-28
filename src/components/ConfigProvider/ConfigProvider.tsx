import { useCallback, useContext, useMemo } from 'react';
import { Config, ConfigContext } from './context';

export interface ConfigContextProps {
  prefix?: string;
  children: React.ReactNode;
}

const ConfigProvider = (props: ConfigContextProps) => {
  const { prefix, children } = props;
  const contextValue = useContext(ConfigContext);

  const getContextPrefixClassName = contextValue.getPrefixClassName;
  const getPrefixClassName = useCallback(
    (suffix?: string, customPrefixCls?: string) => {
      if (customPrefixCls) return customPrefixCls;

      const globalPrefix = prefix || getContextPrefixClassName();
      return suffix ? `${globalPrefix}-${suffix}` : globalPrefix;
    },
    [prefix, getContextPrefixClassName],
  );

  const memoedConfig: Config = useMemo(
    () => ({
      getPrefixClassName,
    }),
    [getPrefixClassName],
  );

  return <ConfigContext.Provider value={memoedConfig}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
