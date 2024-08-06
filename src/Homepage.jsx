import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequest } from "./Redux/actions";
import Loader from "./loader/Loader";
import "./Homepage.css"; 

const Homepage = () => {
  const dispatch = useDispatch();
  const { data = [], loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data:</h1>
      <div className="container">
        <div className="table-container">
          {data.length > 0 ? (
            <div className="flex-container">
              <div className="flex-header">
                <div className="col col-2">User Id</div>
                <div className="col col-2">ID</div>
                <div className="col col-5">Title</div>
                <div className="col col-3">Completed</div>
              </div>
              <div className="flex-body">
                {data.map((item) => (
                  <div key={item.id} className="flex-row">
                    <div className="col col-2">{item.userId}</div>
                    <div className="col col-2">{item.id}</div>
                    <div className="col col-5">{item.title}</div>
                    <div className="col col-3">
                      {item.completed ? "Yes" : "No"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>{loading && <Loader />}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
