import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-app-profile-info',
  templateUrl: './app-profile-info.component.html',
  styleUrls: ['./app-profile-info.component.scss']
})
export class AppProfileInfoComponent implements OnInit {
  @Input() user$: User;
  imagePreview: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onImagePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = ()=>{
      this.imagePreview = reader.result.toString();
    };
    reader.readAsDataURL(file);

    this.onSaveAvatar(file);
  }
  onSaveAvatar(file:File){
    this.userService.updateAvatar(file);
    this.userService.getAvatarUrl().subscribe(avatarUrl$ =>{
      this.user$.avatarURL=avatarUrl$;
    })
    console.log(this.user$);
    this.userService.updateUserByID(this.user$._id,this.user$);
    // this.userService.updateUserByID(this.user$._id,this.user$);

  }
}
