import React from 'react';
import { css } from '@emotion/css';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skeleton from 'react-loading-skeleton';
import { User } from '../../types';
import { range } from '../../utils/range';
import { styled } from '../../utils/styled';
import { Button, LinkButton } from '../shared/button';
import { Spinner } from '../shared/spinner';
import { Table, Tbody, Td, Thead, Th } from '../shared/table';

type UserTableProps = {
  isLoading: boolean;
  isFetching: boolean;
  users: User[] | undefined;
  onDeleteClick: React.ComponentProps<'button'>['onClick'];
};

const heights = {
  header: 64,
  footer: 64,
};

const Overlay = styled.div('Overlay', {
  position: 'absolute',
  backgroundColor: 'rgba(255,255,255,0.7)',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const UserTable = React.forwardRef<HTMLDivElement, UserTableProps>(
  (props, ref) => {
    const { users, isLoading, isFetching, onDeleteClick } = props;

    return (
      <div className={css({ position: 'relative' })}>
        <div
          className={css({
            height: `calc(100vh - ${heights.header}px - ${heights.footer}px)`,
            overflow: isLoading ? 'hidden' : 'auto',
          })}
          ref={ref}
        >
          <div
            className={css({
              backgroundColor: 'white',
              paddingLeft: 32,
              paddingRight: 32,
            })}
          >
            <Table>
              <Thead>
                <tr
                  className={css({
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
                  <Th align="left" scope="col" />
                  <Th align="left" scope="col" />
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
                      <Td />
                      <Td />
                    </tr>
                  ))}
                {users?.map((user) => (
                  <tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>{user.username}</Td>
                    <Td>{user.email}</Td>
                    <Td>
                      <LinkButton size="small" to={`/users/${user.id}`}>
                        <FontAwesomeIcon icon={faEdit} />
                        &nbsp; &nbsp; Edit
                      </LinkButton>
                    </Td>
                    <Td>
                      <Button
                        size="small"
                        type="button"
                        data-id={user.id}
                        data-username={user.username}
                        onClick={onDeleteClick}
                        disabled={isLoading}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                        &nbsp; &nbsp; Delete
                      </Button>
                    </Td>
                  </tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>

        {!isLoading && isFetching && (
          <Overlay>
            <div className={css({ paddingTop: 96, textAlign: 'center' })}>
              <Spinner />
            </div>
          </Overlay>
        )}
      </div>
    );
  }
);

UserTable.displayName = 'UserTable';
