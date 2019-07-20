'use babel';

import myProvider from './provider';
import advancedProvider from './advprovider';

export default {
    getProvider() {
        // return a single provider, or an array of providers to use together
        return [myProvider, advancedProvider];
    }
};
