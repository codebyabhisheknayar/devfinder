// services/GitHubService.ts
export const fetchSearchResults = async (value: string): Promise<any[]> => {
    try {
        if (value.trim() !== '') {
            const limit = 7;
            const req = await fetch(`https://api.github.com/search/users?q=${value}&per_page=${limit}`);

            if (!req.ok) {
                throw new Error(`HTTP error! Status: ${req.status}`);
            }

            const result = await req.json();
            return result.items;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
};

export const fetchUserData = async (username: string): Promise<any | null> => {
    try {
        const req = await fetch(`https://api.github.com/users/${username}`);

        if (!req.ok) {
            throw new Error(`HTTP error! Status: ${req.status}`);
        }

        return await req.json();
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};
