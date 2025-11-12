export const Categories = ({ categories }: { categories: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-2 items-center mb-4">
      {categories.map((category, index) => (
        <li
          key={index}
          className="text-[.7rem] text-black/60 bg-black/10 rounded-full px-2 py-1"
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
