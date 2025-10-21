import React from 'react';
import { CATEGORY, PostCategoryValue } from '../../../constants/category';
import { TabBarContainer, TabBarItem, TabBarText, ItemWrapper } from './tabBar.styles';

interface TabBarProps {
  activeTab: PostCategoryValue;
  onTabChange: (tab: PostCategoryValue) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <TabBarContainer>
      <ItemWrapper>
        <TabBarItem
          $isActive={activeTab === (CATEGORY.POST_CONTENT?.value || 'content')}
          onClick={() =>
            onTabChange((CATEGORY.POST_CONTENT?.value || 'content') as PostCategoryValue)
          }
        >
          <TabBarText $isActive={activeTab === (CATEGORY.POST_CONTENT?.value || 'content')}>
            {CATEGORY.POST_CONTENT?.label}
          </TabBarText>
        </TabBarItem>
      </ItemWrapper>

      <ItemWrapper>
        <TabBarItem
          $isActive={activeTab === (CATEGORY.POST_DETAIL?.value || 'detail')}
          onClick={() =>
            onTabChange((CATEGORY.POST_DETAIL?.value || 'detail') as PostCategoryValue)
          }
        >
          <TabBarText $isActive={activeTab === (CATEGORY.POST_DETAIL?.value || 'detail')}>
            {CATEGORY.POST_DETAIL?.label || '상세정보'}
          </TabBarText>
        </TabBarItem>
      </ItemWrapper>
    </TabBarContainer>
  );
};

export default TabBar;
