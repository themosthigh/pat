import axios from 'axios';

import type { RequestMethod } from './types';

export async function handleRequest(options: { method: RequestMethod; url: string }) {
	const res = await axios.request({
		method: options.method,
		baseURL: options.url
	});

	console.log(res);

	return res.data;
}
