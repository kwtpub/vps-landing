export type Feature = {
  index: string;
  titleHtml: string;
  description: string;
  iconId: "server" | "lines" | "shield" | "coin" | "layers" | "pulse";
};

export const features: Feature[] = [
  {
    index: "01",
    titleHtml: "NVMe RAID1 · DDR5 ECC<br><em>без overcommit</em>",
    description:
      "Ядра vCPU выделяются физически, без шейринга. Диски — корпоративные NVMe в зеркале, память — ECC с коррекцией ошибок. IOPS не проседает под соседями.",
    iconId: "server",
  },
  {
    index: "02",
    titleHtml: "10 Гбит/с на узле<br><em>латентность &lt; 14 мс</em>",
    description: "Стыковки в AMS-IX, NL-IX, FICIX. Безлимитный трафик без shaper'а, честные 10G аплинки до стойки.",
    iconId: "lines",
  },
  {
    index: "03",
    titleHtml: "Root и <em>ваш</em> образ.<br>Ключи — у вас.",
    description:
      "Полный root, свой ISO или готовый шаблон (Debian, Ubuntu, Rocky, Alpine, NixOS, Windows Server). SSH-ключи генерируются локально — мы не храним пароли.",
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
      "480 Гбит/с на периметре, скраб до 7 уровня. Ничего настраивать не нужно — защита поднимается автоматически с первой минуты аренды.",
    iconId: "layers",
  },
  {
    index: "06",
    titleHtml: "API и IaC<br><em>всё скриптуется</em>",
    description:
      "OpenAPI 3.1, Terraform-провайдер, Ansible-коллекция, CLI для macOS/Linux/Windows. Разворачивайте флот серверов одним pipeline.",
    iconId: "pulse",
  },
];
