class NotificationsController < ApplicationController
  def create
    notification = Notification.create
    notification.broadcast_prepend_to('notifications_for_1',
                                      target: 'notifications',
                                      partial: 'notifications/notification',
                                      locals: { notification: })
  end

  def index
    @notifications = Notification.all
  end

  def show
    @notification = Notification.find(params[:id])
  end

  def update
    notification = Notification.find(params[:id])
    notification.update(read: true)

    redirect_to notification_path(notification)
  end
end
