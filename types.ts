export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  isPrimary?: boolean;
}

export interface LogoItem {
  name: string;
  url: string;
}

export interface RiskAnalysisResponse {
  riskScore: number;
  summary: string;
  keyThreats: string[];
  recommendations: string[];
}
