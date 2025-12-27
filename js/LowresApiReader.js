/**
 * @typedef {import("./lowresApiTypes.js").Meta} Meta
 * @typedef {import("./lowresApiTypes.js").Posts} Posts
 * @typedef {import("./lowresApiTypes.js").User} User
 * @typedef {import("./lowresApiTypes.js").PostStat} PostStat
 * @typedef {import("./lowresApiTypes.js").Post} Post
 * @typedef {import("./lowresApiTypes.js").PostDetail} PostDetail
 */

import UiBuilder from "./UiBuilder.js";
import Loader from "./Loader.js";
import ElementNavigator from "./ElementNavigator.js";

export default class LowresApiReader {
    // domain = 'http://localhost';
    // domain = 'https://lowresapi.timokloss.com';
    domain = 'https://lowres-api-proxy.bjcrezee.workers.dev';

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

    constructor() {
        this.posts = this.fetchPosts();
        this.posts.then((obj => this.onLoad(obj)))
            .catch((error)=>console.error('returned error!', error));
    }

    /**
     * 
     * @param {Posts} obj 
     */
    onLoad(obj) {
        console.log('returned', obj)
        const container = document.getElementById('post-list');
        if (!container) {
            console.error('no container for the list of posts');
            return;
        }
        container.innerHTML = '';
        container.appendChild(UiBuilder.buildPostsList(obj, (id) => this.onPostClick(id)));
    }

    /**
     * 
     * @param {string} id 
     */
    onPostClick(id) {
        ElementNavigator.myNavigator?.toPostDetails();
        this.loadPost(id).then((obj => this.onPostLoad(obj)))
            .catch((error)=>console.error('returned error!', error));
            
        const container = document.getElementById('post-details');
        if (!container) {
            console.error('no container for the details of a post');
            return;
        }
        container.textContent = 'Loading...';
    }
    
    /**
     * 
     * @param {PostDetail} obj 
     * @returns 
     */
    onPostLoad(obj) {
        console.log('returned', obj)
        const container = document.getElementById('post-details');
        if (!container) {
            console.error('no container for the details of a post');
            return;
        }
        container.innerHTML = '';
        container.appendChild(UiBuilder.buildPostCard((id) => this.onPostClick(id), obj.post, obj.user, obj.stats));
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
     * @returns {Promise<PostDetail>}
     */
    async loadPost(id) {
        return /** @type {Promise<PostDetail>} */ (Loader.fetchRoute(`${this.domain}/posts`, id));
    }
}