
import { useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '../utils/auth';
import React from 'react';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading && !user) {
            console.log('Usuário não autenticado');
        }
    }, [user, loading]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return <>{user && children}</>;
};

export default ProtectedRoute;
