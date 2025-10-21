import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PostDetailContainer,
  HeaderImage,
  ContentContainer,
  BottomActions,
  ActionButton,
  SecondaryButton,
  PrimaryButton,
  BookmarkInfo,
} from './postDetail.styles';
import PreferenceSection from '../../components/post/postDetail/preferenceSection';
import { colors } from '../../style/colors';
import { mockPostData } from '../../mock/post';
import { CATEGORY, PostCategoryValue } from '../../constants/category';
import BackDrop from '../../components/common/backDrop/backDrop';
import { BaseContainerWithSpaceBetween } from '../../components/container/container.styles';
import Bookmark from '../../assets/icons/bookmark.svg';
import StatusChips from '../../components/post/statusChips/statusChips';
import TitleSection from '../../components/post/postDetail/titleSection';
import InfoSection from '../../components/post/postDetail/infoSection';
import PositionSection from '../../components/post/postDetail/positionSection';
import AuthorSection from '../../components/post/postDetail/authorSection';
import DetailSection from '../../components/post/postDetail/detailSection';
import ContentSection from '../../components/post/postDetail/contentSection';
import TabBar from '../../components/post/postDetail/tabBar';
import DividerBar from '../../components/post/postDetail/dividerBar';
const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postData = mockPostData.find((post) => post.id === Number(id)) || mockPostData[0];
  const [activeTab, setActiveTab] = useState<PostCategoryValue>(
    CATEGORY.POST_CONTENT?.value || 'content',
  );

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
        <DividerBar />
        {/* 탭 바 */}
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* 탭 콘텐츠 */}
        {activeTab === (CATEGORY.POST_CONTENT?.value || 'content') && (
          <>
            <ContentSection description={postData.description} />
            <DividerBar />
            <PreferenceSection
              distance={postData.preferences.distance}
              tools={postData.preferences.tools}
              method={postData.preferences.method}
            />
          </>
        )}

        {activeTab === (CATEGORY.POST_DETAIL?.value || 'detail') && (
          <DetailSection category={postData.category || ''} techTools={postData.techTools || []} />
        )}
        {/* 선호사항 */}

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
