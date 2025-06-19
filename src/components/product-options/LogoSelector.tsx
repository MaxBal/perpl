"use client";
import React, { useState } from "react";
import { LogoModal } from "@/components/modals"; // «бочка» с модалками

// Тип текущего лого в пропсах (пример; подстрой под свою модель данных)
interface LogoData {
  name: string;
  imgSteel: string;
  imgBrass: string;
}

interface Props {
  currentLogoData: LogoData | null;
  logoMaterial: "steel" | "brass" | "none";
  onMaterialChange: (m: "steel" | "brass" | "none") => void;
}

const LogoSelector: React.FC<Props> = ({
  currentLogoData,
  logoMaterial,
  onMaterialChange,
}) => {
  /* ——— единый флаг открытия ——— */
  const [logoModalOpen, setLogoModalOpen] = useState(false);

  const toggleModal = () => setLogoModalOpen((s) => !s);

  return (
    <>
      {/* UI выбора материала и кнопка «Детально…» */}
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            className={`px-3 py-2 rounded-md border ${
              logoMaterial === "steel" ? "border-black" : "border-gray-300"
            }`}
            onClick={() => onMaterialChange("steel")}
          >
            Нержавіюча сталь
          </button>
          <button
            className={`px-3 py-2 rounded-md border ${
              logoMaterial === "brass" ? "border-black" : "border-gray-300"
            }`}
            onClick={() => onMaterialChange("brass")}
          >
            Латунь
          </button>
        </div>

        <button
          onClick={toggleModal}
          className="text-sm underline underline-offset-4"
        >
          Детально про лого
        </button>
      </div>

      {/* ——— сама модалка (показываем, если есть данные и материал выбран) ——— */}
      {currentLogoData && logoMaterial !== "none" && (
        <LogoModal
          open={logoModalOpen}
          onOpenChange={setLogoModalOpen}
          material={logoMaterial === "steel" ? "steel" : "brass"}
          brandName={currentLogoData.name}
          image={
            logoMaterial === "steel"
              ? currentLogoData.imgSteel
              : currentLogoData.imgBrass
          }
        />
      )}
    </>
  );
};

export default LogoSelector;
