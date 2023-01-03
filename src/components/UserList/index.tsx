import React, { useRef, useState } from 'react';
import Header from './Header';
import UserTable from './UserTable';
import Footer from './Footer';
import { useUsers } from '../../hooks/use-users';
import { useDeleteUser } from '../../hooks/use-delete-user';
import { calcOffset, calcPageCount } from './utils';

export function UserList() {
  const ref = useRef<HTMLDivElement>(null);

  const [userGetParams, setUserGetParams] = useState({
    _start: '0',
    _limit: '20',
  });
  const {
    data: users,
    totalCount,
    isLoading,
    refetch,
  } = useUsers(userGetParams);

  const deleteUserHook = useDeleteUser({
    onSuccess: () => refetch(),
  });

  const [pageIndex, setPageIndex] = useState(0);

  const handleDeleteClick = (event: React.MouseEvent<any>) => {
    const { id, username } = event.currentTarget.dataset;

    const isConfirm = window.confirm(`Delete ${username}?`);
    if (!isConfirm) return;

    deleteUserHook.mutate(id);
  };

  const handlePageChange = (selectedPageIndex: number) => {
    setPageIndex(selectedPageIndex);

    setUserGetParams((prev) => ({
      ...prev,
      _start: calcOffset(selectedPageIndex, prev._limit).toString(),
    }));

    ref.current?.scroll({ top: 0, left: 0 });
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageIndex(0);
    setUserGetParams({ _start: '0', _limit: event.target.value });
  };

  return (
    <div>
      <Header />
      <UserTable
        isLoading={isLoading}
        users={users}
        onDeleteClick={handleDeleteClick}
        ref={ref}
      />
      {!isLoading && (
        <Footer
          totalCount={totalCount}
          pageCount={calcPageCount(totalCount, userGetParams._limit)}
          pageIndex={pageIndex}
          limit={Number(userGetParams._limit)}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      )}
    </div>
  );
}
