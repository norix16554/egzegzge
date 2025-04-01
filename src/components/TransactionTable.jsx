import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function TransactionTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    async function fetchTransactions() {
        const { data } = await supabase.from('transactions').select('*').order('date', { ascending: false });
        setTransactions(data || []);
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-2 overflow-x-auto">
            <h2 className="text-xl font-semibold">Liste des Transactions</h2>
            <table className="w-full text-sm text-left">
                <thead>
                    <tr>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Libellé</th>
                        <th className="border p-2">Montant</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t) => (
                        <tr key={t.id}>
                            <td className="border p-2">{t.date}</td>
                            <td className="border p-2">{t.label}</td>
                            <td className="border p-2">{t.amount}€</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}