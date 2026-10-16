export interface SkillGroups {
  languages: string[];
  frameworks: string[];
  engineering: string[];
  tools: string[];
  infra: string[];
}

export interface Experience {
  company: string;
  href?: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Project {
  name: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  start: string;
  end: string;
  certificates: string[];
}
