import { Button } from "@/components/ui/button";
import data from "@/data.json";
import logo from "../../public/logo/positivo-cognoar.png";

function Header() {
  const { pageName, links, button } = data.header;
  return (
    <header className="fixed flex w-full justify-center items-center  border-b border-gray-200/50 px-4 md:px-8 lg:px-4 xl:px-0 z-[1000] backdrop-blur-lg bg-white/70  ">
      <div className="flex justify-between items-center w-full max-w-[1200px] py-[14px] ">
        <div className="text-[22px] font-bold text-[#1C1C1C] w-[160px] md:w-[200px]">
          <a href="/">
            <img src={logo} alt="" className="h-[48px]" />
          </a>
        </div>

        <div className="flex justify-end items-center gap-[32px]">
          <ul className="justify-center hidden md:flex">
            <li className="flex gap-4  text-[16px]">
              {links.map((element, index) => (
                <a
                  key={index}
                  href={element.url}
                  className=" hover:text-[#DF308D]"
                >
                  {element.title}
                </a>
              ))}
            </li>
          </ul>

          <a href={button.url}>
            <Button>{button.text}</Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
