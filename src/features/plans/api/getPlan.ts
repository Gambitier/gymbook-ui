import { UpdatePlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const getPlan = ({
  gymId,
  planId,
}: {
  gymId: string;
  planId: string;
}): Promise<UpdatePlanResponseDTO> => {
  return axios.get(`/v1/gyms/${gymId}/plans/${planId}`);
};

type UsePlanOptions = {
  planId: string;
};
export const usePlan = ({ planId }: UsePlanOptions) => {
  return useQuery({
    queryKey: ['plan', planId],
    queryFn: () =>
      getPlan({ gymId: 'b6ef37ab-1095-44e2-8b73-eaa1555d4df5', planId }),
  });
};
