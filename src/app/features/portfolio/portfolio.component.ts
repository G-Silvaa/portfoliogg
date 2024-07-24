import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  isActive = false;

  toggleSwitch() {
    this.isActive = !this.isActive;
  }
  
  carditens = [ 
    { title: 'Intranet', description: 'Description 1', image: 'assets/intranet-BwslL2mt.png' },
    { title: 'Sysra', description: 'Description 1', image: 'assets/sysra-lseskkPR.png' },
    { title: 'Senium', description: 'Description 1', image: 'assets/seniumm.png' },
    { title: 'Avisos', description: 'Description 1', image: 'assets/1710543310570.jpeg' },
    { title: 'Chaves', description: 'Description 1', image: 'assets/chavesPNG.PNG' },
    { title: 'Card 4', description: 'Description 1', image: 'assets/intranet-BwslL2mt.png' },
  ];
}
