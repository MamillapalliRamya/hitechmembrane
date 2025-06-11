export interface ProductType {
  id: string;
  name: string;
  image: string;
  material: string;
  poreSize: number;
  temperature: number;
  industry: string[];
  fluxRate: number;
  phRange: number[];
  burstPressure: number;
}