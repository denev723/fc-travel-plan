import SearchIcon from "@icons/search.svg?react";
import { useState } from "react";

interface Props {
  onCompositionEnd: (value: string) => void;
}

export default function SearchInput({ onCompositionEnd }: Props) {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full relative">
      <input
        className="w-full h-40 rounded-10 border-1 border-gray200 pl-10 pr-46"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        onCompositionEnd={(e) => onCompositionEnd(e.currentTarget.value)}
      />
      <SearchIcon className="absolute top-8 right-12" />
    </div>
  );
}
