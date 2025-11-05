const getFilteredRookie = (roleType: string) => {
  switch (roleType) {
    case 'design':
      return '커뮤니케이션디자인학과';
    case 'development':
      return '컴퓨터공학과';
    case 'planning':
      return '경영학과';
    case 'etc':
      return '';
  }
};
export default getFilteredRookie;
