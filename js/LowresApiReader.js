export default class LowresApiReader {
    static domain = 'https://lowresapi.timokloss.com';

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

    /**
     * @type {Post}
     */
    hi = {
        title: '',
        objectId: '',
        updatedAt: '',
        createdAt: '',
        type: 0,
        category: 0,
        user: '',
        image: '',
        sharedPost: null,
        stats: ''
    }

    /**
     * @type {User}
     */
    hiss = {
        objectId: '',
        updatedAt: '',
        createdAt: '',
        username: '',
        role: 0
    }

    /**
     * @type {PostStat}
     */
    his = {
        objectId: '',
        updatedAt: '',
        createdAt: '',
        post: '',
        numDownloads: 0,
        numComments: 0,
        numLikes: 0,
        featured: 0,
        essential: 0
    }

    static fetchPosts() {
        const route = `${this.domain}/posts`;
    }
}