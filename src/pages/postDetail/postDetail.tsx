import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PostDetailContainer,
  HeaderImage,
  ContentContainer,
  BookmarkInfo,
} from './postDetail.styles';
import backgroundImg from '../../assets/img/dim.png';
import PreferenceSection from '../../components/post/postDetail/preferenceSection';
import { CATEGORY, PostCategoryValue } from '../../constants/category';
import BackDrop from '../../components/common/backDrop/backDrop';
import { BaseContainerWithSpaceBetween } from '../../components/container/container.styles';
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
import { useBoardDetail } from '../../hooks/useBoardDetail';
import Loading from '../../components/common/loading/loading';
const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<PostCategoryValue>(
    CATEGORY.POST_CONTENT?.value || 'content',
  );
  const { data: boardData, isLoading } = useBoardDetail(id);

  if (isLoading) {
    return <Loading />;
  }

  if (!boardData) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const projectImage = boardData.imageUrl1 || backgroundImg;

  return (
    <PostDetailContainer>
      <HeaderImage
        style={{
          backgroundImage: `url(${projectImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <BaseContainerWithSpaceBetween>
          <BackDrop />
        </BaseContainerWithSpaceBetween>
      </HeaderImage>

      <ContentContainer>
        <TitleSection title={boardData.title} tags={boardData.projectFields.join(', ')} />
        <StatusChips progress={boardData.processStatus} deadline={boardData.endDate} />
        <InfoSection
          total={boardData.requredPpl}
          field={boardData.projectFields[0] || ''}
          duration={`${boardData.estmtPeriod}개월`}
        />
        <PositionSection
          total={boardData.requredPpl}
          positions={Object.entries(boardData.data).map(([role, count]) => ({
            title: role,
            count,
          }))}
        />
        <AuthorSection
          name={boardData.writer}
          location="서울"
          projects={0}
          responseRate={0}
          level="시니어"
        />
        <DividerBar />
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === (CATEGORY.POST_CONTENT?.value || 'content') && (
          <>
            <ContentSection description={boardData.description} />
            <DividerBar />
            <PreferenceSection
              distance={boardData.distance}
              tools={boardData.workTools}
              method={boardData.collabMthds}
            />
            <BookmarkInfo>
              북마크 {boardData.bookmark} · 조회 {boardData.viewCount}
            </BookmarkInfo>
          </>
        )}

        {activeTab === (CATEGORY.POST_DETAIL?.value || 'detail') && (
          <DetailSection
            category={boardData.projectFields[0] || ''}
            techTools={boardData.collabTools}
          />
        )}
      </ContentContainer>

      <BottomActions />
    </PostDetailContainer>
  );
};

export default PostDetail;
