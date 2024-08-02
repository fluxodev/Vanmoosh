import { useContext } from "react";

import { authContext } from "src/contexts/AuthContext";

export function useAuth() {
    const contextData = useContext(authContext);

    return contextData;
}