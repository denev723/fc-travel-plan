import Loading from "@/components/common/Loading";
import NarrowLayout from "@/components/common/NarrowLayout";
import CityList from "@/components/home/CityList";
import FilterList from "@/components/home/FilterList";
import SearchInput from "@/components/home/SearchInput";
import { getCities, getSearchedCities } from "@/services/home";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  // const {data} = useQuery()
  const [q, setQ] = useState("");
  const { isLoading, data } = useQuery({
    queryKey: ["cities", q],
    queryFn: q ? () => getSearchedCities(q) : getCities,
  });

  return isLoading || !data ? (
    <Loading />
  ) : (
    <NarrowLayout className="my-30 flex flex-col items-center">
      <div className="w-[339px] mb-24">
        <SearchInput onCompositionEnd={(value) => setQ(value)} />
      </div>
      <div className="mb-21">
        <FilterList active="all" onChange={() => {}} />
      </div>
      <CityList cities={data} />
    </NarrowLayout>
  );
}
