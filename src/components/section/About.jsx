import data from "@/data.json";
//import { Button } from "@/components/ui/button";

function About() {
  const { id, images, content } = data.section2;

  return (
    <section
      id={id}
      className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] gap-[20px] md:gap-[40px] mt-[72px] md:mt-0 "
    >
      {/* Images */}
      <div className="flex gap-[20px]">
        <div className=" w-[50%]">
          <img src={images[0]} className="object-cover w-full" />
        </div>
        <div className=" mt-[30%] lg:mt-[40%] w-[50%] ">
          <img src={images[1]} className="object-cover w-full" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[20px] items-start  justify-center lg:justify-center lg:pl-[10%]  ">
        <h2 className="text-[34px] font-bold">{content.title}</h2>
        <p className="">{content.text}</p>
        {/* <Button className="mt-2">{content.textButton}</Button> */}
      </div>
    </section>
  );
}

export default About;
