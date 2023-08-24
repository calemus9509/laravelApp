<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;
use App\Http\Requests\ProductoRequest;

class ProductoController extends Controller
{
    public function __construct()
    {
        $this->middleware('acceso', ['only' => ['store', 'update', 'destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //read
        // trae todo
        // return producto::all()->where('estado', 'A');
        return producto::where('estado', 'A')->paginate(2);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductoRequest $request)
    {
        // //validate

        // Producto::create($request->validate([
        //     'nombre' => 'required|max:45',
        //     'cantidad' => 'required|numeric|min:2',

        //     'precio' => 'required|min:3|'
        // ]));

        // //create
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
        // Producto::findOrFail($producto->id)->delete(); elminar

        $producto = Producto::findOrFail($producto->id);
        $producto->estado = 'I';
        $producto->save();
    }
}
