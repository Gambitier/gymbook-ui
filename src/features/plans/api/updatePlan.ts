import { CreatePlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

type UpdatePlanRequestDTO = {
  name: string;
  price: number;
  durationInMoths: number;
};

const updatePlan = (
  planId: string,
  gymId: string,
  data: UpdatePlanRequestDTO,
): Promise<CreatePlanResponseDTO> => {
  return axios.put(`/v1/gyms/${gymId}/plans/${planId}`, data);
};

export const useUpdatePlan = () => {
  return useMutation({
    mutationFn: (input: {
      planId: string;
      gymId: string;
      data: UpdatePlanRequestDTO;
    }) => {
      const { planId, gymId, data } = input;
      return updatePlan(planId, gymId, data);
    },
  });
};
