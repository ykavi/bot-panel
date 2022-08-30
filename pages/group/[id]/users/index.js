import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { Table, Progress } from 'antd';

const columns = [
  {
    title: 'Kullanıcı Adı',
    dataIndex: 'userName',
    key: 'userName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Toplam Mesaj',
    dataIndex: 'totalMessage',
    key: 'totalMessage',
  },
  {
    title: 'Gün',
    dataIndex: 'day',
    key: 'day',
  },
  {
    title: 'İtibar',
    key: 'reputation',
    dataIndex: 'reputation',
    render: (value) => (
      <Progress
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        showInfo={false}
        percent={value}
      />
    ),
  },
  {
    title: 'Katılma Tarihi',
    dataIndex: 'joinDate',
    key: 'joinDate',
  },
  {
    title: 'Son Mesaj',
    dataIndex: 'lastMessage',
    key: 'lastMessage',
  },
];

const Users = () => {
  const { data, loading, error } = useMenuItemGetFetch('users');

  const tableData = data?.GroupUsers?.map((item, index) => {
    return {
      key: index,
      userName: item?.userName,
      totalMessage: item?.totalMessage,
      day: item?.day,
      reputation: item?.reputation,
      joinDate: item?.joinDate,
      lastMessage: item?.lastMessage,
    };
  });

  return (
    <>
      <Table columns={columns} dataSource={tableData} />
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Users;
