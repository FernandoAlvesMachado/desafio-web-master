'use client'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import React, { useState } from 'react';




export default function FormCreate() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        const auth = getAuth();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, {
                displayName: displayName
            });

            alert('Conta criada com sucesso!');
            setEmail('');
            setPassword('');
            setDisplayName('');
        } catch (error) {
            alert([error]);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="shadow-2xl w-96 relative rounded-3xl sm:max-w-xl sm:mx-auto">
                <div className="relative bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center space-x-5 justify-center">
                            <div className="text-start w-full gap-2 flex flex-col">
                                <strong className="text-2xl text-blue-500">
                                    Seja bem Vindo!
                                </strong>
                                <p>Preencha os campos para criar a conta!</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-5">
                                <label
                                    className="font-semibold text-sm text-gray-600 pb-1 block"
                                    htmlFor="displayName"
                                >
                                    Nome do Usuário
                                </label>
                                <input
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                    type="text"
                                    id="displayName"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    required
                                />
                                <label
                                    className="font-semibold text-sm text-gray-600 pb-1 block"
                                    htmlFor="login"
                                >
                                    Email
                                </label>
                                <input
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                    type="email"
                                    id="login"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label
                                    className="font-semibold text-sm text-gray-600 pb-1 block"
                                    htmlFor="password"
                                >
                                    Senha
                                </label>
                                <input
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mt-5">
                                <button
                                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                    type="submit"
                                >
                                    Criar conta
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>
                            <a
                                className="text-xs text-gray-700 uppercase  hover:underline"
                                href="/"
                            >
                                Ou entre agora
                            </a>
                            <span className="w-1/5 border-b border-gray-400 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
