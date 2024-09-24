import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {


  list = [
    {
      title: 'Projeto Avisos',
      description: 'O projeto de avisos para o campus IFCE foi desenvolvido para exibir avisos em tempo real nos monitores do campus. A ideia era permitir a atualização em tempo real dos avisos, garantindo que as informações fossem sempre atuais e relevantes para os alunos e funcionários. A stack utilizada foi Laravel para o backend/API\'s e JavaScript puro para o frontend. O repositório do Github para este projeto é privado no momento.',
      image: '../../../assets/avisos.PNG',
      icon: '../../../assets/globo.svg'
    },
    // Adicione mais 5 projetos aqui
    {
      title: 'Senium Logevidade',
      description: 'O projeto de avisos para o campus IFCE foi desenvolvido para exibir avisos em tempo real nos monitores do campus. A ideia era permitir a atualização em tempo real dos avisos, garantindo que as informações fossem sempre atuais e relevantes para os alunos e funcionários. A stack utilizada foi Laravel para o backend/API\'s e JavaScript puro para o frontend. O repositório do Github para este projeto é privado no momento.',
      image: '../../../assets/seniumm.png',
      icon: '../../../assets/globo.svg'
    },
    {
      title: 'Projeto Chaves',
      description: 'O projeto de avisos para o campus IFCE foi desenvolvido para exibir avisos em tempo real nos monitores do campus. A ideia era permitir a atualização em tempo real dos avisos, garantindo que as informações fossem sempre atuais e relevantes para os alunos e funcionários. A stack utilizada foi Laravel para o backend/API\'s e JavaScript puro para o frontend. O repositório do Github para este projeto é privado no momento.',
      image: '../../../assets/chavesPNG.PNG',
      icon: '../../../assets/globo.svg'
    },
    {
      title: 'Intranet IFCE',
      description: 'O projeto de avisos para o campus IFCE foi desenvolvido para exibir avisos em tempo real nos monitores do campus. A ideia era permitir a atualização em tempo real dos avisos, garantindo que as informações fossem sempre atuais e relevantes para os alunos e funcionários. A stack utilizada foi Laravel para o backend/API\'s e JavaScript puro para o frontend. O repositório do Github para este projeto é privado no momento.',
      image: '../../../assets/intranet-BwslL2mt.png',
      icon: '../../../assets/globo.svg'
    },
    {
      title: 'Sysra IFCE',
      description: 'O projeto de avisos para o campus IFCE foi desenvolvido para exibir avisos em tempo real nos monitores do campus. A ideia era permitir a atualização em tempo real dos avisos, garantindo que as informações fossem sempre atuais e relevantes para os alunos e funcionários. A stack utilizada foi Laravel para o backend/API\'s e JavaScript puro para o frontend. O repositório do Github para este projeto é privado no momento.',
      image: '../../../assets/sysra-lseskkPR.png',
      icon: '../../../assets/globo.svg'
    },
    {
      title: 'Intranet 2 IFCE',
      description: 'O projeto de avisos para o campus IFCE foi desenvolvido para exibir avisos em tempo real nos monitores do campus. A ideia era permitir a atualização em tempo real dos avisos, garantindo que as informações fossem sempre atuais e relevantes para os alunos e funcionários. A stack utilizada foi Laravel para o backend/API\'s e JavaScript puro para o frontend. O repositório do Github para este projeto é privado no momento.',
      image: '../../../assets/intranet-BwslL2mt.png',
      icon: '../../../assets/globo.svg'
    }
  ];

  
}
