export type TrustEntry = {
  ts: string;
  msgHtml: string;
  tag: "OK" | "WARN" | "LEGAL";
};

export const trustLog: TrustEntry[] = [
  { ts: "22 апр · 09:12", msgHtml: "<b>warrant canary</b> · обновлён за апрель", tag: "OK" },
  { ts: "21 апр · 22:47", msgHtml: "<b>AMS-1</b> · замена SFP+ на агрегации ToR", tag: "OK" },
  { ts: "18 апр · 04:11", msgHtml: "<b>ZRH-1</b> · плановая миграция гипервизора, 42 сек простоя", tag: "WARN" },
  { ts: "12 апр · 14:30", msgHtml: "<b>Cure53</b> · финальный отчёт аудита опубликован", tag: "OK" },
  { ts: "07 апр · 10:02", msgHtml: "<b>EVN-1</b> · добавлен IPv6 /48 на пограничный маршрутизатор", tag: "OK" },
  { ts: "03 апр · 19:22", msgHtml: "<b>HEL-3</b> · расширение скраб-центра до 480 Гбит/с", tag: "OK" },
  { ts: "28 мар · 13:08", msgHtml: "<b>Запрос</b> · судебный ордер NL, 1 сервер, выполнен", tag: "LEGAL" },
  { ts: "22 мар · 07:40", msgHtml: "<b>SE</b> · открыта локация Стокгольм, 12 стоек EPYC", tag: "OK" },
];
