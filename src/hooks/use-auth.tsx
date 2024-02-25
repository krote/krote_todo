import { Amplify } from "aws-amplify";
import React, { createContext, useContext, useEffect, useState } from "react";
import AwsConfigAuth from '../aws-config/auth';

Amplify.configure( { Auth: AwsConfigAuth });

interface UseAuth {
    isLoading: boolean;
    isAuthenticated: boolean;
    username: string;
    signUp: (username: string, password: string) => Promise<Result>;
    confirmSignUp: (verificationCode: string) => Promise<Result>;
    signIn: (username: string, password: string) => Promise<Result>;
    signOut: () => void;
}

interface Result {
    success: boolean;
    message: string;
}

export const ProvideAuth: React.FC = ( {children} ) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
    return useContext(authContext);
}

const useProvideAuth = (): UseAuth => {
    const [isLoading, setisLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
}


