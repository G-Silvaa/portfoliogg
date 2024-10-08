import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from 'src/app/shared/components/image-modal/image-modal.component';
import anime from 'animejs/lib/anime.es.js';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
 
})

export class PortfolioComponent {

  isvisible = true;  
  
  constructor(public dialog: MatDialog) {}

  list = [
    {
      title: 'Projeto Avisos',
      description: 'O projeto de avisos para o campus IFCE foi desenvolvido para exibir avisos em tempo real nos monitores do campus. A ideia era permitir a atualização em tempo real dos avisos, garantindo que as informações fossem sempre atuais e relevantes para os alunos e funcionários. Atuei no desenvolvimento do frontend usando Angular, assegurando a interatividade e a atualização dinâmica dos avisos.',
      image: '../../../assets/avisos.PNG',
      icon: '../../../assets/globo.svg',
      url: 'https://avisos-h.maracanau.ifce.edu.br/login?returnUrl=%2F'
    },
  
    {
      title: 'Senium Logevidade',
      description: 'O projeto Senium Longevidade foi desenvolvido para conectar profissionais 50+ com empresas que valorizam a experiência. A ideia era criar uma plataforma de emprego estilo LinkedIn para pessoas mais velhas. Atuei no desenvolvimento do frontend usando Angular, onde fui tech leader, assegurando a interatividade e a atualização dinâmica da plataforma. O projeto visava facilitar a inserção de profissionais experientes no mercado de trabalho.',
      image: '../../../assets/seniumm.png',
      icon: '../../../assets/globo.svg',
      url: 'https://senium-h.maracanau.ifce.edu.br/'
    },
    {
      title: 'Projeto Chaves',
      description: 'O Projeto Chaves foi desenvolvido para o gerenciamento de chaves de armário no IFCE, ajudando no controle dos armários do campus. Nesse projeto, atuei no front end como um "ajudante", criando a estrutura do projeto, corrigindo erros em pipeline, tirando dúvidas e desenvolvendo com Angular. A ideia era garantir que as informações fossem sempre atuais e relevantes para os alunos e funcionários, melhorando a eficiência do controle de armários.',
      image: '../../../assets/chavesPNG.PNG',
      icon: '../../../assets/globo.svg',
      url: 'https://chaves-h.maracanau.ifce.edu.br/login'
    },
    {
      title: 'Intranet IFCE',
      description: 'Participei do desenvolvimento do sistema ERP da intranet do IFCE Campus Maracanaú, atendendo a mais de 2000 alunos e servidores. Nosso objetivo era garantir uma experiência integrada para a comunidade acadêmica, facilitando o acesso e a gestão de dados essenciais para as operações diárias da instituição. Atuei no frontend usando React, assegurando a interatividade e a atualização dinâmica dos dados.',
      image: '../../../assets/intranet-BwslL2mt.png',
      icon: '../../../assets/globo.svg',
      url: 'https://intranet.maracanau.ifce.edu.br/login'
    },
    {
      title: 'Sysra IFCE',
      description: 'Participei do desenvolvimento front-end do SysRa, uma aplicação de gerenciamento alimentar projetada para atender às necessidades do IFCE Campus Maracanaú e, posteriormente, outros campi da comunidade acadêmica. Usando React, assegurei a interatividade e a atualização dinâmica dos dados. O projeto visava melhorar a eficiência e a gestão alimentar no campus, proporcionando uma melhor experiência para os usuários.',
      image: '../../../assets/sysra-lseskkPR.png',
      icon: '../../../assets/globo.svg',
      url: 'https://sysra.maracanau.ifce.edu.br/'
    },
    {
      title: 'Intranet 2 IFCE',
      description: 'Participei do desenvolvimento da Intranet 2 IFCE, uma evolução do sistema ERP da intranet do IFCE Campus Maracanaú, com melhorias significativas e a ideia de distribuir para todos os outros campi. Nosso objetivo era garantir uma experiência integrada para a comunidade acadêmica, facilitando o acesso e a gestão de dados essenciais. Atuei no frontend usando Angular, assegurando a interatividade e a atualização dinâmica dos dados.',
      image: '../../../assets/intranet2.png',
      icon: '../../../assets/globo.svg',
      url: 'https://sysra.maracanau.ifce.edu.br/'
    }
  ];

  skills = [
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', color: '#33A9DC' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
  { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg', color: '#CC6699' },
  { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg', color: '#CC6699' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#336791' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#4479A1' },
  { name: 'RxJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg', color: '#B7178C' }
  
  ];

  devops = [
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg', color: '#FC6D26' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', color: '#181717' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#F05032' },

  
  ];

  teste =[
    { name: 'Karma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/karma/karma-original.svg', color: '#3DDC84' }
  ]


  openImageModal(image: string): void {
    this.dialog.open(ImageModalComponent, {
      data: { image },
      panelClass: 'custom-dialog-container'
    });
  }

  toggleVisibility(): void {
    this.isvisible = !this.isvisible;
  }

  ngAfterViewInit(): void {
    this.animateText();
  }

  animateText(): void {
    anime({
        targets: ['.welcome', '.intro'],
        opacity: [0, 1],
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 2000
    });
}

  
}
