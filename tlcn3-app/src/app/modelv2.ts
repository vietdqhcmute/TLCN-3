export class Password{
  _id: string;
  email: string;
  password: string;
  role: Number;
}

export class Statistic{
  user_id: string;
  created: Date;
  template: Number;
}

export class Experience{
  company_name: string;
  title: string;
  location: string;
  description: string;
  start_month: Number;
  end_month: Number;
  start_year: Number;
  end_year: Number;
  current: boolean;
}

export class Education{
  school_name: string;
  major: string;
  start_month: Number;
  end_month: Number;
  start_year: Number;
  end_year: Number;
  current: boolean;
}

export class Project{
  project_name: string;
  description: string;
  start_month: Number;
  end_month: Number;
  start_year: Number;
  end_year: Number;
  current: boolean;
}

export class Resume{
  title: string;
  summary: string;
  github: string;
  linkedin: string;
  website: string;
  experience: Array<Experience>;
  education: Array<Education>;
  project: Array<Project>;
  skill: Array<String>;
}

export class Candidate{
  full_name: string;
  display_name: string;
  image_url: string;
  email: string;
  phone: string;
  resume: Resume;
  _id: string;
}

export class Tag{
  tag_name: string;
}
export class RecruitNews{
  company_name: string;
  created: Date;
  job_title: string;
  tag: Array<Tag>;
  job_description: string;
  salary: Number;
}

export class Recruiter{
  company_name: string;
  email: string;
  phone: string;
  address: string;
  image_url: string;
  overview: string;
  website: string;
  employees: Number;
  candidate_follow: Array<String>;
}

export class ReviewPost{
  display_name: string;
  comment: string;
  start: Number;
}

export class Review{
  company_name: string;
  review_post: Array<Review>;
}
