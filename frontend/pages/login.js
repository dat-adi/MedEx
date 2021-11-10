import { useState } from 'react';

const login = () => {




    return (
        <div>
            <div class="flex items-center justify-center h-screen">
                <form class="block bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 block">
                    <h1 class="block text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pb-5">
                        <span class="block text-indigo-600 xl:inline">MedEx</span> 
                        <span class="block xl:inline"> Login</span>
                    </h1>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"/>
                    </div>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                    </div>
                    <div class="flex items-center justify-between">
                    <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Login
                    </button>
                    
                        Forgot Password?
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login
