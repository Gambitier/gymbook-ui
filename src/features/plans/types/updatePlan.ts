import { APIResponse } from '@/types/api';

export type UpdatePlanResponse = {
  id: string;
  name: string;
  price: number;
  durationInMoths: number;
  createdAt: string;
  updatedAt: string;
  deleted: null;
  gymId: string;
};

export type UpdatePlanResponseDTO = APIResponse<UpdatePlanResponse>;
