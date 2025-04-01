import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function GroupManager() {
    const [groups, setGroups] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetchGroups();
    }, []);

    async function fetchGroups() {
        const { data } = await supabase.from('groups').select('*');
        setGroups(data || []);
    }

    async function createGroup() {
        await supabase.from('groups').insert([{ name }]);
        setName('');
        fetchGroups();
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <h2 className="text-xl font-semibold">Groupes</h2>
            <input className="border rounded p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom du groupe" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" onClick={createGroup}>Créer un groupe</button>
            <ul className="mt-2 space-y-1">
                {groups.map((g) => <li key={g.id} className="text-sm text-gray-700">{g.name}</li>)}
            </ul>
        </div>
    );
}
