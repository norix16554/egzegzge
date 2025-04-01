// src/components/Auth.jsx
import { supabase } from '../utils/supabaseClient'
import { useState } from 'react'

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const login = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) setError(error.message)
        else window.location.reload()
    }

    return (
        <div>
            <h2>Connexion</h2>
            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="mot de passe" onChange={e => setPassword(e.target.value)} />
            <button onClick={login}>Se connecter</button>
            {error && <p>{error}</p>}
        </div>
    )
}
