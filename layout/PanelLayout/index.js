import { PageHeader, Layout, Menu, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useGetFetch } from '@hooks';
import { PANEL_MENU_ICONS } from '@enums';
import { useRouter } from 'next/router';
import { setGroupSetting, setActiveMenuName } from '../../redux/actions/main';
import { useDispatch, useSelector } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const PanelLayout = ({ children }) => {
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

  const groupSetting = useSelector((store) => store.main.groupSetting);

  useEffect(() => {
    const rootMenus = menuItem?.filter((item) => !item.children);
    const subMenus = menuItem?.filter((item) => !!item.children);
    const activeRootMenuName = rootMenus?.find((item) => item.key === openedMenu);
    const activeSubMenuName = subMenus?.find((item) => item.key === openedMenu);
    const activeMenuName = activeRootMenuName || activeSubMenuName;

    if (activeMenuName) setActiveMenuDisplayName(activeMenuName?.label);

    dispatch(setActiveMenuName(activeMenuName?.label)); //TODO: not used now. Maybe later
  }, [openedMenu, []]);

  useEffect(() => {
    let controlPanelData = [];
    let management = [];
    let subManagement = [];

    groupSetting?.ControlPanel?.forEach((item) => {
      controlPanelData.push(getItem(item?.Name, item?.URL, PANEL_MENU_ICONS[item?.URL]));
    });

    groupSetting?.Management?.forEach((item, index) => {
      if (item?.Fields.length) {
        item?.Fields?.forEach((subItem) => {
          subManagement.push(getItem(subItem?.Name, subItem?.URL, PANEL_MENU_ICONS[subItem?.URL]));
        });
        const collapseKey = [...subManagement.map((i) => i.key)].includes(openedMenu) ? openedMenu : index;
        management.push(getItem(item?.Name, collapseKey, PANEL_MENU_ICONS[item?.Name], subManagement));
        subManagement = [];
      } else {
        management.push(getItem(item?.Name, item?.URL, PANEL_MENU_ICONS[item?.URL]));
      }
    });
    setMenuItem([...controlPanelData, ...management]);
  }, [groupSetting]);
  console.log(openedMenu);
  const onSelectHandle = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    const { id } = router.query;
    const url = `/group/${id}/${key}`;
    router.push(url);
  };

  if (loading) return <p>loading</p>;
  if (error) return null;

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      hasSider
    >
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'relative',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">LOGO</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[openedMenu]}
          defaultOpenKeys={[openedMenu]}
          mode="inline"
          items={menuItem}
          onSelect={onSelectHandle}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
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
