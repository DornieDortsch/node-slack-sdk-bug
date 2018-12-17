const HttpsProxyAgent = require('https-proxy-agent');
const { RTMClient } = require('@slack/client');

process.env['https_proxy'] = ''
process.env['HTTPS_PROXY'] = ''

require('dotenv').config()

const options = {
    agent: new HttpsProxyAgent(process.env.PROXY_URL),
    logLevel: 'debug',
    logger: (level, message) => {
        console.log(message);
    }
}

const rtm = new RTMClient(process.env.TOKEN, options);

rtm.start();

rtm.on('error', error => {
    console.error('Error!', error);
});

rtm.on('unable_to_rtm_start', error => {
    console.error('unable_to_rtm_start!', error);
});

rtm.on('connecting', () => {
    console.info('Connectin!');
});

rtm.on('connected', () => {
    console.info('Connected!');
});