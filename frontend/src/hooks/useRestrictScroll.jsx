import { useEffect } from 'react';

function useRestrictScroll() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
}

export default useRestrictScroll;