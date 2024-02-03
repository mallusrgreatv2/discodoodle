/**
 * Convert a unix epoch time to Discord timestamps.
 * @see {@link https://bit.ly/discord-timestamps} for information about Discord timestamps.
 * @param time The unix epoch time to format (milliseconds)
 * @param type
 * @example
 * doodle.convertTimeToDiscord(Date.now() - 3000, "R") // When posted on Discord, shows 3 seconds ago
 */
export function convertTimeToDiscord(time: number, type: undefined | null | "t" | "T" | "d" | "D" | "f" | "F" | "R"): string