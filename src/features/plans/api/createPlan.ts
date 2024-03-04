import { CreatePlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import { queryClient as libQueryClient } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type CreatePlanRequestDTO = {
  name: string;
  price: number;
  durationInMoths: number;
};

const createPlan = (
  gymId: string,
  data: CreatePlanRequestDTO,
): Promise<CreatePlanResponseDTO> => {
  return axios.post(`/v1/gyms/${gymId}/plans`, data);
};

export const useCreatePlan = () => {
  const queryClient = useQueryClient(libQueryClient);

  return useMutation({
    mutationFn: (input: { gymId: string; data: CreatePlanRequestDTO }) => {
      const { gymId, data } = input;
      return createPlan(gymId, data);
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
