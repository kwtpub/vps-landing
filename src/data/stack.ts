export type StackItem = { name: string; hint: string };

export const stackItems: StackItem[] = [
  { name: "Strelka CLI", hint: "brew install strelka / cargo install" },
  { name: "Terraform", hint: "registry.terraform.io/strelka/vps" },
  { name: "Ansible", hint: "strelka.collections.compute" },
  { name: "Образы", hint: "Debian · Ubuntu · Rocky · Alpine · NixOS · Win" },
  { name: "Консоль", hint: "VNC, serial-over-SSH, rescue mode" },
  { name: "Ключи", hint: "ed25519 / RSA 4096, ротация 90 дн" },
  { name: "Бэкапы", hint: "снапшоты ZFS, шифр AES-256 клиентом" },
];
