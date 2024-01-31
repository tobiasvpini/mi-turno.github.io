import packageJson from '../../package.json'

const urls = {
    "mi-turno": {
        baseURL: '-'
    }
};

export default {
    baseURL: urls[packageJson.name].baseURL,
    timeout: 10000
}