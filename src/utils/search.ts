export type FilterOptions = Array<{ key: string; value: string }>;
export const ListOptions: FilterOptions = [
  { key: 'serie', value: 'Filme/Série' },
  { key: 'author', value: 'Diretor' },
  { key: 'studio', value: 'Estúdio' },
  { key: 'user', value: 'Usuário' },
  { key: 'streaming', value: 'Streaming' },
];

export const UserOptions: FilterOptions = [
  { key: 'all', value: 'Todos' },
  { key: 'watched', value: 'Assisti' },
  { key: 'watching', value: 'Assistindo' },
  { key: 'plan_to_watch', value: 'Pretendo ver' },
  { key: 'dropped', value: 'Desisti' },
];
