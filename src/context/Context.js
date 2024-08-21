import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext()

const AppProvider = ({ children }) => {

    const [isPanelUp, setIsPanelUp] = useState(true);

    useEffect(() => {
        const checkPanelStatus = async () => {
            try {
                const response = await axios.get(
                    "https://southindiagarmentsassociation.com/api/panel-check-status"
                );
                const data = response.data
                if (response.status === 200) {
                    setIsPanelUp(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        checkPanelStatus();
    }, []);



    return (
        <Context.Provider value={{ isPanelUp, setIsPanelUp }}>
            {children}
        </Context.Provider>
    )
}

export default AppProvider