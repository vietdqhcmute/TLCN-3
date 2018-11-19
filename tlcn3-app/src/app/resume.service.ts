import { EventEmitter, Injectable } from "@angular/core";
import { DatePipe, Location } from "@angular/common";

import {
  Resume,
  Social,
  Experience,
  Education,
  Project,
  YearAndMonth
} from "./models";

@Injectable({
  providedIn: "root"
})
export class ResumeService {
  //What is EventEmitter -> to let component know what change
  public resumeChanged: EventEmitter<Resume>;
  editMode: boolean;
  private STORAGE_KEY = "resume";

  constructor(location: Location) {
    // EventEmitter to let components know when the resume is changed
    this.resumeChanged = new EventEmitter(false);

    // Edit mode if path is /edit
    this.editMode = location.isCurrentPathEqualTo("/?edit");
  }
  // Edit mode if path is /edit --> a lot of things will depend on the path
  //Saves resume in browser
  saveResume(resume: Resume) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(resume));
    // Tell components resume has changed
    this.resumeChanged.emit(resume);
  }
  //Retrive last saved resume stored in browser

  //Adds a experience to the saved resume and saves it.
  //Update experience.
  //Removes a experience.

  //Adds an education to the saved resume and saves it.
  //Update educations.
  //Removes an education.

  //Adds an skill to the saved resume and saves it.
  //Update skill.
  //Removes an skill.

  //Adds an project to the saved resume and saves it.
  //Update project.
  //Removes an project.

  // Update resume personal information.
  //Parse and save a resume stored in the standardized json resume format (https://github.com/jsonresume/resume-schema/blob/0.0.0/schema.json)
  //Converts a resume to json resume
}
