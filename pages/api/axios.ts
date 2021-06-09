import axios from "axios";
import {  ImageProps } from "../../types";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();



export const fetchData = async (link: string) => {
    const key = publicRuntimeConfig.UNSPLASH_ACCESS_KEY;
    const {data} = await axios.get(`https://api.unsplash.com/${link}&client_id=${key}`)
    const typedDate: ImageProps[] = data
    return typedDate
}