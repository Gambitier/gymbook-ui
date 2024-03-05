import { APIResponse } from '@/types/api';

type GetGymResponse = {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  deleted: null;
};

export type GetGymResponseDTO = APIResponse<GetGymResponse[]>;
