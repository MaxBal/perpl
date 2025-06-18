import React, { useState } from "react";
import { NavItem } from "./types";
import { InfoModal, TabSpec } from "../InfoModal";

// вкладки
import { DeliveryTab } from "../tabs/DeliveryTab";
import { PaymentTab } from "../tabs/PaymentTab";
import { ExchangeTab } from "../tabs/ExchangeTab";
import { PromoTab } from "../tabs/PromoTab";
import { LoyaltyTab } from "../tabs/LoyaltyTab";
import { ReviewsTextTab } from "../tabs/ReviewsTextTab";
import { ReviewsPhotoTab } from "../tabs/ReviewsPhotoTab";

interface Props {
  items: NavItem[];
}

type ModalData = {
  title: string;
  defaultTab: string;
  tabs: TabSpec[];
};

const CircularNav: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  /** Конфигурация: label кружка → данные для InfoModal */
  const CONFIG: Record<string, ModalData> = {
    "Доставка": {
      title: "Інформація",
      defaultTab: "delivery",
      tabs: [
        { id: "delivery", label: "Доставка", node: <DeliveryTab /> },
        { id: "payment", label: "Оплата", node: <PaymentTab /> },
        { id: "exchange", label: "Обмін", node: <ExchangeTab /> },
      ],
    },
    "Оплата": {
      title: "Інформація",
      defaultTab: "payment",
      tabs: [
        { id: "delivery", label: "Доставка", node: <DeliveryTab /> },
        { id: "payment", label: "Оплата", node: <PaymentTab /> },
        { id: "exchange", label: "Обмін", node: <ExchangeTab /> },
      ],
    },
    "Обмін": {
      title: "Інформація",
      defaultTab: "exchange",
      tabs: [
        { id: "delivery", label: "Доставка", node: <DeliveryTab /> },
        { id: "payment", label: "Оплата", node: <PaymentTab /> },
        { id: "exchange", label: "Обмін", node: <ExchangeTab /> },
      ],
    },
    "Акції": {
      title: "Акції",
      defaultTab: "promo",
      tabs: [
        { id: "promo", label: "Акції", node: <PromoTab /> },
        { id: "loyalty", label: "Клієнтська програма", node: <LoyaltyTab /> },
      ],
    },
    "Відгуки": {
      title: "Відгуки",
      defaultTab: "text",
      tabs: [
        { id: "text", label: "Текст", node: <ReviewsTextTab /> },
        { id: "photo", label: "Фото", node: <ReviewsPhotoTab /> },
      ],
    },
  };

  const handleClick = (label: string) => {
    const data = CONFIG[label];
    if (data) {
      setModalData(data);
      setOpen(true);
    }
  };

  return (
    <>
      {/* кружки */}
      <div className="flex gap-4">
        {items.map((it) => (
          <button
            key={it.label}
            onClick={() => handleClick(it.label)}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#e8e8e8]" />
              <div className="absolute inset-[3px] bg-white rounded-full">
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <img src={it.image} alt={it.label} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-600">{it.label}</span>
          </button>
        ))}
      </div>

      {/* InfoModal */}
      {modalData && (
        <InfoModal
          open={open}
          onOpenChange={(v) => {
            setOpen(v);
            if (!v) setModalData(null);
          }}
          title={modalData.title}
          defaultTab={modalData.defaultTab}
          tabs={modalData.tabs}
        />
      )}
    </>
  );
};

export default CircularNav;