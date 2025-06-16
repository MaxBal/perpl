import React from 'react';
import { Shield, Zap, Heart, Star } from 'lucide-react';

const FEATURES_DARK = [
  {
    title: "Преміальна еко-шкіра",
    description: "Використовуємо тільки найкращі німецькі матеріали, які забезпечують довговічність та стійкість до щоденного використання. Наша еко-шкіра не тільки виглядає розкішно, але й витримує найсуворіші умови експлуатації.",
    media: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1000",
    icon: Shield,
    badge: "Зносостійкість"
  },
  {
    title: "Інноваційна система кріплення",
    description: "Розроблена нами магнітна система забезпечує надійну фіксацію без пошкодження оббивки автомобіля. Спеціальні магніти утримують кейс на місці навіть при різких маневрах.",
    media: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1000",
    icon: Zap,
    badge: "Технологічність"
  }
];

const FEATURES_LIGHT = [
  {
    title: "Ергономічний дизайн",
    description: "Кожен автокейс спроектований з урахуванням особливостей вашого автомобіля. Продумане розташування відділень та кишень забезпечує максимальну зручність використання.",
    media: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1000",
    icon: Heart,
    badge: "Комфорт",
    animate: true,
    darkBadge: true
  },
  {
    title: "Преміальна якість",
    description: "Кожен шов, кожна деталь виконані з особливою увагою до якості. Ми використовуємо посилені нитки та спеціальну фурнітуру, щоб ваш автокейс служив довгі роки.",
    media: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1000",
    icon: Star,
    badge: "Надійність",
    darkBadge: true
  }
];

interface Feature {
  title: string;
  description: string;
  media: string;
  icon: React.FC<{ size?: number; strokeWidth?: number; className?: string }>;
  badge: string;
  animate?: boolean;
  darkBadge?: boolean;
}

const FeatureBlock: React.FC<{ features: Feature[]; darkMode?: boolean }> = ({ features, darkMode = false }) => (
  <div className="max-w-screen-xl mx-auto w-full">
    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
      {features.map((feature, idx) => (
        <div key={idx} className="space-y-8">
          <div 
            className={`
              relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900
              ${feature.animate ? 'hover:scale-105 transition-transform duration-500' : ''}
            `}
          >
            <img
              src={feature.media}
              alt={feature.title}
              className={`
                object-cover w-full h-full
                ${feature.animate ? 'hover:scale-110 transition-transform duration-700' : ''}
              `}
            />
          </div>

          <div className="space-y-4">
            <div>
              <span className={`
                inline-flex items-center gap-1 px-3 py-1.5 text-[13px] font-light rounded-full
                ${darkMode || feature.darkBadge
                  ? 'bg-black text-white border border-white/20' 
                  : 'bg-white text-black border border-black/10'
                }
              `}>
                <feature.icon 
                  size={14} 
                  strokeWidth={2} 
                  className="shrink-0 text-[#00d1b3]" 
                />
                {feature.badge}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                {feature.title}
              </h3>
            </div>
            <p className={`leading-relaxed whitespace-pre-line ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FeatureSection: React.FC = () => {
  return (
    <>
      <section 
        id="features-dark"
        className="relative z-20 bg-black pt-10 md:pt-10 px-4 md:px-10 pb-10 md:pb-20 md:mt-24"
      >
        <FeatureBlock features={FEATURES_DARK} darkMode={true} />
      </section>

      <section 
        id="features-light"
        className="relative z-20 bg-white pt-10 md:pt-10 px-4 md:px-10 pb-10 md:pb-20"
      >
        <FeatureBlock features={FEATURES_LIGHT} darkMode={false} />
      </section>
    </>
  );
};

export default FeatureSection;