import { supabase } from '../utils/supabaseClient';

export default function ExportCSV() {
    async function exportCSV() {
        const { data } = await supabase.from('transactions').select('*');
        const csv = [Object.keys(data[0] || {}).join(','), ...data.map(row => Object.values(row).join(','))].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'transactions.csv';
        link.click();
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <h2 className="text-xl font-semibold">Export CSV</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded w-full" onClick={exportCSV}>Exporter les transactions</button>
        </div>
    );
}