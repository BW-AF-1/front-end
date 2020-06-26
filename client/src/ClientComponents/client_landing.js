import React from "react";
import { Link } from "react-router-dom";
import ClientPage from "./Client_Page";
import { Button } from "reactstrap";

function ClientLandingPage() {
  return (
    <>
      <div className="LogIn">
        <ClientPage />
      </div>
    </>
  );
}

export default ClientLandingPage;
