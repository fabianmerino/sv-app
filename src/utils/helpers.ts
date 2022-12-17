// Regex to validate email addresses
const EMAIL_REGEX = new RegExp(
	'^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
);

export function validateEmail(email: string) {
	return EMAIL_REGEX.test(email);
}
