import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function BudgetManager() {
    const [budgets, setBudgets] = useState([]);
    const [amount, setAmount] = useState(0);
    const [month, setMonth] = useState('');

    useEffect(() => {
        fetchBudgets();
    }, []);

    async function fetchBudgets() {
        const { data } = await supabase.from('budgets').select('*');
        setBudgets(data || []);
    }

    async function createBudget() {
        await supabase.from('budgets').insert([{ amount, month }]);
        setAmount(0);
        setMonth('');
        fetchBudgets();
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <h2 className="text-xl font-semibold">Budgets</h2>
            <input type="number" className="border rounded p-2 w-full" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} placeholder="Montant" />
            <input type="month" className="border rounded p-2 w-full" value={month} onChange={(e) => setMonth(e.target.value)} />
            <button className="bg-purple-500 text-white px-4 py-2 rounded w-full" onClick={createBudget}>Ajouter</button>
            <ul className="mt-2 space-y-1">
                {budgets.map((b) => <li key={b.id} className="text-sm text-gray-700">{b.amount}€ - {b.month}</li>)}
            </ul>
        </div>
    );
}