'use client';

import React, { useEffect, useState } from 'react';
import Image from  'next/image';
import styles from './navbar.module.css'
import Link from 'next/link'
import SignIn from "./sign-in"
import {onAuthStateChangedHelper} from '../firebase/firebase';
import { User } from 'firebase/auth';

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    });

    return (
        <nav className={styles.nav}>
            <Link href='/'>            
                <Image width={90} height={90}
                    src="/icon.svg" alt='Logo'/>
            </Link>
            <SignIn user={user}/>

        </nav>
    );
}