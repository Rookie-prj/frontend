import { TEAM } from 'constants/createProject';
import BackDrop from '../../components/common/backDrop/backDrop';
import {
  BaseContainer,
  BaseContainerWithSpaceBetween,
} from '../../components/container/container.styles';

import { StepBarItem } from '../../components/createProject/stepBar/stepBar.styles';
const Signup = () => {
  return (
    <BaseContainerWithSpaceBetween>
      <BackDrop />
      <BaseContainer>
        <StepBarItem>{TEAM.STEP1}</StepBarItem>
      </BaseContainer>
    </BaseContainerWithSpaceBetween>
  );
};

export default Signup;
