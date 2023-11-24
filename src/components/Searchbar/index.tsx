/* eslint-disable operator-linebreak */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import StyledInput, { Container, StyledButton, StyledCombo } from './style';
import isEmpty from '../../utils/isEmpty';
import { FilterOptions } from '../../utils/search';

export type RequestParam = {
  filter: string;
  searchText: string;
};
type Props = {
  requestFunc: ({ ...props }: RequestParam) => Promise<void>;
  filterOptions: FilterOptions
  canBeEmpty: Boolean
};

const SearchBar: React.FC<Props> = ({ requestFunc, filterOptions, canBeEmpty }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = false;
  }, []);

  const sendRequest = useCallback(async () => {
    if (!canBeEmpty && (
      isSending ||
      isEmpty(searchRef.current?.value) ||
      isEmpty(selectRef.current?.value))
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
  }, [isSending, requestFunc, canBeEmpty]);
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <StyledCombo ref={selectRef}>
        {filterOptions.map(({ key, value }) => (<option value={key}>{value}</option>))}
      </StyledCombo>
      <StyledInput ref={searchRef} />
      <StyledButton onClick={sendRequest}>
        <IoMdSearch aria-label="Pesquisar" />
      </StyledButton>
    </Container>
  );
};

export default SearchBar;
