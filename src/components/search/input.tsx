import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SearchInput as SearchInputStyled,
  InputWrapper,
  SearchInputField,
  BackButton,
  CloseButton,
  DeleteIconButton,
} from './input.styles';
import backdrop from '../../assets/icons/backdrop.svg';
import grayDeleteIcon from '../../assets/icons/gray-delete.svg';

interface SearchInputProps {
  search: string;
  onSearchChange: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ search, onSearchChange, onKeyPress }: SearchInputProps) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    onSearchChange('');
    inputRef.current?.focus();
  };

  return (
    <SearchInputStyled>
      <BackButton onClick={handleBack}>
        <img src={backdrop} alt="back" />
      </BackButton>

      <InputWrapper>
        <SearchInputField
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="찾는 프로젝트나 분야를 검색해보세요!"
          hasValue={!!search}
        />
        {search && (
          <DeleteIconButton onClick={handleDelete}>
            <img src={grayDeleteIcon} alt="delete" />
          </DeleteIconButton>
        )}
      </InputWrapper>

      <CloseButton onClick={handleClose}>닫기</CloseButton>
    </SearchInputStyled>
  );
};

export default SearchInput;
