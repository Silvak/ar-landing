import data from "@/data.json";
import { Button } from "@/components/ui/button";

function Banner() {
  const { title, textButton } = data.banner;

  return (
    <section className="relative mb-[128px] w-full min-h-[380px] md:max-h-[480px] bg-banner bg-cover bg-no-repeat bg-center overflow-hidden ">
      <div className="absolute top-0 left-0 w-full  h-full text-white flex justify-center items-center  ">
        {/* content */}
        <div className=" bg-black/60   flex flex-col justify-center items-center  w-full h-full px-4 md:px-6 lg:px-[18%] py-8 ">
          <h2 className="text-white text-[32px] md:text-[44px] md:leading-[52px] text-center  font-SEMIbold">
            {title}
          </h2>

          <a href="#contact">
            <Button variant="outline" className="bg-inherit mt-[32px]">
              {textButton}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
