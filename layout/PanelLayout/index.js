import { Layout, Menu, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useGetFetch } from '@hooks';
import { UserAvatar } from '@components';
import { PANEL_MENU_ICONS } from '@enums';
import { getMenuItem } from '@helpers';
import { useRouter } from 'next/router';
import { setGroupSetting, setGroupId } from '../../redux/actions/main';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderContentWrapper } from './style';
import { AlignLeftOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const PanelLayout = ({ children, isMobile }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [menuItem, setMenuItem] = useState([]);
  const [openedMenu, setOpenedMenu] = useState('');
  const [activeMenuDisplayName, setActiveMenuDisplayName] = useState('');
  const { asPath } = router;
  const { id } = router.query;
  const { data, loading, error } = useGetFetch(`group/${id}`);

  useEffect(() => {
    const splitAsPath = asPath.split('/');
    const pageEndPoint = splitAsPath[splitAsPath.length - 1];
    setOpenedMenu(pageEndPoint);
  }, [asPath]);

  useEffect(() => {
    if (data?.success && data?.GruopAllSettings) dispatch(setGroupSetting(data?.GruopAllSettings));
  }, [data?.GruopAllSettings, data?.success]);

  useEffect(() => {
    if (id) dispatch(setGroupId(id));
  }, [id]);

  const groupSetting = useSelector((store) => store.main.groupSetting);

  useEffect(() => {
    let controlPanelData = [];
    let management = [];
    let subManagement = [];

    groupSetting?.ControlPanel?.forEach((item) => {
      controlPanelData.push(getMenuItem(item?.Name, item?.URL, PANEL_MENU_ICONS[item?.URL]));
    });

    groupSetting?.Management?.forEach((item, index) => {
      if (item?.Fields.length) {
        item?.Fields?.forEach((subItem) => {
          subManagement.push(getMenuItem(subItem?.Name, subItem?.URL, PANEL_MENU_ICONS[subItem?.URL]));
        });
        const collapseKey = [...subManagement.map((i) => i.key)].includes(openedMenu) ? openedMenu : index;
        management.push(getMenuItem(item?.Name, collapseKey, PANEL_MENU_ICONS[item?.Name], subManagement));
        subManagement = [];
      } else {
        management.push(getMenuItem(item?.Name, item?.URL, PANEL_MENU_ICONS[item?.URL]));
      }
    });
    setMenuItem([...controlPanelData, ...management]);
  }, [groupSetting]);

  const onSelectHandle = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    setActiveMenuDisplayName(domEvent.target.innerHTML);
    const { id } = router.query;
    const url = `/group/${id}/${key}`;
    router.push(url);
  };
  console.log(isMobile);
  if (loading) return <p>loading</p>;
  if (error) return null;

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      hasSider
    >
      {!isMobile && (
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'relative',
            left: 0,
            top: 0,
            bottom: 0,
          }}
          width={250}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo">
            <img style={{ height: 60 }} src="https://about.gitlab.com/images/press/logo/png/gitlab-logo-200.png" />
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[openedMenu]}
            defaultOpenKeys={[openedMenu]}
            mode="inline"
            items={menuItem}
            onSelect={onSelectHandle}
          />
        </Sider>
      )}

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <HeaderContentWrapper isMobile={isMobile}>
            {isMobile && (
              <>
                <AlignLeftOutlined style={{ fontSize: 28, color: '#ffffff' }} />
                <div className="logo">
                  <img style={{ height: 60 }} src="https://about.gitlab.com/images/press/logo/png/gitlab-logo-200.png" />
                </div>
              </>
            )}

            <UserAvatar isMobile={isMobile} />
          </HeaderContentWrapper>
        </Header>
        <Content
          style={{
            margin: '0 16px',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              paddingBottom: 64,
              minHeight: 360,
            }}
          >
            <Title level={4} style={{ marginBottom: 24 }}>
              {activeMenuDisplayName}
            </Title>
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;
