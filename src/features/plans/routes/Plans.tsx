import ContentLayout from '@/components/Layout/ContentLayout';
import { CreatePlan } from '../Components/CreatePlan';

const Plans = () => {
  return (
    <ContentLayout title="Plans">
      <div className="plan_container">
        <CreatePlan name={''} price={0} durationInMoths={0} />
      </div>
    </ContentLayout>
  );
};

export default Plans;
