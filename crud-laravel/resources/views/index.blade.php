<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">

    @vite('resources/css/app.css')
</head>

<body class="dark:bg-gray-800">
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-blue-500">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" class="flex items-center">
                <div class="text-3xl pr-2">
                    <i class="devicon-laravel-plain dark:text-white"></i>
                </div>
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CRUD Laravel</span>
            </a>
        </div>
    </nav>

    <div class="container justify-between items-center mx-auto py-4">
        <h1 class="text-3xl font-bold text-center dark:text-white mb-5">
            Crud Sederhana Menggunakan Laravel
        </h1>
        <form action="#" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label for="nama" class="block text-gray-700 text-sm font-bold mb-2">Nama</label>
                <input type="text" value=""
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label for="tgl" class="block text-gray-700 text-sm font-bold mb-2">Tempat/Tanggal Lahir</label>
                <input type="date" value=""
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label for="kelamin" class="block text-gray-700 text-sm font-bold mb-2">Jenis Kelamin</label>
                <select
                    class="block appearance-none w-full bg-white border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Select</option>
                    <option>Laki-Laki</option>
                    <option>Perempuan</option>
                </select>
            </div>
            <div class="mb-6">
                <label for="alamat" class="block text-gray-700 text-sm font-bold mb-2">Alamat</label>
                <input type="text" value=""
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="text-center">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Submit
                </button>
            </div>
        </form>
        <div class="mt-10">
            <div class="overflow-x-auto relative rounded">
                <table class="w-full ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-1">
                                No
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Nama
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Tempat/Tanggal Lahir
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Jenis Kelamin
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Alamat
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:text-white">
                            @foreach ($profile as $key => $value)
                                <th scope="row" class="py-4 px-1">
                                    Microsoft Surface Pro
                                </th>
                                <td class="py-4 px-6">
                                    {{ $value->nama }}
                                </td>
                                <td class="py-4 px-6">
                                    {{ $value->tanggal }}
                                </td>
                                <td class="py-4 px-6">
                                    {{ $value->kelamin }}
                                </td>
                                <td class="py-4 px-6">
                                    {{ $value->alamat }}
                                </td>
                            @endforeach
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </div>
</body>

</html>
