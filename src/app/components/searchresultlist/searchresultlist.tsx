// components/SearchResultList.tsx
import React from 'react';
import Image from 'next/image';

interface SearchResultListProps {
    suggestionData: any[];
    onSuggestionClick: (user: any) => void;
}

const SearchResultList: React.FC<SearchResultListProps> = ({ suggestionData, onSuggestionClick }) => (
    <ul className="suggestions z-10 absolute w-full bg-accent text-slate-300">
        {suggestionData && suggestionData.length > 0 && suggestionData.map((user, index) => (
            <li className='cursor-pointer hover:bg-blue border-solid py-3 px-4 border-b-secondary hover:text-slate-50 border-b' key={index} onClick={() => onSuggestionClick(user)}
            >
                <div className="flex items-center gap-3">
                    <div>
                        <Image className="rounded-full border-2 border-slate-300 w-12 h-12"
                            src={user.avatar_url}
                            width={55}
                            height={55}
                            alt={user?.login}></Image>
                    </div>
                    <div>{user.login}</div>
                </div>

            </li>
        ))}
    </ul>
);

export default SearchResultList;
