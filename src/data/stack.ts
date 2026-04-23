export type StackItem = { name: string; hint: string };

export const stackItems: StackItem[] = [
  { name: "Strelka CLI", hint: "brew install strelka / cargo install" },
  { name: "Terraform", hint: "registry.terraform.io/strelka/vpn" },
  { name: "Ansible", hint: "strelka.collections.vpn" },
  { name: "Linux", hint: "WireGuard / OpenVPN / systemd unit" },
  { name: "Роутеры", hint: "OpenWRT, Keenetic, MikroTik" },
  { name: "Ключи", hint: "ed25519 / WireGuard, ротация 90 дн" },
  { name: "Tor / Mixnet", hint: "chain: Strelka → Tor, одним кликом" },
];
