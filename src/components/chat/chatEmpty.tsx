import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import { typography } from '../../style/theme';
import rookieGray from '../../assets/icons/rookieGray.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 100px 20px;
  margin: 0 auto;
`;

const Icon = styled.img`
  width: 50.11px;
  height: 50.11px;
`;

const Message = styled.div`
  font-weight: 600;
  font-size: ${typography.subhead.subhead2.fontSize};
  color: ${colors.gray[300]};
  text-align: center;
  white-space: pre-line;
`;

interface ChatEmptyProps {
  message?: string;
}

function ChatEmpty({ message = '아직 루키와\n대화한 적이 없어요' }: ChatEmptyProps) {
  return (
    <Container>
      <Icon src={rookieGray} alt="empty chat" />
      <Message>{message}</Message>
    </Container>
  );
}

export default ChatEmpty;
