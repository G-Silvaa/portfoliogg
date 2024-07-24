export interface IApiResponse {
    token: string;
  }

  export interface Ilogin {
    nome: string;
    senha: string;
  }

  export interface IRegister {
    nome: string;
    email: string
    senha: string;
    confirmarSenha: string;
    dataDeNascimento: string;
  }

  export interface Experience {
    id?:  number ;
  role: string;
  duration: string;
  company: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  summary: string;

  cargo?: string;
  empresa?: string;
  descricao?: string;
  dataDeInicio?: string;
  dataDeTermino?: string;
  trabalhoAtual?: boolean;
  
}

export interface DadosParaAPI {
 
  Telefone: string;
  EstadoCivil: string;
  Genero: string;
  RacaEtnia: string;
  GrauDeFormacao: string;
  Cep: string;
  Endereco: string;
  Cidade: string;
  Estado: string;
  EPessoaComDeficiencia: boolean;
  EDeficienciaAuditiva: boolean;
  EDeficienciaFisica: boolean;
  EDeficienciaIntelectual: boolean;
  EDeficienciaMotora: boolean;
  EDeficienciaVisual: boolean;
  ELgbtqia: boolean;
  EBaixaRenda: boolean;
  Titulo: string;
  AreaDeAtuacao: string;
  ResumoProfissional: string;
  Linkedin: string;
  Portfolio: string;
  Pdf: string;
  Clt: boolean;
  Pj: boolean;
  Temporario: boolean;
  Presencial: boolean;
  Remoto: boolean;
  Hibrido: boolean;
  
}

interface PerfilFormData {
  nomeCompleto: string;
  email: string;
  telefone: string;
  dataDeNascimento: Date; // Você pode ajustar o tipo conforme necessário

  cep: string;
  endereco: string;
  cidade: string;
  estado: string;

  estadoCivil: string;
  genero: string;
  raca: string;
  graudeformacao: string;

  lgbt: boolean;
  baixarenda: boolean;
  pessoaDeficiente: boolean;

  deficiencia: {
    deficienciaAuditiva: boolean;
    deficienciaFisica: boolean;
    deficienciaIntelectual: boolean;
    deficienciaMotora: boolean;
    deficienciaVisual: boolean;
    // Adicione mais propriedades conforme necessário
  };
}

// Interface para os dados do formulário profissionalFormGroup
interface ProfissionalFormData {
  titulo: string;
  resumoProfissional: string;
  linkedin
: string;
  portfolio: string;

  seuCargo: string;
  empresa: string;
  dataDeinicio: Date;
  dataDeTermino: Date;
  descricao: string;

  areaAtuacao: string;

  trabalhoaqui: boolean;

  clt: boolean;
  pj: boolean;
  temporario: boolean;
  presencial: boolean;
  remoto: boolean;
  hibrido: boolean;
  pdf: string;
}


  