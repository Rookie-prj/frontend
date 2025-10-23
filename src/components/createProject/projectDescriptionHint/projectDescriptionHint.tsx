// import {
//   ProjectDescriptionHintContainer,
//   HintText,
//   HintList,
//   HintListItem,
// } from './projectDescriptionHint.styles';

import {
  HintList,
  HintListContainer,
  HintListItem,
  HintText,
  ProjectDescriptionHintContainer,
} from './projectDescriptionHint.styles';
import { TEAM } from '../../../constants/createProject';
export const ProjectDescriptionHint = () => {
  return (
    <ProjectDescriptionHintContainer>
      <HintListContainer>
        <HintText>{TEAM.STEP3_PROJECT_DESCRIPTION_EXPLANATION}</HintText>
        <HintList>
          <HintListItem>{TEAM.STEP3_PROJECT_DESCRIPTION_EXPLANATION_DETAIL_1}</HintListItem>
          <HintListItem>{TEAM.STEP3_PROJECT_DESCRIPTION_EXPLANATION_DETAIL_2}</HintListItem>
          <HintListItem>{TEAM.STEP3_PROJECT_DESCRIPTION_EXPLANATION_DETAIL_3}</HintListItem>
        </HintList>
      </HintListContainer>
    </ProjectDescriptionHintContainer>
  );
};
