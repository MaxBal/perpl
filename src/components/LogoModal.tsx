import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LogoItem } from '@/data/logos';

interface Props {
  logo: LogoItem;
  initial: 'brass' | 'steel';
}

const LogoModal: React.FC<Props> = ({ logo, initial }) => {
  const [variant, setVariant] = useState<'brass' | 'steel'>(initial);

  return (
    <Tabs value={variant} onValueChange={v => setVariant(v as any)}>
      <TabsList className="w-full justify-center mb-4">
        <TabsTrigger value="brass">Латунь</TabsTrigger>
        <TabsTrigger value="steel">Нержавіюча сталь</TabsTrigger>
      </TabsList>

      <TabsContent value="brass">
        <img src={logo.imgBrass} alt={`${logo.name} латунь`} className="rounded-xl w-full" />
      </TabsContent>
      <TabsContent value="steel">
        <img src={logo.imgSteel} alt={`${logo.name} сталь`} className="rounded-xl w-full" />
      </TabsContent>
    </Tabs>
  );
};

export default LogoModal;