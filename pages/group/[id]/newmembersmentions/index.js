import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const NewMembersMentions = () => {
  const { data, loading, error } = useMenuItemGetFetch('antispam/newmembersmentions');

  return (
    <>
      {data?.NewMembersMentions?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default NewMembersMentions;
