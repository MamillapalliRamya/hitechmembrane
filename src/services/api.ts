// src/services/api.ts

const API_BASE_URL = 'http://65.0.77.32:8000';

export interface HomePageData {
  homepage: {
    hero_title: string | null;
    hero_description: string | null;
    hero_button_text: string | null;
    hero_button_link: string | null;
    hero_background_video: string | null;

    about_title: string | null;
    about_para_1: string | null;
    about_para_2: string | null;
    about_button_text: string | null;

    water_solutions_title: string | null;
    water_solutions_desc: string | null;
    explore_button_text: string | null;
    explore_button_link: string | null;
    events_title: string | null;

    why_choose_title: string | null;
    why_choose_subtitle: string | null;

    application_title: string | null;
    application_desc: string | null;

    awards_heading_line_1: string | null;
    awards_heading_line_2: string | null;

    global_presence_texts: string | null;
    title: string | null;
    export_markets: string | null;
    manufacturing_experience: string | null;
    oem_partners: string | null;
    oem_partners_short: string | null;
    oem_partners_mobile: string | null;
    global_customers: string | null;
    description: string | null;
  };

  hero_fallback_images: string[];

  products: Array<{
    id: number;
    name: string;
    image: string | null;
    order: number;
  }>;

  product_features: Array<{
    id: number;
    text: string;
  }>;

  events: Array<{
    id: number;
    title: string;
    image: string | null;
    years: string;
  }>;

  why_choose_us: Array<{
    id: number;
    title: string;
    icon: string | null;
    description: string;
  }>;

  applications: Array<{
    id: number;
    title: string;
    icon: string | null;
    description: string;
  }>;

  awards: Array<{
    id: number;
    image: string | null;
    alt: string;
  }>;

  certificates: Array<{
    id: number;
    image: string | null;
    alt: string;
  }>;
}


class APIService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async getHomePageData(): Promise<HomePageData> {
    try {
      const response = await fetch(`${this.baseURL}/api/homepage/`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching homepage data:', error);
      throw error;
    }
  }

  // Add more API methods as needed
  async getAboutPageData() {
    // Future implementation
  }

  async getProductsData() {
    // Future implementation
  }
}

export const apiService = new APIService();
export default apiService;