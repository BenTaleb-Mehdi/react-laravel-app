import { useForm } from '@inertiajs/react';
import { Button } from "@/components/ui/button"
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, UserPlus } from "lucide-react"

export default function ClientForm({ onSuccess }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/clients', {
            onSuccess: () => {
                reset();
                if (onSuccess) onSuccess();
            },
        });
    };

    return (
        <div className="w-full bg-white p-7 rounded-xl"> {/* Light background white */}
            <CardHeader className="px-0 pt-0 pb-6">
                <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                        <UserPlus className="w-5 h-5 text-indigo-600" />
                    </div>
                    Nouveau Client
                </CardTitle>
                <CardDescription className="text-slate-500 font-medium">
                    Saisissez les coordonnées de votre nouveau client.
                </CardDescription>
            </CardHeader>
            
            <form onSubmit={submit} className="space-y-5">
                <CardContent className="px-0 space-y-4">
                    
                    {/* Nom Complet */}
                    <div className="grid w-full items-center gap-2">
                        <Label 
                            htmlFor="name" 
                            className="text-sm font-semibold text-slate-700"
                        >
                            Nom du client
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Mohammed Alami"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className={`h-11 rounded-lg border-slate-200 bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all ${
                                errors.name ? "border-red-500 shadow-sm shadow-red-50" : "focus:border-indigo-500"
                            }`}
                        />
                        {errors.name && (
                            <p className="text-[12px] font-medium text-red-500 italic">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="grid w-full items-center gap-2">
                        <Label 
                            htmlFor="email" 
                            className="text-sm font-semibold text-slate-700"
                        >
                            Adresse Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m.alami@entreprise.ma"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className={`h-11 rounded-lg border-slate-200 bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all ${
                                errors.email ? "border-red-500 shadow-sm shadow-red-50" : "focus:border-indigo-500"
                            }`}
                        />
                        {errors.email && (
                            <p className="text-[12px] font-medium text-red-500 italic">
                                {errors.email}
                            </p>
                        )}
                    </div>

                </CardContent>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-50">
                    <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => reset()}
                        disabled={processing}
                        className="rounded-lg border-slate-200 text-slate-600 hover:bg-slate-50 px-6"
                    >
                        Reset
                    </Button>
                    <Button 
                        type="submit" 
                        disabled={processing}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-8 shadow-sm shadow-indigo-200"
                    >
                        {processing ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            "Enregistrer"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}