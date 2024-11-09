import { category } from "../../data/Category";

export default function OptionCart() {
  return (
    <>
      <div className="flex gap-10 max-md:flex-col">
        {category.map((p, i) => (
          <div
            key={i}
            className="bg-skinColor flex flex-col justify-center items-center gap-2 p-5 rounded-xl"
          >
            <img src={p.image} height={200} width={200} />
            <h2 className="text-redColor font-bold"> {p.category} </h2>
          </div>
        ))}
      </div>
    </>
  );
}
