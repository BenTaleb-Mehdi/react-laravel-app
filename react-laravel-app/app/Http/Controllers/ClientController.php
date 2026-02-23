<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function index() {
    return inertia('Clients/Index', [
        'clients' => Client::all()
    ]);
}

public function store(Request $request) {
    $data = $request->validate([
        'name' => 'required',
        'email' => 'required|email',
    ]);
    Client::create($data);
    return redirect()->back();
}


public function destroy(Client $client) {
    $client->delete();
    return redirect()->back();
}
}
