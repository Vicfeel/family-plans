export const uuid = (len = 8) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

    return [...Array(len)].map(() => chars[0 | Math.random() * chars.length]).join('');
};
