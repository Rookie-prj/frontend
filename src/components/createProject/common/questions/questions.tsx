import {
  QuestionsContainer,
  QuestionsText,
  QuestionsTextDetail,
  QuestionsTextContainer,
  QuestionsNumber,
} from './questions.styles';
import oneIcon from '../../../../assets/icons/questions/one.svg';
import twoIcon from '../../../../assets/icons/questions/two.svg';
import threeIcon from '../../../../assets/icons/questions/three.svg';
import fourIcon from '../../../../assets/icons/questions/four.svg';
interface OptionsProps {
  text: string;
  subText?: string;
  number?: QuestionIconType;
}
export const questionIcons = {
  one: oneIcon,
  two: twoIcon,
  three: threeIcon,
  four: fourIcon,
} as const;
export type QuestionIconType = keyof typeof questionIcons;
const Questions = ({ text, number, subText }: OptionsProps) => {
  return (
    <QuestionsContainer>
      <QuestionsNumber src={number ? questionIcons[number] : undefined} />
      <QuestionsTextContainer>
        <QuestionsText>{text}</QuestionsText>
        <QuestionsTextDetail>{subText}</QuestionsTextDetail>
      </QuestionsTextContainer>
    </QuestionsContainer>
  );
};

export default Questions;
