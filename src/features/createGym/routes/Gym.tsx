import { ContentLayout } from '@/components/Layout';
import { CreateGym } from '../components/CreateGym';
import { GymList } from '../components/GymList';

const Gym = () => {
  return (
    <ContentLayout title="Gym">
      <div>
        <CreateGym />
      </div>
      <div>
        <GymList />
      </div>
    </ContentLayout>
  );
};

export default Gym;
