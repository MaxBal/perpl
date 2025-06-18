import React from 'react';

interface Props {
  /**
   * Тот текст, который вы хотите показать внутри бейджа,
   * например: "Розмір L Carzo 2.0 Logo Toyota" или "Фіксація з багажником на дні"
   */
  label: string;
  /**
   * Массив слов, которые должны быть зелёными (#00d3b1).
   * Все остальные части — amber-800.
   * Например: ["L", "2.0", "Toyota"] или ["на", "дні"]
   */
  highlightWords?: string[];
  onClick?: () => void;
}

export const Badge: React.FC<Props> = ({
  label,
  highlightWords = [],
  onClick,
}) => {
  // Разбиваем label на слова по пробелу
  const parts = label.split(' ');

  // Янтарный стиль (Amber-Subtle): светлый фон, янтарная рамка, темно-янтарный текст
  const baseClass =
    'inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[13px] bg-amber-50 border border-amber-200 text-amber-800 select-none';

  // Рендерим каждое слово: если в highlightWords — "#00d3b1", иначе — "text-amber-800"
  const renderPart = (text: string, idx: number) => {
    const isHighlighted = highlightWords.includes(text);
    return (
      <React.Fragment key={idx}>
        {idx > 0 && ' '}
        <span className={isHighlighted ? 'text-[#00d3b1]' : 'text-amber-800'}>
          {text}
        </span>
      </React.Fragment>
    );
  };

  const badgeContent = parts.map((word, idx) => renderPart(word, idx));

  return onClick ? (
    <button onClick={onClick} className={baseClass}>
      {badgeContent}
    </button>
  ) : (
    <span className={baseClass}>{badgeContent}</span>
  );
};