export interface CandidatosProfissional{
  id?: 0,
  usuarioId?: 0,
  nome?: string,
  email?: string,
  dataDeNascimento?: string,
  telefone?: string,
  estadoCivil?: string,
  genero?: string,
  racaEtnia?: string,
  grauDeFormacao?: string,
  cep?: string,
  endereco?: string,
  cidade?: string,
  estado?: string,
  ePessoaComDeficiencia?: boolean,
  eDeficienciaAuditiva?: boolean,
  eDeficienciaFisica?: boolean,
  eDeficienciaIntelectual?: boolean,
  eDeficienciaMotora?: boolean,
  eDeficienciaVisual?: boolean,
  eLgbtqia?: boolean,
  eBaixaRenda?: boolean,
  titulo?: string,
  areaDeAtuacao?: string,
  resumoProfissional?: string,
  linkedin?: string,
  portfolio?: string,
  pdf?: string,
  photo?: string,
  clt?: boolean,
  pj?: boolean,
  temporario?: boolean,
  presencial?: boolean,
  remoto?: boolean,
  hibrido?: boolean,
  criadoEm?:string,
}

export interface Experiencias{
  cargo: string,
  empresa: string,
  descricao: string,
  dataDeInicio: string,
  dataDeTermino: string,
  trabalhoAtual: true,
  duracao:string,
}