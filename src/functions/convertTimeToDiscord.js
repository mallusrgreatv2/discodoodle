/**
 * Convert a unix epoch time to Discord timestamps.
 * @see {@link https://bit.ly/discord-timestamps} for information about Discord timestamps.
 * @param {number} time The unix epoch time to format (milliseconds)
 * @param {undefined | null | "t" | "T" | "d" | "D" | "f" | "F" | "R"} type
 * @returns {string}
 * @example
 * doodle.convertTimeToDiscord(Date.now() - 3000, "R") // When posted on Discord, shows 3 seconds ago
 */
export default function convertTimeToDiscord(time, type) {
    return `<t:${Math.floor(Math.abs(time) / 1000)}${type ? `:${type}` : ""}>`;
}
