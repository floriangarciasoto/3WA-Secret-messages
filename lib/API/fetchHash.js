import axios from 'axios';

const BASE_URL = 'https://api.hashify.net/hash/sha256/base64url';

export default text =>
	axios(BASE_URL, {params: {value: text}}).then(({data: {Digest: hash}}) => hash);