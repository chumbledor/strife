export const AccountCreateEmailInUseError = new Error('An account with the specified email already exists.');
export const AccountCreateUsernameInUseError = new Error('An account with the specified username already exists.');
export const AccountDeleteUnauthorizedError = new Error('Cannot delete an account that is not logged in.');
export const AccountUpdateUnauthorizedError = new Error('Cannot update an account that is not logged in.');