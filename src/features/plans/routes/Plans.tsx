import ContentLayout from '@/components/Layout/ContentLayout';
import Plan from '../Components/Plan';

const Plans = () => {
  return (
    <ContentLayout title="Plans">
      <div className="plan_container">
        <Plan name={''} price={0} durationInMoths={0}/>
      </div>
    </ContentLayout>
  );
};

export default Plans;
