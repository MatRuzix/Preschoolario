import HeroBox from "./HeroBox";
import SignInBox from "./SignInBox";

const Landing = () => {
  return (
    <section id="landing" className="w-full h-full pt-16 px-2">
      <div className="flex w-full h-full space-x-4 py-2">
        <HeroBox />
        <SignInBox />
      </div>
    </section>
  );
};

export default Landing;
