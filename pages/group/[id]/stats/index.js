import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';
import { Typography } from 'antd';
import Script from 'next/script';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';

const { Title } = Typography;

const ActiveHours = ({ activeHours }) => {
  const mappedActiveHours = activeHours?.map((item) => {
    return {
      name: item?.Time,
      user: item?.Sum,
    };
  });

  return (
    <>
      <Title level={4} style={{ marginBottom: 24 }}>
        Aktif Saatler
      </Title>

      <BarChart width={730} height={250} data={mappedActiveHours}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="user" fill="#8884d8" />
      </BarChart>
    </>
  );
};

const Messages = ({ messages }) => {
  const mappedMessages = messages?.map((item) => {
    return {
      name: item?.Date,
      user: item?.Sum,
    };
  });

  return (
    <>
      <Title level={4} style={{ marginBottom: 24 }}>
        Mesajlar
      </Title>

      <BarChart width={730} height={250} data={mappedMessages}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="user" fill="#8884d8" />
      </BarChart>
    </>
  );
};

const Activity = ({ times, weeks }) => {
  const mappedTimes =
    times &&
    Object?.keys(times).map((key) => {
      return {
        name: key,
        user: times[key],
      };
    });

  const mappedWeeks =
    times &&
    Object?.keys(weeks).map((key) => {
      return {
        name: key,
        user: weeks[key],
      };
    });

  return (
    <>
      <Title level={4} style={{ marginBottom: 24 }}>
        Activity
      </Title>

      <BarChart width={730} height={250} data={mappedTimes}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="user" fill="#8884d8" />
      </BarChart>

      <BarChart width={730} height={250} data={mappedWeeks}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="user" fill="#8884d8" />
      </BarChart>
    </>
  );
};

const UserChart = ({ userStats }) => {
  const mappedUserStats = userStats?.map((item) => {
    return {
      name: item?.Date,
      'Eski Kullanıcı': item?.Users,
      'Yeni Kullanıcı': item?.NewUsers,
      amt: item?.Users,
    };
  });

  return (
    <>
      <Title level={4} style={{ marginBottom: 24 }}>
        Kullanıcı İstatistikleri
      </Title>

      <BarChart width={730} height={250} data={mappedUserStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Eski Kullanıcı" fill="#8884d8" stackId="a" />
        <Bar dataKey="Yeni Kullanıcı" fill="#82ca9d" stackId="a" />
      </BarChart>
    </>
  );
};

const Stats = () => {
  const { data, loading, error } = useMenuItemGetFetch('stats');

  return (
    <>
      <ActiveHours activeHours={data?.GroupStat?.activeHours} />

      <Activity times={data?.GroupStat?.activity?.Times} weeks={data?.GroupStat?.activity?.Weeks} />

      <Messages messages={data?.GroupStat?.messages} />

      <UserChart userStats={data?.GroupStat?.stat} />

      <Script src="https://unpkg.com/react/umd/react.production.min.js" />
      <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" />
      <Script src="https://unpkg.com/prop-types/prop-types.min.js" />
      <Script src="https://unpkg.com/recharts/umd/Recharts.js" />
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Stats;
