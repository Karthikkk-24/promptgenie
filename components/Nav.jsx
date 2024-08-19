'use client';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
    const isLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        };
        setProviders();
    }, []);

    return (
        <nav className="flex justify-between w-full h-16 items-center px-8">
            <Link href={'/'} className="flex items-center gap-2 justify-center">
                <Image
                    src="/assets/images/logo.svg"
                    alt="PromptGenie Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text">PromptGenie</p>
            </Link>

            <div className="sm:flex hidden">
                {isLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href={'/create-prompt'} className="black_btn">
                            Create Post
                        </Link>
                        <button
                            type="button"
                            onClick={() => signOut()}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                        <Link href={'/profile'}>
                            <Image
                                src="/assets/images/logo.svg"
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="Profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))}
                    </>
                )}
            </div>

            {/* mobile navigation */}
            <div className="sm:hidden flex relative">
                {isLoggedIn ? (
                    <div className="flex">
                        <Image
                            src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="Profile"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))}
                    </>
                )}
            </div>
        </nav>
    );
}
