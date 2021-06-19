<?php

use App\Http\Controllers\NoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('dashboard', function () {
    $payload = collect([
        ['name' => 'New component', 'url' => ''],
        ['name' => 'Angular material', 'url' => ''],
        ['name' => 'Add PWA Support', 'url' => ''],
        ['name' => 'Add Dependency', 'url' => ''],
        ['name' => 'Run and Watch Tests', 'url' => ''],
        ['name' => 'Build for production', 'url' => '']
    ]);

    return $payload->toJson();
});


Route::apiResource('notes', NoteController::class);
