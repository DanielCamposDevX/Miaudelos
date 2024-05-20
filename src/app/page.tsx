import DefaultLayout from '@/components/globals/defaultLayout';
import PageHeader from '@/components/globals/header/header';
import CatList from '@/components/lists/catList';

export default function Home() {
  return (
    <DefaultLayout>
      <PageHeader />
      <CatList />
    </DefaultLayout>
  );
}
