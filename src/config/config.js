import envConfig from "./env.js"
const baseUrl = envConfig.baseUrl;

export default {
    baseUrl: `https://${baseUrl}`,
    timeout: 60000
}