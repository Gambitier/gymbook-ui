import { Button } from '@/components/Elements';
import ConfirmationDialogue from '@/components/Elements/ConfirmationDialogue/ConfirmationDialogue';
import { Delete } from '@mui/icons-material';

// type DeletePlanProps = {
//   id: string;
// };
export const DeletePlan = () => {
  return (
    <>
      <ConfirmationDialogue
        title="Delete Plan"
        body="Are you sure you want to delete this discussion?"
        triggerButton={<Button color="error" startIcon={<Delete />}></Button>}
        confirmButton={<Button>Delete Plan</Button>}
      />
    </>
  );
};
