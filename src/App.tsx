import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Phone, MessageCircle, MapPin, Clock, ChevronRight, Menu, X } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Khởi đầu', href: '#home' },
    { name: 'Về Floréver', href: '#about' },
    { name: 'Cá nhân hóa', href: '#bespoke' },
    { name: 'Bộ sưu tập', href: '#collections' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Left Stamp */}
        <div className="hidden lg:block w-32">
          <div className="text-[9px] tracking-[0.3em] uppercase text-brand-rose font-medium opacity-70">
            Saigon / Thủ Đức
          </div>
        </div>

        {/* Brand Name (Center) */}
        <div className="flex-1 flex justify-center md:justify-start lg:justify-center">
          <a href="#home" className="text-3xl md:text-4xl font-accent text-brand-navy tracking-tight">
            Floréver
          </a>
        </div>

        {/* Navigation Links (Right/Side) */}
        <div className="hidden md:flex gap-8 lg:gap-12 text-[10px] uppercase tracking-[0.2em] font-medium text-brand-gray/70">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand-rose transition-all duration-300 relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-rose transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Stamp/CTA */}
        <div className="hidden lg:block w-32 text-right">
          <div className="text-[9px] tracking-[0.3em] uppercase text-brand-rose font-medium opacity-70">
            EST. 2026
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-brand-navy p-2 hover:bg-brand-sap/50 rounded-full transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-b border-brand-rose/10 py-10 flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="uppercase tracking-[0.2em] text-xs font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center z-10 py-32">
        {/* Left Content - Branding */}
        <div className="md:col-span-5 space-y-8 z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-accent text-brand-navy leading-none mb-4">
              Floréver
            </h1>
            <p className="text-xl italic text-brand-rose mt-4 font-serif">“Flowers that stay forever.” ♡</p>
            <div className="space-y-6 pt-8 w-full max-w-xl">
              <p className="text-sm md:text-base leading-relaxed italic text-brand-gray/80 font-sans">
                Một chút sáp, một chút lụa, một chút cảm xúc… và rất nhiều yêu thương được gói lại trong từng bó hoa.
              </p>
              <p className="text-sm md:text-base leading-relaxed italic text-brand-gray font-serif">
                Tại Floréver, mỗi bó hoa không chỉ là một món quà, mà còn là cách để lưu giữ một khoảnh khắc đẹp thật lâu.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8 border-t border-brand-border space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-brand-rose/40 flex items-center justify-center">
                <div className="w-1 h-1 bg-brand-rose rounded-full" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gray/60 font-medium">Thủ Đức, Hồ Chí Minh</span>
            </div>
            <p className="text-[10px] text-brand-rose/60 uppercase tracking-widest leading-loose ml-12">
              0902 502 784 <br /> 8:00 AM — 10:00 PM
            </p>
          </motion.div>
        </div>

        {/* Right Content - Visual Showcase (Categories Style) */}
        <div className="md:col-span-7 flex gap-4 md:gap-8 h-[500px] md:h-[600px] items-end z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="flex-1 h-full relative"
          >
            <div className="w-full h-[90%] rounded-[60px] md:rounded-[100px] bg-brand-sap shadow-inner flex flex-col items-center justify-end p-6 md:p-8 overflow-hidden relative">
              <img 
                src="z7809780651120_f56238c6f5d42a88f55a98e827280c63.jpg"
                alt="Hoa Sáp Hero"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-12 w-32 h-48 md:w-48 md:h-64 rounded-full bg-brand-rose/20 blur-3xl mix-blend-multiply" />
              <div className="relative z-10 text-center mb-6 md:mb-8">
                <span className="block text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-brand-gray/60 mb-2">The Art of Wax</span>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-brand-navy">Hoa Sáp</h3>
              </div>
              <div className="absolute inset-0 border-[12px] md:border-[20px] border-brand-cream pointer-events-none rounded-[60px] md:rounded-[100px]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex-1 h-full relative"
          >
            <div className="w-full h-[90%] rounded-[60px] md:rounded-[100px] bg-brand-lua shadow-inner flex flex-col items-center justify-end p-6 md:p-8 overflow-hidden relative">
              <img 
                src="z7809780653363_beed15aa5a1afae57e2d0d0c3f960c9f.jpg"
                alt="Hoa Lụa Hero"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-12 w-32 h-48 md:w-48 md:h-64 rounded-full bg-brand-navy/10 blur-3xl mix-blend-multiply" />
              <div className="relative z-10 text-center mb-6 md:mb-8">
                <span className="block text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-brand-gray/60 mb-2">Eternal Silk</span>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-brand-navy">Hoa Lụa</h3>
              </div>
              <div className="absolute inset-0 border-[12px] md:border-[20px] border-brand-cream pointer-events-none rounded-[60px] md:rounded-[100px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-brand-rose block">Heritage & Craft</span>
              <h2 className="text-5xl md:text-6xl font-serif text-brand-navy leading-tight">
                Cảm hứng từ nét đẹp <br /><span className="italic font-light opacity-60">đương đại</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-brand-gray/80 leading-relaxed text-sm md:text-base font-sans">
              <p>
                Tại Floréver, từng đóa hoa không chỉ đơn thuần là một món đồ để ngắm nhìn, mà còn là nơi những cảm xúc dịu dàng được giữ lại theo cách thật mềm mại và lâu bền.
              </p>
              <p>
                Chúng tôi luôn tin rằng, có những điều rất khó để nói thành lời, nên người ta thường chọn gửi gắm qua một bó hoa. Vì thế, Floréver không tạo ra những sản phẩm chỉ để đẹp mắt, mà mong mỗi bó hoa khi được trao đi đều mang theo một cảm giác riêng biệt: nhẹ nhàng, tinh tế và đủ khiến ai đó nhớ mãi về sau.
              </p>
              <p>
                Từ những gam màu pastel dịu mắt, lớp giấy gói mềm như nắng chiều, cho đến từng dải ruy băng buông nhẹ hay những cánh hoa sáp, hoa lụa được chọn lựa cẩn thận, mọi thứ đều được chăm chút chậm rãi như cách người ta nâng niu một kỷ niệm đẹp.
              </p>
              <p className="italic">
                Mỗi bộ sưu tập tại Floréver là sự hòa quyện giữa tinh thần tối giản hiện đại và nét lãng mạn đầy chất thơ trong phong cách thẩm mỹ editorial aesthetic. Không quá phô trương, cũng không cố gắng cầu kỳ, tụi mình chỉ muốn giữ lại cảm giác tinh tế vừa đủ ,giống như ánh nắng len qua ô cửa, mùi giấy gói hoa mới mở hay một bản nhạc cũ vang lên giữa buổi chiều thật yên.
              </p>
            </div>

            <div className="pt-6 border-t border-brand-border inline-block">
              <p className="font-accent text-3xl text-brand-rose">With Love, Floréver Team</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[60px] md:rounded-[80px] shadow-2xl relative z-10 border-8 md:border-[15px] border-white/50">
              <img 
                src="z7809780663957_3421bee3a32f3a70d4905dde432bc077.jpg" 
                alt="Floréver Studio Aesthetic" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-sap/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BespokeServices = () => {
  const services = [
    {
      id: 'custom-order',
      title: 'THIẾT KẾ RIÊNG',
      description: 'Hiện thực hóa ý tưởng của bạn thành những bó hoa độc bản, mang đậm dấu ấn cá nhân.',
      tag: 'Bespoke Design'
    },
    {
      id: 'personal-decor',
      title: 'DECOR THEO GU',
      description: 'Lựa chọn phong cách từ Minimalist đến Romantic. Tụi mình thiết kế theo đúng sở thích của bạn.',
      tag: 'Artistic Decor'
    },
    {
      id: 'gift-combo',
      title: 'COMBO QUÀ TẶNG',
      description: 'Trọn vẹn cảm xúc với hoa kèm thiệp viết tay, gấu bông và phụ kiện theo mong muốn.',
      tag: 'Full Packages'
    }
  ];

  return (
    <section id="bespoke" className="py-24 md:py-32 bg-brand-cream relative overflow-hidden border-y border-brand-border/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="uppercase tracking-[0.5em] text-[10px] text-brand-rose font-bold mb-4 opacity-70 italic">Sáng tạo không giới hạn</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-navy max-w-3xl leading-tight">
            NƠI NHÀ THIẾT KẾ CHÍNH LÀ <span className="italic font-light opacity-50 block md:inline">BẠN</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="bg-white/40 border border-brand-border p-8 lg:p-12 rounded-[40px] md:rounded-[60px] h-full flex flex-col items-center text-center hover:bg-white/80 transition-all duration-700 shadow-sm hover:shadow-xl">
                <span className="text-[9px] uppercase tracking-[0.4em] text-brand-rose/60 mb-6 block">{service.tag}</span>
                <h3 className="text-xl lg:text-2xl font-serif text-brand-navy mb-6 tracking-wide">{service.title}</h3>
                <div className="w-1 h-1 bg-brand-rose rounded-full mb-8" />
                <p className="text-sm text-brand-gray/70 leading-relaxed font-sans">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-rose font-bold group-hover:gap-4 transition-all cursor-pointer">
                  Trao đổi ngay <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-video rounded-[40px] md:rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl group relative">
               <img 
                 src="z7809780665313_ceee978511f286fab969f58d5f7385b4.jpg" 
                 alt="Flower Workshop" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
          <div className="space-y-8 order-1 md:order-2 px-4 md:px-8 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy leading-relaxed">
              Bạn chỉ cần trao gửi ý tưởng, việc thổi hồn vào đó hãy để <span className="italic">Floréver</span> lo.
            </h3>
            <ul className="space-y-6 flex flex-col items-center md:items-start pt-4">
              {[
                'Thiệp viết tay nắn nót từng chữ.',
                'Gấu bông mềm mại, phụ kiện tuyển chọn.',
                'Gói hoa theo yêu cầu (Wrap with love).',
                'Decor không gian mini theo sự kiện.'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-base md:text-xl text-brand-gray/80">
                  <div className="w-2 h-2 rounded-full bg-brand-rose/40 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FlowerCategories = () => {
  return (
    <section id="collections" className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 min-h-[600px]">
          {/* HOA SÁP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group min-h-[400px] md:min-h-0"
          >
            <div className="w-full h-full rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-brand-sap shadow-inner flex flex-col items-center justify-end p-8 md:p-12 overflow-hidden relative border-8 md:border-[16px] lg:border-[20px] border-brand-cream/50">
              <img 
                src="z7809780669817_76259107e7ef703414ed051fc646df75.jpg" 
                alt="Hoa Sáp" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-24 w-64 h-80 rounded-full bg-brand-rose/20 blur-[100px] mix-blend-multiply" />
              <div className="relative z-10 text-center mb-12 lg:mb-16">
                <span className="block text-[10px] tracking-[0.5em] uppercase text-brand-navy/60 mb-4 font-medium">The Art of Wax</span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-brand-navy">Hoa Sáp</h3>
                <div className="mt-6 md:mt-8 flex justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-rose/30 flex items-center justify-center text-brand-rose group-hover:bg-brand-rose group-hover:text-white transition-all cursor-pointer">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* HOA LỤA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group min-h-[400px] md:min-h-0"
          >
            <div className="w-full h-full rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-brand-lua shadow-inner flex flex-col items-center justify-end p-8 md:p-12 overflow-hidden relative border-8 md:border-[16px] lg:border-[20px] border-brand-cream/50">
              <img 
                src="z7809780726091_ca8440d4cdfdde5fc9d3db1c14b81728.jpg" 
                alt="Hoa Lụa" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-24 w-64 h-80 rounded-full bg-brand-navy/10 blur-[100px] mix-blend-multiply" />
              <div className="relative z-10 text-center mb-12 lg:mb-16">
                <span className="block text-[10px] tracking-[0.5em] uppercase text-brand-gray/60 mb-4 font-medium">Eternal Silk</span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-brand-navy">Hoa Lụa</h3>
                <div className="mt-6 md:mt-8 flex justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-rose/30 flex items-center justify-center text-brand-rose group-hover:bg-brand-rose group-hover:text-white transition-all cursor-pointer">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Lookbook = () => {
  const lookbookItems = [
    { bg: 'bg-brand-sap/40', title: 'Signature', img: 'z7809780726428_965f0869f1cd6eaa7f57a0e737756c8e.jpg' },
    { bg: 'bg-brand-border', title: 'Aesthetic', img: 'z7809780729596_eb312edef62f6f9cd8c62eb84acb889c.jpg' },
    { bg: 'bg-brand-lua/30', title: 'Minimal', img: 'z7809780736427_d6104506d76aa89cc085742eda49c361.jpg' },
    { bg: 'bg-brand-sap', title: 'Organic', img: 'z7809780736973_d3c408db600d9cde4f524520115fd114.jpg' },
    { bg: 'bg-brand-border/60', title: 'Cultural', img: 'z7809780739668_8093ec0e5d8000dc51527b7f1e5dee67.jpg' },
    { bg: 'bg-brand-lua/50', title: 'Eternal', img: 'z7809780736427_d6104506d76aa89cc085742eda49c361.jpg' }
  ];

  return (
    <section id="lookbook" className="py-32 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="uppercase tracking-[0.5em] text-[10px] text-brand-rose font-bold mb-4 opacity-70">Aesthetic Lens</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-navy">SIGNATURE LOOKBOOK</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {lookbookItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`aspect-square rounded-3xl p-8 flex flex-col justify-end group cursor-pointer hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
            >
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 opacity-80"
                alt={item.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-8 h-8 rounded-full border border-white/30 mb-4 opacity-70 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] font-medium text-white group-hover:text-brand-sap transition-colors">
                  {item.title}<br />Collection
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-cream py-16 border-t border-brand-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
          {/* Left: Socials */}
          <div className="flex space-x-8">
            <span className="text-[10px] font-sans uppercase tracking-widest text-brand-gray/50 hover:text-brand-rose cursor-pointer transition-colors">Instagram</span>
            <span className="text-[10px] font-sans uppercase tracking-widest text-brand-gray/50 hover:text-brand-rose cursor-pointer transition-colors">Facebook</span>
            <span className="text-[10px] font-sans uppercase tracking-widest text-brand-gray/50 hover:text-brand-rose cursor-pointer transition-colors">TikTok</span>
          </div>

          {/* Center: Branding */}
          <div className="text-center">
            <div className="text-[9px] font-sans uppercase tracking-[0.5em] text-brand-rose pb-1 mb-2">
              Designed for Romantic Souls
            </div>
            <h2 className="text-4xl font-accent text-brand-navy">Floréver</h2>
          </div>

          {/* Right: Copyright/Dot */}
          <div className="flex items-center space-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-rose" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-brand-gray/70">Floréver &copy; 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-pink/30 selection:text-brand-navy">
      <Navbar />
      <main className="bg-brand-cream relative overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-[10%] -left-48 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[40%] -right-48 w-[500px] h-[500px] bg-brand-rose/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[70%] -left-32 w-[400px] h-[400px] bg-brand-sage/10 rounded-full blur-[120px] pointer-events-none" />
        
        <Hero />
        <About />
        <BespokeServices />
        <FlowerCategories />
        <Lookbook />
      </main>
      <Footer />
    </div>
  );
}
