import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PostDetailContainer,
  HeaderImage,
  ContentContainer,
  TitleSection,
  TitleText,
  TagsText,
  InfoSection,
  InfoItem,
  InfoLabel,
  InfoValue,
  InfoIcon,
  AuthorSection,
  AuthorTitle,
  AuthorCard,
  AuthorProfile,
  AuthorInfo,
  AuthorName,
  AuthorVerification,
  AuthorLocation,
  AuthorStats,
  AuthorStatItem,
  AuthorStatValue,
  AuthorStatLabel,
  AuthorLevel,
  LevelIcon,
  LevelText,
  ProjectDescription,
  DescriptionTitle,
  DescriptionContent,
  PreferencesSection,
  PreferencesTitle,
  PreferencesItem,
  PreferencesLabel,
  PreferencesValue,
  DistanceChip,
  ToolsChip,
  MethodChip,
  PositionSection,
  PositionTitle,
  PositionCards,
  PositionCard,
  PositionCardContent,
  PositionTitle as PositionCardTitle,
  PositionCount,
  BottomActions,
  ActionButton,
  SecondaryButton,
  PrimaryButton,
  BookmarkInfo,
} from './postDetail.styles';
import { colors } from '../../style/colors';
import { mockPostData } from '../../mock/post';
import BackDrop from '../../components/common/backDrop/backDrop';
import { BaseContainerWithSpaceBetween } from '../../components/container/container.styles';
import Bookmark from '../../assets/icons/bookmark.svg';
import StatusChips from '../../components/post/statusChips/statusChips';
const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postData = mockPostData.find((post) => post.id === Number(id)) || mockPostData[0];

  const handleSupport = () => {
    // 응원하기 기능
    console.log('응원하기');
  };

  const handleChat = () => {
    // 대화하기 기능
    console.log('대화하기');
  };

  return (
    <PostDetailContainer>
      {/* 헤더 이미지 */}
      <HeaderImage>
        <BaseContainerWithSpaceBetween>
          <BackDrop />
        </BaseContainerWithSpaceBetween>

        <div className="image-counter">1/3</div>
      </HeaderImage>

      {/* 콘텐츠 */}
      <ContentContainer>
        {/* 제목 섹션 */}
        <TitleSection>
          <div className="title-content">
            <TitleText>{postData.title}</TitleText>
            <TagsText>{postData.tags}</TagsText>
          </div>

          <img src={Bookmark} alt="bookmark" />
        </TitleSection>

        {/* 상태 칩 */}
        <StatusChips progress={postData.status.progress} deadline={postData.status.deadline} />

        {/* 정보 섹션 */}
        <InfoSection>
          <InfoItem>
            <InfoIcon>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 1V17M1 9H17"
                  stroke={colors.gray[400]}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </InfoIcon>
            <InfoLabel>모집 인원</InfoLabel>
            <InfoValue>{postData.recruitment.current}명</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 1V17M1 9H17"
                  stroke={colors.gray[400]}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </InfoIcon>
            <InfoLabel>모집 분야</InfoLabel>
            <InfoValue>{postData.recruitment.field}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 1V17M1 9H17"
                  stroke={colors.gray[400]}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </InfoIcon>
            <InfoLabel>예상 기간</InfoLabel>
            <InfoValue>{postData.recruitment.duration}</InfoValue>
          </InfoItem>
        </InfoSection>

        {/* 포지션 섹션 */}
        <PositionSection>
          <PositionTitle>{postData.recruitment.current}명 모집중</PositionTitle>
          <PositionCards>
            {postData.positions.map((position, index) => (
              <PositionCard key={index}>
                <PositionCardContent>
                  <PositionCardTitle>{position.title}</PositionCardTitle>
                  <PositionCount>{position.count}명</PositionCount>
                </PositionCardContent>
              </PositionCard>
            ))}
          </PositionCards>
        </PositionSection>

        {/* 작성자 정보 */}
        <AuthorSection>
          <AuthorTitle>작성자 루키 정보</AuthorTitle>
          <AuthorCard>
            <AuthorProfile>
              <div className="profile-image">
                <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
                  <circle cx="33" cy="33" r="33" fill={colors.gray[200]} />
                  <circle cx="33" cy="26" r="8" fill={colors.gray[400]} />
                  <path
                    d="M20 50C20 42.268 25.268 36 33 36C40.732 36 46 42.268 46 50"
                    fill={colors.gray[400]}
                  />
                </svg>
              </div>
              <AuthorInfo>
                <div className="name-section">
                  <AuthorName>{postData.authorInfo.name}</AuthorName>
                  {postData.authorInfo.verified && (
                    <AuthorVerification>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 0L10.5 5.5L16 6L12 10L13 16L8 13L3 16L4 10L0 6L5.5 5.5L8 0Z"
                          fill={colors.gray[400]}
                        />
                      </svg>
                      <span>학교 인증완료</span>
                    </AuthorVerification>
                  )}
                </div>
                <AuthorLocation>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 0C5.2 0 3 2.2 3 5C3 9 8 16 8 16S13 9 13 5C13 2.2 10.8 0 8 0ZM8 6.5C6.6 6.5 5.5 5.4 5.5 4C5.5 2.6 6.6 1.5 8 1.5C9.4 1.5 10.5 2.6 10.5 4C10.5 5.4 9.4 6.5 8 6.5Z"
                      fill={colors.gray[400]}
                    />
                  </svg>
                  <span>{postData.authorInfo.location}</span>
                </AuthorLocation>
              </AuthorInfo>
            </AuthorProfile>
            <AuthorStats>
              <AuthorStatItem>
                <AuthorStatValue>{postData.authorInfo.projects}개</AuthorStatValue>
                <AuthorStatLabel>공개 가능 프로젝트</AuthorStatLabel>
              </AuthorStatItem>
              <AuthorStatItem>
                <AuthorStatValue>{postData.authorInfo.responseRate}%</AuthorStatValue>
                <AuthorStatLabel>응답률</AuthorStatLabel>
              </AuthorStatItem>
              <AuthorLevel>
                <LevelIcon>
                  <svg width="51" height="27" viewBox="0 0 51 27" fill="none">
                    <rect width="51" height="27" rx="13.5" fill={colors.green[200]} />
                    <rect x="0" y="8" width="33" height="19" rx="9.5" fill={colors.green[300]} />
                    <path
                      d="M38 18L42 14L46 18"
                      stroke={colors.gray[800]}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </LevelIcon>
                <LevelText>
                  <span>{postData.authorInfo.level}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 0L7.5 3L10.5 3L8.25 5.25L9 8.25L6 6.75L3 8.25L3.75 5.25L1.5 3L4.5 3L6 0Z"
                      fill={colors.gray[800]}
                    />
                  </svg>
                </LevelText>
              </AuthorLevel>
            </AuthorStats>
          </AuthorCard>
        </AuthorSection>

        {/* 프로젝트 설명 */}
        <ProjectDescription>
          <DescriptionTitle>프로젝트 소개</DescriptionTitle>
          <DescriptionContent>{postData.description}</DescriptionContent>
        </ProjectDescription>

        {/* 선호사항 */}
        <PreferencesSection>
          <PreferencesTitle>이런 사람과 같이 하고 싶어요!</PreferencesTitle>
          <PreferencesItem>
            <PreferencesLabel>선호하는 거리</PreferencesLabel>
            <DistanceChip>{postData.preferences.distance}</DistanceChip>
          </PreferencesItem>
          <PreferencesItem>
            <PreferencesLabel>사용하는 협업툴</PreferencesLabel>
            <div className="tools-chips">
              {postData.preferences.tools.map((tool, index) => (
                <ToolsChip key={index}>{tool}</ToolsChip>
              ))}
            </div>
          </PreferencesItem>
          <PreferencesItem>
            <PreferencesLabel>모이는 방식</PreferencesLabel>
            <MethodChip>{postData.preferences.method}</MethodChip>
          </PreferencesItem>
        </PreferencesSection>

        {/* 북마크 정보 */}
        <BookmarkInfo>
          북마크 {postData.stats.bookmarks} · 조회 {postData.stats.views}
        </BookmarkInfo>
      </ContentContainer>

      {/* 하단 액션 버튼 */}
      <BottomActions>
        <SecondaryButton onClick={handleSupport}>
          <svg width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path
              d="M9 1L11.5 7.5L18 8L13.5 12L15 19L9 15L3 19L4.5 12L0 8L6.5 7.5L9 1Z"
              stroke={colors.gray[800]}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          응원하기
        </SecondaryButton>
        <PrimaryButton onClick={handleChat}>대화하기</PrimaryButton>
      </BottomActions>
    </PostDetailContainer>
  );
};

export default PostDetail;
