import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ClientForm from './form';
import { useState } from 'react';
import { router } from '@inertiajs/react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus, UserPlus, Trash2, Mail } from "lucide-react"

export default function Index({ auth, clients }) {
    const [open, setOpen] = useState(false);
const handleDelete = (id) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
        router.delete(`/clients/${id}`, {
            onBefore: () => {
                // optional: tqder t-dir chi loading state hna
            },
            onSuccess: () => {
                // Tqder t-dir chi toast notification hna
            }
        });
    }
};
    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Gestion des Clients"
        >
            <Head title="Clients" />

            <div className="py-6 space-y-6">
                
                {/* Upper Bar: Title & Add Button */}
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-slate-800">Liste des Clients</h3>
                        <p className="text-sm text-slate-500">Gérez vos relations clients en un seul endroit.</p>
                    </div>

                    {/* POPUP DIALOG */}
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-200 gap-2">
                                <UserPlus className="w-4 h-4" />
                                Ajouter Client
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] border-none bg-transparent shadow-none">
                            {/* Handled onSuccess inside the form to close dialog */}
                            <ClientForm onSuccess={() => setOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </div>

                {/* TABLE CARD */}
                <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[2rem] shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50/50 border-b border-slate-100">
                                <tr>
                                    <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-slate-500">Nom du Client</th>
                                    <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-slate-500">Email</th>
                                    <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-slate-500 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {clients && clients.length > 0 ? (
                                    clients.map((client) => (
                                        <tr key={client.id} className="group hover:bg-indigo-50/30 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                                                        {client.name.charAt(0)}
                                                    </div>
                                                    <span className="font-bold text-slate-700">{client.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                    <Mail className="w-3 h-3" />
                                                    {client.email}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                               <button 
                                                    onClick={() => handleDelete(client.id)}
                                                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                    title="Supprimer"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="py-12 text-center">
                                            <div className="flex flex-col items-center gap-2 text-slate-400">
                                                <Plus className="w-10 h-10 opacity-20" />
                                                <p className="font-medium">Aucun client trouvé.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}