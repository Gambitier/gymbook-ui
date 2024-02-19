import { APIResponse } from '@/types/api';

type GetPlanResponse = {
  id: string;
  name: string;
  price: number;
  durationInMoths: number;
  createdAt: Date;
  updatedAt: Date;
  deleted: null;
  gymId: string;
};

export type GetPlanResponseDTO = APIResponse<GetPlanResponse>;
