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

  & h3 {
    margin: 0px;
    color: ${AppStyle.roles.panel.dark.color};
  }
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${AppStyle.spacing.xSmall};
  padding-left: ${AppStyle.spacing.small};
  padding-right: ${AppStyle.spacing.small};
  width: 100%;
  font-weight: bold;
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
        <h3>Keywords</h3>
      </Title>
      <KeywordList>{keywordText}</KeywordList>
    </Container>
  );
};

Keywords.defaultProps = {
  keywords: []
};
