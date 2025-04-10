import { City } from "@/type";
import Card from "./Card";
import { useModalStore } from "@/store";
import Modal, { ModalBackdrop, ModalPanel } from "../common/Modal";
import CloseIcon from "@/assets/icons/close.svg?react";
import CityDetail from "./CityDetail";

interface Props {
  cities: City[];
}

export default function CityList({ cities }: Props) {
  const { openModal } = useModalStore();
  const openDetailModal = (city: City) => {
    openModal(({ onClose }) => (
      <Modal>
        <ModalBackdrop />
        <ModalPanel>
          <div className="rounded-20 border border-gray100 bg-white px-28 pt-58 pb-37 relative w-[655px] min-h-[300px]">
            <button className="absolute right-28 top-22" onClick={onClose}>
              <CloseIcon />
            </button>
            <CityDetail city={city} />
          </div>
        </ModalPanel>
      </Modal>
    ));
  };
  return (
    <div className="w-full flex flex-wrap justify-between gap-y-28 items-start">
      {cities.map((city) => (
        <button onClick={() => openDetailModal(city)} key={city.code}>
          <Card
            title={city.nameEn.toUpperCase()}
            description={`${city.country.name} ${city.name}`}
            image={city.thumbnail}
          />
        </button>
      ))}
    </div>
  );
}
