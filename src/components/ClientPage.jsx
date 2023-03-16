import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";

function ClientPage() {
  const { clientId } = useParams();
  const [clientData, setClientData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://expowerx-template-backend.onrender.com/clients/${clientId}`
      );
      const data = await response.json();
      setClientData(data);
      console.log(data);
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
            src={clientData.logoUrl}
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
        {/* <div className="grid grid-cols-3 p-5 gap-2 w-full">
          <div className="col-span-2 row-span-2">
            <iframe
              src="https://youtube.com/embed/8Xr9X6cbQ68"
              className="w-full h-screen max-h-[500px]"
            ></iframe>
          </div>

          <div className="row-span-6 col-span-1 h-full">
            <iframe
              src="https://youtube.com/embed/8Xr9X6cbQ68"
              className="w-full h-screen max-h-[500px]"
            ></iframe>
          </div>

          <div className="col-span-2 row-span-2">
            <iframe
              src="https://youtube.com/embed/8Xr9X6cbQ68"
              className="w-full h-screen max-h-[500px]"
            ></iframe>
          </div>
        </div> */}

        <div className="flex flex-wrap justify-between space-y-3 p-10">
          <div className="flex w-[60%]">
            <iframe
              src={clientData.videoGallery ? clientData.videoGallery[0] : null}
              className="w-full h-screen max-h-[500px]"
            ></iframe>
          </div>
          <div className="flex 1/4 h-full items-center">
            <iframe
              src={clientData.videoGallery ? clientData.videoGallery[2] : null}
              className="w-full h-screen max-h-[500px]"
            ></iframe>
          </div>
          <div className="flex w-[60%]">
            <iframe
              src={clientData.videoGallery ? clientData.videoGallery[1] : null}
              className="w-full h-screen max-h-[500px]"
            ></iframe>
          </div>
        </div>

        <p className="text text-lg mt-20 text-left m-10">
          {clientData.explanationText}
        </p>
      </div>

      <div>
        <InlineWidget
          className="bg-base-200"
          url="https://calendly.com/mdnouman/30min?hide_gdpr_banner=1&primary_color=fbbd23"
        />
      </div>
    </div>
  );
}

export default ClientPage;
