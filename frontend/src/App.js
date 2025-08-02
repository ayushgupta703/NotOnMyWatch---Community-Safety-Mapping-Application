import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="card home-card">
      <h2>👁️‍🗨️ Welcome to NotOnMyWatch</h2>
      <p className="home-intro">
        <b>NotOnMyWatch</b> is a real-time harassment logging and safety mapping
        app designed to empower individuals and communities to report,
        visualize, and respond to incidents of harassment. By leveraging
        geolocation and mapping technology, we aim to make public spaces safer
        for everyone.
      </p>
      <div className="home-actions">
        <a href="/log" className="primary-btn">
          Log an Incident
        </a>
        <a href="/map" className="secondary-btn">
          View Map
        </a>
      </div>
      <section className="home-section">
        <h3 className="section-title">How It Works</h3>
        <ol className="section-list">
          <li>
            <b>Log an Incident:</b> Use our simple form to report harassment or
            unsafe situations. You can enter details and use your current
            location for accuracy.
          </li>
          <li>
            <b>Real-Time Location:</b> The app uses geolocation to pinpoint
            where incidents occur, helping others stay informed about local
            safety.
          </li>
          <li>
            <b>Safety Map:</b> All reported incidents are visualized on a live
            map as a heatmap, showing hotspots and trends in your area.
          </li>
          <li>
            <b>Community Impact:</b> Your reports help others make safer choices
            and raise awareness about harassment in public spaces.
          </li>
        </ol>
      </section>
      <section className="home-section">
        <h3 className="section-title">Why Use NotOnMyWatch?</h3>
        <ul className="section-list">
          <li>
            🔒 <b>Anonymous & Secure:</b> Your privacy is our priority. Reports
            are stored securely and anonymously.
          </li>
          <li>
            🌍 <b>Community-Driven:</b> Every report helps build a safer
            environment for all.
          </li>
          <li>
            📊 <b>Data-Driven Insights:</b> Visualize safety trends and make
            informed decisions about your surroundings.
          </li>
          <li>
            🚨 <b>Take Action:</b> Empower yourself and others to respond to and
            prevent harassment.
          </li>
        </ul>
      </section>
      <section className="home-section">
        <h3 className="section-title">FAQ</h3>
        <ul className="section-list">
          <li>
            <b>Is my report anonymous?</b> Yes, we do not collect any personal
            information.
          </li>
          <li>
            <b>Can I use the app on mobile?</b> Absolutely! The app is
            mobile-friendly and works in your browser.
          </li>
          <li>
            <b>How is my data used?</b> Data is only used to generate safety
            maps and trends for the community.
          </li>
          <li>
            <b>Do I need to create an account?</b> No account is required to log
            incidents or view the map.
          </li>
        </ul>
      </section>
      <section className="home-section">
        <h3 className="section-title">Our Mission</h3>
        <p>
          We believe everyone deserves to feel safe in public spaces.
          NotOnMyWatch harnesses the power of community and technology to shine
          a light on harassment, promote accountability, and foster safer
          neighborhoods. Join us in making a difference—one report at a time.
        </p>
      </section>
    </div>
  );
}

