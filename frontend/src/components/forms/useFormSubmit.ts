import { useState } from 'react';
import { API_BASE_URL } from '../../config/api';

interface UseFormSubmitProps {
  endpoint: string;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useFormSubmit({ endpoint, onSuccess, onError }: UseFormSubmitProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (data: any) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let errorMessage = 'Ошибка при отправке';
        
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          const textError = await response.text();
          errorMessage = textError || errorMessage;
        }
        
        throw new Error(errorMessage);
      }

      const result = await response.json();

      if (result.success) {
        onSuccess?.(result.data);
      } else {
        throw new Error(result.message || 'Произошла ошибка');
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Произошла ошибка';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, error, setError };
}