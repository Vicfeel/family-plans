import {useLocation} from "react-router-dom"

export const useQuery = (key: string, defaultVal: string) => {
    const location = useLocation();
    const {search = ''} = location;
    const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);

    const match = search.slice(1).match(reg);

    return match === null ? defaultVal : unescape(match[2]);
};
