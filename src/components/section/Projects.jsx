import data from "@/data.json";

function Projects() {
  const { id, title, cards } = data.section3;

  return (
    <section id={id} className="my-[124px]">
      <h2 className="text-[34px] font-bold mb-[32px]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
        {cards.map((element, index) => (
          <div
            key={index}
            className="relative rounded-[12px] bg-gray-100 overflow-hidden"
          >
            <img
              src={element.image}
              className="relative w-full min-h-[300px] max-h-[570px]"
            />

            <div className="absolute bottom-0 bg-gray-200/70 px-4 pt-2 pb-4 md:pt-4 md:pb-6 md:px-6   backdrop-blur-md">
              <div className="w-full md:w-[70%]">
                <h3 className="text-[20px] font-semibold mb-2">
                  {element.title}
                </h3>
                <p>{element.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
