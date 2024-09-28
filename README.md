### Source Youtube :

https://youtu.be/Q6SO5bV5DLk?si=Rfoi4rHbuhcNRK2c&t=590

### GitHub Source :

https://github.com/JonVadar/YouTube_videos

### This Git :

https://github.com/samedan/2409_laravel10_InertiaJS_React

> php artisan serve
> npm run dev

### Install Laravel, React, InertiaJS, TailwindCSS

## InertiaJS

> Server: https://inertiajs.com/server-side-setup
> Laravel 1 Middleware : app\Http\Kernel file: 'web' => [ ... \App\Http\Middleware\HandleInertiaRequests::class, ],

> ClientSide : https://inertiajs.com/client-side-setup

### relative path to folders = aliases

> vite.config.js -> resolve: { alias: {}}

### Apply Layout to Home

> Home.jsx -> Home.layout = (page) => <Layout children={page} />;
> or defaultLayout : app.jsx -> page.default.layout =...

## preserveScroll, progressIndicator

> app.js

### Models & Controllers

> php artisan make:model Post -a

### Create Routes

> php artisan route:list

## Create data

> PostFactory.php , DatabaseSeeder.php, php artisan db:seed

### Paginate

> PostController.php, Home.jsx

### Create Form

> https://inertiajs.com/forms

## Named Routes with Ziggy

> https://github.com/tighten/ziggy
> import @routes in app.blade.php

### Flash Messages

> ![FlashMessage](https://github.com/samedan/2409_laravel10_InertiaJS_React/blob/main/public/images/printscreen1.jpg)

> https://inertiajs.com/shared-data
> /app/http/middleware/HandleInertiaRequests.php -> share(Add flash data)

> Send message in PostController(destroy) ->with('message')
> retrieve message in Home.jsx const { flash } = usePage().props;

### Stronger Password

> RegisteredUserController.php rules()
