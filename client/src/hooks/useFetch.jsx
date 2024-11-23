import { useState } from "react"

export const useFetch = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetch = async () => {
    try {
      setLoading(true);
      await callback();
    } catch(err) {
      console.error('useFetch: ', err.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return [fetch, isLoading, error];
}