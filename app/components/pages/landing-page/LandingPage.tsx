import NavbarComponents from "@/app/components/components/Navbar/Navbar";
const LandingPageComponents: React.FC = () => {
  return (
    <main className="w-screen h-screen relative">
      <nav className="absolute inset-0">
        <NavbarComponents />
      </nav>
      <div className="flex justify-center items-center h-full ">
        <div className="flex items-center">
          <h1 className="font-bold text-[2rem]">
            Ayo Daftar Kos Kamu Sekarang Juga!!
          </h1>
        </div>
      </div>
    </main>
  );
};

export default LandingPageComponents;
