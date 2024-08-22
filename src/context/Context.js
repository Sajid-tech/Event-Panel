import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BASE_URL from "../config/baseUrl";

export const Context = createContext()


const AppProvider = ({ children }) => {

    const [isPanelUp, setIsPanelUp] = useState(true);
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()



    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkPanelStatus = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}/api/panel-check-status`
            );
            const datas = await response.data
            // console.log("data maintence", datas)
            setIsPanelUp(datas)
            if (datas?.success) {
                setError(false)

            } else {
                setError(true)
            }
        } catch (error) {
            setError(true)
        }
    };

    useEffect(() => {
        checkPanelStatus();
        const intervalId = setInterval(checkPanelStatus, 600)
        return () => clearInterval(intervalId)
    }, []);


    useEffect(() => {
        const token = localStorage.getItem('token')
        const currentPath = location.pathname

        if (error) {
            localStorage.clear();
            navigate('/maintenance');
        } else if (isPanelUp?.success) {
            if (token) {
                if (currentPath === '/participants' || currentPath === '/admin' || currentPath === '/dashboard') {
                    navigate(currentPath)
                } else {
                    navigate('/dashboard')
                }
            } else {
                if (currentPath === '/') {
                    navigate('/');
                } else {
                    navigate('/'); // Redirect to login if no token is present
                }
            }
        }
    }, [error, navigate, isPanelUp, location.pathname])



    return (
        <Context.Provider value={{ isPanelUp, setIsPanelUp }}>
            {children}
        </Context.Provider>
    )
}

export default AppProvider