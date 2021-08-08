import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import Planet from "./Planet";

const planetsAPI = async (pageParam) => {
  console.log("pageParam", pageParam);
  // console.log("queryKey", queryKey[1]);
  // console.log(arg);
  // console.log(pageParam);
  const { data } = await axios.get(
    `https://swapi.dev/api/planets/?page=${pageParam}`
  );
  return data;
};

const Planets = () => {
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useQuery(
    ["planetsAPI", page],
    ({ queryKey }) => planetsAPI(queryKey[1]),
    {
      // staleTime: 1,
      // cacheTime: 0,
      // onSuccess: () => console.log("data fetched"),
      keepPreviousData: true,
    }
  );
  console.log("data", data);
  return (
    <div className="content">
      {/* <button onClick={() => setPage(1)}>page-1</button>
      <button onClick={() => setPage(2)}>page-2</button>
      <button onClick={() => setPage(3)}>page-3</button> */}

      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prev) => (!data.next ? prev : prev + 1))}
        disabled={page >= data && data.count / data.results.length}
      >
        Next
      </button>
      {isLoading && <div>Loading...</div>}

      {error && <div>{JSON.stringify(error)}</div>}

      {!isLoading &&
        data &&
        data.results.map((item, index) => (
          <div key={index}>
            <Planet planet={item} />
          </div>
        ))}
    </div>
  );
};

export default Planets;
