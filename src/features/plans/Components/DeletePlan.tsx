import { Button } from '@/components/Elements';
import ConfirmationDialogue from '@/components/Elements/ConfirmationDialogue/ConfirmationDialogue';
import { Delete } from '@mui/icons-material';
import { useDeletePlan } from '../api/deletePlan';

type DeletePlanProps = {
  id: string;
};
export const DeletePlan = (props: DeletePlanProps) => {
  const { id } = props;
  const deletePlanMutation = useDeletePlan();
  const handleDeletePlan = (planId: string) => {
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
          <Button onClick={() => handleDeletePlan(id)}>Delete Plan</Button>
        }
      />
    </>
  );
};
