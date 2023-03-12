import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ClientPage() {
  const { clientId } = useParams();
  const [clientData, setClientData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/clients/${clientId}`);
      const data = await response.json();
      setClientData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="navbar bg-base-300">
        <Link
          to="https://epowerx.ai/"
          className="btn btn-ghost normal-case text-xl"
        >
          Home
        </Link>
      </div>
      <div className="min-h-[500px] bg-base-200">
        <div className="flex flex-col justify-between lg:flex-row-reverse">
          <img
            src={"https://github.com/Skyhero-alt.png"}
            className="max-w-sm rounded-lg shadow-2xl m-20"
          />
          <div className="m-20 flex justify-center items-center flex-col w-full">
            <h1 className="text-5xl font-bold mt-10">{clientData.name}</h1>
            <p className="py-6 text-3xl">{clientData.valuePropositionHeader}</p>
            <p className="py-6 text-xl">
              {clientData.valuePropositionSubheader}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-base-200 p-10">
        <div className="carousel w-3/4 mx-auto">
          <iframe
            src={clientData.videoGallery}
            className="w-full h-screen max-h-[500px]"
          ></iframe>
        </div>
        <p className="text text-lg mt-20 text-left m-10">
          {clientData.explanationText}
        </p>
      </div>
    </div>
  );
}

export default ClientPage;
