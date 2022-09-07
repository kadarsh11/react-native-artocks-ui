let instance: any;

let globalState = {
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
        }
        instance = this;
    }

    setFontFamily(fontFamily: typeof globalState.fontFamily) {
        return globalState.fontFamily = fontFamily;
    }
    getFontFamily() {
        return globalState.fontFamily;
    }
}

const Artocks = Object.freeze(new ArtocksManager());

export { Artocks };