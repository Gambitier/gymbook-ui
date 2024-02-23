import { Button } from '@/components/Elements';
import ConfirmationDialogue from '@/components/Elements/ConfirmationDialogue/ConfirmationDialogue';
import { Delete } from '@mui/icons-material';
import { useDeletePlan } from '../api/deletePlan';

type DeletePlanProps = {
  planId: string;
  gymId: string;
};
export const DeletePlan = ({ gymId, planId }: DeletePlanProps) => {
  const deletePlanMutation = useDeletePlan(gymId);
  const handleDeletePlan = () => {
    deletePlanMutation.mutate(planId);
  };
  return (
    <>
      <ConfirmationDialogue
        title="Delete Plan"
        body="Are you sure you want to delete this plan?"
        triggerButton={
          <Button color="error" startIcon={<Delete />}>
            Delete Plan
          </Button>
        }
        confirmButton={
          <Button onClick={() => handleDeletePlan()}>Delete Plan</Button>
        }
      />
    </>
  );
};
