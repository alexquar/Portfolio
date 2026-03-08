export interface Metric {
  value: string
  label: string
}

export interface Experience {
  company: string
  role: string
  icon: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface WebProject {
  name: string
  website: string
  image: ProjectImage
  details: string
  tools: string[]
}

export interface MobileProject {
  name: string
  website: string
  image: string[]
  details: string
  tools: string[]
}

export interface OtherProject {
  name: string
  website: string
  category: string
  tools: string[]
  details: string
}

export interface SkillItem {
  name: string
  icon: string
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
  color: string
}

export interface NavItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}
