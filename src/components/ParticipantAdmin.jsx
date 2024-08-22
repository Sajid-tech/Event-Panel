/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Participants from "./Participants";
import Layout from "../Layout/Layout";
import BASE_URL from "../config/baseUrl";

//sajid-particpants
const ParticipantAdmin = () => {
  const [participant, setParticipant] = useState([]);
  const [loading, setLoding] = useState(false);

  const { isPanelUp } = useContext(Context);
  const naviagte = useNavigate();

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        if (!isPanelUp) {
          naviagte("/maintenance");
          return;
        }

        setLoding(true);

        const response = await axios.get(`${BASE_URL}/api/panel-fetch-idcard`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
          },
        });
        // Check if the response has the expected structure
        if (response.data && response.data.registeridcard) {
          setParticipant(response.data.registeridcard);
          // console.log("participantsdata", response.data.registeridcard);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };
    fetchParticipants();
    setLoding(false);
  }, [1]);

  return (
    <Layout>
      <main className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold md:text-2xl">
            Participants List
          </h1>
        </div>
        <div>
          {/* <div className="flex flex-col items-center gap-1 text-center"></div> */}
          {loading ? (
            <div className="flex justify-center items-center h-full text-gray-500">
              Loading...
            </div>
          ) : (
            <Participants participant={participant} />
          )}
        </div>
      </main>
    </Layout>
  );
};

export default ParticipantAdmin;
