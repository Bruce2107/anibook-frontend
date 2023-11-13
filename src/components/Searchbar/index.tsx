/* eslint-disable operator-linebreak */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import StyledInput, { Container, StyledButton, StyledCombo } from './style';
import isEmpty from '../../utils/isEmpty';

export type RequestParam = {
  filter: string;
  searchText: string;
};
type Props = {
  requestFunc: ({ ...props }: RequestParam) => Promise<void>;
};

const SearchBar: React.FC<Props> = ({ requestFunc }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = false;
  }, []);

  const sendRequest = useCallback(async () => {
    if (
      isSending ||
      isEmpty(searchRef.current?.value) ||
      isEmpty(selectRef.current?.value)
    ) {
      return;
    }
    setIsSending(true);
    await requestFunc({
      filter: selectRef.current?.value || '',
      searchText: searchRef.current?.value || '',
    });
    setIsSending(false);
    if (isMounted.current) {
      setIsSending(false);
    }
  }, [isSending, requestFunc]);
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <StyledCombo ref={selectRef}>
        <option value="serie">Filme/Série</option>
        <option value="author">Diretor</option>
        <option value="studio">Estúdio</option>
        <option value="user">Usuário</option>
        <option value="streaming">Streaming</option>
      </StyledCombo>
      <StyledInput ref={searchRef} />
      <StyledButton onClick={sendRequest}>
        <IoMdSearch aria-label="Pesquisar" />
      </StyledButton>
    </Container>
  );
};

export default SearchBar;
