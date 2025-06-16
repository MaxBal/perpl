import React from 'react';
import { Camera } from 'lucide-react';
import { useModal } from '../useModal';
import { ProductData } from './types';

interface Props {
  product: ProductData;
  logo: string;
  setLogo: (logo: string) => void;
}

const LogoSelect: React.FC<Props> = ({ product, logo, setLogo }) => {
  const modal = useModal();

  const showLogoPhoto = () =>
    modal.open(
      'Logo',
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-gray-700">
          Приклад розміщення логотипу на автокейсі. Логотип виготовляється з високоякісних матеріалів та має відмінну стійкість до зношування.
        </p>
      </div>
    );

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <button
          onClick={showLogoPhoto}
          className="px-3 py-1.5 bg-black text-white text-xs rounded-[10px] flex items-center gap-2 hover:bg-gray-900 transition-colors"
          aria-label="View logo photo example"
        >
          <Camera size={14} className="text-[#00d1b3]" />
          Photo logo
        </button>
      </div>

      <select
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
        className="w-full h-12 px-8 border border-gray-300 rounded-[14px] text-sm focus:border-[#00d1b3] focus:ring-1 focus:ring-[#00d1b3] outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA2TDggMTBMMTIgNiIgc3Ryb2tlPSIjNjU2RDc2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-[position:right_16px_center] bg-no-repeat"
      >
        {product.logoOptions.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default LogoSelect;