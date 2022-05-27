export const ROOT_URL = window.location.protocol + "//" + window.location.host;

export const API_URL=ROOT_URL.includes('localhost')?'http://0.0.0.0:5000':ROOT_URL

