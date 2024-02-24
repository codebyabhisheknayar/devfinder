import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeSwitcher: React.FC = () => {
    
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        console.log(theme);
    }, [theme]);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

        return (
            <button onClick={toggleTheme} className='flex text-xs items-center gap-1 font-medium'>
                {theme === 'light' ? (
                    <>
                        <span>LIGHT</span>
                        <Sun className="h-[1.2rem] ml-1 w-[1.2rem]" />
                    </>
                ) : (
                    <>
                        <span>DARK</span>
                            <Moon className="h-[1.2rem] ml-1 w-[1.2rem] transition-all" />
                    </>
                )}
            </button>
        );
};

export default ThemeSwitcher;
