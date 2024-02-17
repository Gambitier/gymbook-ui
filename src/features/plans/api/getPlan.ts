import { CreatePlanResponse } from '@/features/plans';
import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const getPlan = (): Promise<CreatePlanResponse[]> => {
  return axios.get(`/v1/gyms/b6ef37ab-1095-44e2-8b73-eaa1555d4df5/plans`);
};

type QueryFnType = typeof getPlan;

export const usePlan = () => {
  return useQuery<QueryFnType>({
    queryKey: ['plans'],
    queryFn: () => getPlan,
  });
};
