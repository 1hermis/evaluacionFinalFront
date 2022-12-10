import { useEffect,useState } from "react";
import { createContext } from "react";

export const ContextoGlobal = createContext(undefined)

export const ContextoProvider = ({children}) => {
    const [equipo, setEquipo] = useState([])
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data) => setEquipo(data) );
       
    },[])
    console.log(equipo);

    return (
        <ContextoGlobal.Provider value={equipo}>
          {children}
        </ContextoGlobal.Provider>
      );
}