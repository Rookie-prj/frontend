// import thunder from '../../../assets/images/thunder.svg';
// import people from '../../../assets/images/people.svg';
// import './postCard.styles.css';

// export const postCard = () => {
//   return (
//     <div className="post-card-container">
//       <div className="post-card-title">
//         <p className="post-card-title-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
//           제목
//         </p>
//         <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>춤추는 악어 · 상명대학교</p>
//       </div>
//       <div className="post-card-status-wrapper">
//         <p className="post-card-start-status" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//           처음부터 시작
//         </p>
//         <p className="post-card-recruit-status" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//           모집완료
//         </p>
//       </div>
//       <div className="post-card-recruit-team-wrapper">
//         <p className="post-card-recruit-team-people">
//           <img src={people} alt="people" /> 2명
//         </p>
//         <p className="post-card-recruit-team-people">
//           <img src={thunder} alt="thunder" /> 개발자
//         </p>
//       </div>
//     </div>
//   );
// };

import thunder from '../../../assets/icons/thunder.svg';
import people from '../../../assets/icons/people.svg';

import {
  PostCardAuthor,
  PostCardContainer,
  PostCardRecruitmentStatus,
  PostCardRecruitTeamPeople,
  PostCardRecruitTeamWrapper,
  PostCardStartStatus,
  PostCardStartStatusWrapper,
  PostCardTitleWrapper,
  PostCardTitleText,
  PostCardTitleContent,
} from './postCard.styles';

interface PostCardProps {
  title: string;
  author: string;
}

export const PostCard = ({ title, author }: PostCardProps) => {
  return (
    <PostCardContainer>
      <PostCardTitleWrapper>
        <PostCardTitleContent>
          <PostCardTitleText>{title}</PostCardTitleText>
          <PostCardAuthor>{author}</PostCardAuthor>
        </PostCardTitleContent>
      </PostCardTitleWrapper>
      <PostCardStartStatusWrapper>
        <PostCardStartStatus>처음부터 시작</PostCardStartStatus>
        <PostCardRecruitmentStatus>모집완료</PostCardRecruitmentStatus>
      </PostCardStartStatusWrapper>
      <PostCardRecruitTeamWrapper>
        <PostCardRecruitTeamPeople>
          <img src={people} alt="people" />
          <p> 2명</p>
        </PostCardRecruitTeamPeople>
        <PostCardRecruitTeamPeople>
          <img src={thunder} alt="thunder" /> <p>개발자</p>
        </PostCardRecruitTeamPeople>
      </PostCardRecruitTeamWrapper>
    </PostCardContainer>
  );
};
