import { APIResponse } from '@/types/api';

type CreatePlanResponse = {
  id: string;
  name: string;
  price: number;
  durationInMoths: number;
  createdAt: Date;
  updatedAt: Date;
  deleted: null;
  gymId: string;
};

export type CreatePlanResponseDTO = APIResponse<CreatePlanResponse>;
