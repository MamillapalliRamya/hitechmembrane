import { z } from "zod";
export interface AudioPlayerProps {
  src: string; 
}
export interface HTMLAudioElementExtended extends HTMLAudioElement {
  play: () => Promise<void>; 
  pause: () => void; 
}
export const IconSchema = z.object({
  id: z.string(),
  title: z.string(),
});

export type IconType = z.infer<typeof IconSchema>;

export const IconPropSchema = z.object({
  item: IconSchema,
});

export type IconPropType = z.infer<typeof IconPropSchema>;

export const FeatureSchema = z.object({
  svg: z.function(),
  title: z.string(),
  content: z.string(),
});

export type FeatureType = z.infer<typeof FeatureSchema>;

export const FeaturepropSchema = z.object({
  itemFe: FeatureSchema,
});

export type FeaturePropType = z.infer<typeof FeaturepropSchema>;

export const DesignSchema = z.object({
  itemsDl: z.string(),
});

export type DesignType = z.infer<typeof DesignSchema>;

export const DesignPropSchema = z.object({
  item: DesignSchema,
});

export type DesignPropType = z.infer<typeof DesignPropSchema>;

export const PortfolioSchema = z.object({
  img: z.string(),
  title: z.string(),
  description: z.string(),
  view: z.string(),
  border: z.string(),
  link:z.string()
});

export type PortfolioType = z.infer<typeof PortfolioSchema>;

export interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  indexCount: number;
  className?: string;
}

export const priceSchema = z.object({
  listItem: z.string(),
});
export type PriceType = z.infer<typeof priceSchema>;
export const PricePropSchema = z.object({
  listItem: priceSchema,
});
export type PricePropType = z.infer<typeof PricePropSchema>;

export const itempSchema = z.object({
  amount: z.string(),
  amountSpan: z.string(),
  title: z.string(),
  description: z.string(),
  list: z.array(z.string()),
  btnDescription: z.string(),
});

export type Itempc = z.infer<typeof itempSchema>;

export interface PricingCardProp {
  item: Itempc;
  isSelected: boolean;
  onClick: () => void;
}

export const navSchema = z.object({
  navLink: z.string(),
  route: z.string(),
});

export type NavTypes = z.infer<typeof navSchema>;
