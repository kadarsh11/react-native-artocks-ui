import React, { useContext } from 'react';

let instance: any;

export let GlobalConfig = {
  unit: 8,
  fontFamily: {
    regular: '',
    semiBold: '',
    bold: '',
  },
  screenRefrence: {
    width: 360,
    height: 800,
  },
};

class ArtocksManager {
  constructor() {
    if (instance) {
      throw new Error('New instance cannot be created!!');
      // return "New instance cannot be created!!"
    }
    instance = this;
  }

  setFontFamily(fontFamily: typeof GlobalConfig.fontFamily) {
    return (GlobalConfig.fontFamily = fontFamily);
  }
  getFontFamily() {
    return GlobalConfig.fontFamily;
  }
}

const Artocks = Object.freeze(new ArtocksManager());

export const ArtocksContext = React.createContext(GlobalConfig);

export function useArtocks() {
  const artocks = useContext(ArtocksContext);
  return artocks;
}

export function ArtocksProvider({
  children,
  config = {},
}: {
  children: React.ReactNode;
  config: typeof GlobalConfig | {};
}) {
  return (
    <ArtocksContext.Provider
      value={{
        ...GlobalConfig,
        ...config,
      }}
    >
      {children}
    </ArtocksContext.Provider>
  );
}

export { Artocks };
