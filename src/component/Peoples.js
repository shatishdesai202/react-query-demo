import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import People from "./People";

const planentsAPI = async () => {
  const { data } = await axios.get("https://swapi.dev/api/people/");
  return data.results;
};

const Peoples = () => {
  const { isLoading, error, data } = useQuery("peopleAPI", planentsAPI);

  console.log(data);

  return (
    <div className="content">
      {isLoading && <div>Loading...</div>}

      {error && <div>{JSON.stringify(error)}</div>}

      {!isLoading &&
        data &&
        data.map((item, index) => (
          <div key={index}>
            <People person={item} />
          </div>
        ))}
    </div>
  );
};

export default Peoples;
