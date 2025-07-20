import axios from "axios";

import type { RequestMethod } from "./types";

export async function handleRequest(options: { method: RequestMethod; url: string }) {
	const res = await axios.request({
		method: options.method,
		baseURL: options.url
	});

	console.table(res);

	if (res.headers["content-type"]?.toString().includes("application/json")) {
		console.log("Hello");
		return JSON.stringify(res.data, null, 2);
	}

	return res.data;
}
