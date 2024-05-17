import CatsBOXBG from '@/assets/backgrounds/CatBOXBG.jpg';
import CatsBG from '@/assets/backgrounds/CatsBG.jpg';
import Logo from '@/assets/logos/LogoName.png';
import Image from 'next/image';
import LoginForm from '../../components/forms/login&signup/form';
import VideoLogin from './video';

export default function Login() {
  return (
    <main className="w-full h-screen relative overflow-hidden">
      <Image
        src={CatsBG}
        alt="Cats Background"
        objectFit="cover"
        style={{
          position: 'absolute',
          zIndex: '-1',
          top: '0',
          left: '0',
          width: '100%',
        }}
      />
      <div className="w-full h-full flex flex-col items-center justify-around bg-black/10 z-0">
        <div
          className={`border border-black rounded-2xl flex flex-col h-4/6 w-11/12 max-w-[400px] items-center justify-around relative overflow-hidden z-10 bg-white`}
        >
          <Image
            src={CatsBOXBG}
            alt="Cats Background"
            style={{
              position: 'absolute',
              zIndex: '-1',
              top: '0',
              left: '0',
              width: '100%',
              opacity: '0.22',
            }}
          />
          <Image src={Logo} alt={'Miaudelos'} />
          <LoginForm />
          <VideoLogin />
        </div>
      </div>
    </main>
  );
}
