export class AuthUser{
    resume: Resume;
    googleId?: string;
    googleName?: string;
    avatarURL?: string;
    userName: string;
    email: string;
    password: string;
    fullName: string;
    phone: string;
}
export interface AuthLogin{
    email: string;
    password: string;
}
export class User{
    resume: Resume;
    googleId?: string;
    googleName?: string;
    avatarURL?: string;
    userName: string;
    email: string;
    password: string;
    fullName: string;
    phone: string;
    _id: string;
}
export class Resume {
    title: string;
    summary: string;
    pictureUrl?: string;
    githubURL?: string;
    linkedinURL?: string;
    webpageURL?: string; 
    experience: Array<Experience>;
    education: Array<Education>;
    project: Array<Project>;
    skill: Array<String>;
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

export class Education {
    school_name: string;
    major: string;
    startMonth: number;
    startYear: number;
    endMonth?: number;
    endYear?: number;
    current?: boolean;
    degree?: string;
    _id: string;
    constructor(
        school: string,
        major: string,
        startMonth: number,
        startYear: number,
        endMonth: number,
        endYear: number,
        current: boolean,
        degree: string){
            this.school_name =school;
            this.major = major;
            this.startMonth = startMonth;
            this.endMonth = endMonth;
            this.startYear = startYear;
            this.endYear = endYear;
            this.current = current;
            this.degree = degree;
    }
}

export class Project {
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

    constructor(
        name: string,
        description: string,
        startMonth: number,
        startYear: number,
        endMonth: number,
        endYear: number,
        current: boolean,
        imageUrl: string,
        web: string){
            this.name =name;
            this.description = description;
            this.startMonth = startMonth;
            this.endMonth = endMonth;
            this.startYear = startYear;
            this.endYear = endYear;
            this.current = current;
            this.imageUrl = imageUrl;
            this.web = web;
    }
}

export class NewFeed{
    userID: string;
    message: string;
    created: Date;
}

export class Statistic{
    userID: string;
    template: string;
    created: Date;
}
