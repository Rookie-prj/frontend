import { useState } from 'react';
import Header from '../../components/header/header';
import { Chip } from '../../components/common/chip';
import ToolkitCard from '../../components/toolkit/toolkitCard';
import { ToolkitData } from '../../constants/toolkit';
import { colors } from '../../style/colors';
import BackDrop from '../../components/common/backDrop/backDrop';

const Toolkit = () => {
  const [activeFilter, setActiveFilter] = useState<'latest' | 'popular'>('latest');

  const handleFilterChange = (filter: 'latest' | 'popular') => {
    setActiveFilter(filter);
  };

  return (
    <div
      style={{
        paddingBottom: '4.9375rem',

        backgroundColor: colors.gray[50],
        minHeight: '100vh',
      }}
    >
      <div style={{ marginLeft: '1rem' }}>
        <Header type="backdrop" />
      </div>
      <Header type="title" title="툴킷" />

      {/* 필터 섹션 */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          padding: '16px 17px 0 17px',
          marginTop: '16px',
        }}
      >
        <Chip
          label="최신순"
          variant="default"
          size="large"
          isActive={activeFilter === 'latest'}
          onClick={() => handleFilterChange('latest')}
        />
        <Chip
          label="인기순"
          variant="default"
          size="large"
          isActive={activeFilter === 'popular'}
          onClick={() => handleFilterChange('popular')}
        />
      </div>

      {/* 툴킷 카드 목록 */}
      <div style={{ padding: '16px 17px 0 17px' }}>
        {ToolkitData.map((toolkit, index) => (
          <ToolkitCard
            key={toolkit.id}
            toolkit={toolkit}
            style={{ marginBottom: index < ToolkitData.length - 1 ? '16px' : '0' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Toolkit;
