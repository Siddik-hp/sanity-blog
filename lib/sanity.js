import { createClient, createCurrentUserHook } from "next-sanity";
import { config } from "./config";
import createImageUrlBuilder from "@sanity/image-url";
export const sanityClient = createClient(config);
// image accease
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
