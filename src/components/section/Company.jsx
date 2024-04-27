import data from "@/data.json";
import { Button } from "@/components/ui/button";

function Company() {
  const { id, images, content } = data.section4;

  return (
    <section
      id={id}
      className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] gap-[20px] md:gap-[40px] md:mt-0"
    >
      {/* Content */}
      <div className="order-2 md:order-1 flex flex-col gap-[20px] items-start  justify-center  lg:pl-[10%]  ">
        <h2 className="text-[34px] font-bold">{content.title}</h2>
        <p className="text-[18px] font-bold">{content.subtitle}</p>
        <p className="">{content.text}</p>
        <Button className="mt-2">{content.textButton}</Button>
      </div>

      {/* Images */}
      <div className="order-1 md:order-2 flex justify-center gap-[20px] ">
        <div className=" w-full  md:w-[60%] ">
          <img src={images[1]} className="object-cover w-full" />
        </div>
      </div>
    </section>
  );
}

export default Company;
