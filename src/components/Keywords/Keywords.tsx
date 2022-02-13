import { Unit } from '../../models/Unit';
import styled from 'styled-components';
import { AppStyle } from '../../styles/style';

interface KeywordsProps {
  keywords: Unit['keywords'];
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3em;
  flex-direction: ${(props: { vertical?: boolean }) => (props.vertical ? 'column' : 'row')};
`;

const Title = styled.div`
  background-color: ${AppStyle.roles.panel.dark.background};
  padding-right: ${AppStyle.spacing.medium};
  padding-left: ${AppStyle.spacing.medium};
  text-align: center;
  display: flex;
  align-items: center;

  & h1 {
    margin: 0px;
    color: ${AppStyle.roles.panel.dark.color};
  }
`;

const KeywordList = styled.div`
  border: ${AppStyle.sizes.small} solid ${AppStyle.roles.table.border};
  border-bottom-width: 0px;
  display: flex;
  flex-wrap: wrap;
  padding: ${AppStyle.spacing.xsmall};
  width: 100%;
`;

/**
 * Primary UI component for user interaction
 */
export const Keywords = ({ keywords, ...props }: KeywordsProps) => {
  const keywordText = keywords.map((keyword, index) => {
    const comma = index < keywords.length - 1 ? ', ' : '';
    return `${keyword}${comma}`;
  });

  return (
    <Container className="Keywords">
      <Title>
        <h1>Keywords</h1>
      </Title>
      <KeywordList>{keywordText}</KeywordList>
    </Container>
  );
};
