import React, { createContext, useState } from "react";
// Context 생성
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
// 로그인 함수
const login = (userInfo) => setUser(userInfo);
// 로그아웃 함수
const logout = () => setUser(null);
return (
<AuthContext.Provider value={{ user, login, logout }}>
{children}
</AuthContext.Provider>
);
}
export default AuthContext;
