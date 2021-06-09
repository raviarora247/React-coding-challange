import React from "react";
import Head from "next/head";
import { BounceLoader, RiseLoader } from "react-spinners";
import { Waypoint } from "react-waypoint";
import { useSWRInfinite } from "swr";
import { fetchData } from "./api/axios";
import ImagesContainer from "../components/ImagesContainer";
import { FaReact } from "react-icons/fa";

const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `photos?page=${pageIndex + 1}`; // SWR key
};

const IndexPage: React.FC = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, fetchData);

  if (!data)
    return (
      <div className="c-loader">
        <BounceLoader color="#A576BA" size={30} />
      </div>
    );

  return (
    <div>
      <Head>
        <title>Coding Challenge</title>
        <meta
          name="React coding challenge"
          content="TechGuilds/React-coding-challange"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-page-wrapper">
        <div className="heading">
          TechGuilds - React Coding Challenge <FaReact />
        </div>
        <div
          className="gallery-wrapper container"
          data-testid="image-container"
        >
          <ImagesContainer imagesArray={data.flat()} />
        </div>
        <div className="c-loader">
          <Waypoint
            onEnter={() => {
              setSize(size + 1);
            }}
          />
          <RiseLoader color="#A576BA" size={15} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
