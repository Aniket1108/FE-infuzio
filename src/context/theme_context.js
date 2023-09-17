const { createContext } = require('react');
const ThemeContext = createContext({
    theme: '',
    setTheme: (theme) => { },
});

module.exports = {
    ThemeContext,
};