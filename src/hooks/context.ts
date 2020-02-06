import {useContext} from '../common';

export const useStores = () => useContext().stores;

export const useActions = () => useContext().actions;
