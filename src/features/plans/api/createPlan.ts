import axios from 'axios';

export type CreatePlanRequestDTO = {
  name: string;
  price: number;
  durationInMoths: number;
};

export const createPlan = (gymId: string, data: CreatePlanRequestDTO) => {
  return axios.post(`/v1/gyms/${gymId}/plans`, data);
};
