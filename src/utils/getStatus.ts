import { Status, UserStatus } from '../types/Serie';

export function getSerieStatus(value: Status) {
  return {
    FINISHED: 'Finalizado',
    'ON GOING': 'Em andamento',
    'NOT RELEASED YET': 'Não lançado',
  }[value];
}

export function getUserStatus(value: UserStatus) {
  return {
    watched: 'Assisti',
    plan_to_watch: 'Pretendo ver',
    dropped: 'Desisti',
    watching: 'Assistindo',
  }[value];
}

export const selectStatus: Array<UserStatus> = [
  'watched',
  'watching',
  'plan_to_watch',
  'dropped',
];
