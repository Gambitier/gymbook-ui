import { CreatePlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

export type CreatePlanRequestDTO = {
  name: string;
  price: number;
  durationInMoths: number;
};

export const createPlan = (
  gymId: string,
  data: CreatePlanRequestDTO,
): Promise<CreatePlanResponseDTO> => {
  return axios.post(`/v1/gyms/${gymId}/plans`, data);
};

export const useCreatePlan = () => {
  return useMutation({
    mutationFn: (input: { gymId: string; data: CreatePlanRequestDTO }) => {
      const { gymId, data } = input;
      return createPlan(gymId, data);
    },
  });
};
