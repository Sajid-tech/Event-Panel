import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../config/baseUrl";
import Card from "./Card"; // Import the Card component

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isPanelUp } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        if (!isPanelUp) {
          navigate("/maintenance");
          return;
        }

        setLoading(true);

        const response = await axios.get(
          `${BASE_URL}/api/panel-fetch-dashboard/202425`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
            },
          }
        );
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
    setLoading(false);
  }, [isPanelUp, navigate]);

  //   if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="p-4 md:p-8">
        <header className="border-b border-gray-200 bg-gray-50 mb-6 shadow-md rounded-md">
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Welcome, AG Solution
                </h1>
                <p className="mt-1.5 text-sm text-gray-500">
                  Overview of printing statistics for the current period.
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-6">
          {loading ? (
            <div className="flex justify-center items-center h-full text-gray-500">
              Loading...
            </div>
          ) : dashboardData ? (
            <>
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Today Print</h2>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Card
                    title="Current Day Print"
                    value={dashboardData.current_day_printing_count}
                  />
                  <Card
                    title="One Day Back Print"
                    value={dashboardData.one_day_back_printing_count}
                  />
                  <Card
                    title="Two Days Back Print"
                    value={dashboardData.two_day_back_printing_count}
                  />
                </div>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Print Sum</h2>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Card
                    title="Current Day Sum"
                    value={dashboardData.current_day_printing_sum}
                  />
                  <Card
                    title="One Day Back Sum"
                    value={dashboardData.one_day_back_printing_sum}
                  />
                  <Card
                    title="Two Days Back Sum"
                    value={dashboardData.two_day_back_printing_sum}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Total Print</h2>
                <div className="flex flex-wrap gap-4">
                  <Card
                    title="Total Print Count"
                    value={dashboardData.total_printing_count}
                  />
                  <Card
                    title="Total Print Sum"
                    value={dashboardData.total_printing_sum}
                  />
                </div>
              </section>
            </>
          ) : (
            <div className="flex justify-center items-center h-full text-gray-500">
              No data available
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
