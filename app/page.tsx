import Image from "next/image";
import Ruler from "@/components/Ruler";
import CornerMarks from "@/components/CornerMarks";

const TELEGRAM_LINK = "https://t.me/m/wKbL6yNmYTky";

const heroPoints = [
  "Заявки идут только от тех, кто готов оформить заказ",
  "Замерщики и менеджеры не тратят время на «просто посмотреть»",
  "Не зависит от того, сколько контента вы снимаете и ведёте ли соцсети",
];

const problems = [
  {
    who: "Замерщики",
    text: "Тратят рабочий день на выезды к тем, кто пока просто присматривается, а не готов оформлять заказ.",
  },
  {
    who: "Менеджеры",
    text: "Часами переписываются с людьми, которые сравнивают цены у трёх компаний одновременно и не собираются покупать сегодня.",
  },
  {
    who: "Заявки",
    text: "Приходят регулярно, но большая часть из них — случайные клики, а не клиенты с реальным намерением купить.",
  },
];

const steps = [
  {
    n: "01",
    title: "Реализация",
    text: "Встраиваем в рекламную воронку систему квалификации — клиент отвечает на несколько вопросов о своей задаче ещё до того, как попасть к менеджеру.",
  },
  {
    n: "02",
    title: "Тест",
    text: "Запускаем рекламу через эту систему и смотрим, сколько целевых заявок реально доходит до менеджеров и замерщиков, а не оседает в переписках.",
  },
  {
    n: "03",
    title: "Отбор",
    text: "Оставляем связки объявлений и аудиторий, которые приносят результат, и отключаем всё, что просто расходует бюджет.",
  },
];

const stats = [
  { value: "$14 966", label: "потрачено на рекламу" },
  { value: "2 818", label: "заявок получено" },
  { value: "776", label: "продаж закрыто" },
  { value: "$142 415", label: "общая выручка", highlight: true },
];

export default function Home() {
  return (
    <main className="bg-bg">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line min-h-[440px] sm:min-h-[520px] md:min-h-[620px] lg:min-h-[680px]">
        <Image
          src="/hero-laptop.jpg"
          alt="Рекламный кабинет одного из мебельных проектов"
          fill
          priority
          className="object-contain object-right pointer-events-none select-none"
        />

        <div className="relative z-10 mx-auto max-w-wrap px-6 md:px-10 py-20 md:py-28">
          <div
            className="max-w-[92%] sm:max-w-[70%] md:max-w-[52%] lg:max-w-[46%] xl:max-w-[42%]"
            style={{ maxWidth: "min(540px, 44vw)" }}
          >
            <h1 className="font-display font-bold uppercase break-words text-[1.4rem] leading-[1.24] sm:text-[1.6rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem] text-paper">
              За <span className="text-accent">14 дней</span> внедрю систему,
              которая будет приводить от{" "}
              <span className="text-accent">
                50 квалифицированных заявок
              </span>{" "}
              в месяц на мебель под заказ
            </h1>

            <ul className="mt-8 space-y-3">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-[2px] text-accent shrink-0">✦</span>
                  <span className="text-[0.98rem] leading-relaxed text-mutedSolid">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-md bg-accent px-7 py-3.5 text-[0.95rem] font-medium text-paper transition-colors hover:bg-accentBright"
              >
                Внедрить систему
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-md border border-line px-7 py-3.5 text-[0.95rem] font-medium text-paper transition-colors hover:border-accent"
              >
                Подробнее →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-wrap px-6 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
            <div>
              <h2 className="font-display font-bold text-[1.9rem] md:text-[2.1rem] text-paper leading-tight">
                Знакомая ситуация?
              </h2>
              <p className="mt-4 text-mutedSolid leading-relaxed max-w-[38ch]">
                Так выглядит воронка почти в каждой мебельной компании,
                пока в неё не встроен фильтр по готовности купить.
              </p>
            </div>

            <div>
              <Ruler />
              {problems.map((p, i) => (
                <div key={p.who}>
                  <div className="grid grid-cols-[9rem_1fr] gap-6 py-7">
                    <span className="font-display text-paper text-[1.05rem]">
                      {p.who}
                    </span>
                    <p className="text-mutedSolid leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                  <Ruler />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-b border-line">
        <div className="mx-auto max-w-wrap px-6 md:px-10 py-20 md:py-24">
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.1rem] text-paper leading-tight max-w-[20ch]">
            Как мы выстраиваем систему квалификации
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-x-8 gap-y-14">
            {steps.map((s) => (
              <div key={s.n} className="relative pt-6 border-t border-line">
                <span className="font-display text-accent text-sm">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display font-medium text-[1.25rem] text-paper">
                  {s.title}
                </h3>
                <p className="mt-3 text-mutedSolid leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-wrap px-6 md:px-10 py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-body uppercase tracking-[0.14em] text-[11px] text-accent">
                Реальный кейс
              </span>
              <h2 className="mt-3 font-display font-bold text-[1.9rem] md:text-[2.1rem] text-paper leading-tight max-w-[22ch]">
                Что это дало в цифрах
              </h2>
            </div>
            <p className="text-mutedSolid max-w-[34ch] leading-relaxed">
              Один из проектов за период тестирования системы
              квалификации в рекламе.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-[0.95fr_1.15fr] gap-12 md:gap-16 items-start">
            <div>
              <span className="font-body uppercase tracking-[0.14em] text-[11px] text-mutedSolid">
                Запрос клиента
              </span>
              <blockquote className="mt-4 font-display text-[1.35rem] md:text-[1.55rem] leading-snug text-paper">
                «Хочу, чтобы менеджеры общались только с потенциальными
                покупателями, а замерщики выезжали только к тем, кто готов
                купить — а не просто прикидывает варианты»
              </blockquote>

              <div className="mt-8 space-y-4 text-mutedSolid leading-relaxed">
                <p>
                  Заявки приходили нецелевые: менеджеры тратили часы на
                  переписки с теми, кто ещё сравнивает цены, а замерщики
                  выезжали к клиентам, которые пока не готовы покупать.
                </p>
                <p>
                  Мы внедрили систему квалификации в рекламную воронку,
                  протестировали её на реальном бюджете и оставили в работе
                  только те связки, которые приносили целевые заявки.
                </p>
              </div>

              <div className="mt-10">
                <Ruler />
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div
                      className={`font-display font-bold text-[1.7rem] sm:text-[1.9rem] ${
                        s.highlight ? "text-accent" : "text-paper"
                      }`}
                    >
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-[0.85rem] text-mutedSolid">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 md:mt-8">
              <CornerMarks label="Meta Ads Manager · один из проектов" />
              <div className="overflow-hidden rounded-md border border-line">
                <Image
                  src="/case.png"
                  alt="Скриншот рекламного кабинета Meta Ads с результатами кампаний по мебельному проекту"
                  width={1400}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="mx-auto max-w-wrap px-6 md:px-10 py-24 md:py-28">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-paper leading-tight max-w-[18ch]">
                Обсудим вашу ситуацию
              </h2>
              <p className="mt-5 text-mutedSolid leading-relaxed max-w-[42ch]">
                Залетайте на созвон — обсудим ваши проблемы с заявками
                и подберём решение под вашу ситуацию.
              </p>
            </div>
            <div className="md:justify-self-end">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 text-[0.95rem] font-medium text-paper transition-colors hover:bg-accentBright w-full md:w-auto"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-wrap px-6 md:px-10 py-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[12px] text-mutedSolid">
          <span>Реклама для мебельных производств</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
