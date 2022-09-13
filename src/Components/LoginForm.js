import React from "react";
import { useState } from "react";
import Axios from "axios";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    let navigation = useNavigate();
    const cookie_key = 'namedOFCookie';
    const [name, setName] = useState("");
    const [pass, setPassword] = useState("");
    const [notice, setNotice] = useState([]);
    const loginUser = (e) => {
        e.preventDefault(); // not refresh
        Axios.post('http://localhost:8080/login', {
            name: name,
            pass: pass
        }).then((response) => {
            setNotice(response.data);
            bake_cookie(cookie_key, 'test');
            //delete_cookie(cookie_key);
            console.log(read_cookie(cookie_key));
        });
    }
    return (
        <div>
        

            <form>
                <div class="mb-3 pt-5">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input
                        type="text"
                        class="form-control"
                        id="username"
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />
                </div>
                <button class="btn btn-primary" onClick={loginUser}>Submit</button>
            </form>
            {(notice.message =="Wrong user") ? <p><a href="/">hellow</a></p> : ""}
            
        </div>
    );
}
export default LoginForm;