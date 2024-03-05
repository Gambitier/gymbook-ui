import { axios } from '@/lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const deletePlan = (gymId: string, planId: string) => {
  return axios.delete(`/v1/gyms/${gymId}/plans/${planId}`);
};

export const useDeletePlan = (gymId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (planId: string) => deletePlan(gymId, planId),
    onSuccess: () => {
      console.log('deleted successfully');
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
