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
    features: string[];
    images: string[];
    order: number;
  }>;

  events: Array<{
    id: number;
    title: string;
    years: number | null;
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
  }>;

  certificates: Array<{
    id: number;
    image: string | null;
  }>;
}

export interface AboutPageData {
  about_page: Array<{
    id: number;
    bottom_quote: string;
    updated_at: string;
  }>;

  about_hero: Array<{
    id: number;
    about_page_id: number;
    logo: string;
  }>;

  about_hero_images: Array<{
    id: number;
    hero_id: number;
    image: string;
    alt: string | null;
  }>;

  our_story: Array<{
    id: number;
    about_page_id: number;
    heading: string;
    sub_heading: string;
    logo: string;
    paragraph_1: string;
    paragraph_2: string;
  }>;

  revolutionary: Array<{
    id: number;
    about_page_id: number;
    main_heading: string;
    sub_heading: string;
    paragraph_1: string;
    paragraph_2: string;
  }>;

  water_powers: Array<{
    id: number;
    about_page_id: number;
    main_heading: string;
    paragraph_1: string;
    paragraph_2: string;
    impact_heading: string;
    bottom_quote: string;
  }>;

  water_impact_cards: Array<{
    id: number;
    water_power_id: number;
    value: string;
    label: string;
    description: string;
  }>;

  awards_section: Array<{
    id: number;
    about_page_id: number;
    heading: string;
  }>;

  awards: Array<{
    id: number;
    awards_id: number;
    image: string;
    alt_text: string | null;
  }>;

  certifications_section: Array<{
    id: number;
    about_page_id: number;
    heading: string;
  }>;

  certificates: Array<{
    id: number;
    certifications_id: number;
    image: string;
    tag: string;
  }>;

  explore_products_section: Array<{
    id: number;
    about_page_id: number;
    heading: string;
    description: string;
    button_text: string;
  }>;

  explore_products: Array<{
    id: number;
    explore_section_id: number;
    title: string;
    images: string[];
  }>;

  our_clients: Array<{
    id: number;
    about_page_id: number;
    heading: string;
    sub_heading: string;
    description: string;
  }>;

  client_logos: Array<{
    id: number;
    clients_id: number;
    row_number: number;
    image: string;
    alt_text: string | null;
  }>;
}

export interface InnovationPageData {
  hero: {
    title: string;
    description: string;
    button_text: string;
    background_image: string;
  };

  stats: {
    background_image: string;
    quote_text: string;
    quote_author: string;
    items: Array<{
      value: string;
      label: string;
    }>;
  };

  pillars: {
    heading: string;
    subtext: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      metric: string;
      metric_label: string;
    }>;
  };

  timeline: {
    heading: string;
    subtext: string;
    events: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };

  team: {
    heading: string;
    subtext: string;
    background_image: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };

  portfolio: {
    heading: string;
    subtext: string;
    learn_more_text: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };

  globalPresence: Array<{
    value: string;
    label: string;
    country: string;
  }>;
}

export interface OurImpactPageData {
  testimonials_hero: {
    heading: string;
    sub_heading: string;
  };

  global_voices_of_trust: {
    section_heading: string;
    countries: Array<{
      name: string;
      code: string;
      review_count: number;
      reviews: Array<{
        id: number;
        rating: number;
        text: string;
        company: string;
        name: string;
      }>;
    }>;
  };

  join_partners_section: {
    heading: string;
    button_text: string;
    button_link: string;
    logo: string | null;
  };
}

export interface EventsPageData {
  events_page: {
    hero: {
      background_image: string[];
      text: string;
    };
    news_articles_section: {
      header: string;
      description: string;
      labels: {
        featured: string;
        read_more: string;
      };
      filters: string[];
    };
    featured_article: {
      id: number;
      title: string;
      date: string;
      description: string;
      category: string;
      image: string | null;
    };
    articles: Array<{
      id: number;
      title: string;
      date: string;
      description: string;
      category: string;
      image: string | null;
    }>;
    upcoming_events_section: {
      title: string;
      events: Array<{
        id: number;
        location: string;
        title: string;
        date: string;
        description: string;
        image: string | null;
        booth?: string;
      }>;
    };
    past_highlights_section: {
      title: string;
      months_filter: string[];
      events: Array<{
        id: number;
        month: string;
        location: string;
        title: string;
        description: string;
        image: string | null;
      }>;
    };
    cta_section: {
      main_text: string;
      description: string;
      button_text: string;
      button_link: string;
      logo: string | null;
    };
  };
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

  async getAboutPageData(): Promise<AboutPageData> {
    try {
      const response = await fetch(`${this.baseURL}/api/about-page/`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching about page data:', error);
      throw error;
    }
  }

  async getProductsData() {
    // Future implementation
    try {
      const response = await fetch(`${this.baseURL}/api/products/`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products data:', error);
      throw error;
    }
  }

  async getInnovationPageData(): Promise<InnovationPageData> {
    try {
      const response = await fetch(`${this.baseURL}/api/innovation-page/`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching innovation page data:', error);
      throw error;
    }
  }

  async getOurImpactPageData(): Promise<OurImpactPageData> {
    try {
      const response = await fetch(`${this.baseURL}/api/our-impact-page/`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching our impact page data:', error);
      throw error;
    }
  }

  async getEventsPageData(): Promise<EventsPageData> {
    try {
      const response = await fetch(`${this.baseURL}/api/events-page/`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching events page data:', error);
      throw error;
    }
  }

}

export const apiService = new APIService();
export default apiService;