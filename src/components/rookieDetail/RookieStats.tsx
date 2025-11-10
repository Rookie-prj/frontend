import * as S from './RookieStats.styles';
import passionIcon from '../../assets/icons/passion/passioninfo.svg';
import lv1 from '../../assets/icons/passion/Lv.1.svg';
import lv2 from '../../assets/icons/passion/Lv.2.svg';
import lv3 from '../../assets/icons/passion/Lv.3.svg';
import lv4 from '../../assets/icons/passion/Lv.4.svg';
import PassionMeterTooltip from '../common/passionMeterTooltip/passionMeterTooltip';
import { useState } from 'react';

interface RookieStatsProps {
  publicPortfolioCount: string | number;
  responseRate: string | number;
  passionMeter?: string | number; // 0-100 값
}

function RookieStats({ publicPortfolioCount, responseRate, passionMeter }: RookieStatsProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // 응답률 포맷팅
  const formatResponseRate = (rate: string | number) => {
    if (typeof rate === 'number') {
      return `${rate}%`;
    }
    return rate.includes('%') ? rate : `${rate}%`;
  };

  // passionMeter 값에 따라 레벨 이미지 선택
  const getLevelImage = (meter: string | number) => {
    const value = typeof meter === 'string' ? parseInt(meter) : meter;

    if (value >= 0 && value < 25) {
      return lv1; // 0~25%
    } else if (value >= 25 && value < 50) {
      return lv2; // 25~50%
    } else if (value >= 50 && value < 75) {
      return lv3; // 50~75%
    } else {
      return lv4; // 75~100%
    }
  };

  // 레벨 번호 계산
  const getLevelNumber = (meter: string | number) => {
    const value = typeof meter === 'string' ? parseInt(meter) : meter;

    if (value >= 0 && value < 25) return 1;
    if (value >= 25 && value < 50) return 2;
    if (value >= 50 && value < 75) return 3;
    return 4;
  };

  return (
    <S.StatsContainer>
      {/* 공개 가능 프로젝트 */}
      <S.StatItem>
        <S.StatValue>{publicPortfolioCount}</S.StatValue>
        <S.StatLabel>공개 가능 프로젝트</S.StatLabel>
      </S.StatItem>

      <S.Divider />

      {/* 응답률 */}
      <S.StatItem>
        <S.StatValue>{formatResponseRate(responseRate)}</S.StatValue>
        <S.StatLabel>응답률</S.StatLabel>
      </S.StatItem>

      <S.Divider />

      {/* 레벨과 열정기어 */}
      <S.StatItem>
        {passionMeter !== undefined && (
          <>
            <S.LevelBadge>
              <img
                src={getLevelImage(passionMeter)}
                alt={`Lv.${getLevelNumber(passionMeter)}`}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </S.LevelBadge>
            <S.PassionMeterContainer onClick={() => setIsTooltipVisible(true)}>
              <S.PassionMeterText>열정기어</S.PassionMeterText>
              <img src={passionIcon} alt="열정기여도 정보" style={{ cursor: 'pointer' }} />
            </S.PassionMeterContainer>
          </>
        )}
      </S.StatItem>
      <PassionMeterTooltip
        isVisible={isTooltipVisible}
        onClose={() => setIsTooltipVisible(false)}
      />
    </S.StatsContainer>
  );
}

export default RookieStats;
