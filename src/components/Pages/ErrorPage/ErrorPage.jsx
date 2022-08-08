import React from "react";
import { Footer } from "../../../components";

function ErrorPage() {
  return (
    <div className="page">
      <header className="header-container nav">
        <p className="page2-header">ErrorPage</p>
      </header>
      <main className="main">
        <div className="main-container">
          <h2>404! Page not found</h2>
        </div>
      </main>

      <Footer url="/" btnText="Back to Home" icon="left" />
    </div>
  );
}

export { ErrorPage };
