import axios from "axios";
import {  ImageProps } from "../../types";
import getConfig from "next/config";
export const { publicRuntimeConfig } = getConfig();


export const fetchData = async (link : any) => {
    const key = publicRuntimeConfig.UNSPLASH_ACCESS_KEY;
    const { data } = await axios.get(`https://api.unsplash.com/${link}&client_id=${key}`);
    console.log("data", data);
    const typedDate: ImageProps[] = data;
    return typedDate
}