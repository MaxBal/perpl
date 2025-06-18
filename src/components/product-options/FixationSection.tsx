import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { RadioItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/toast';

interface Props {
  onFixationChange: (
    enabled: boolean,
    variant: 'floor' | 'wall' | 'both',
    price: number
  ) => void;
}

const FixationSection: React.FC<Props> = ({ onFixationChange }) => {
  /** Магнітний тумблер (завжди true) */
  const [magnetLock, setMagnetLock] = useState(true);

  /** Чи увімкнено фіксацію + варіант */
  const [fixEnabled, setFixEnabled] = useState(false);
  const [fixVariant, setFixVariant] = useState<'floor' | 'wall' | 'both'>(
    'floor'
  );

  const { toast } = useToast();

  /** ціна */
  const fixPrice = !fixEnabled ? 0 : fixVariant === 'both' ? 80 : 0;

  /** репортаж наверх */
  React.useEffect(() => {
    onFixationChange(fixEnabled, fixVariant, fixPrice);
  }, [fixEnabled, fixVariant, fixPrice, onFixationChange]);

  /** клік по «магнітному» тумблеру */
  const handleMagnetSwitchChange = (checked: boolean) => {
    if (!checked) {
      toast({
        title: 'Кейси з липучками ми ніколи не виготовляли.',
        description: `Ще на старті у 2021 році ми одразу вирішили: тільки магніти.
⠀
Це було інтуїтивне рішення — і досвід підтвердив його правильність.
За роки роботи ми десятки разів чули:
«Спершу купив кейс на липучках — згодом пожалкував. Де ви були раніше?»
⠀
Магніти — це акуратність, зручність і довговічність.
Тому опція з липучками просто не передбачена.`,
        duration: Infinity, // ← НЕ закривається автоматично
      });
    }
    setMagnetLock(true); // повертаємо у ввімкнений стан
  };

  /** клік по «фіксація в багажнику» */
  const handleFixationSwitchChange = (checked: boolean) => {
    setFixEnabled(checked);
  };

  /** вибір варіанта */
  const handleVariantChange = (variant: 'floor' | 'wall' | 'both') => {
    setFixVariant(variant);
  };

  return (
    <div className="space-y-4">
      {/* Магнітна система — перший рядок */}
      <label className="flex items-center justify-between mb-4">
        <span className="font-medium">Магнітна система фіксації кришки</span>
        <Switch
          checked={magnetLock}
          onCheckedChange={handleMagnetSwitchChange}
        />
      </label>

      {/* Перемикач фіксації в багажнику */}
      <label className="flex items-center justify-between mb-3">
        <span className="font-medium">Фіксація в багажнику</span>
        <Switch
          checked={fixEnabled}
          onCheckedChange={handleFixationSwitchChange}
        />
      </label>

      {/* Якщо вмикнено — показуємо варіанти */}
      {fixEnabled && (
        <div className="space-y-3 pl-4 border-l-2 border-gray-100">
          <RadioItem
            value="floor"
            checked={fixVariant === 'floor'}
            onCheckedChange={() => handleVariantChange('floor')}
          >
            на дні 0 ₴
          </RadioItem>

          <RadioItem
            value="wall"
            checked={fixVariant === 'wall'}
            onCheckedChange={() => handleVariantChange('wall')}
          >
            на стінці 0 ₴
          </RadioItem>

          <RadioItem
            value="both"
            checked={fixVariant === 'both'}
            onCheckedChange={() => handleVariantChange('both')}
          >
            дно + стінка 80 ₴
          </RadioItem>
        </div>
      )}
    </div>
  );
};

export default FixationSection;
