import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import { range } from '../../utils/range';
import { Spinner } from '../shared/spinner';
import { Table, Tbody, Td, Thead, Th } from '../shared/table';
import type { User } from '../../types';

type UserTableProps = {
  isLoading: boolean;
  isFetching: boolean;
  users: User[] | undefined;
};

const heights = {
  header: 64,
  footer: 64,
};

const Overlay = styled.div({
  position: 'absolute',
  backgroundColor: 'rgba(255,255,255,0.7)',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const UserTable = React.forwardRef<HTMLDivElement, UserTableProps>(
  (props, ref) => {
    const { users, isLoading, isFetching } = props;

    return (
      <div css={css({ position: 'relative' })}>
        <div
          css={css({
            height: `calc(100vh - ${heights.header}px - ${heights.footer}px)`,
            overflow: isLoading ? 'hidden' : 'auto',
          })}
          ref={ref}
        >
          <div
            css={css({
              backgroundColor: 'white',
              paddingLeft: 32,
              paddingRight: 32,
            })}
          >
            <Table>
              <Thead>
                <tr
                  css={css({
                    visibility: isLoading ? 'hidden' : 'visible',
                  })}
                >
                  <Th align="left" scope="col">
                    ID
                  </Th>
                  <Th align="left" scope="col" data-header="username">
                    Username
                  </Th>
                  <Th align="left" scope="col" data-header="email">
                    Email
                  </Th>
                </tr>
              </Thead>
              <Tbody>
                {isLoading &&
                  range(60).map((v) => (
                    <tr key={v}>
                      <Td>
                        <Skeleton />
                      </Td>
                      <Td>
                        <Skeleton />
                      </Td>
                      <Td>
                        <Skeleton />
                      </Td>
                    </tr>
                  ))}
                {users?.map((user) => (
                  <tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>{user.username}</Td>
                    <Td>{user.email}</Td>
                  </tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>

        {!isLoading && isFetching && (
          <Overlay>
            <div css={css({ paddingTop: 96, textAlign: 'center' })}>
              <Spinner />
            </div>
          </Overlay>
        )}
      </div>
    );
  },
);

UserTable.displayName = 'UserTable';
