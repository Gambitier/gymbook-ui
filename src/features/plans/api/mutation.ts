import { CreatePlanRequestDTO, createPlan } from './createPlan';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreatePlan = (gymId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreatePlanRequestDTO) => createPlan(gymId, data),
    onMutate: () => {
      console.log('mutate');
    },
    onError: () => {
      console.log('error');
    },
    onSuccess: () => {
      console.log('success');
    },
    onSettled: async (_, error) => {
      console.log('settled');
      if (error) {
        console.log('error');
      } else {
        await queryClient.invalidateQueries({ queryKey: ['gyms'] });
      }
    },
  });
};
