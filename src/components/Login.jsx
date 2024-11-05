import { useState, useContext} from "react"
import userContext from "../context/UserContext";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const{setUser} = useContext(userContext);
    function handleSubmit(e) {
        e.preventDefault()
        setUser({
            username: userName,
            password: password
        })         
    }
    return (
        <div>
            <input placeholder="username" type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
            <br></br>
            <input placeholder="password" type="text" onChange={(e)=>setPassword(e.target.value)} value={password} />
            <br></br>
            <br></br>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login