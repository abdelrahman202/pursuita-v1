import { ArrowLeft, Sparkles, Zap, Star } from 'lucide-react';

interface StripSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  className?: string;
}

const StripSection = ({ title, subtitle, buttonText, className = '' }: StripSectionProps) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201025736993', '_blank');
  };

  return (
    <section className={`section-padding relative overflow-hidden ${className}`}>
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 bg-white/25 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 opacity-10">
        <Sparkles className="absolute top-20 left-1/4 w-8 h-8 text-white animate-float" style={{ animationDelay: '0s' }} />
        <Zap className="absolute top-40 right-1/3 w-6 h-6 text-white animate-float" style={{ animationDelay: '1s' }} />
        <Star className="absolute bottom-40 left-1/3 w-7 h-7 text-white animate-float" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-20 right-1/4 w-5 h-5 text-white animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-max relative z-10">
        <div className="text-center space-y-8 scroll-animate">
          {/* Main content */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {title}
            </h2>
            
            {subtitle && (
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          
          {/* CTA Button with enhanced design */}
          <div className="pt-8">
            <button
              onClick={handleWhatsAppClick}
              className="group relative inline-flex items-center gap-3 bg-white text-gray-900 font-bold px-10 py-5 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Button background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button content */}
              <span className="relative z-10 text-lg">{buttonText}</span>
              <ArrowLeft size={20} className="relative z-10 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Additional visual elements */}
          <div className="flex justify-center items-center gap-8 pt-8 opacity-60">
            <div className="w-16 h-px bg-white/30"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-white/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StripSection;