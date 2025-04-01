import GroupManager from './GroupManager';
import AccountManager from './AccountManager';
import CategoryManager from './CategoryManager';
import TransactionManager from './TransactionManager';
import BudgetManager from './BudgetManager';
import ExportCSV from './ExportCSV';
import TransactionTable from './TransactionTable';
import BudgetChart from './BudgetChart';

export default function Dashboard() {
    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">💰 Gestion de Budget</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GroupManager />
                <AccountManager />
                <CategoryManager />
                <TransactionManager />
                <BudgetManager />
                <ExportCSV />
            </div>
            <TransactionTable />
            <BudgetChart />
        </div>
    );
}