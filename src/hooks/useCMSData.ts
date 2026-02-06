// src/hooks/useCMSData.ts

import { useState, useEffect } from 'react';
import { apiService, HomePageData } from '../services/api';

interface UseCMSDataReturn {
  data: HomePageData | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

// Simple cache to prevent multiple API calls
const cache: { data: HomePageData | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useCMSData = (): UseCMSDataReturn => {
  const [data, setData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check cache first
      const now = Date.now();
      if (cache.data && now - cache.timestamp < CACHE_DURATION) {
        setData(cache.data);
        setLoading(false);
        return;
      }

      // Fetch fresh data
      const result = await apiService.getHomePageData();
      
      // Update cache
      cache.data = result;
      cache.timestamp = now;
      
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
      console.error('Error in useCMSData:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};