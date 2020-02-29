import React from 'react';

import {
    bootstrapAction, planAction, punishmentAction,
    planProgressAction, punishmentProgressAction,
} from '../actions';
import {logStore, memberStore, planStore, punishmentStore, progressStore} from '../stores';

export const createContext = () => ({
    stores: {
        logStore,
        memberStore,
        planStore,
        punishmentStore,
        progressStore,
    },
    actions: {
        bootstrapAction,
        planAction,
        punishmentAction,
        planProgressAction,
        punishmentProgressAction,
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
