import data from "@/data.json";

function Tester() {
  const { id, title, text, cards } = data.section5;
  return (
    <section
      id={id}
      className="my-[124px]  md:bg-gradient-to-b from-[#AA14F0]/30 to-white to-80%  rounded-lg  backdrop-blur-lg "
    >
      <div className="relative flex flex-col items-center pt-[8%] w-full min-h-[350px] border-white md:border md:border-[#B936F5]/40 rounded-lg">
        <h2 className="text-[32px]  font-bold text-left md:text-center mb-[18px] w-full ">
          {title}
        </h2>
        <p className="text-left md:text-center md:w-[70%]">{text}</p>

        <div className="mt-[32px] md:mt-0 grid grid-cols-1 md:grid-cols-3 gap-[12px] md:absolute bottom-[-90px] md:px-[20px]">
          {cards.map((element, index) => (
            <div
              key={index}
              className="bg-[#534686] rounded-lg z-50  backdrop-blur-lg "
            >
              <div className="border flex flex-col justify-between border-[#B936F5]/40 rounded-lg pt-2 pb-3 px-4 min-h-[178px]">
                <p className="font-bold">
                  <span className="text-white">{element.head[0]}</span>
                  <span className="text-[#E70873]">{element.head[1]}</span>
                </p>

                <p className="text-sm h-[80px] text-white mt-2 font-thin">
                  {" "}
                  {`"`} {element.quote}
                  {`"`}
                </p>

                <div className="flex mt-3">
                  <div className="w-[42px] h-[42px] rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={element.clienteImg}
                      className=" object-contain w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between  ml-3">
                    <p className="text-sm font-semibold text-white">
                      {element.name}
                    </p>
                    <p className="text-sm font-semibold text-[#EB4468]">
                      {element.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tester;
