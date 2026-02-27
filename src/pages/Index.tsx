import { useState, useEffect } from "react";

const HOUSE_IMG = "https://cdn.poehali.dev/projects/6122fed3-ab10-4bdf-b555-707cb1e3139f/files/63f228bd-684b-46e4-807e-98ee858e4018.jpg";
const WORKERS_IMG = "https://cdn.poehali.dev/projects/6122fed3-ab10-4bdf-b555-707cb1e3139f/files/38914767-9d29-4d87-8e6f-f982a761673c.jpg";

const services = [
  { icon: "🖌️", title: "Покраска стен", desc: "Любые цвета, ровный слой, без капель на полу!", color: "#FFD600", text: "#000" },
  { icon: "📋", title: "Поклейка обоев", desc: "Ровно, красиво, без пузырей — честно-честно!", color: "#FF3B3B", text: "#fff" },
  { icon: "🏗️", title: "Капитальный ремонт", desc: "От А до Я. Принимаем руины, сдаём конфетку.", color: "#2979FF", text: "#fff" },
  { icon: "✨", title: "Косметический ремонт", desc: "Быстро освежим квартиру — станет как новая!", color: "#00C853", text: "#fff" },
  { icon: "🪟", title: "Отделка и штукатурка", desc: "Стены ровные, как стол. Гарантируем!", color: "#FF6D00", text: "#fff" },
  { icon: "🛁", title: "Ванная и кухня", desc: "Там где мокро — мы особенно аккуратны.", color: "#AA00FF", text: "#fff" },
];

const steps = [
  { num: "1", emoji: "📞", title: "Звоните!", desc: "Дядя Петя берёт трубку за 3 секунды (ну, почти).", color: "#FFD600", text: "#000" },
  { num: "2", emoji: "📐", title: "Замеряем", desc: "Приезжаем, смотрим, считаем — и говорим честную цену.", color: "#FF3B3B", text: "#fff" },
  { num: "3", emoji: "🎨", title: "Ремонтируем!", desc: "Работаем весело, чисто и точно в срок.", color: "#2979FF", text: "#fff" },
  { num: "4", emoji: "🎉", title: "Готово!", desc: "Вы пьёте чай, мы уходим. Всё блестит!", color: "#00C853", text: "#fff" },
];

function Sticker({ children, color, rotate = 0, className = "" }: { children: React.ReactNode; color: string; rotate?: number; className?: string }) {
  return (
    <div
      className={`inline-block px-4 py-2 font-bold text-lg shadow-md ${className}`}
      style={{
        fontFamily: "Caveat, cursive",
        backgroundColor: color,
        transform: `rotate(${rotate}deg)`,
        border: "3px solid #000",
        borderRadius: "4px",
      }}
    >
      {children}
    </div>
  );
}

