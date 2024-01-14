import { ContentLayout } from '@/components/Layout';
import { CreatePlan } from '../Components/CreatePlan';

const Plans = () => {
  return (
    <ContentLayout title="Plans">
      <div>
        <CreatePlan />
      </div>
    </ContentLayout>
  );
};

export default Plans;
