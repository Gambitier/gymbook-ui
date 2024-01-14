import { CreatePlanRequestDTO, createPlan } from './createPlan';
import { useQueries } from '@tanstack/react-query';

export const usePlans = (
  gymId: (string | undefined)[] | undefined,
  data: CreatePlanRequestDTO,
) => {
  return useQueries({
    queries: (gymId ?? []).map((id) => {
      return {
        queryKey: ['gyms', id, 'plans'],
        queryFn: () => (id ? createPlan(id, data) : undefined),
      };
    }),
  });
};
