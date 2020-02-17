import moment from 'moment';

export const getTime = () => moment().format();

export const renderTime = (time: string) => moment(time).format('LLLL');

export const isSameDay = (time1: string) => (time2: string) => moment(time1).isSame(moment(time2), 'day');

export const isAfterTime = (time1: string) => (time2: string) => moment(time1).isAfter(moment(time2), 'minute');