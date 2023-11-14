// create fetcher
type Fetcher = (
  url?: string | undefined,
  options?: FetcherOptions | undefined
) => Promise<any>; // type of fetcher

// define fetcher options type
type FetcherOptions = {
  method?: string;
  headers?: any;
  body?: any;
};

export const fetcher: Fetcher = async (
  url?: string,
  options?: FetcherOptions | undefined
) => {
  if (!url) {
    throw new Error("URL is required");
  }
  try {
    const res = await fetch("https://fakestoreapi.com" + url, options);
    if (res.ok) {
      return res.json(); // Parse JSON from the response
    } else {
      // If the response status is not ok, handle error here
      const errorMessage = await res.text();
      throw new Error(errorMessage);
    }
  } catch (error: any) {
    console.error(error); // Log any fetch errors
    throw error; // Rethrow the error for the calling code to handle
  }
};
