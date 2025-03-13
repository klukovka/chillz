import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Smth went wrong");
  }

  return responseData;
}

export default function useHttp(url, config, initialData) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setSubmitted(true);
      setIsLoading(true);
      setError(null);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "Smth went wrong");
      }

      setIsLoading(false);
    },
    [url, config]
  );

  function clearData() {
    setData(initialData);
  }

  useEffect(() => {
    if (config && (config.method === "GET" || !config.method)) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return { error, isLoading, data, sendRequest, clearData, submitted };
}
