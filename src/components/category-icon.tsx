import { Camera, LayoutGrid, LifeBuoy, MessageCircle, Phone, Rocket, Settings, Wifi, type LucideIcon } from "lucide-react";
import type { IconName } from "@/types";
import { cn } from "@/lib/utils";

const icons: Record<IconName, LucideIcon> = {
  rocket: Rocket,
  phone: Phone,
  message: MessageCircle,
  camera: Camera,
  wifi: Wifi,
  settings: Settings,
  apps: LayoutGrid,
  lifebuoy: LifeBuoy,
};

export function CategoryIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={cn("size-7", className)} strokeWidth={1.8} />;
}
