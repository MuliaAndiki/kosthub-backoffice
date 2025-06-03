import { NavbarConfigData } from "@/app/data/app.config";
import Link from "next/link";
const NavbarComponents: React.FC = () => {
  return (
    <main className="w-full ">
      <div className="flex justify-around items-center p-2">
        {NavbarConfigData.map((items, key) => (
          <main key={key}>
            <Link href={items.href}>
              <h1 className="font-bold">{items.title}</h1>
            </Link>
          </main>
        ))}
      </div>
    </main>
  );
};

export default NavbarComponents;
