import {isString, isNull} from '.';

const saveKey = 'FAMILY_PLANS_STORAGE';

export const saveToLocal = (data: string | object) => {
    localStorage.setItem(saveKey, isString(data) ? data as string : JSON.stringify(data as object));
};

export const getFromLocal = <S>(defaultValue: S) => {
    const val = localStorage.getItem(saveKey);

    try {
        return isNull(val) ? defaultValue : JSON.parse(val as string) as S;
    }
    catch {
        return defaultValue;
    }
};

export const clearLocal = () => {
    localStorage.removeItem(saveKey);
};
