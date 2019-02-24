RecruitNew = {
  company_name: String,
  job_title: String,
  tags = [],
  job_description: String,
  salary: Number,
  
  created: {
    type: Date,
    default: Date.now
  }
}
