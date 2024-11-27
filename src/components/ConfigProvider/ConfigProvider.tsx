import { useContext, useMemo } from 'react';
import { ConfigContext } from './context';

interface ConfigContextProps {
  prefix?: string;
  children: React.ReactNode;
}

const ConfigProvider = ({ children }: ConfigContextProps) => {
  const contextValue = useContext(ConfigContext);

  const value = useMemo(() => contextValue, [contextValue]);

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
