type PlanAPIResponseStatus = 'Suceess';

export type PlanAPIResponse<T> = {
  status: PlanAPIResponseStatus;
  message: string;
  data: T;
};
