<?php

namespace App\Http\Controllers;

use App\Models\Post;
// use App\Http\Requests\StorePostRequest;
// use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->paginate(5);
        return inertia('Home', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // sleep(2);
        $user = Auth::user();
        $fields = $request->validate([
            "body" => ['required', 'min:3']
        ]);
        $fields['author'] = $user->id;
        // dd($fields);
        Post::create($fields);
        // dd($request);
        return redirect('/posts');
    }

    /** Render a Post
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return inertia("Show", ['post' => $post]);
    }

    /** GET edit Form
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return inertia('Edit', ['post'=> $post]);
    }

    /** PUT Post
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        // sleep(1);
        // dd($post);
        $fields = $request->validate([
            "body" => ['required', 'min:3']
        ]);
        $post->update($fields);
        // dd($request);
        return redirect('/posts')->with('success', 'The post was updated');
    }

    /** DELETE Post
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        // dd($post);
        $post->delete();
        return redirect('/posts')->with('message', 'The post was deleted');
    }
}
