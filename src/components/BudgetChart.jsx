import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function BudgetChart() {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        fetchBudgets();
    }, []);

    async function fetchBudgets() {
        const { data } = await supabase.from('budgets').select('*');
        setBudgets(data || []);
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <h2 className="text-xl font-semibold">Budgets par Mois</h2>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={budgets}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#4f46e5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}