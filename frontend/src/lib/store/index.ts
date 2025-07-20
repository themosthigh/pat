import type { RequestMethod } from "$lib/types";
import { writable } from "svelte/store";

export const document = writable({
	request: {
		method: "GET" as RequestMethod,
		url: "",
		body: ""
	},
	response: {
		body: "{}",
		responseType: "json"
	},

	status: {
		isLoading: false
	}
});
