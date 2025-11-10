import React, { useState, useMemo } from 'react';
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
import { TEAM_POSITION_OPTIONS } from '../../constants/createProject';
import { PROJECT_CATEGORY } from '../../constants/projectType';
import { removeBrackets, getEncodedImageUrl } from '../../utils/stringUtils';
import BackDrop from '../../components/common/backDrop/backDrop';
import { BaseContainerWithSpaceBetween } from '../../components/container/container.styles';
import StatusChips from '../../components/post/statusChips/statusChips';
import TitleSection, { TitleSectionProps } from '../../components/post/postDetail/titleSection';
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
import { useSavedBoardsQuery } from '../../components/library/hook/useLibrary';
import { useAddBookmarkMutation } from '../../components/explore/hooks/useAddBookmarkMutation';
import { useRemoveBookmarkMutation } from '../../components/explore/hooks/useRemoveBookmarkMutation';
const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<PostCategoryValue>(
    CATEGORY.POST_CONTENT?.value || 'content',
  );
  const { data: boardData, isLoading } = useBoardDetail(id);
  const { savedBoards = [] } = useSavedBoardsQuery('saved');
  const { handleAddBookmark } = useAddBookmarkMutation();
  const { handleRemoveBookmark } = useRemoveBookmarkMutation();

  // 현재 게시글이 북마크되었는지 확인
  const isBookmarked = useMemo(() => {
    if (!boardData || !savedBoards || savedBoards.length === 0) return false;
    return savedBoards.some((board) => board.boardId === boardData.boardId);
  }, [boardData, savedBoards]);

  const handleBookmarkToggle = () => {
    if (!boardData) return;
    if (isBookmarked) {
      handleRemoveBookmark(boardData.boardId);
    } else {
      handleAddBookmark(boardData.boardId);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!boardData) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const projectImage = boardData.imageUrl1
    ? getEncodedImageUrl(boardData.imageUrl1, backgroundImg)
    : backgroundImg;

  // cowrkrPosition의 value들을 label로 변환 (대괄호 제거 후 변환)
  const positionLabels =
    boardData.cowrkrPosition
      ?.map((positionValue) => {
        const cleanValue = removeBrackets(positionValue);
        const option = TEAM_POSITION_OPTIONS.find((opt) => opt.value === cleanValue);
        return option?.label || cleanValue;
      })
      .join(', ') || '';

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
          <BackDrop variant="white" />
        </BaseContainerWithSpaceBetween>
      </HeaderImage>

      <ContentContainer>
        <TitleSection
          title={boardData.title}
          tags={boardData.projectFields
            .map((field) => {
              // 대괄호 제거 후 label로 변환
              const cleanField = removeBrackets(field);
              const categoryOption = Object.values(PROJECT_CATEGORY).find(
                (cat) => cat.value === cleanField,
              );
              const label = categoryOption?.label || cleanField;
              return `#${label}`;
            })
            .join(' ')}
          isBookmarked={isBookmarked}
          onBookmarkToggle={handleBookmarkToggle}
        />
        <StatusChips progress={boardData.processStatus} deadline={boardData.endDate} />
        <InfoSection
          total={boardData.requredPpl}
          field={positionLabels}
          duration={`${boardData.estmtPeriod}개월`}
        />
        <PositionSection
          total={boardData.requredPpl}
          positions={Object.entries(boardData.data).map(([role, count]) => {
            // 대괄호 제거 후 label로 변환
            const cleanRole = removeBrackets(role);
            const option = TEAM_POSITION_OPTIONS.find((opt) => opt.value === cleanRole);
            const roleLabel = option?.label || cleanRole;
            return {
              title: roleLabel,
              count,
            };
          })}
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
            category={boardData.boardType || ''}
            techTools={boardData.techTools || ''}
          />
        )}
      </ContentContainer>

      <BottomActions />
    </PostDetailContainer>
  );
};

export default PostDetail;
