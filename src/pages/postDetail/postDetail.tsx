import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PostDetailContainer,
  HeaderImage,
  ContentContainer,
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
import TitleSection from '../../components/post/postDetail/titleSection';
import InfoSection from '../../components/post/postDetail/infoSection';
import PositionSection from '../../components/post/postDetail/positionSection';
import AuthorSection from '../../components/post/postDetail/authorSection';
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
      </HeaderImage>

      {/* 콘텐츠 */}
      <ContentContainer>
        {/* 제목 */}
        <TitleSection title={postData.title} tags={postData.tags} />
        {/* 상태 칩 */}
        <StatusChips progress={postData.status.progress} deadline={postData.status.deadline} />

        {/* 정보 섹션 */}
        <InfoSection
          total={postData.recruitment.total || 0}
          field={postData.recruitment.field}
          duration={postData.recruitment.duration}
        />

        {/* 포지션 섹션 */}
        <PositionSection total={postData.recruitment.total} positions={postData.positions} />

        {/* 작성자 정보 */}
        <AuthorSection
          name={postData.authorInfo.name}
          location={postData.authorInfo.location}
          projects={postData.authorInfo.projects}
          responseRate={postData.authorInfo.responseRate}
          level={postData.authorInfo.level}
        />
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
