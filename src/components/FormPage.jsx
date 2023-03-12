import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function FormPage() {
  const [clientData, setClientData] = useState({
    companyName: "",
    pocName: "",
    pocDesignation: "",
    logoUrl: "",
    valuePropositionHeader: "",
    valuePropositionSubheader: "",
    explanationText: "",
    videoGallery: [],
  });

  useEffect(() => {}, []);

  const [clientUrl, setClientUrl] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClientData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/clients",
        JSON.stringify(clientData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setClientUrl(`http://localhost:5173/${response.data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

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
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <h1 className="text-5xl font-bold mt-20">Build client page</h1>
        <label className="label">
          <label className="label-text">Name:</label>
        </label>
        <input
          className="input input-bordered input-secondary w-full max-w-md"
          type="text"
          placeholder="Enter text"
          name="companyName"
          value={clientData.companyName}
          onChange={handleInputChange}
        />
        <label className="label">
          <label className="label-text">POC Name:</label>
        </label>
        <input
          className="input input-bordered input-secondary w-full max-w-md"
          type="text"
          placeholder="Enter text"
          name="pocName"
          value={clientData.pocName}
          onChange={handleInputChange}
        />
        <label className="label">
          <label className="label-text">POC Designation</label>
        </label>
        <input
          className="input input-bordered input-secondary w-full max-w-md"
          type="text"
          placeholder="Enter text"
          name="pocDesignation"
          value={clientData.pocDesignation}
          onChange={handleInputChange}
        />
        <label className="label">
          <label className="label-text">Logo URL:</label>
        </label>
        <input
          className="input input-bordered input-secondary w-full max-w-md"
          type="text"
          placeholder="Enter url"
          name="logoUrl"
          value={clientData.logoUrl}
          onChange={handleInputChange}
        />
        <label className="label">
          <label className="label-text">Header:</label>
        </label>
        <input
          className="input input-bordered input-secondary w-full max-w-md"
          type="text"
          placeholder="Enter text"
          name="valuePropositionHeader"
          value={clientData.valuePropositionHeader}
          onChange={handleInputChange}
        />
        <label className="label">
          <label className="label-text">Sub Header:</label>
        </label>
        <input
          className="input input-bordered input-secondary w-full max-w-md"
          type="text"
          placeholder="Enter text"
          name="valuePropositionSubheader"
          value={clientData.valuePropositionSubheader}
          onChange={handleInputChange}
        />
        <label className="label">
          <label className="label-text">Explanation Text:</label>
        </label>
        <textarea
          className="textarea textarea-secondary textarea-lg"
          name="explanationText"
          value={clientData.explanationText}
          onChange={handleInputChange}
          maxLength={1000}
        />
        <label className="label">
          <label className="label-text">Video Gallery:</label>
        </label>
        <input
          className="input input-bordered input-secondary w-full max-w-md"
          type="text"
          placeholder="Enter url"
          name="videoGallery"
          value={clientData.videoGallery}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-wide btn-accent mt-10">
          Submit
        </button>
      </form>

      {clientUrl && (
        <p className="mt-10 bg-blue-600 p-5 w-fit mx-auto rounded-2xl text-white">
          Custom URL for this client:{" "}
          <a href={clientUrl} target="_blank" rel="noopene`r noreferrer">
            {clientUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default FormPage;
