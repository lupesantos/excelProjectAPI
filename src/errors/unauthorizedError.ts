export type ApplicationError = {
	name: string;
	message: string;
};

export function unauthorizedError(): ApplicationError {
	return {
		name: 'UnauthorizedError',
		message:
			'You must be the TODO item Owner to edit. If u want to change it, u can make a sugestion to the Owner!',
	};
}