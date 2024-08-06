import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequest } from "./Redux/actions";
import Loader from "./loader/Loader";
import "./Homepage.css"; // Import the CSS file

const Homepage = () => {
  const dispatch = useDispatch();
  const { data = [], loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  // if (loading && data.length === 0) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data:</h1>
      <div className="container">
        {data.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>{loading && <Loader />}</div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
