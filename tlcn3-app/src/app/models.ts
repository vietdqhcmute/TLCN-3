export interface User{
    resume: Resume;
    idFacebook: string;
    facebookName: string;
    avatarURL: string;
    _id: string;
}
export interface Resume {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    pictureUrl?: string;
    social: Array<Social>;
    experience: Array<Experience>;
    education: Array<Education>;
    project: Array<Project>;
    skill: Array<String>;
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
    _id: string;
}

export interface Experience {
    title: string;
    summary?: string;
    startDate: YearAndMonth;
    endDate?: YearAndMonth;
    current: boolean;
    company: string;
    _id: string;

}

export interface Education {
    school: string;
    major: string;
    startDate: YearAndMonth;
    endDate?: YearAndMonth;
    current?: boolean;
    degree?: string;
    _id: string;

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
    _id: string;

}

export interface Tag {
    name: string;
    highlighted: boolean;
}

export interface YearAndMonth {
    year: number,
    month: number;
}
