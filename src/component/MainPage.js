import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../component/Test.css";

function MainPage(props) {
  https: return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        총 유저수 : {props.유저값.length}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {props.유저값.map((person) => (
          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://occ-0-32-448.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcVHye6Z3QnZK_ivJwn6GwJLTz-ewJCAVH-sbSynfE2qFMmQU0ZDTEVvbZvPHdYefYIu8FnD9TVXXuxIJ5mf4y_nqzTkxowujxTtgQgXUlzCytuDBStcMomhuFS4qa7Z7o31aQ.jpg?r=bcc"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <Link
                to={`/user/${person.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <a className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {person.username}
                  </p>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPage;
