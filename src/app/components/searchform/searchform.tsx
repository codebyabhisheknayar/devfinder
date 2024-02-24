// components/SearchForm.tsx
import React from 'react';

interface SearchFormProps {
    inputValue: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
   
}

const SearchForm: React.FC<SearchFormProps> = ({
    inputValue,
    onInputChange,
    onSubmit,
}) => (
    <form onSubmit={onSubmit}>
              <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="#07f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input
                type="search"
                id="search" autoComplete = "off"
                className="block w-full p-4 h-16 ps-14 text-sm text-gray-50  rounded-xl bg-secondary focus:border-transparent focus:ring-0 outline-none"
                placeholder="Search"
                value={inputValue}
                onChange={onInputChange}
                required
            />
            <button type="submit" className=" text-slate-50 absolute end-2.5 bottom-2.5 bg-[#07f] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3">Search</button>
        </div>
    </form>
);

export default SearchForm;
