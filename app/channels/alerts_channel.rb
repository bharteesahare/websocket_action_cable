class AlertsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from 'AlertsChannel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # def speak(data)
  #   ActionCable.server.broadcast 'AlertsChannel', data
  # end

  # def receive(data)
  #   ActionCable.server.broadcast('AlertChannel', data)
  # end
end
