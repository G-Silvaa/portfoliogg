import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from 'src/app/shared/components/image-modal/image-modal.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('toggleAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('visible <=> hidden', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})

export class PortfolioComponent {

  isvisible = true;  
  
  constructor(public dialog: MatDialog) {}

  list = [
    {
      title: 'Projeto Avisos',
      description: 'O projeto de avisos para o campus IFCE foi desenvolvido para exibir avisos em tempo real nos monitores do campus. A ideia era permitir a atualização em tempo real dos avisos, garantindo que as informações fossem sempre atuais e relevantes para os alunos e funcionários. Atuei no desenvolvimento do frontend usando Angular, assegurando a interatividade e a atualização dinâmica dos avisos.',
      image: '../../../assets/avisos.PNG',
      icon: '../../../assets/globo.svg'
    },
  
    {
      title: 'Senium Logevidade',
      description: 'O projeto Senium Longevidade foi desenvolvido para conectar profissionais 50+ com empresas que valorizam a experiência. A ideia era criar uma plataforma de emprego estilo LinkedIn para pessoas mais velhas. Atuei no desenvolvimento do frontend usando Angular, onde fui tech leader, assegurando a interatividade e a atualização dinâmica da plataforma. O projeto visava facilitar a inserção de profissionais experientes no mercado de trabalho.',
      image: '../../../assets/seniumm.png',
      icon: '../../../assets/globo.svg'
    },
    {
      title: 'Projeto Chaves',
      description: 'O Projeto Chaves foi desenvolvido para o gerenciamento de chaves de armário no IFCE, ajudando no controle dos armários do campus. Nesse projeto, atuei no front end como um "ajudante", criando a estrutura do projeto, corrigindo erros em pipeline, tirando dúvidas e desenvolvendo com Angular. A ideia era garantir que as informações fossem sempre atuais e relevantes para os alunos e funcionários, melhorando a eficiência do controle de armários.',
      image: '../../../assets/chavesPNG.PNG',
      icon: '../../../assets/globo.svg'
    },
    {
      title: 'Intranet IFCE',
      description: 'Participei do desenvolvimento do sistema ERP da intranet do IFCE Campus Maracanaú, atendendo a mais de 2000 alunos e servidores. Nosso objetivo era garantir uma experiência integrada para a comunidade acadêmica, facilitando o acesso e a gestão de dados essenciais para as operações diárias da instituição. Atuei no frontend usando React, assegurando a interatividade e a atualização dinâmica dos dados.',
      image: '../../../assets/intranet-BwslL2mt.png',
      icon: '../../../assets/globo.svg'
    },
    {
      title: 'Sysra IFCE',
      description: 'Participei do desenvolvimento front-end do SysRa, uma aplicação de gerenciamento alimentar projetada para atender às necessidades do IFCE Campus Maracanaú e, posteriormente, outros campi da comunidade acadêmica. Usando React, assegurei a interatividade e a atualização dinâmica dos dados. O projeto visava melhorar a eficiência e a gestão alimentar no campus, proporcionando uma melhor experiência para os usuários.',
      image: '../../../assets/sysra-lseskkPR.png',
      icon: '../../../assets/globo.svg'
    },
    {
      title: 'Intranet 2 IFCE',
      description: 'Participei do desenvolvimento da Intranet 2 IFCE, uma evolução do sistema ERP da intranet do IFCE Campus Maracanaú, com melhorias significativas e a ideia de distribuir para todos os outros campi. Nosso objetivo era garantir uma experiência integrada para a comunidade acadêmica, facilitando o acesso e a gestão de dados essenciais. Atuei no frontend usando Angular, assegurando a interatividade e a atualização dinâmica dos dados.',
      image: '../../../assets/intranet2.png',
      icon: '../../../assets/globo.svg'
    }
  ];

  openImageModal(image: string): void {
    this.dialog.open(ImageModalComponent, {
      data: { image },
      panelClass: 'custom-dialog-container'
    });
  }

  toggleVisibility(): void {
    this.isvisible = !this.isvisible;
  }

  
}
