<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //read
        return producto::all();
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //create
        Producto::create($request->all());
    }





    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producto $producto)
    {
        //
        Producto::findOrFail($request->id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        //
        Producto::findOrFail($producto->id)->delete();
    }
}
