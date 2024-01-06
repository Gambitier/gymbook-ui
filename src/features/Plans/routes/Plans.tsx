import ContentLayout from '@/components/Layout/ContentLayout';
import Plan from '../../Components/Plan';

const Plans = () => {
  return (
    <ContentLayout title="Plans">
      <div className="plan_container">
        <Plan />
      </div>
    </ContentLayout>
  );
};

export default Plans;
