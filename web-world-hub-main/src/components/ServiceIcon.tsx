import { Globe, Smartphone, Megaphone, Search, Palette, Cpu, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Megaphone,
  Search,
  Palette,
  Cpu,
};

export default function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] || Globe;
  return <Icon className={className} />;
}
