import data from "@/data.json";
import { Button } from "@/components/ui/button";

function Banner() {
  const { title, textButton } = data.banner;

  return (
    <section className="relative mb-[128px] w-full min-h-[380px] md:max-h-[480px] bg-banner bg-cover bg-no-repeat bg-center overflow-hidden ">
      <div className="absolute top-0 left-0 w-full  h-full text-white flex justify-center items-center  ">
        {/* content */}
        <div className="flex flex-col justify-center items-center  max-w-[1200px] w-full h-full px-4 md:px-6 lg:px-4 xl:px-0 py-8 ">
          <h2 className="text-white text-[42px] md:text-[64px] md:leading-[72px] text-center  font-bold">
            {title}
          </h2>

          <Button variant="outline" className="bg-inherit mt-[32px]">
            {textButton}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
