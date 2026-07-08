import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface CARD {
  id:       string;
  eyebrow:  string;
  title:    string;
  desc:     string;
  tags:     string[];
  label:    string;
}

export interface Feature {
  num: string;
  category: string;
  title: string;
  desc: string;
  reverse: boolean;
  svgKey: "discusion" | "grupos" | "colaboracion";
}