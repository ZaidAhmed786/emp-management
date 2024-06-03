// hooks/api/PostHook.js
import { useState } from 'react';

function UsePostData(url) {
    const [isLoading, setIsLoading] = useState(false); 
    
    const postData = async (data) => {
        setIsLoading(true); 
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result.status)
            if (!result.status === "success") {
                return result.message || 'Failed to post data';
            }

            return result;
        } catch (error) { 
            return error.message;
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, postData };
}

export default UsePostData;
