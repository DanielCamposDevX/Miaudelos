'use client';
import { useToast } from '@/app/contexts/toast';
import Cats from '@/assets/backgrounds/cats.png';
import CatsBG from '@/assets/backgrounds/listBG.jpg';
import { useGet } from '@/hooks/useApi';
import { getCats } from '@/services/cats/get';
import { Cat } from '@/types/Cat';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CatCard from '../globals/expandableCard';
import Filters from '../globals/filterButton';
import Input from '../globals/input';
import LoadingGifs from '../globals/loadingGif';

export default function CatList() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const { data, loading } = useGet(getCats);
  const [filteredCats, setFilteredCats] = useState<Cat[]>([]);

  useEffect(() => {
    if (!filter && !search) return setFilteredCats(data);
    if (filter && search.length === 0) {
      setFilteredCats(
        data.filter((cat: Cat) => filter && cat.breedid === Number(filter)),
      );
      return;
    }
    if (!filter && search.length > 0) {
      setFilteredCats(
        data.filter((cat: Cat) =>
          cat.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
      return;
    }
    if (filter && search.length > 0) {
      setFilteredCats(
        data.filter(
          (cat: Cat) =>
            cat.breedid === Number(filter) &&
            cat.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
      return;
    }
  }, [filter, search, data]);

  const { toast } = useToast();

  console.log(data);

  return (
    <main className="w-full min-h-full flex flex-col items-center">
      {!loading && (
        <div className="flex mt-10 gap-2 w-10/12 justify-center items-center z-50">
          <Filters {...{ filter, setFilter }} />
          <Input
            placeholder={'Digite o nome do miaudelo'}
            label={'Pesquisar'}
            width="w-2/4"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      )}
      <Image
        src={Cats}
        alt="gatos"
        className="z-30 w-10/12 max-w-[1000px] -mt-10"
      />
      <div
        className={`${
          loading ? 'max-w-[1000px] h-[700px] ' : 'p-10'
        }  z-10 flex flex-wrap gap-4 
        -mt-[2.3px]  md:-mt-[5px] lg:-mt-[8px] w-11/12 justify-center border-[3px] lg:border-[5px] 
        rounded-3xl border-[#594444] relative overflow-hidden transition-all duration-700`}
      >
        <div
          style={{
            position: 'absolute',
            zIndex: '-1',
            top: '0',
            left: '0',
            minHeight: '500px',
            height: '100%',
            width: '100%',
            backgroundImage: `url(${CatsBG.src})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
        />
        {loading && <LoadingGifs />}
        {filteredCats.length > 0 &&
          filteredCats?.map((cat: Cat) => (
            <CatCard key={cat.id} {...cat} toast={toast} />
          ))}
      </div>
    </main>
  );
}
