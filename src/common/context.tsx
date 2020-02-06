import React from 'react';

import {bootstrapAction, planAction, punishmentAction} from '../actions';
import {memberStore, planStore, punishmentStore} from '../stores';

export const createContext = () => ({
    stores: {
        memberStore,
        planStore,
        punishmentStore,
    },
    actions: {
        bootstrapAction,
        planAction,
        punishmentAction,
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
