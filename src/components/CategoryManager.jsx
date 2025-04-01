import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function CategoryManager() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('expense');

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        const { data } = await supabase.from('categories').select('*');
        setCategories(data || []);
    }

    async function createCategory() {
        await supabase.from('categories').insert([{ name, type }]);
        setName('');
        fetchCategories();
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <h2 className="text-xl font-semibold">Catégories</h2>
            <input className="border rounded p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom de la catégorie" />
            <select className="border rounded p-2 w-full" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="expense">Dépense</option>
                <option value="income">Revenu</option>
            </select>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded w-full" onClick={createCategory}>Créer une catégorie</button>
            <ul className="mt-2 space-y-1">
                {categories.map((c) => <li key={c.id} className="text-sm text-gray-700">{c.name} ({c.type})</li>)}
            </ul>
        </div>
    );
}