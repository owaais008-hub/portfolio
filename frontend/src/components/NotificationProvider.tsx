import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import useNotification from '../hooks/useNotification';
import type { Notification } from '../hooks/useNotification';
import NotificationComponent from './Notification';

interface NotificationContextType {
  addNotification: (notification: Omit<Notification, 'id'>) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotificationContext must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const { notifications, addNotification, removeNotification } = useNotification();

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="notifications-container">
        {notifications.map(notification => (
          <NotificationComponent
            key={notification.id}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(notification.id)}
            duration={notification.duration}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;