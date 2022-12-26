/*Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password. */

const password = (string) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(string)