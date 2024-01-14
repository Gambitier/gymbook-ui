import { PlanAPIResponse } from '@/types/api/planAPI';

export type CreatePlanResponse = {
  id: string;
  name: string;
  price: number;
  durationInMoths: number;
  createdAt: Date;
  updatedAt: Date;
  deleted: null;
  gymId: string;
};

export type CreatePlanResponseDTO = PlanAPIResponse<CreatePlanResponse>;
