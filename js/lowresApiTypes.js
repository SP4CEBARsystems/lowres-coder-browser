/**
 * @typedef {Object} Posts
 * @property {Post[]} post
 * @property {User[]} user
 * @property {PostStat[]} stats
 */

/**
 * @typedef {Object} Meta
 * @property {string} objectId
 * @property {string} updatedAt
 * @property {string} createdAt
 */

/**
 * @typedef {Object} User
 * @property {string} objectId
 * @property {string} updatedAt
 * @property {string} createdAt
 * @property {string} username
 * @property {number} role
 */

/**
 * @typedef {Object} PostStat
 * @property {string} objectId
 * @property {string} updatedAt
 * @property {string} createdAt
 * @property {string} post
 * @property {number} numDownloads
 * @property {number} numComments
 * @property {number} numLikes
 * @property {number} featured
 * @property {number} essential
 */

/**
 * @typedef {Object} Post
 * @property {string} title
 * @property {string} objectId
 * @property {string} updatedAt
 * @property {string} createdAt
 * @property {number} type
 * @property {number} category
 * @property {string} user
 * @property {string} image
 * @property {string|null} sharedPost
 * @property {string} stats
 */

export {};