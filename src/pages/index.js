import React from "react"
import { Grid, Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Layout from '../components/layout';

const PaddingLessGrid = styled(Grid)`
  padding: 0 !important;
`;

const MarginlessRow = styled(Row)`
  margin: 0;
`;

const Header = styled(MarginlessRow)`
  background: red;
  padding: 0 32px 0 32px !important;
`;

const Body = styled(PaddingLessGrid)`
  background: black;
  padding: 0 32px 0 32px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled(Body)`
  background: red;
`;

const Title = styled.h1`
  font-family: Verdana, Geneva, sans-serif; 
  color: white;
`;

const SectionTitle = styled.h2`
  font-family: Verdana, Geneva, sans-serif; 
  color: white;
`;

const Paragraph = styled.p`
  font-family: Verdana, Geneva, sans-serif; 
  color: white;
`;

const ContentContainer = styled.div`
  max-width: 900px;
`;

export default () => 
<Layout>
  <PaddingLessGrid fluid>
    <Head fluid>
      <ContentContainer>
        <Header>
          <Col>
            <Title>Coletivo EmpoderaTech</Title>
          </Col>
        </Header> 
      </ContentContainer>
    </Head>
    <Body fluid>
      <ContentContainer>
        <MarginlessRow>
          <SectionTitle>
            Por quê?
          </SectionTitle>
        </MarginlessRow>
        <MarginlessRow>
          <Paragraph>
            Vivemos em um ambiente que promove a divisão, a competição e a individualidade. O <b>Coletivo EmpoderaTech</b> nasce do reconhecimento que caminhamos de maneira lenta para tornar a existência de classes oprimidas menos difícil. Sabemos que isso só é possível com a <b>redução das desigualdades sociais e descentralização do poder</b>. Ainda sim, mesmo com os pequenos esforços, muitos atores contribuem consciente e inconscientemente para o aumento de desigualdades, o que torna os objetivos de igualdade e democracia difíceis de serem alcançados.
          </Paragraph>
        </MarginlessRow>
        <MarginlessRow>
          <SectionTitle>
            O que?
          </SectionTitle>
        </MarginlessRow>
        <MarginlessRow>
          <Paragraph>
            Por isso, o que propomos é a união. Sentimos que só nos <b>resta propor, debater e fazer</b>. Queremos pensar, expor nossas ideias, debatê-las, medir seu impacto e assim viabilizar essas ideias para que surjam como solução que visa, de maneira direta ou indireta, a redução das dificuldades presentes na vida de pessoas que se encontram em posições de vulnerabilidade. Queremos dar voz a todos. Queremos democracia e justiça social.
          </Paragraph>
        </MarginlessRow>
        <MarginlessRow>
          <SectionTitle>
            Quem?
          </SectionTitle>
        </MarginlessRow>
        <MarginlessRow>
          <Paragraph>
            Somos um grupo de <b>programadores, designers e pessoas interessadas em conhecer esse meio</b>. Apesar de nosso descontentamento com a situação atual que passamos, não queremos que nossas ações se limitem a discussões rasas que em muitas vezes não levarão muito além do que, na melhor das hipóteses, alinhamento de pensamento e conscientização maior. Queremos fazer mais, queremos criar, queremos lapidar a democracia.
          </Paragraph>
        </MarginlessRow>
        <MarginlessRow>
          <SectionTitle>
            Como?
          </SectionTitle>
        </MarginlessRow>
        <MarginlessRow>
          <Paragraph>
            Usando as ferramentas que tanto conhecemos e usamos em nosso dia a dia. Primeiramente através da <b>observação</b> de situações, imagens, através da problematização, da <b>discussão profunda</b>, da identificação dos problemas e de suas raízes. Dessa maneira conseguimos material e um ambiente para que <b>ideias nasçam e se desenvolvam</b>. Com boas ideias que estão diretamente relacionadas aos problemas sociais os quais buscamos solução, validamos, desenvolvemos <b>soluções de tecnologia</b> e implantamos para assim ativamente contribuir com o que acreditamos.
          </Paragraph>
        </MarginlessRow>
      </ContentContainer>
    </Body>
  </PaddingLessGrid>
</Layout>
