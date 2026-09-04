export const SERVICES = {
  API_GATEWAY: 'api-gateway',
  AUTH_SERVICE: 'auth-service',
  USERS_SERVICE: 'users-service',
  EVENTS_SERVICE: 'events-service',
  TICKETS_SERVICE: 'tickets-service',
  PAYMENTS_SERVICE: 'payments-service',
  NOTIFICATIONS_SERVICE: 'notifications-service',
} as const;

export const SERVICES_PORTS = {
  API_GATEWAY: 4000,
  AUTH_SERVICE: 4001,
  USERS_SERVICE: 4002,
  EVENTS_SERVICE: 4003,
  TICKETS_SERVICE: 4004,
  PAYMENTS_SERVICE: 4005,
  NOTIFICATIONS_SERVICE: 4006,
} as const;
