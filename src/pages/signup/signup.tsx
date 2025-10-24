import BackDrop from '../../components/common/backDrop/backDrop';
import {
  BaseContainer,
  BaseContainerWithSpaceBetween,
} from '../../components/container/container.styles';

import { StepTitle } from '../../components/createProject/steps/steps.styles';
const Signup = () => {
  return (
    <BaseContainerWithSpaceBetween>
      <BackDrop />
      <BaseContainer>
        <StepTitle>{TEAM.STEP1}</StepTitle>
      </BaseContainer>
    </BaseContainerWithSpaceBetween>
  );
};

export default Signup;
