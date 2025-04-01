import { useState, useEffect } from 'react';
import { supabase } from './utils/supabaseClient';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import './index.css';

export default function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <Layout>
            {!session ? <Auth /> : <Dashboard session={session} />}
        </Layout>
    );
}