function LogIncident() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!category || !description || !location) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/incidents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          description,
          location
        })
      });
      if (!response.ok) {
        throw new Error("Failed to submit report. Please try again.");
      }
      setSubmitted(true);
      setCategory("");
      setDescription("");
      setLocation("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h2>🚨 Log an Incident</h2>
      <p style={{ marginBottom: "1rem" }}>
        Please use this form to report any harassment or unsafe situation you
        experience or witness. Your report is anonymous and helps make your
        community safer. You can enter the location manually or use your current
        location.
      </p>
      <form
        style={{ maxWidth: "400px", margin: "1rem 0" }}
        onSubmit={handleSubmit}
      >
        <label>
          <b>Category:</b>
          <br />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={error && !category ? "input-error" : ""}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "6px",
              marginTop: "0.3rem",
              marginBottom: "1rem",
            }}
          >
            <option value="">Select category</option>
            <option value="harassment">Harassment</option>
            <option value="theft">Theft</option>
            <option value="unsafe_area">Unsafe Area</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          <b>Description:</b>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={error && !description ? "input-error" : ""}
            placeholder="Describe the incident (e.g., what happened, who was involved, etc.)"
            rows={4}
            style={{ width: "100%" }}
          />
        </label>
        <br />
        <br />
        <label>
          <b>Location:</b>
          <br />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={error && !location ? "input-error" : ""}
            placeholder="Enter address, landmark, or area"
            style={{ width: "100%" }}
          />
        </label>
        <br />
        {/* Optionally, implement geolocation here */}
        {/* <button
          type="button"
          style={{ margin: "0.5rem 0 1rem 0", background: "#2b2d42" }}
        >
          📍 Use My Current Location
        </button> */}
        <br />
        <button type="submit" style={{ padding: "0.5rem 1rem" }} disabled={loading}>
          {loading ? <span className="button-spinner" aria-label="Loading"></span> : "Submit Report"}
        </button>
      </form>
      {error && (
        <div className="feedback-message error">
          <span className="icon" role="img" aria-label="Error">❌</span>
          {error}
        </div>
      )}
      {submitted && (
        <div className="feedback-message">
          <span className="icon" role="img" aria-label="Success">✅</span>
          Thank you! Your report has been submitted.
        </div>
      )}
      <ul style={{ fontSize: "0.97rem", color: "#444" }}>
        <li>Do not include personal information in your description.</li>
        <li>All reports are anonymous and reviewed for accuracy.</li>
        <li>Thank you for helping make your area safer!</li>
      </ul>
    </div>
  );
}

function MapPage() {
  const [filter, setFilter] = useState("all");
  const safetyTips = [
    "Stay aware of your surroundings and avoid poorly lit areas at night.",
    "Share your location with a trusted friend when traveling alone.",
    "Trust your instincts—if something feels off, seek help or change your route.",
    "Report suspicious activity to local authorities or through this app.",
    "Keep your phone charged and accessible in case of emergency.",
  ];
  const randomTip = safetyTips[Math.floor(Math.random() * safetyTips.length)];
  return (
    <div className="card map-card">
      <h2>🗺️ Safety Map</h2>
      <p className="map-intro">
        Explore the real-time safety map below. Each hotspot represents areas
        where harassment or unsafe incidents have been reported. Use this map to
        stay informed and make safer choices about your routes and destinations.
      </p>
      <div className="map-filter">
        <label>
          <b>Filter by category:</b>{" "}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="map-filter-select"
          >
            <option value="all">All</option>
            <option value="harassment">Harassment</option>
            <option value="theft">Theft</option>
            <option value="unsafe_area">Unsafe Area</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <div className="map-placeholder">
        <span>Google Maps heatmap will be displayed here.</span>
      </div>
      <div className="map-legend">
        <b>Legend:</b>
        <ul className="map-legend-list">
          <li>
            <span className="legend-dot high"></span> High incident density
          </li>
          <li>
            <span className="legend-dot moderate"></span> Moderate incident density
          </li>
          <li>
            <span className="legend-dot low"></span> Low incident density
          </li>
        </ul>
      </div>
      <div className="map-tip">
        <b>Safety Tip:</b> <span className="tip-text">{randomTip}</span>
      </div>
      <p className="map-help">
        Want to help?{' '}
        <b>
          <a href="/log" className="map-link">
            Log an incident
          </a>
        </b>{' '}
        to make your community safer for everyone.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="main-nav">
        <span className="nav-logo">
          <span role="img" aria-label="logo" className="nav-logo-icon">
            🛡️
          </span>
          NotOnMyWatch
        </span>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/log" className="nav-link">
            Log Incident
          </Link>
          <Link to="/map" className="nav-link">
            Map
          </Link>
        </div>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log" element={<div className="log-incident-wrapper"><LogIncident /></div>} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
