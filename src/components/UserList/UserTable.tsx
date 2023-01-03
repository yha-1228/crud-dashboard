import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skeleton from 'react-loading-skeleton';
import React from 'react';
import { Button, LinkButton } from '../shared/Button';
import { Table, Tbody, Td, Thead, Th, TableContainer } from '../shared/Table';
import { Spinner } from '../shared/Spinner';
import { css } from '@emotion/css';
import { User } from '../../types';
import { range } from '../../utils/range';
import { styledDivFactory } from '../../utils/styled';

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

const Overlay = styledDivFactory(
  css({
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.7)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }),
  { displayName: 'Overlay' }
);

const UserTable = React.forwardRef<HTMLDivElement, UserTableProps>(
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
          <TableContainer style={{ paddingLeft: 32, paddingRight: 32 }}>
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
                  <Th align="left" scope="col"></Th>
                  <Th align="left" scope="col"></Th>
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
                      <Td></Td>
                      <Td></Td>
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
          </TableContainer>
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

export default UserTable;
