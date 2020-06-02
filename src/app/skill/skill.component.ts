/*
Modèle de données du composant SkillComponent\
Liste des propriétés :
•skill de type Skill en visibilité public

*/


import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})



export class SkillComponent implements OnInit {

  @Input() mySkill: Skill; 

  constructor() { }

  ngOnInit(): void {
  }

}
