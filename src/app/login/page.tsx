import CatsBOXBG from '@/assets/backgrounds/CatBOXBG.jpg';
import CatsBG from '@/assets/backgrounds/CatsBG.jpg';
import Logo from '@/assets/logos/LogoName.png';
import EntranceVideo from '@/assets/videos/entrance.mp4';
import LoginForm from '@/components/forms/login&signup/form';
import VideoLogin from '@/components/globals/video';
import Image from 'next/image';

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
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <div className="w-full h-full flex flex-col items-center justify-around bg-black/10 z-0">
        <div
          className={`border rounded-2xl flex flex-col h-4/6 w-11/12 max-w-[400px] items-center justify-center gap-14 relative overflow-hidden z-10 border-black shadow-lg`}
        >
          <Image
            src={CatsBOXBG}
            alt="Cats Background"
            style={{
              position: 'absolute',
              zIndex: '-1',
              top: '0',
              left: '0',
              height: '100%',
              width: '100%',
              opacity: '1',
              objectFit: 'cover',
            }}
          />
          <div className="w-10/12 border rounded-3xl bg-white flex justify-center items-center border-black shadow-lg">
            <Image src={Logo} alt={'Miaudelos'} className="w-11/12" />
          </div>
          <LoginForm />
          <VideoLogin Video={EntranceVideo} />
        </div>
      </div>
    </main>
  );
}
