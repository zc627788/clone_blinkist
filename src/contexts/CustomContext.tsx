import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
} from "react";

// 创建上下文
interface ContextType {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<ContextType>({
  value: false,
  setValue: function (value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
});

// 自定义钩子，用于在组件中访问上下文
export const useMyContext = () => useContext(MyContext);

interface CustomContextProps {
  children: ReactNode;
}

export const CustomContextProvider = ({ children }: CustomContextProps) => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
