const CHEERUP_TITLE = (name: string) => (
  <>
    [{name}]님의 프로젝트를
    <br />
    응원하시겠어요?
  </>
);

const CHEERUP_DESCRIPTION = (name: string) => (
  <>
    응원을 보내면 [{name}]님이
    <br />
    응원한 당신의 프로필을 확인할 수 있어요.
  </>
);

const REDIRECT_LOGIN_MESSAGE = (
  <>
    로그인이 필요한 서비스입니다.
    <br />
    로그인 페이지로 이동하시겠어요?
  </>
);
export { CHEERUP_TITLE, CHEERUP_DESCRIPTION, REDIRECT_LOGIN_MESSAGE };
