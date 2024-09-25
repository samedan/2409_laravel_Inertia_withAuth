<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
    // return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/about', function () {
    return Inertia::render('About/About');
    // return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('about');

Route::get('/posts',[PostController::class, 'index'])->middleware(['auth', 'verified'])->name('posts');
Route::get('/posts/create',[PostController::class, 'create'])->middleware(['auth', 'verified'])->name('posts.create');
Route::post('/posts',[PostController::class, 'store'])->middleware(['auth', 'verified'])->name('posts.store');
Route::get('/posts/{post}',[PostController::class, 'show'])->middleware(['auth', 'verified'])->name('posts.show');
Route::get('/posts/{post}/edit',[PostController::class, 'edit'])->middleware(['auth', 'verified'])->name('posts.edit');
Route::put('/posts/{post}',[PostController::class, 'update'])->middleware(['auth', 'verified'])->name('posts.update');
Route::delete('/posts/{post}',[PostController::class, 'destroy'])->middleware(['auth', 'verified'])->name('posts.destroy');



// Route::get('/posts',[PostController::class, 'index']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Route::get('/home', [PostController::class, 'index'] );
    // Route::resource('posts', PostController::class)->except('index');
    // Route::get('/about', function () {
    //     return inertia('About/About');
    // });
});

// GET /
// Route::get('/', [PostController::class, 'index']);



require __DIR__.'/auth.php';
