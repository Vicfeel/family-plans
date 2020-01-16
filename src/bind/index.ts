import React from 'react';

import userStore from '../stores/userStore';
import bootstrapAction from '../actions/bootstrapAction';

export const createContext = () => ({
    stores: {
        userStore,
    },
    actions: {
        bootstrapAction
    }
});

export const StoreContext = React.createContext<ReturnType<typeof createContext>|null>(null);

// return the latest context
export const useContext = () => {
    const context = React.useContext(StoreContext);

    if (!context) {
        throw new Error('miss provider');
    }

    return context;
};

export const useStores = () => useContext().stores;

export const useActions = () => useContext().actions;
