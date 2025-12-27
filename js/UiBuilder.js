/**
 * @typedef {import("./lowresApiTypes.js").Meta} Meta
 * @typedef {import("./lowresApiTypes.js").Posts} Posts
 * @typedef {import("./lowresApiTypes.js").User} User
 * @typedef {import("./lowresApiTypes.js").PostStat} PostStat
 * @typedef {import("./lowresApiTypes.js").Post} Post
 * @typedef {import("./lowresApiTypes.js").PostDetailed} PostDetailed
 */

/**
 * Builder class for creating DOM elements from API data
 */
class UiBuilder {
    /**
     * Build a user card element
     * @param {User} user
     * @returns {HTMLElement}
     */
    static buildUserCard(user) {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            <div class="user-info">
                <p class="username">${this.escapeHtml(user.username)}</p>
                <p class="user-id">${user.objectId}</p>
                <p class="user-role">Role: ${user.role}</p>
                <p class="created-at">${user.createdAt}</p>
            </div>
        `;
        return card;
    }

    /**
     * Build a post card element
     * @param {(id: string) => void} onClickHandler
     * @param {Post} post
     * @param {User} [user]
     * @param {PostStat} [stat]
     * @returns {HTMLElement}
     */
    static buildPostCard(onClickHandler, post, user, stat) {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-image-wrapper">
                <img src="${this.escapeHtml(post.image)}" alt="${this.escapeHtml(post.title)}" class="post-image">
            </div>
            <div class="post-content">
                <h3 class="post-title">${this.escapeHtml(post.title)}</h3>
                <p class="post-author">By ${this.escapeHtml(user?.username || 'Unknown')}</p>
                <p class="post-created">${post.createdAt}</p>
            </div>
            <div class="post-stats">
                <span class="likes">❤️ ${stat?.numLikes || 0}</span>
                <span class="comments">💬 ${stat?.numComments || 0}</span>
                <span class="downloads">⬇️ ${stat?.numDownloads || 0}</span>
            </div>
        `;
        card.addEventListener('click', () => onClickHandler(post.objectId))


        return card;
    }

    /**
     * Build a post card element
     * @param {(id: string) => void} onClickHandler
     * @param {PostDetailed} post
     * @param {User} [user]
     * @param {PostStat} [stat]
     * @returns {HTMLElement}
     */
    static buildDetailedPostCard(onClickHandler, post, user, stat, code) {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-image-wrapper">
                <img src="${this.escapeHtml(post.image)}" alt="${this.escapeHtml(post.title)}" class="post-image">
            </div>
            <div class="post-content">
                <h3 class="post-title">${this.escapeHtml(post.title)}</h3>
                <p class="post-author">By ${this.escapeHtml(user?.username || 'Unknown')}</p>
                <p class="post-created">${post.createdAt}</p>
            </div>
            <div class="post-stats">
                <span class="likes">❤️ ${stat?.numLikes || 0}</span>
                <span class="comments">💬 ${stat?.numComments || 0}</span>
                <span class="downloads">⬇️ ${stat?.numDownloads || 0}</span>
            </div>
            <pre><code>${code}</code></pre>
        `;
        card.addEventListener('click', () => onClickHandler(post.objectId))


        return card;
    }

    /**
     * Build a posts list from Posts object
     * @param {Posts} postsData
     * @param {(id: string) => void} onClickHandler
     * @returns {HTMLElement}
     */
    static buildPostsList(postsData, onClickHandler) {
        const container = document.createElement('section');
        container.className = 'posts-list';

        postsData.posts.forEach(post => {
            const user = postsData.users.find(u => u.objectId === post.user);
            const stat = postsData.postStats.find(s => s.post === post.objectId);
            const postCard = this.buildPostCard(onClickHandler, post, user, stat);
            container.appendChild(postCard);
        });

        return container;
    }

    /**
     * Escape HTML to prevent XSS
     * @param {string} text
     * @returns {string}
     */
    static escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

export default UiBuilder;