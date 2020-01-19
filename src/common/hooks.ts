import {useContext} from '.';

export const useStores = () => useContext().stores;

export const useActions = () => useContext().actions;

