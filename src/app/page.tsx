'use client';

import React, { useCallback, useEffect, useState } from 'react';

import { fetchSearchResults, fetchUserData } from './services/api-services';
import ThemeSwitcher from './components/theme-provider/themeswitcher';

import SearchForm from './components/searchform/searchform';
import SearchResultList from './components/searchresultlist/searchresultlist';
import UserDetails from './components/userdetails/userdetails';



const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestionData, setSuggestionData] = useState<any[]>([]);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const fetchSearchResultsDebounced = useCallback(
    debounce(async (value: string) => {
      if (value.trim() !== '' && (!selectedUser || value !== selectedUser)) {
        try {
          const results = await fetchSearchResults(value);
          setSuggestionData(results);
        } catch (error) {
          handleApiError(error);
        }
      } else {
        setSuggestionData([]);
      }
    }, 500),
    [selectedUser]
  );

  useEffect(() => {
    fetchSearchResultsDebounced(inputValue);
  }, [inputValue, fetchSearchResultsDebounced]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleSuggestionClick = (user: any) => {
    setInputValue(user.login);
    setSuggestionData([]);
    setError(null);
    setSelectedUser(user.login);
    fetchUserData(user.login)
      .then(userData => setData(userData))
      .catch(error => {
        console.error('Error fetching user data:', error);
        handleApiError(error);
      });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuggestionData([]);
    setError(null);
    if (inputValue.trim() !== '') {
      await fetchUserData(inputValue)
        .then(userData => setData(userData))
        .catch(error => {
          console.error('Error fetching user data:', error);
          handleApiError(error);
        });
    }
  };

  function debounce(func: Function, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return function (this: any, ...args: any[]) {
      const context = this;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
  }

  const handleApiError = (error: any) => {
    if (error) {
      setError('An error occurred while fetching data. Please try again later.');
    }
  };

  return (
    <main className="flex h-fit lg:h-screen  max-w-2xl mx-auto  items-center justify-center">
      <div className="w-full flex-col justify-between p-2 px-4">
        <div className="logo mb-5 flex items-center justify-between">
          <div className='font-bold text-xl text-white'>
            devfinder
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
        <div className='w-full relative'>
          <SearchForm
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
          {error && <div className='text-md text-red-500 '>{error}</div>}
          <SearchResultList suggestionData={suggestionData} onSuggestionClick={handleSuggestionClick} />
          <UserDetails data={data} />
        </div>
      </div>
    </main>
  );
};

export default Home;
