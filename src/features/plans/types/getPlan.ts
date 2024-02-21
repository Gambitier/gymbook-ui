import { APIResponse } from '@/types/api';

export type GetPlanResponse = {
  id: string;
  name: string;
  price: number;
  durationInMoths: number;
  createdAt: string;
  updatedAt: string;
  deleted: null;
  gymId: string;
};

export type GetPlanResponseDTO = APIResponse<GetPlanResponse[]>;
