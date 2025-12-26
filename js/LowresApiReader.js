export default class LowresApiReader {
    domain = 'https://lowresapi.timokloss.com';

    /**
     * @typedef {import("./lowresApiTypes.js").Meta} Meta
     * @typedef {import("./lowresApiTypes.js").Posts} Posts
     * @typedef {import("./lowresApiTypes.js").User} User
     * @typedef {import("./lowresApiTypes.js").PostStat} PostStat
     * @typedef {import("./lowresApiTypes.js").Post} Post
     */

    // /**
    //  * @type {Post}
    //  */
    // hi = {
    //     title: '',
    //     objectId: '',
    //     updatedAt: '',
    //     createdAt: '',
    //     type: 0,
    //     category: 0,
    //     user: '',
    //     image: '',
    //     sharedPost: null,
    //     stats: ''
    // }

    // /**
    //  * @type {User}
    //  */
    // hiss = {
    //     objectId: '',
    //     updatedAt: '',
    //     createdAt: '',
    //     username: '',
    //     role: 0
    // }

    // /**
    //  * @type {PostStat}
    //  */
    // his = {
    //     objectId: '',
    //     updatedAt: '',
    //     createdAt: '',
    //     post: '',
    //     numDownloads: 0,
    //     numComments: 0,
    //     numLikes: 0,
    //     featured: 0,
    //     essential: 0
    // }

    constructor () {
        this.posts = this.fetchPosts();
    }

    /**
     * 
     * @returns {Promise<Posts>}
     */
    fetchPosts() {
        return /** @type {Promise<Posts>} */ (Loader.fetchRoute(`${this.domain}/posts`));
    }

    /**
     * 
     * @param {string} id 
     * @returns {Promise<Object>}
     */
    async loadId(id) {
        return Loader.fetchRoute(`${this.domain}/posts`, id);
    }
}