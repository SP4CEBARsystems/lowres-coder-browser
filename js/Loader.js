class Loader {
    /**
     * Load JSON data from a single route
     * @param {string} route - The URL/path to the JSON file
     * @param {string|number} [id] - Optional ID to append to the route
     * @returns {Promise<Object>} Parsed JSON object
     */
    static async fetchRoute(route, id) {
        try {
            const isIdDefined = id !== undefined && id !== null && id !== "";
            const fullRoute = isIdDefined ? `${route}/${id}` : route;
            const response = await fetch(fullRoute);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(`Failed to load from ${route}:`, error);
            throw error;
        }
    }

    /**
     * Load JSON data from multiple routes
     * @param {string[]} routes - Array of URLs/paths to JSON files
     * @returns {Promise<Object[]>} Array of parsed JSON objects
     */
    static async fetchRoutes(routes) {
        try {
            const promises = routes.map(route => this.fetchRoute(route));
            return await Promise.all(promises);
        } catch (error) {
            console.error('Failed to load multiple routes:', error);
            throw error;
        }
    }

    /**
     * Load JSON data from multiple routes
     * @param {string} route - The URL/path to the JSON file
     * @param {(string|number)[]} ids - Array of IDs to append to the route
     * @returns {Promise<Object[]>} Array of parsed JSON objects
     */
    static async fetchIds(route, ids) {
        try {
            const promises = ids.map(id => this.fetchRoute(route, id));
            return await Promise.all(promises);
        } catch (error) {
            console.error('Failed to load multiple routes:', error);
            throw error;
        }
    }
}
