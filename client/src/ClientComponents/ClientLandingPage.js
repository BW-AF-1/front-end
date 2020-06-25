import React from "react";
import { Link } from "react-router-dom";
import ClientPage from "./ClientPage";
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
