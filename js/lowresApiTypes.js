/**
 * @typedef {Object} Posts
 * @property {Post[]} posts
 * @property {User[]} users
 * @property {PostStat[]} postStats
 */

/**
 * @typedef {Object} Meta
 * @property {string} objectId a ten-character-string of capital and non-capital characters
 * @property {string} updatedAt format: "YYYY-MM-DD hh:mm:ss" example: "2022-07-30 12:02:21"
 * @property {string} createdAt format: "YYYY-MM-DD hh:mm:ss" example: "2022-07-30 12:02:21"
 */

/**
 * @typedef {Object} User
 * @property {string} objectId a ten-character-string of capital and non-capital characters
 * @property {string} updatedAt format: "YYYY-MM-DD hh:mm:ss" example: "2022-07-30 12:02:21"
 * @property {string} createdAt format: "YYYY-MM-DD hh:mm:ss" example: "2022-07-30 12:02:21"
 * @property {string} username
 * @property {number} role
 */

/**
 * @typedef {Object} PostStat
 * @property {string} objectId a ten-character-string of capital and non-capital characters
 * @property {string} updatedAt format: "YYYY-MM-DD hh:mm:ss" example: "2022-07-30 12:02:21"
 * @property {string} createdAt format: "YYYY-MM-DD hh:mm:ss" example: "2022-07-30 12:02:21"
 * @property {string} post a ten-character-string of capital and non-capital characters
 * @property {number} numDownloads
 * @property {number} numComments
 * @property {number} numLikes
 * @property {number} featured
 * @property {number} essential
 */

/**
 * @typedef {Object} Post
 * @property {string} title 
 * @property {string} objectId a ten-character-string of capital and non-capital characters
 * @property {string} updatedAt format: "YYYY-MM-DD hh:mm:ss" example: "2022-07-30 12:02:21"
 * @property {string} createdAt format: "YYYY-MM-DD hh:mm:ss" example: "2022-07-30 12:02:21"
 * @property {number} type
 * @property {number} category
 * @property {string} user a ten-character-string of capital and non-capital characters
 * @property {string} image cdn url
 * @property {string|null} sharedPost
 * @property {string} stats
 */

export {};