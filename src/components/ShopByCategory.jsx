import { createClient } from "contentful";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [data, setData] = useState([]);

  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const fetchData = () =>
    client
      .getEntries({ content_type: "category" })
      .then((response) => {
        setData(response.items);
        // console.log(response);
      })
      .catch(console.error);

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <div className="pt-8">
      <h2 className="p-6 text-2xl">Shop by Category</h2>
      <div className="flex flex-row space-x-4 overflow-x-auto m-2">
        {data.map((eachData) => (
          <Link
            key={eachData.sys.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
            to={`/category/${eachData.sys.id}`}
          >
            <div>
              <img
                className="h-30"
                src={eachData.fields.image.fields.file.url}
                alt={eachData.fields.image.fields.file.fileName}
              />
              <div className="card-body">
                <h2 className="card-title">{eachData.fields.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ShopByCategory;
