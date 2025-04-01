import { supabase } from '../utils/supabaseClient';

export default function Layout({ children }) {
    const logout = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center shadow">
                <h1 className="text-2xl font-bold">Gestion Budget 🪙</h1>
                <button onClick={logout} className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">Déconnexion</button>
            </header>
            <main className="flex-1 p-6 bg-gray-100">
                {children}
            </main>
            <footer className="text-center text-sm text-gray-500 p-2">&copy; 2025 - Gestion Budget App</footer>
        </div>
    );
}