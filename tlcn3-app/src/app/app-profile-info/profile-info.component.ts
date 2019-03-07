import { Component, OnInit, Input } from '@angular/core';
import { User, NewFeed } from '../models';
import { UserService } from '../services/user.service';
import { NewfeedService } from '../services/newfeed.service';

@Component({
  selector: 'app-app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  @Input() user$: User;
  imagePreview: string;
  newfeedsAdmin= Array<NewFeed>();
  editFlag: Boolean = false;

  constructor(private userService: UserService, private newfeedService: NewfeedService) { }

  ngOnInit() {
    this.newfeedService.getNewFeeds().subscribe(responseArray=>{
      this.newfeedsAdmin=responseArray;
    });
  }
  onEditButton(){
    this.editFlag = !this.editFlag
  }
  onImagePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = ()=>{
      this.imagePreview = reader.result.toString();
    };
    reader.readAsDataURL(file);

    this.saveAvatar(file);
  }
  saveAvatar(image:File){
    this.userService.updateAvatar(image);
    this.userService.getAvatarUrl().subscribe(avatarUrl$ =>{
      this.user$.avatarURL=avatarUrl$;
      this.userService.updateUserByID(this.user$._id,this.user$).subscribe(response=>{
        
      });
    })
    // this.userService.updateUserByID(this.user$._id,this.user$);

  }
}
