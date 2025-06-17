import React, { useState, useContext } from "react";
import AuthContext from "./AuthContext";
function LoginForm() {
const { login } = useContext(AuthContext);
const [name, setName] = useState("");
const handleLogin = () => {
login({ name, email: `${name}@example.com` });
};
return (
<div>
<input
type="text"
placeholder="이름 입력"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<button onClick={handleLogin}>로그인</button>
</div>
);
}
export default LoginForm;
