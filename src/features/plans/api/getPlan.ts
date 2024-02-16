import { CreatePlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const getPlan = (gymId: string): Promise<CreatePlanResponseDTO[]> => {
  return axios.get(`/v1/gyms/${gymId}/plans`);
};

type QueryFnType = typeof getPlan;

export const usePlan = () => {
  return useQuery<QueryFnType>({
    queryKey: ['plans'],
    queryFn: () => getPlan,
  });
};
