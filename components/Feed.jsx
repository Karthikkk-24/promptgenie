'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';

export default function Feed() {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);

    const handleSearchChange = (e) => {};

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();

            setPosts(data);
            console.log('data', data);
        };

        fetchPosts();
    }, []);

    const PromptCardList = ({ data, handleTagClick }) => {
        return (
            <div className="mt-16 prompt_layout">
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="feed">
            <form
                action=""
                className="relative w-full flex items-center justify-center"
            >
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    className="search_input peer"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                />
            </form>

            <PromptCardList data={posts} handleTagClick={() => {}} />
        </section>
    );
}
