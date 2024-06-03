import { createContext, useReducer } from "react";
import { userReducer, initialState } from "./UserReducer";

export const UserContext = createContext(null);
export const UserDispatchContext = createContext(null)


export function UserProvider({children}) {
    const [user, dispatch] = useReducer(userReducer, initialState)
    console.log(user.User)

    return (
        <UserContext.Provider value={user.User}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}



