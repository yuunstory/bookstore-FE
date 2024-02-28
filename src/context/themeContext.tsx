import { createContext, ReactNode, useEffect, useState } from 'react';
import { getTheme, ThemeName } from '../style/theme';
import { GlobalStyle } from '../style/global';
import { ThemeProvider } from 'styled-components';

const DEFAULT_THEME_NAME = 'light';
const THEME_LOCALSTORAGE_KEY = 'book_store_theme';

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

export const state = {
  themeName: DEFAULT_THEME_NAME as ThemeName,
  toggleTheme: () => {},
};

//컨텍스트 생성 -> 하위 컴포넌트들이 컨텍스트를 구독하고 useContext 훅을 이용해 언제든지 그 안의 데이터들을 꺼내 사용할 수 있다.
export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME_NAME);

  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');

    // 토글을 클릭할 때(화면 전환될 때) 로컬스토리지에 저장하는 부분
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, themeName === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    //로컬스토리지 초기화하는 부분
    const savedThemeName = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as ThemeName;

    setThemeName(savedThemeName || DEFAULT_THEME_NAME);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
