import CardCount from "@/components/CardCount";
import Layout from "@/components/Layout";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const index = () => {
  const [totalEntries, setTotalEntries] = useState<number | null>(null);
  useEffect(() => {
    async function fetchTotalEntries() {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await axios.get(`http://localhost:5000/students`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          const data = await response.data;
          const totalCount = data.length;
          setTotalEntries(totalCount);
        } else {
          throw new Error("API request failed");
        }
      } catch (error) {
        console.error("Failed to count entries from the API:", error);
      }
    }

    fetchTotalEntries();
  }, []);
  return (
    <Fragment>
      <Layout>
        <CardCount cardData={totalEntries} title="Students" />
      </Layout>
    </Fragment>
  );
};

export default index;

