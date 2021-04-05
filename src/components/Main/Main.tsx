import * as S from './styles';

const Main = ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="Imagem de um atomo"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="https://cdni.iconscout.com/illustration/premium/thumb/developer-2143200-1801815.png"
        alt="Um desenvolvedor programando"
      />
    </S.Wrapper>
  );
};

export default Main;
