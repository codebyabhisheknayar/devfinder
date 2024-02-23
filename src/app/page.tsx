'use client';

import React, { useEffect, useState } from 'react';
import SearchForm from './components/searchform/searchform';
import SearchResultList from './components/searchresultlist/searchresultlist';
import UserDetails from './components/userdetails/userdetails';
import { fetchSearchResults, fetchUserData } from './services/api-services';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestionData, setSuggestionData] = useState<any[]>([]);
  const [data, setData] = useState<any | null>(null);
  // const token = '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';

  useEffect(() => {
    if (inputValue.trim() !== '') {
      fetchSearchResults(inputValue)
        .then(results => setSuggestionData(results))
        .catch(error => console.error('Error fetching search results:', error));
    } else {
      setSuggestionData([]);
    }
  }, [inputValue]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleSuggestionClick = (user: any) => {
    setInputValue(user.login);
    setSuggestionData([]);
    fetchUserData(user.login)
      .then(userData => setData(userData))
      .catch(error => console.error('Error fetching user data:', error));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuggestionData([]);

    if (inputValue.trim() !== '') {
      await fetchUserData(inputValue)
        .then(userData => setData(userData))
        .catch(error => console.error('Error fetching user data:', error));
    }

    console.log('Form submitted with value:', inputValue);
  };

  return (
    <main className="flex  max-w-3xl mx-auto flex-col justify-between p-2">
      <div className="logo font-bold text-white mb-4 text-xl">
        devfinder
      </div>
      <div className='w-full relative'>
        <SearchForm
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          suggestionData={suggestionData}
          onSuggestionClick={handleSuggestionClick}
        />
        <SearchResultList suggestionData={suggestionData} onSuggestionClick={handleSuggestionClick} />
        <UserDetails data={data} />
      </div>
    </main>
  );
};

export default Home;
