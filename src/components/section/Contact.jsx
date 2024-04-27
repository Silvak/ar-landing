import data from "@/data.json";
import { Button } from "@/components/ui/button";

function Contact() {
  const { id, title, text, email, textButton } = data.section6;
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center mt-[124px] min-h-[40vh] bg-[#F8F8F8]"
    >
      <div className="flex flex-col justify-center items-center gap-[28px] mb-[32px] max-w-[1200px] px-4 md:px-6 lg:px-4 xl:px-0">
        <h2 className="text-[32px] text-center">
          <span className="text-[#BC3CD8] font-bold">{title[0]}</span>{" "}
          {title[1]}
        </h2>
        <p className="text-[#333333] text-center">{text}</p>
      </div>

      <div className="grid grid-cols-1 ">
        <form
          method="post"
          action={`mailto:${email}?subject=subject&message=message`}
          className="flex justify-center w-full"
        >
          <Button className="">{textButton}</Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
