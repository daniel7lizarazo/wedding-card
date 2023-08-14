export interface IAsiste {
  Bool: boolean;
  Valid: boolean;
}

export interface IInvitados {
  Id: number;
  Id_text: string;
  Nombre: string;
  Nombre_invitacion: string;
  Asiste: IAsiste;
}