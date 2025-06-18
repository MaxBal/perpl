import React from 'react';

interface Props {
  /**
   * Тот текст, который вы хотите показать внутри бейджа,
   * например: "Розмір L Carzo 2.0 Logo Toyota" или "Фіксація з багажником на дні"
   */
  label: string;
  /**
   * Массив слов, которые должны быть зелёными (#00d3b1).
   * Все остальные части — белым.
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

  // Новые стили: прозрачный фон, черная рамка, черный текст по умолчанию
  const baseClass =
    'inline-flex items-center gap-1.5 px-2 py-0.5 text-[13px] font-medium rounded-md border border-black/80 text-black bg-transparent select-none';

  // Рендерим каждое слово: если в highlightWords — "#00d3b1", иначе — "text-black"
  const renderPart = (text: string, idx: number) => {
    const isHighlighted = highlightWords.includes(text);
    return (
      <React.Fragment key={idx}>
        {idx > 0 && ' '}
        <span className={isHighlighted ? 'text-[#00d3b1]' : 'text-black'}>
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