import Loading from "@/components/common/Loading";
import Modal, { ModalBackdrop, ModalPanel } from "@/components/common/Modal";
import NarrowLayout from "@/components/common/NarrowLayout";
import CityList from "@/components/home/CityList";
import FilterList from "@/components/home/FilterList";
import SearchInput from "@/components/common/SearchInput";
import { getCities, getSearchedCities } from "@/services/home";
import { useModalStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "domestic" | "international">(
    "all"
  );
  const { isLoading, data } = useQuery({
    queryKey: ["cities", q, filter],
    queryFn: q
      ? () => getSearchedCities(q)
      : () => getCities(filter === "all" ? undefined : filter),
  });

  const { openModal } = useModalStore();

  const handleClick = () => {
    openModal(({ onClose }) => (
      <Modal>
        <ModalBackdrop />
        <ModalPanel>
          <div className="bg-white">
            <button onClick={onClose}>닫기</button>
          </div>
        </ModalPanel>
      </Modal>
    ));
  };

  return isLoading || !data ? (
    <Loading />
  ) : (
    <>
      <button onClick={handleClick}>open modal</button>
      <NarrowLayout className="my-30 flex flex-col items-center">
        <div className="w-[339px] mb-24">
          <SearchInput onSearch={(value) => setQ(value)} />
        </div>
        <div className="mb-21">
          <FilterList active={filter} onChange={(f) => setFilter(f)} />
        </div>
        <CityList cities={data} />
      </NarrowLayout>
    </>
  );
}
