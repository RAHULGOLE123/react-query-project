/* eslint-disable no-undef */
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchPosts } from "../API/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber], // useState
    queryFn: () => fetchPosts(pageNumber), // useEffect
    placeholderData: keepPreviousData,
    // refetchInterval: 1000, // refetch data every second
    // refetchIntervalInBackground: true, // refetch data in the background
  });

  // mutation function  to delete a post
  const deleteMutaion useMutation ({
    mutationFn: (id) => deletePost(id),
  });

  
  
  // Conditional rendering based on loading, error, and posts data
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p> Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
              <button onClick={ () => deleteMutaion.mutate(id)}>delete</button>
             
            </li>
          );  
        })}
      </ul>

      <div className="pagination-section container">
        <button
          disabled={pageNumber === 0 ? true : false} //ternary operator
          onClick={() => setPageNumber((prev) => prev - 3)}
        >
          Prev
        </button>
        <p>{pageNumber / 3 + 1}</p>
        <button onClick={() => setPageNumber((prev) => prev + 3)}>Next</button>
      </div>
    </div>
  );
};