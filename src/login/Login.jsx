import { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'
export default function Login() {
    const [avater, setAvater] = useState({
        file: null,
        url: ''
    })

    const handleAvater = (e) => {

        const file = e.target.files[0]
        if (!file) return
        const url = URL.createObjectURL(file)
        setAvater({ file, url })
    }

    const handleSumit = (e) => {
        e.preventDefault()
        toast.success('Login Success')
    }
    return (
        <div className='login'>
            <div className="item">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSumit}>
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an account </h2>
                <form onSubmit={handleSumit}>
                    <label htmlFor="file">
                        <img src={avater.url || './avatar.png'} alt="" />Upload an Image</label>
                    <input type="file" name="" id="file" className='hidden' onChange={handleAvater} />
                    <input type="text" placeholder='Username' name='username' />
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
