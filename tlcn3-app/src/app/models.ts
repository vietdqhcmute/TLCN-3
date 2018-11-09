export interface Resume {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    pictureUrl: string;
    social: Array<Social>;
    positions: Array<Position>;
    educations: Array<Education>;
    projects: Array<Project>;
    skills: Array<Skill>;
}

export enum SocialType {
    LINKEDIN = "LINKEDIN",
    GITHUB = "GITHUB",
    TWITTER = "TWITTER",
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM",
    UNKNOWN = "UNKNOWN"
}

export interface Social {
    type: SocialType;
    url: string;
}

export interface Position {
    title: string;
    summary?: string;
    startDate: YearAndMonth;
    endDate?: YearAndMonth;
    current: boolean;
    company: string;
}

export interface Education {
    school: string;
    field: string;
    startDate: YearAndMonth;
    endDate?: YearAndMonth;
    current?: boolean;
    degree?: string;
}

export interface Skill {
    name: string;
    competence: number;
}

export interface Project {
    name: string;
    description: string;
    imageUrl?: string;
    startDate: YearAndMonth;
    endDate?: YearAndMonth;
    current?: boolean;
    web?: string;
    tags?: Array<Tag>;
}

export interface Tag {
    name: string;
    highlighted: boolean;
}

export interface YearAndMonth {
    year: number,
    month: number;
}
