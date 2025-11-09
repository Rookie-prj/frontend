import { useALLNotifications } from '../../components/notification/hook/useNotifications';
import { NotificationList } from '../../components/notification';
import * as S from './index.styles';
import BackDrop from '../../components/common/backDrop/backDrop';
import { useMarkNotificationAsRead } from '../../components/notification/hook/useNotificationMutations';

function Notification() {
  const { data: notifications } = useALLNotifications();
  const markAsRead = useMarkNotificationAsRead();
  const handleNotificationClick = (notificationId: number) => {
    markAsRead.mutate(notificationId);
  };
  return (
    <div>
      <div style={{ paddingLeft: '16px' }}>
        <BackDrop />
      </div>
      <S.Title>알림</S.Title>
      <NotificationList
        notifications={notifications || []}
        onNotificationClick={(notification) => {
          handleNotificationClick(notification.id);
        }}
      />
    </div>
  );
}

export default Notification;
