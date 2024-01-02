import { DarkThemeToggle } from 'flowbite-react'; // Import DarkThemeToggle component
import { useState } from 'react'; // Import useState hook

const DarkModeButton = () => {
        /*  */

        //LIGHT/DARK MODE CODE STARTS HERE
        const [mode, setMode] = useState('light');
        // set the mode based on the browser mode
        useState(() => {
          const handleModeChange = (event) => {
            const browserMode = event.matches ? 'dark' : 'light';
            setMode(browserMode);
          };
    
          const browserModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
          browserModeQuery.addEventListener('change', handleModeChange);
    
          // Set the initial mode based on the browser mode
          handleModeChange(browserModeQuery);
                // Clean up the event listener when the component unmounts
      return () => {
        browserModeQuery.removeEventListener('change', handleModeChange);
      };
    }, []);

    const [theme, setTheme] = useState('light'); // Add state for theme

    const toggleTheme = () => { // Add function to toggle theme
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <DarkThemeToggle theme={theme} toggleTheme={toggleTheme} />
    );
};

export default DarkModeButton;