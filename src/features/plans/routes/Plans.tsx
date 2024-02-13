import { ContentLayout } from '@/components/Layout';
import { CreatePlan } from '../Components/CreatePlan';
import { PlanList } from '../Components/PlanList';

const Plans = () => {
  return (
    <ContentLayout title="Plans">
      <div>
        <CreatePlan />
      </div>
      <div>
        <PlanList />
      </div>
    </ContentLayout>
  );
};

export default Plans;
