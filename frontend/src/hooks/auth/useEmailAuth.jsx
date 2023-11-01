import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

function useEmailAuth() {
    const { currentUser, error, signIn, signOut } = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (currentUser) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [currentUser]);

    const handleEmailSignIn = async (email, password) => {
        try {
            await signIn(email, password);
        } catch (error) {
            // Handle error
            console.error("Email sign-in error:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            // Handle error
            console.error("Sign out error:", error);
        }
    };

    return {
        isAuthenticated,
        currentUser,
        handleEmailSignIn,
        handleSignOut,
        error
    };
}

export default useEmailAuth;