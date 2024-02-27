import { GetPlanResponseDTO } from '@/features/plans';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getPlan = ({
  gymId,
  planId,
}: {
  gymId: string;
  planId: string;
}): Promise<GetPlanResponseDTO> => {
  return axios.get(`/v1/gyms/${gymId}/plans/${planId}`);
};

const planResponse: GetPlanResponseDTO = {
  status: 'Suceess',
  message: '',
  data: [
    {
      id: '13425465gdfsaf456',
      name: 'Plan Name',
      price: 100,
      durationInMoths: 12,
      createdAt: '2022-02-20T12:00:00Z',
      updatedAt: '2022-02-20T12:00:00Z',
      deleted: null,
      gymId: 'lhresuhhsoi34839879',
    },
  ],
};

type UsePlanOptions = {
  planId: string;
};
export const usePlan = ({ planId }: UsePlanOptions) => {
  console.log(planResponse);
  return useQuery({
    queryKey: ['plan', planId],
    queryFn: () =>
      getPlan({ gymId: 'b6ef37ab-1095-44e2-8b73-eaa1555d4df5', planId }), // pass an object with gymId and planId
  });
};
