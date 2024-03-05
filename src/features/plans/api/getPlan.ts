import { UpdatePlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import storage from '@/utils/storage';
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
  const currentGymId = storage.getCurrentGymId();

  return useQuery({
    queryKey: ['plan', planId],
    queryFn: () => getPlan({ gymId: currentGymId, planId }),
  });
};