function WobblyButton({ children, color, textColor = "#000", onClick }: { children: React.ReactNode; color: string; textColor?: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className="font-bold text-xl px-8 py-4 transition-all duration-150 active:scale-95"
      style={{
        fontFamily: "Caveat, cursive",
        backgroundColor: color,
        color: textColor,
        border: "3px solid #000",
        borderRadius: "12px 4px 14px 6px",
        boxShadow: hovered ? "2px 2px 0px #000" : "5px 5px 0px #000",
        cursor: "pointer",
        transform: hovered ? "translate(3px, 3px)" : "translate(0,0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFDF0", fontFamily: "Rubik, sans-serif" }}>
      <style>{`
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .float { animation: floatAnim 3s ease-in-out infinite; }
        .float-slow { animation: floatAnim 4s ease-in-out infinite; }
        .slide-up { animation: slideUp 0.6s ease-out forwards; }
        .service-card:hover { transform: scale(1.05) rotate(-1deg); }
        .why-badge:hover { transform: scale(1.12) rotate(-3deg); }
        .nav-btn:hover { transform: scale(1.08); }
        .service-card { transition: transform 0.2s; }
        .why-badge { transition: transform 0.2s; }
        .nav-btn { transition: all 0.15s; }
      `}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3" style={{ backgroundColor: "#FFD600", borderBottom: "3px solid #000" }}>
        <div className="font-bold text-3xl text-black flex items-center gap-2" style={{ fontFamily: "Caveat, cursive" }}>
          🏠 Весёлый Ремонт
        </div>
        <div className="hidden md:flex gap-2">
          {[
            { label: "Услуги", id: "services" },
            { label: "Как работаем", id: "process" },
            { label: "Контакты", id: "contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="nav-btn font-bold text-lg px-4 py-1"
              style={{
                fontFamily: "Caveat, cursive",
                background: "transparent",
                color: "#000",
                border: "2px solid #000",
                borderRadius: "8px 3px 10px 4px",
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <WobblyButton color="#FF3B3B" textColor="#fff" onClick={() => scrollTo("contacts")}>
          📞 Позвонить!
        </WobblyButton>
      </nav>

      {/* HERO */}
      <section className="relative px-6 py-16 md:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #FFFDF0 0%, #FFF8CC 100%)" }}>
        <div className="absolute top-8 right-8 w-36 h-36 rounded-full opacity-25" style={{ backgroundColor: "#2979FF", animation: "floatAnim 4s ease-in-out infinite" }} />
        <div className="absolute bottom-12 left-12 w-24 h-24 rounded-full opacity-35" style={{ backgroundColor: "#FF3B3B", animation: "floatAnim 3.5s ease-in-out infinite 1s" }} />
        <div className="absolute top-40 right-1/3 w-16 h-16 rounded-full opacity-30" style={{ backgroundColor: "#00C853", animation: "floatAnim 5s ease-in-out infinite 0.5s" }} />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
            <div className="mb-5">
              <Sticker color="#FF3B3B" rotate={-2} className="text-white">
                🎨 Без пыли и нервов!
              </Sticker>
            </div>
            <h1 className="font-bold text-6xl md:text-7xl text-black leading-tight mb-6" style={{ fontFamily: "Caveat, cursive" }}>
              Превратим<br />
              вашу квартиру<br />
              <span style={{ color: "#2979FF" }}>в конфетку!</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Мы — бригада весёлых мастеров. Красим, клеим, штукатурим и <strong>всегда улыбаемся</strong>. Не любим скуку и грязь, любим порядок и яркие краски.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <WobblyButton color="#FFD600" onClick={() => scrollTo("contacts")}>
                📞 Заказать ремонт
              </WobblyButton>
              <WobblyButton color="#2979FF" textColor="#fff" onClick={() => scrollTo("services")}>
                Что умеем →
              </WobblyButton>
            </div>
            <div className="flex flex-wrap gap-3">
              <Sticker color="#00C853" rotate={1} className="text-white text-base">✅ Точно в срок</Sticker>
              <Sticker color="#FF6D00" rotate={-1} className="text-white text-base">🏆 Гарантия 2 года</Sticker>
              <Sticker color="#AA00FF" rotate={2} className="text-white text-base">☕ Кофе включён</Sticker>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6" style={{ opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.2s" }}>
            <div className="relative float">
              <img
                src={HOUSE_IMG}
                alt="Весёлый домик"
                className="w-72 h-72 object-cover"
                style={{ border: "4px solid #000", borderRadius: "40% 60% 50% 70% / 60% 40% 60% 40%", boxShadow: "8px 8px 0px #000" }}
              />
              <div className="absolute -top-4 -right-4 text-5xl float" style={{ animationDelay: "0.7s" }}>🎨</div>
              <div className="absolute -bottom-4 -left-4 text-4xl float" style={{ animationDelay: "1.2s" }}>🔨</div>
            </div>
            <img
              src={WORKERS_IMG}
              alt="Наши мастера"
              className="w-64 h-48 object-cover"
              style={{ border: "4px solid #000", borderRadius: "8px 2px 12px 4px", boxShadow: "6px 6px 0px #FF3B3B", transform: "rotate(1.5deg)" }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20" style={{ backgroundColor: "#FFFDF0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-bold text-6xl text-black mb-3" style={{ fontFamily: "Caveat, cursive" }}>Что мы умеем?</h2>
            <p className="text-gray-600 text-lg">Всё! Ну почти фсё 😄</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-card p-6"
                style={{
                  backgroundColor: s.color,
                  color: s.text,
                  border: "3px solid #000",
                  borderRadius: `${8 + (i % 3) * 4}px ${4 + (i % 2) * 8}px ${12 - (i % 3) * 2}px ${6 + (i % 4) * 3}px`,
                  boxShadow: "5px 5px 0px #000",
                }}
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: "Caveat, cursive" }}>{s.title}</h3>
                <p className="text-base opacity-90">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="px-6 py-20" style={{ backgroundColor: "#FFF3C4" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-bold text-6xl text-black mb-3" style={{ fontFamily: "Caveat, cursive" }}>Как мы работаем?</h2>
            <p className="text-gray-600 text-lg">Всего 4 шага до идеального ремонта</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="p-8 relative"
                style={{
                  backgroundColor: step.color,
                  color: step.text,
                  border: "3px solid #000",
                  borderRadius: i % 2 === 0 ? "12px 4px 16px 6px" : "4px 14px 6px 12px",
                  boxShadow: "6px 6px 0px #000",
                  transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                }}
              >
                <div
                  className="absolute -top-5 -left-5 w-12 h-12 flex items-center justify-center font-bold text-xl"
                  style={{ fontFamily: "Caveat, cursive", backgroundColor: "#fff", border: "3px solid #000", borderRadius: "50%" }}
                >
                  {step.num}
                </div>
                <div className="text-5xl mb-3 mt-2">{step.emoji}</div>
                <h3 className="font-bold text-3xl mb-2" style={{ fontFamily: "Caveat, cursive" }}>{step.title}</h3>
                <p className="text-base opacity-90">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <WobblyButton color="#FF3B3B" textColor="#fff" onClick={() => scrollTo("contacts")}>
              🚀 Начать ремонт прямо сейчас!
            </WobblyButton>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-16" style={{ backgroundColor: "#FFFDF0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-6xl text-black" style={{ fontFamily: "Caveat, cursive" }}>Почему мы?</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { emoji: "⚡", text: "Работаем быстро", sub: "Не тянем резину", color: "#FFD600" },
              { emoji: "🧹", text: "Убираем за собой", sub: "Уходим — чисто!", color: "#2979FF" },
              { emoji: "💰", text: "Честная цена", sub: "Без сюрпризов", color: "#FF3B3B" },
              { emoji: "🤝", text: "Договор", sub: "Всё официально", color: "#00C853" },
              { emoji: "📸", text: "Фото-отчёт", sub: "Виден каждый этап", color: "#FF6D00" },
            ].map((item, i) => (
              <div
                key={i}
                className="why-badge flex flex-col items-center gap-2 px-6 py-5"
                style={{
                  backgroundColor: item.color,
                  border: "3px solid #000",
                  borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
                  boxShadow: "4px 4px 0px #000",
                  minWidth: "140px",
                }}
              >
                <span className="text-4xl">{item.emoji}</span>
                <span className="font-bold text-xl text-black text-center leading-tight" style={{ fontFamily: "Caveat, cursive" }}>{item.text}</span>
                <span className="text-sm text-black text-center" style={{ opacity: 0.7 }}>{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="px-6 py-20" style={{ backgroundColor: "#2979FF" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-6xl text-white mb-4" style={{ fontFamily: "Caveat, cursive" }}>Позвоните нам!</h2>
          <p className="text-white text-xl mb-10" style={{ opacity: 0.9 }}>
            Расскажите о вашем ремонте — приедем, посмотрим, назовём честную цену. Бесплатно!
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div
              className="p-6 text-center"
              style={{ backgroundColor: "#FFD600", border: "3px solid #000", borderRadius: "12px 4px 14px 6px", boxShadow: "5px 5px 0px #000" }}
            >
              <div className="text-4xl mb-3">📞</div>
              <div className="font-bold text-3xl text-black" style={{ fontFamily: "Caveat, cursive" }}>+7 (999) 123-45-67</div>
              <div className="text-gray-700 mt-1">Работаем с 8:00 до 21:00</div>
            </div>
            <div
              className="p-6 text-center"
              style={{ backgroundColor: "#fff", border: "3px solid #000", borderRadius: "4px 14px 6px 12px", boxShadow: "5px 5px 0px #000" }}
            >
              <div className="text-4xl mb-3">💬</div>
              <div className="font-bold text-3xl text-black" style={{ fontFamily: "Caveat, cursive" }}>WhatsApp / Telegram</div>
              <div className="text-gray-700 mt-1">Отвечаем быстро!</div>
            </div>
          </div>
          <div
            className="p-8 text-left"
            style={{ backgroundColor: "#fff", border: "3px solid #000", borderRadius: "12px 4px 14px 6px", boxShadow: "6px 6px 0px #000" }}
          >
            <h3 className="font-bold text-3xl text-black mb-5 text-center" style={{ fontFamily: "Caveat, cursive" }}>Или оставьте заявку:</h3>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя 👤"
                className="w-full px-4 py-3 text-lg outline-none"
                style={{ border: "3px solid #000", borderRadius: "8px 3px 10px 4px" }}
              />
              <input
                type="tel"
                placeholder="Ваш телефон 📱"
                className="w-full px-4 py-3 text-lg outline-none"
                style={{ border: "3px solid #000", borderRadius: "4px 10px 3px 8px" }}
              />
              <textarea
                placeholder="Что нужно сделать? 🏠"
                rows={3}
                className="w-full px-4 py-3 text-lg outline-none resize-none"
                style={{ border: "3px solid #000", borderRadius: "8px 3px 10px 4px" }}
              />
              <WobblyButton color="#FF3B3B" textColor="#fff">
                🚀 Отправить заявку!
              </WobblyButton>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center" style={{ backgroundColor: "#000" }}>
        <div className="font-bold text-2xl mb-2" style={{ fontFamily: "Caveat, cursive", color: "#FFD600" }}>🏠 Весёлый Ремонт</div>
        <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Делаем ремонт с душой и улыбкой • {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}