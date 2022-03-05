import React from "react";
import EventList from "../components/EventList";
import EventFilters from "../components/EventFilters";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FamousCard from './FamousCard';
const Dashboard = () => (
  <div>
    <EventFilters />
    <div className="card">
      <div className="blog-card">
        {/* <EventList /> */}
        < EventCard />
      </div>{" "}
      <div className="famous-card"> {/* <FamousCard/> */} </div>{" "}
      <EventCard />
      {true && (
          <Link to="/add" className="button-floating">
          {" "}
          <button>
            {" "}
            <FontAwesomeIcon icon={faPlus} />
          </button>{" "}
        </Link>
      )}{" "}
    </div>
  </div>
);

export default Dashboard;
