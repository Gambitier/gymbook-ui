import { axios } from '@/lib/axios';
import { useQueries } from '@tanstack/react-query';

export type CreatePlanRequestDTO = {
  name: string;
  price: number;
  durationInMoths: number;
};

export const createPlan = (gymId: string, data: CreatePlanRequestDTO) => {
  return axios.post(`/v1/gyms/${gymId}/plans`, data);
};

export const fetchPlans = (gymId: string) => {
  return axios.get(`/v1/gyms/${gymId}/plans`);
};

export const usePlans = (gymId: (string | undefined)[] | undefined) => {
  return useQueries({
    queries: (gymId ?? []).map((id) => {
      return {
        queryKey: ['gyms', id, 'plans'],
        queryFn: () => (id ? fetchPlans(id) : undefined),
      };
    }),
  });
};
