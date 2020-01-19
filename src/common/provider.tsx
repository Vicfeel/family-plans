import React, {PropsWithChildren} from 'react';

import {useLocalStore} from 'mobx-react-lite';

import {createContext, StoreContext} from '.';

// ContextProvider, wrapped around your app
export const ContextProvider = ({children}: PropsWithChildren<any>) => {
    const store = useLocalStore(createContext);

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
