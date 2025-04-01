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
        <div>
            <h2>Budgets</h2>
            <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} placeholder="Montant" />
            <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} />
            <button onClick={createBudget}>Ajouter</button>
            <ul>
                {budgets.map((b) => <li key={b.id}>{b.amount}€ - {b.month}</li>)}
            </ul>
        </div>
    );
}