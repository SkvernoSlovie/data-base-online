import React, { useRef, useEffect, useState, useCallback } from 'react';

import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import theme from 'theme';
import Spacer from './Spacer';

interface Columns {
  title: string;
  key: string;
  render?: (value: string, id: number) => React.ReactNode;
}

interface TableProps {
  data: any[];
  columns: Columns[];
  loading?: boolean;
  onClick: (item: any) => void;
}

const Table: React.FC<TableProps> = ({ data, columns, loading = false, onClick }) => {
  const ref = useRef();
  const [width, setWidth] = useState(0);

  const elemntMountHandle = useCallback((elem: HTMLDivElement | null) => {
    if (elem) {
      setWidth(elem.offsetWidth);
    }
  }, []);

  return (
    <>
      {loading ? (
        <SLoderContainer ref={elemntMountHandle}>
          <ContentLoader
            speed={5}
            width="100%"
            height={250}
            backgroundColor="#f0f0f0"
            foregroundColor="#ecebeb">
            <rect x="0" y="10" rx="5" ry="5" width="138" height="32" />
            <rect x={width / 8} y="10" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 2} y="10" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 3} y="10" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 4} y="10" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 5} y="10" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 6} y="10" rx="5" ry="5" width="138" height="32" />
            <rect x={((width / 8) * 7) - 5} y="10" rx="5" ry="5" width="138" height="32" />
            <rect x="0" y="60" rx="5" ry="5" width="138" height="32" />
            <rect x={width / 8} y="60" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 2} y="60" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 3} y="60" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 4} y="60" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 5} y="60" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 6} y="60" rx="5" ry="5" width="138" height="32" />
            <rect x={((width / 8) * 7) - 5} y="60" rx="5" ry="5" width="138" height="32" />
            <rect x="0" y="110" rx="5" ry="5" width="138" height="32" />
            <rect x={width / 8} y="110" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 2} y="110" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 3} y="110" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 4} y="110" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 5} y="110" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 6} y="110" rx="5" ry="5" width="138" height="32" />
            <rect x={((width / 8) * 7) - 5} y="110" rx="5" ry="5" width="138" height="32" />
            <rect x="0" y="160" rx="5" ry="5" width="138" height="32" />
            <rect x={width / 8} y="160" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 2} y="160" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 3} y="160" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 4} y="160" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 5} y="160" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 6} y="160" rx="5" ry="5" width="138" height="32" />
            <rect x={((width / 8) * 7) - 5} y="160" rx="5" ry="5" width="138" height="32" />
            <rect x="0" y="210" rx="5" ry="5" width="138" height="32" />
            <rect x={width / 8} y="210" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 2} y="210" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 3} y="210" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 4} y="210" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 5} y="210" rx="5" ry="5" width="138" height="32" />
            <rect x={(width / 8) * 6} y="210" rx="5" ry="5" width="138" height="32" />
            <rect x={((width / 8) * 7) - 5} y="210" rx="5" ry="5" width="138" height="32" />
          </ContentLoader>
        </SLoderContainer>
      ) : (
        <STable>
          <STHead>
            <SRow>
              {columns.map((item) => (
                <SHeadCell key={item.key}>{item.title}</SHeadCell>
              ))}
            </SRow>
          </STHead>
          <STBody>
            {data.map((item) => (
              <SRow key={item.id} onClick={() => onClick(item)}>
                {columns.map((value) => (
                  <SCell key={`${item.key}${value.key}`}>
                    <Spacer height={10} />
                    <> {value.render ? value.render(item[value.key], item.id) : item[value.key]}</>
                    <Spacer height={10} />
                  </SCell>
                ))}
              </SRow>
            ))}
          </STBody>
        </STable>
      )}
    </>
  );
};

const SLoderContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background: ${theme.colors.white};
`;

const STable = styled.table`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background: ${theme.colors.white};
`;

const STHead = styled.thead``;

const STBody = styled.tbody``;

const SRow = styled.tr`
  height: 50px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: ${theme.colors.backgroundLightBlueColor};
  }
`;

const SHeadCell = styled.th``;

const SCell = styled.td`
  text-align: center;
  position: relative;
`;

export default Table;
