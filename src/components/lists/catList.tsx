'use client';
import { useToast } from '@/app/contexts/toast';
import { useGet } from '@/hooks/useApi';
import { getCats } from '@/services/cats/get';
import { Cat } from '@/types/Cat';
import CatCard from '../globals/expandableCard';
import LoadingGifs from '../globals/loadingGif';

export default function CatList() {
  const { data, loading } = useGet(getCats);
  const { toast } = useToast();

  console.log(data);

  return (
    <main className="w-full h-full flex justify-center items-center overflow-scroll">
      <div
        className={`${
          loading ? 'w-[400px] h-[90vh] ' : 'w-11/12  p-10 h-screen'
        }  flex flex-wrap gap-4 mt-10 justify-center border rounded-3xl border-black/70 relative overflow-hidden transition-all duration-500`}
      >
        {loading && <LoadingGifs />}
        {data.length > 0 &&
          data?.map((cat: Cat) => (
            <CatCard key={cat.id} {...cat} toast={toast} />
          ))}
      </div>
    </main>
  );
}
