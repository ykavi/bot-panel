import { withIsPanelPage } from '@hocs';
import { MenuItemCard, SelectBox } from '@components';
import { Select } from 'antd';
import React from 'react';

const handleOnSelect = (value) => {
  console.log(`selected ${value}`);
};

const Settings = () => (
  <>
    <MenuItemCard title="Language" description="Change the default language of MEE6 in your server.">
      <SelectBox handleOnSelect={handleOnSelect} label="başlık" />
    </MenuItemCard>
  </>
);

export const getServerSideProps = withIsPanelPage((context) => {});

export default Settings;
