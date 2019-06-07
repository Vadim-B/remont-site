import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  public targetStep = 1;
  public targetStepToggleStopped = false;

  constructor() { }

  ngOnInit() {
    this.targetStepToggle();
  }

  public targetStepToggle() {
    const toggle = () => {
      if (this.targetStepToggleStopped === true) {
        return;
      } else if (this.targetStep === 6) {
        this.targetStep = 1;
      } else {
        this.targetStep += 1;
      }
    };
    setInterval(toggle, 3000);
  }

}
