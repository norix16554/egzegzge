import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function AccountManager() {
    const [accounts, setAccounts] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('joint');

    useEffect(() => {
        fetchAccounts();
    }, []);

    async function fetchAccounts() {
        const { data } = await supabase.from('accounts').select('*');
        setAccounts(data || []);
    }

    async function createAccount() {
        await supabase.from('accounts').insert([{ name, type }]);
        setName('');
        fetchAccounts();
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <h2 className="text-xl font-semibold">Comptes</h2>
            <input className="border rounded p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom du compte" />
            <select className="border rounded p-2 w-full" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="joint">Joint</option>
                <option value="personal">Personnel</option>
            </select>
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full" onClick={createAccount}>Créer un compte</button>
            <ul className="mt-2 space-y-1">
                {accounts.map((a) => <li key={a.id} className="text-sm text-gray-700">{a.name} ({a.type})</li>)}
            </ul>
        </div>
    );
}