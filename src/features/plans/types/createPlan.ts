import { APIResponse } from '@/types/api';

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

export type CreatePlanResponseDTO = APIResponse<CreatePlanResponse>;
