import NarrowLayout from "@/components/common/NarrowLayout";
import CityList from "@/components/home/CityList";
import FilterList from "@/components/home/FilterList";
import SearchInput from "@/components/home/SearchInput";
import { City } from "@/type";

export default function Home() {
  // const {data} = useQuery()

  return (
    <NarrowLayout className="my-30 flex flex-col items-center">
      <div className="w-[339px] mb-24">
        <SearchInput onCompositionEnd={(value) => console.log(value)} />
      </div>
      <div className="mb-21">
        <FilterList active="all" onChange={() => {}} />
      </div>
      <CityList cities={DUMMY_DATA} />
    </NarrowLayout>
  );
}

const DUMMY_DATA: City[] = [
  {
    city: "seoul",
    name: "서울",
    description: "서울은 한국의 수도로, 현대적인 도시와 전통적인 문화가 공존하는 곳입니다.",
    thumbnail: "https://picsum.photos/300/200?random=1",
  },
  {
    city: "busan",
    name: "부산",
    description: "부산은 한국에서 두 번째로 큰 도시로, 아름다운 해변과 맛있는 해산물로 유명합니다.",
    thumbnail: "https://picsum.photos/300/200?random=2",
  },
  {
    city: "jeju",
    name: "제주",
    description: "제주도는 한국의 가장 큰 섬으로, 아름다운 자연과 독특한 문화로 유명합니다.",
    thumbnail: "https://picsum.photos/300/200?random=3",
  },
  {
    city: "incheon",
    name: "인천",
    description: "인천은 서울과 가까운 항구 도시로, 인천국제공항이 위치해 있습니다.",
    thumbnail: "https://picsum.photos/300/200?random=4",
  },
];
