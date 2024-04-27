import data from "@/data.json";
import { Button } from "@/components/ui/button";

function Hero() {
  const { title, text, textButton, textButton2, imageContent, people } =
    data.section1;

  return (
    <section className="w-full md:min-h-[768px] pt-[60px]">
      {/* content */}
      <div className="grid grid-cols-1  lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-[32px] min-h-[70vh] md:min-h-[768px] w-full md:w-[90%]">
          <h2 className="text-[52px] font-bold leading-[60px]">
            {title[0]} <br /> {title[1]}
          </h2>
          <p className="text-[#808080] text-[16px]">{text}</p>

          <div className="flex gap-4">
            <Button>{textButton}</Button>
            <Button variant="outline">{textButton2}</Button>
          </div>

          <div className="flex gap-[-20px] items-center">
            {people.images.map((userImg, index) => (
              <div key={index} className="w-[35px]">
                <div className="w-[42px] h-[42px] rounded-full bg-gray-100 shadow-sm overflow-hidden">
                  <img src={userImg} className="object-cover h-full" />
                </div>
              </div>
            ))}

            <p className="font-semibold">
              <span className="pl-6 pr-2">●</span> {people.text}
            </p>
          </div>
        </div>

        {/* image */}
        <div className=" w-full h-full min-w-[550px] hidden lg:flex">
          <div className="flex justify-end w-full h-full relative overflow-hidden">
            <img
              src={"hero1.png"}
              className="absolute bottom-[20%] lg:bottom-0   object-contain"
            />

            <div className="absolute lg:bottom-[8%] xl:bottom-[10%] w-full flex flex-col gap-[18px] items-center text-gray-200 pl-[19%] pr-[22%] py-[8%]">
              <h2 className="text-[24px] font-bold">{imageContent.title}</h2>
              <div className="bg-white/80 w-[50%] h-[1px]"></div>
              <p className="text-center text-sm mt-[2px]">
                {imageContent.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
