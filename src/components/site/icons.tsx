import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplets,
  Ear,
  Eye,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Layers,
  PersonStanding,
  Rabbit,
  Ribbon,
  ScanLine,
  Scissors,
  Smile,
  Sparkles,
  Stethoscope,
  Utensils,
  Wind,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplets,
  Ear,
  Eye,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Layers,
  PersonStanding,
  Rabbit,
  Ribbon,
  ScanLine,
  Scissors,
  Smile,
  Sparkles,
  Utensils,
  Wind,
};

export function DeptIcon({ name, className }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? Stethoscope;
  return <Icon className={className} aria-hidden />;
}
