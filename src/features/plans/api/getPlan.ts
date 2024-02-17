import { CreatePlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const getPlan = (gymId: string): Promise<CreatePlanResponseDTO[]> => {
  return axios.get(`/v1/gyms/${gymId}/plans`);
};

export const usePlan = () => {
  return useQuery({
    queryKey: ['plans'],
    queryFn: () => getPlan('8a8e1f18-6696-4bb1-8934-376c81aad7a8'),
  });
};
