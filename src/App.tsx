const App = () => {
  const message = ['안녕하세요', '반갑습니다', '환영합니다'];

  return (
    <>
      {message.map((msg, index) => (
        <h1 key={index}>{msg}</h1>
      ))}
    </>
  );
};

export default App;
