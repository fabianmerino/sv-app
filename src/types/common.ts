export interface GenericObject<T> {
	[key: string]: T;
}

export interface Toast extends GenericObject<any> {
	message: string;
	type: 'success' | 'error' | 'warning' | 'info';
	duration: number;
	timeout: NodeJS.Timeout;
}

export type NonEmptyString<T extends string> = T extends '' ? never : T;
