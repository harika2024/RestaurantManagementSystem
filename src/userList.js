import React, { useState } from 'react'
import axios from 'axios'
import jwt from 'jwt-decode'
// import { Button } from '@mui/material'

export default function UserList(props) {
    const [email, createMail] = useState("")
    const [password, createPass] = useState("")
    // let d = 0
    const clicked = async () => {
        //     // e.preventDefault()
        //     // const post = { email, password }
        try {
            const res = await axios.get('http://localhost:5000/users')
            let d = parseInt(res.data.length)
            createMail(d)
        }


        // }
        catch (e) { }
    }
    clicked()
    // const res = await axios.post(`http://localhost:5000/register`, { email, password })
    //     .then(res => {
    //         const token = res.data.token;
    //         const user = jwt(token); // decode your token here
    //         console.log(user)
    //         localStorage.setItem('secret', token);
    //         // dispatch(actions.authSuccess(token, user));
    //     })
    // console.log(res)
    // console.log(res.data)

    // .catch(err => {
    //     // dispatch(actions.loginUserFail());
    //     console.log(err)
    // });
    // }

    // let hi = clicked()

    return (
        <div className="container mt-2">
            <h2>React HTTP Post Request Example</h2>
            <h2>{email}</h2>

            {/* <form onSubmit={onSubmit}>
                <div className="mb-2 mt-3">
                    <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        onChange={(event) => {
                            createMail(event.target.value)
                        }}
                        value={email}
                    />
                    <input
                        type="text"
                        placeholder="password"
                        className="form-control"
                        onChange={(event) => {
                            createPass(event.target.value)
                        }}
                        value={password}
                    />
                </div>
                <button type="submit" className="btn btn-danger">
                    Create
                </button>
            </form> */}
        </div>
    )
}