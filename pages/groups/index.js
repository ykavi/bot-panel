import { Card, Col, Row, Avatar, message } from 'antd';
import { END_POINTS } from '@enums';
import { useGetFetch } from '@hooks';
import { getFirstLetters } from '@helpers';
import { UserOutlined, CopyOutlined } from '@ant-design/icons';
import { ItemWrapper, NImage, Text, Placeholder, NoResult } from '@components';
import { Container } from './style';
import Link from 'next/link';
import { withIsPanelPage } from '@hocs';

const { Meta } = Card;

const getGroupAvatar = (groupTitle, imageObj) => {
  const avatarText = getFirstLetters(groupTitle);
  const hasImage = !!imageObj;

  return hasImage ? (
    <NImage objectFit="cover" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
  ) : (
    <ItemWrapper center>
      <Avatar size={120}>{avatarText}</Avatar>
    </ItemWrapper>
  );
};
const handleInviteCopyClick = (e, inviteLink) => {
  e.stopPropagation();
  try {
    navigator.clipboard.writeText(inviteLink);
    message.success('Invite Link Copied');
  } catch (e) {
    message.error('Error!');
  }
};

const getCardActions = (membersCount, inviteLink) => {
  const getMemberCount = () => (
    <ItemWrapper onClick={(e) => e.stopPropagation()}>
      <UserOutlined />
      <Text size="xsmall">{membersCount}</Text>
    </ItemWrapper>
  );

  const getInviteLink = () => (
    <ItemWrapper onClick={(e) => handleInviteCopyClick(e, inviteLink)}>
      <CopyOutlined />
      <Text size="xsmall">Invite Link</Text>
    </ItemWrapper>
  );

  return [getMemberCount(), getInviteLink()];
};

const Groups = () => {
  const { data, loading, error } = useGetFetch(END_POINTS.GROUPS);

  if (loading) return <Placeholder />;

  if (error) return <NoResult />;

  const getGroupItem = (group, index) => (
    <Link href={`group/${group?.id}/settings`} key={index}>
      <Col span={5} lg={6} md={8} sm={12} xs={12} key={group?.id}>
        <Container>
          <ItemWrapper margin="0 8px 16px 8px">
            <Card hoverable cover={getGroupAvatar(group?.title, group?.photo)} actions={getCardActions(group?.MembersCount, group?.invite_link)}>
              <Meta title={group?.title} description={group?.type} />
            </Card>
          </ItemWrapper>
        </Container>
      </Col>
    </Link>
  );

  return <Row justify="center">{data?.Groups?.map(getGroupItem)}</Row>;
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Groups;
