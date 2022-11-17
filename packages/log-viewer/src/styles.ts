import styled from 'styled-components';

export const LogMain = styled.div`
  .log-line {
    position: relative;
    color: #b7c4d1;
    font-weight: 600;
    line-height: 20px;
    padding: 0 20px;

    //&:hover {
    //  background-color: #36435c;
    //}
  }

  .ansi {
    overflow: initial;
    border: none;
    margin: 0;
    padding: 0;
    padding-top: 20px;
  }

  .line-number {
    position: absolute;
    min-width: 40px;
  }
`;

export const LogBody = styled.div`
  position: relative;
  background-color: #242e42;
`;
