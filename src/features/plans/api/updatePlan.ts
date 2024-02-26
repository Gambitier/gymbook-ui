import { CreatePlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: {
      planId: string;
      gymId: string;
      data: UpdatePlanRequestDTO;
    }) => {
      const { planId, gymId, data } = input;
      return updatePlan(planId, gymId, data);
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ['plans'] });
      }
    },
  });
};
