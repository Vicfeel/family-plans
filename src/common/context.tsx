import React from 'react';

import {userStore, planStore, punishmentStore} from '../stores';
import {bootstrapAction} from '../actions';

export const createContext = () => ({
    stores: {
        userStore,
        planStore,
        punishmentStore,
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
