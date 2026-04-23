export type Feature = {
  index: string;
  titleHtml: string;
  description: string;
  iconId: "server" | "lines" | "shield" | "coin" | "layers" | "pulse";
};

export const features: Feature[] = [
  {
    index: "01",
    titleHtml: "WireGuard + Reality<br><em>без замедлений</em>",
    description:
      "Собственная реализация Reality для обхода DPI. Пропускная способность каждого узла — 10 Гбит/с, загруженность никогда не превышает 40%.",
    iconId: "server",
  },
  {
    index: "02",
    titleHtml: "10 Гбит/с на узле<br><em>латентность &lt; 14 мс</em>",
    description: "Магистрали прямо в точках обмена AMS-IX, NL-IX, FICIX. До первого хопа — меньше миллисекунды.",
    iconId: "lines",
  },
  {
    index: "03",
    titleHtml: "Ключи — <em>у вас</em><br>только публичный<br>на наших серверах",
    description:
      "Ключи генерируются локально, приватная часть никогда не покидает ваше устройство. Мы физически не можем расшифровать ваш трафик.",
    iconId: "shield",
  },
  {
    index: "04",
    titleHtml: "Без KYC<br><em>без документов</em>",
    description:
      "Нужны e-mail и оплата. Никаких паспортов, селфи, счетов за коммунальные. BTC, Lightning и Monero принимаем напрямую.",
    iconId: "coin",
  },
  {
    index: "05",
    titleHtml: "DDoS фильтр<br><em>всегда включён</em>",
    description:
      "480 Гбит/с на периметре, скраб до 7 уровня. Ничего настраивать не нужно — это просто работает с первой минуты.",
    iconId: "layers",
  },
  {
    index: "06",
    titleHtml: "Приложения и API<br><em>всё скриптуется</em>",
    description:
      "OpenAPI 3.1, CLI для macOS/Linux/Windows, приложения iOS и Android. Автоматизация подписок и устройств одним вызовом.",
    iconId: "pulse",
  },
];
