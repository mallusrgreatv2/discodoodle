export class DiscodoodleError extends Error {}
/**
 *
 * @param {string} name The name of the variable
 * @param {string} type The type of the variable
 * @returns {DiscodoodleError}
 */
export const expectedTypeError = (name, type) =>
    new DiscodoodleError(`Expected '${name}' to be of type ${type}`);
