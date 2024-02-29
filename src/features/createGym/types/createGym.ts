import { APIResponse } from '@/types/api';

type CreateGymResponse = {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: null;
};

export type CreateGymResponseDTO = APIResponse<CreateGymResponse>;
