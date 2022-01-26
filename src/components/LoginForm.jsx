import { userState, useState } from 'react'
import axios from 'axios'


const projectID = "a08a8608-28d2-4b64-bda4-d194fcb86133" ;

const LoginForm = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('')
    const [error, setError] = useState ('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID' : "a08a8608-28d2-4b64-bda4-d194fcb86133", 'User-Name' : username, 'User-Secret' : password };
  console.log("abhi yhi hai")
        try {
           console.log('yha tak pahuch gya')
            await axios.get('https://api.chatengine.io/chats', { headers : authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.Location.reload();
            setError('');
        }
        catch(error) {
            console.log('error aa gai')
            setError('Oops, incorrect credentials.');
        }
        };

        return (
            <div className="wrapper">
                <div className="form">
                    <h1 className="title">Chat Application</h1>
                    <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span> Start Chatting</span>
                            </button>
                            </div>
                            <h2 className='error'>{error}</h2>
                            </form>
                            </div>
                            </div>
        );
        };  
        
        export default LoginForm;