import React, {createContext, useState, ReactNode} from 'react';

type TextContextType = {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}


export const TextContext = createContext<TextContextType | undefined>(undefined);

type TextProviderProps = {
    children: ReactNode;
}

export function TextProvider({children}: TextProviderProps) {
    const [text, setText] = useState<string>('');
    
    return (
        <TextContext.Provider value={{text, setText}}>
            {children}
        </TextContext.Provider>
    )
}