import { useState } from 'react';
import { ExternalLink, Eye, X, Globe, Code, Palette, ShoppingCart, Briefcase, Heart, Stethoscope, FileText, Shield } from 'lucide-react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('websites');
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const websites = [
    {
      title: 'Payless - Discount Card',
      description: 'موقع عصري لخدمة بطاقات الخصم، بيعرض العروض بطريقة واضحة وبسيط في الحجز عشان يوفّر تجربة استخدام سلسة.',
      image: '/payless.png',
      link: 'https://www.paylesseg.com',
      category: 'متجر إلكتروني'
    },
    {
      title: 'Medical Conference',
      description: 'موقع مخصص لمؤتمر طبي، مصمم بشكل احترافي يوضح تفاصيل الفعاليات والفئات المستهدفة مع سهولة في التسجيل والمتابعة',
      image: '/medical.png',
      link: 'https://effervescent-bavarois-567c87.netlify.app',
      category: 'موقع طبي'
    },
    {
      title: 'About Me',
      description: 'موقع شخصي تفاعلي لعرض السيرة الذاتية بطريقة عصرية، بيوضح الخبرات والمهارات بشكل منظم وجذاب',
      image: '/about.png',
      link: 'https://pursuita-agency.github.io/MyCv',
      category: 'موقع شخصي'
    },
    {
      title: 'المسار الرائد للمقاولات',
      description: 'موقع تعريفي متكامل يوضح خدمات وإنجازات الشركة في مجال المقاولات، مع تصميم احترافي يبرز هوية العلامة التجارية',
      image: '/elraed.png',
      link: 'https://pursuita-agency.github.io/msaar',
      category: 'موقع شركة'
    },
    {
      title: 'أصول',
      description: 'موقع عقاري مميز مع لوحة تحكم٫ لعرض المشاريع والوحدات السكنية، بتصميم عصري سهل الاستخدام يساعد العملاء على تصفح واختيار ما يناسبهم بسهولة',
      image: '/osool.png',
      link: 'https://fantastic-lily-ccf7a9.netlify.app',
      category: 'موقع عقاري'
    },
    {
      title: 'مدار الساعة للنظافة',
      description: 'موقع تعريفي لخدمات النظافة المتكاملة، يبرز الباقات للشركات والمنازل مع نموذج طلب سريع وتجربة استخدام سلسة',
      image: '/mdar.png',
      link: 'https://pursuita-agency.github.io/cleanliness',
      category: 'موقع خدمات'
    },
     {
      title: 'Zaytona',
      description: 'موقع متخصص في خدمات الحجامة والطب البديل، يعرض الفوائد، المواعيد، وخدمة الحجز أونلاين بسهولة',
      image: '/zaytona.png',
      link: 'https://pursuita-agency.github.io/Zaytona',
      category: 'موقع طبي'
    },
     {
      title: 'Invoice',
      description: 'نظام إلكتروني مبسط لإدارة وإصدار الفواتير، يساعد الشركات والأفراد على تتبع المدفوعات وتنظيم عملياتهم المالية باحترافية',
      image: '/invoice.png',
      link: 'https://pursuita-agency.github.io/invoice',
      category: 'نظام إدارة'
    },
     {
      title: 'Password Generator',
      description: 'أداة ذكية لتوليد كلمات مرور قوية وعشوائية، تضمن أمان الحسابات وحماية البيانات من الاختراق',
      image: '/password.png',
      link: 'https://pursuita-agency.github.io/generate',
      category: 'أداة ويب'
    }
  ];

  const designs = [
    {
      title: 'JUHHD Logo Branding',
      description: 'هوية بصرية راقية تعكس احترافية JUHHD وتفرد علامتها',
      image: '/juhhd.png',
      category: 'هوية بصرية'
    },
    {
      title: 'Ahmed El Sallab',
      description: 'تصاميم سوشيال ميديا تعكس فخامة وتميز أحمد السلاب',
      image: '/salab.png',
      category: 'سوشيال ميديا'
    },
    {
      title: 'Chefaa',
      description: 'تصميم يعكس هوية شفاء بروح عصرية واحترافية.',
      image: '/chefaa.png',
      category: 'شعارات'
    }
  ];

  const getCategoryIcon = (category) => {
    const iconMap = {
      'متجر إلكتروني': ShoppingCart,
      'موقع طبي': Stethoscope,
      'موقع شخصي': Heart,
      'موقع شركة': Briefcase,
      'موقع عقاري': Globe,
      'موقع خدمات': Code,
      'نظام إدارة': FileText,
      'أداة ويب': Shield
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'متجر إلكتروني': 'bg-green-500/10 text-green-400 border-green-500/20',
      'موقع طبي': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'موقع شخصي': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'موقع شركة': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'موقع عقاري': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'موقع خدمات': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      'نظام إدارة': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'أداة ويب': 'bg-red-500/10 text-red-400 border-red-500/20'
    };
    return colorMap[category] || 'bg-primary/10 text-primary border-primary/20';
  };

  const openWebsiteModal = (website) => {
    setSelectedWebsite(website);
  };

  const closeWebsiteModal = () => {
    setSelectedWebsite(null);
  };

  const openDesignModal = (design) => {
    setSelectedDesign(design);
  };

  const closeDesignModal = () => {
    setSelectedDesign(null);
  };

  return (
    <section id="portfolio" className="section-padding bg-muted/10">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#fafcff' }}>
            معرض أعمالنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            إستكشف مجموعة من أفضل أعمالنا في تصميم المواقع والهوية البصرية
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 scroll-animate">
          <div className="bg-card rounded-xl p-2 border border-border/20">
            <button
              onClick={() => setActiveTab('websites')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'websites'
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              مواقع
            </button>
            <button
              onClick={() => setActiveTab('designs')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'designs'
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              تصميم & هوية بصرية
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {activeTab === 'websites' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((website, index) => {
                const CategoryIcon = getCategoryIcon(website.category);
                return (
                  <div 
                    key={website.title} 
                    className="group relative bg-card rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    onClick={() => openWebsiteModal(website)}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={website.image} 
                        alt={website.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform duration-200">
                          <Eye size={20} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-foreground">{website.title}</h3>
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(website.category)}`}>
                          <CategoryIcon size={12} />
                          {website.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{website.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designs.map((design, index) => (
                <div 
                  key={design.title} 
                  className="group relative bg-card rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => openDesignModal(design)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={design.image} 
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-accent text-accent-foreground p-2 rounded-full hover:scale-110 transition-transform duration-200">
                        <Eye size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{design.title}</h3>
                    <p className="text-sm text-muted-foreground">{design.description}</p>
                    <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {design.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Website Modal */}
      {selectedWebsite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-border/20">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-foreground">{selectedWebsite.title}</h3>
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(selectedWebsite.category)}`}>
                  {React.createElement(getCategoryIcon(selectedWebsite.category), { size: 14 })}
                  {selectedWebsite.category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedWebsite.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  زيارة الموقع
                </a>
                <button
                  onClick={closeWebsiteModal}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {selectedWebsite.description}
              </p>
              
              <div className="aspect-video rounded-xl overflow-hidden border border-border/20">
                <iframe
                  src={selectedWebsite.link}
                  className="w-full h-full"
                  title={selectedWebsite.title}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Design Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-border/20">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-foreground">{selectedDesign.title}</h3>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                  {selectedDesign.category}
                </span>
              </div>
              <button
                onClick={closeDesignModal}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {selectedDesign.description}
              </p>
              
              <div className="flex justify-center">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;