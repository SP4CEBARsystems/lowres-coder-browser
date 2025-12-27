import ElementNavigator from "./ElementNavigator.js";
import LowresApiReader from "./LowresApiReader.js";

document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello, DOM content loaded");
    const navigator = new ElementNavigator('post-list', 'post-details-container');
    ElementNavigator.myNavigator = navigator;
    document.getElementById('return-to-post-list-button')?.addEventListener('click', () => navigator.toPostList());
    const reader = new LowresApiReader();
});