import { axios } from '@/lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const deletePlan = (planId: string) => {
  return axios.delete(
    `/v1/gyms/b6ef37ab-1095-44e2-8b73-eaa1555d4df5/plans/${planId}`,
  );
};

export const useDeletePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (planId: string) => deletePlan(planId),
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
