/**
 * *** IMPORTANT ***
 * I'm doing this hack
 * to get chat server api link over network
 * feel free to change config 'base_url' to http://localhost:3000
 */
const getServerHostUrl = () => {
    const { protocol, host } = window.location;
    const baseUrl = host && host.split(':')[0];
    const serverPost = '3000';
    return `${protocol}//${baseUrl}:${serverPost}`;
};

export default {
    base_url: getServerHostUrl(),
    // base_url: 'http://localhost:3000',
    app: {
        name: 'EarnChat',
    },
};
