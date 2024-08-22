import React, { useContext, useEffect, useState } from "react";
import Register from "./Register";
import axios from "axios";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import BASE_URL from "../config/baseUrl";

//sajid
const Admin = () => {
  const [registerations, setRegisterations] = useState([]);
  const [loading, setLoding] = useState(false);

  const { isPanelUp } = useContext(Context);
  const naviagte = useNavigate();

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        if (!isPanelUp) {
          naviagte("/maintenance");
          return;
        }

        setLoding(true);

        const response = await axios.get(
          `${BASE_URL}/api/panel-fetch-register`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
            },
          }
        );
        // Check if the response has the expected structure
        if (response.data && response.data.registerData) {
          setRegisterations(response.data.registerData);
          console.log("registerdata", registerations);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
        console.log(registerations);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };
    fetchRegistrations();
    setLoding(false);
  }, []);

  return (
    <Layout>
      <main className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold md:text-2xl">
            Registration List
          </h1>
        </div>
        <div>
          {/* <div className="flex flex-col items-center gap-1 text-center"></div> */}

          <Register registerations={registerations} />
        </div>
      </main>
    </Layout>
  );
};

export default Admin;
