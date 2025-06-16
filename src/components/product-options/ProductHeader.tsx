import React from 'react';
import { ProductData } from './types';
import { Badge } from '../ui/Badge';
import { useModal } from '../useModal';

interface Props {
  product: ProductData;
  hasLogo: boolean;
  hasFixation: boolean;
}

const ProductHeader: React.FC<Props> = ({ product, hasLogo, hasFixation }) => {
  const modal = useModal();

  return (
    <>
      <h1 className="text-[25.6px] mobile:text-[25.6px] font-semibold leading-tight">
        Автокейс з&nbsp;лого&nbsp;Toyota
      </h1>
      <div className="flex flex-wrap gap-2 mt-2 mobile:mt-1">
        <Badge 
          label="L Carzo 2.0 Logo Toyota"
          variant="dark"
        />
      </div>
    </>
  );
};

export default ProductHeader;