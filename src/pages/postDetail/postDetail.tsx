import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PostDetailContainer,
  HeaderImage,
  ContentContainer,
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
import BottomActions from '../../components/post/postDetail/bottomActions';
const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postData = mockPostData.find((post) => post.id === Number(id)) || mockPostData[0];
  const [activeTab, setActiveTab] = useState<PostCategoryValue>(
    CATEGORY.POST_CONTENT?.value || 'content',
  );

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
            <BookmarkInfo>
              북마크 {postData.stats.bookmarks} · 조회 {postData.stats.views}
            </BookmarkInfo>
          </>
        )}

        {activeTab === (CATEGORY.POST_DETAIL?.value || 'detail') && (
          <DetailSection category={postData.category || ''} techTools={postData.techTools || []} />
        )}
      </ContentContainer>

      {/* 하단 액션 버튼 */}
      <BottomActions />
    </PostDetailContainer>
  );
};

export default PostDetail;
