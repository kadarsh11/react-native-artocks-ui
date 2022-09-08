let instance: any;

export let GlobalConfig = {
    unit: 8,
    fontFamily: {
        regular: '',
        semiBold: '',
        bold: '',
    }
};

class ArtocksManager {
    constructor() {
        if (instance) {
            throw new Error("New instance cannot be created!!");
            // return "New instance cannot be created!!"
        }
        instance = this;
    }

    setFontFamily(fontFamily: typeof GlobalConfig.fontFamily) {
        return GlobalConfig.fontFamily = fontFamily;
    }
    getFontFamily() {
        return GlobalConfig.fontFamily;
    }
}

const Artocks = Object.freeze(new ArtocksManager());

export { Artocks };