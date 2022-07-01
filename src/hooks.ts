import { dev } from '$app/env';
import type { Handle } from '@sveltejs/kit';

const labelFor: {
	(args: { method: string; pathname: string; searchParams: URLSearchParams }): string;
} = ({ method, pathname, searchParams }) => {
	const uri = [pathname, searchParams.toString()].filter(Boolean).join('?');

	return `${method} ${uri}`;
};

export const handle: Handle = async ({ event, resolve }) => {
	const {
		request: { method },
		url: { pathname, searchParams }
	} = event;

	const label = labelFor({ method, pathname, searchParams });

	dev && console.time(label);

	const response = await resolve(event);

	dev && console.timeEnd(label);

	return response;
};
