import { RookieContainer } from './rookie.styles';
import RookieCard from './rookieCard/rookieCard';

const Rookie = () => {
  const RookieData = [
    {
      id: 1,
      name: '춤추는 악어',
      department: '실내디자인전공',
      year: '4학년',
      school: '천안. 상명대학교',
    },
    {
      id: 2,
      name: '안녕하세요',
      department: '컴퓨터공학과',
      year: '4학년',
      school: '서울. 상명대학교',
    },
  ];

  return (
    <RookieContainer>
      {RookieData.map((rookie) => (
        <RookieCard
          key={rookie.id}
          name={rookie.name}
          department={rookie.department}
          year={rookie.year}
          school={rookie.school}
        />
      ))}
    </RookieContainer>
  );
};

export default Rookie;
