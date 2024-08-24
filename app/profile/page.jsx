'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Profile from '@components/Profile';

export default function MyProfile() {
    const router = useRouter();
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('fire');
        console.log(session);
        const fetchPosts = async () => {
            const response = await fetch(
                `/api/users/${session?.user.id}/posts`
            );
            const data = await response.json();
            console.log('response', response);
            console.log('data', data);
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const handleEdit = () => {};

    const handleDelete = () => {};

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
}
