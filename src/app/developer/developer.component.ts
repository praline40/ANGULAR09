import { Component, OnInit, NgModule } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})

export class DeveloperComponent implements OnInit {
  public master = 'Master';
  public skill1 : Skill;
  public skill2: Skill;
  public skills: Skill[];
  public developer : Developer; 
  names : string[];

  constructor() {}

  ngOnInit(): void {
    this.skill1 = new Skill('Angular', 'ANG', 'https://angular.io/api/core/Input');
    this.skill2 = new Skill('Delphi', 'https://www.google.com/search?q=delphi+langage+logo&tbm=isch&ved=2ahUKEwin7eamy-DpAhUDKRQKHfTGCJoQ2-cCegQIABAA&oq=delphi+langage+logo&gs_lcp=CgNpbWcQAzIGCAAQBxAeMggIABAIEAcQHjIGCAAQBxAeULgxWN06YNs8aABwAHgAgAF9iAF9kgEDMC4xmAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ei=o_DUXuePGoPSUPSNo9AJ&bih=1030&biw=2133#imgrc=mluHMbNg3Pdz_M&imgdii=eFufFuJi2ZjdtM', 'https://https://fr.wikipedia.org/wiki/Delphi_(langage).io/api/core/Input');
    this.skills = [this.skill1, this.skill2] ;
    this.developer = new Developer('Gietrich', 'Wilfrid', 36, 'M', 'blablabla', this.skills); 
   
  }

}
