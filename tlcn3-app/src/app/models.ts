export interface User{
    resume: Resume;
    googleId: string;
    googleName: string;
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

export class Experience {
    title: string;
    description?: string;
    startMonth: number;
    startYear: number;
    endMonth?: number;
    endYear?: number;
    current: boolean;
    company_name: string;
    _id: string;
    constructor (
        company_name: string,
        title: string,
        startMonth: number,
        startYear: number,
        endMonth: number,
        endYear: number,
        current: boolean,
        description: string
        ){
            this.company_name= company_name;
            this.title =title;
            this.description =description;
            this.startMonth = startMonth;
            this.endMonth = endMonth;
            this.startYear = startYear;
            this.endYear = endYear;
            this.current = current;
        };
    
}

export interface Education {
    school: string;
    major: string;
    startMonth: number;
    startYear: number;
    endMonth?: number;
    endYear?: number;
    current?: boolean;
    degree?: string;
    _id: string;

}

export interface Project {
    name: string;
    description: string;
    imageUrl?: string;
    startMonth: number;
    startYear: number;
    endMonth?: number;
    endYear?: number;
    current?: boolean;
    web?: string;
    _id: string;

}
