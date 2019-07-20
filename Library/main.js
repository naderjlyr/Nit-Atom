'use babel';

import myProvider from './provider';
import mySnippet from './snippet';

export default {
    getProvider() {
        // return a single provider, or an array of providers to use together
        return [myProvider, mySnippet];
    }
};
