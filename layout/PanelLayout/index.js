import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useGetFetch } from '@hooks';
import { PANEL_MENU_ICONS } from '@enums';
import { useRouter } from 'next/router';
import { setGroupSetting } from '../../redux/actions/main';
import { useDispatch, useSelector } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;

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
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
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
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>{menuItem?.find((i) => i.childKeys?.includes(openedMenu))?.key}</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
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
