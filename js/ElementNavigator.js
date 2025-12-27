export default class ElementNavigator {
    /** 
     * @type {ElementNavigator|undefined}
     */
    static myNavigator;

    /**
     * 
     * @param {string} postListId 
     * @param {string} postDetailsId 
     */
    constructor(postListId, postDetailsId) {
        this.postList = document.getElementById(postListId);
        this.postDetails = document.getElementById(postDetailsId);
        this.hideClassName = 'hide';
    }
    
    toPostList() {
        this.postDetails?.classList.add(this.hideClassName);
        this.postList?.classList.remove(this.hideClassName);
    }

    toPostDetails() {
        this.postList?.classList.add(this.hideClassName);
        this.postDetails?.classList.remove(this.hideClassName);
    }
}