export type Status = 'FINISHED' | 'NOT RELEASED YET' | 'ON GOING';
export type UserStatus = 'watched' | 'dropped' | 'plan_to_watch' | 'watching';

export type Serie = {
  numberOfEpisodes: string;
  name: string;
  comment: string;
  synopsis: string;
  musics: string[];
  cover: string;
  status: Status;
  idStudio: string;
  authors: string[];
  streaming: string[];
  userStatus: UserStatus;
};

export type Details = Serie & {
  detailsCounter: { [key in UserStatus]: number };
};
