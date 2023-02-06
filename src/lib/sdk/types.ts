export type Events = {
  id: number
  status: string
  date_created?: string
  date_updated?: string
  slug: string
  date: string
  time?: string
  location: string
  type?: string
  translations: string | EventsTranslations[]
}

export type EventsTranslations = {
  id: number
  events_id?: number | Events
  languages_id?: string | Languages
  title?: string
  body?: string
}

export type Languages = {
  code: string
  name?: string
}

export type Links = {
  id: number
  status: string
  sort?: number
  user_created?: string | DirectusUsers
  date_created?: string
  user_updated?: string | DirectusUsers
  date_updated?: string
  href?: string
  icon?: string
  label?: string
  huge?: boolean
}

export type Menu = {
  slug: string
  user_created?: string | DirectusUsers
  date_created?: string
  user_updated?: string | DirectusUsers
  date_updated?: string
}

export type Names = {
  id: number
  status: string
  sort?: number
  user_created?: string | DirectusUsers
  date_created?: string
  user_updated?: string | DirectusUsers
  date_updated?: string
  name: string
}

export type Pages = {
  id: number
  status: string
  sort?: number
  date_created?: string
  date_updated?: string
  slug: string
  translations: string | PagesTranslations[]
}

export type PagesTranslations = {
  id: number
  languages_id?: string | Languages
  pages_id?: number | Pages
  title?: string
  body?: string
}

export type DirectusActivity = {
  id: number
  action: string
  user?: string | DirectusUsers
  timestamp: string
  ip?: string
  user_agent?: string
  collection: string
  item: string
  comment?: string
  origin?: string
  revisions: string | DirectusRevisions[]
}

export type DirectusCollections = {
  collection: string
  icon?: string
  note?: string
  display_template?: string
  hidden: boolean
  singleton: boolean
  translations?: unknown
  archive_field?: string
  archive_app_filter: boolean
  archive_value?: string
  unarchive_value?: string
  sort_field?: string
  accountability?: string
  color?: string
  item_duplication_fields?: unknown
  sort?: number
  group?: string | DirectusCollections
  collapse: string
}

export type DirectusFields = {
  id: number
  collection: string | DirectusCollections
  field: string
  special?: unknown
  interface?: string
  options?: unknown
  display?: string
  display_options?: unknown
  readonly: boolean
  hidden: boolean
  sort?: number
  width?: string
  translations?: unknown
  note?: string
  conditions?: unknown
  required?: boolean
  group?: string | DirectusFields
  validation?: unknown
  validation_message?: string
}

export type DirectusFiles = {
  id: string
  storage: string
  filename_disk?: string
  filename_download: string
  title?: string
  type?: string
  folder?: string | DirectusFolders
  uploaded_by?: string | DirectusUsers
  uploaded_on: string
  modified_by?: string | DirectusUsers
  modified_on: string
  charset?: string
  filesize?: number
  width?: number
  height?: number
  duration?: number
  embed?: string
  description?: string
  location?: string
  tags?: unknown
  metadata?: unknown
}

export type DirectusFolders = {
  id: string
  name: string
  parent?: string | DirectusFolders
}

export type DirectusMigrations = {
  version: string
  name: string
  timestamp?: string
}

export type DirectusPermissions = {
  id: number
  role?: string | DirectusRoles
  collection: string
  action: string
  permissions?: unknown
  validation?: unknown
  presets?: unknown
  fields?: unknown
}

export type DirectusPresets = {
  id: number
  bookmark?: string
  user?: string | DirectusUsers
  role?: string | DirectusRoles
  collection?: string
  search?: string
  layout?: string
  layout_query?: unknown
  layout_options?: unknown
  refresh_interval?: number
  filter?: unknown
  icon: string
  color?: string
}

export type DirectusRelations = {
  id: number
  many_collection: string
  many_field: string
  one_collection?: string
  one_field?: string
  one_collection_field?: string
  one_allowed_collections?: unknown
  junction_field?: string
  sort_field?: string
  one_deselect_action: string
}

export type DirectusRevisions = {
  id: number
  activity: number | DirectusActivity
  collection: string
  item: string
  data?: unknown
  delta?: unknown
  parent?: number | DirectusRevisions
}

export type DirectusRoles = {
  id: string
  name: string
  icon: string
  description?: string
  ip_access?: unknown
  enforce_tfa: boolean
  admin_access: boolean
  app_access: boolean
  users: string | DirectusUsers[]
}

export type DirectusSessions = {
  token: string
  user?: string | DirectusUsers
  expires: string
  ip?: string
  user_agent?: string
  share?: string | DirectusShares
  origin?: string
}

export type DirectusSettings = {
  id: number
  project_name: string
  project_url?: string
  project_color?: string
  project_logo?: string | DirectusFiles
  public_foreground?: string | DirectusFiles
  public_background?: string | DirectusFiles
  public_note?: string
  auth_login_attempts?: number
  auth_password_policy?: string
  storage_asset_transform?: string
  storage_asset_presets?: unknown
  custom_css?: string
  storage_default_folder?: string | DirectusFolders
  basemaps?: unknown
  mapbox_key?: string
  module_bar?: unknown
  project_descriptor?: string
  translation_strings?: unknown
  default_language: string
  custom_aspect_ratios?: unknown
}

export type DirectusUsers = {
  id: string
  first_name?: string
  last_name?: string
  email?: string
  password?: string
  location?: string
  title?: string
  description?: string
  tags?: unknown
  avatar?: string | DirectusFiles
  language?: string
  theme?: string
  tfa_secret?: string
  status: string
  role?: string | DirectusRoles
  token?: string
  last_access?: string
  last_page?: string
  provider: string
  external_identifier?: string
  auth_data?: unknown
  email_notifications?: boolean
}

export type DirectusWebhooks = {
  id: number
  name: string
  method: string
  url: string
  status: string
  data: boolean
  actions: unknown
  collections: unknown
  headers?: unknown
}

export type DirectusDashboards = {
  id: string
  name: string
  icon: string
  note?: string
  date_created?: string
  user_created?: string | DirectusUsers
  color?: string
  panels: string | DirectusPanels[]
}

export type DirectusPanels = {
  id: string
  dashboard: string | DirectusDashboards
  name?: string
  icon?: string
  color?: string
  show_header: boolean
  note?: string
  type: string
  position_x: number
  position_y: number
  width: number
  height: number
  options?: unknown
  date_created?: string
  user_created?: string | DirectusUsers
}

export type DirectusNotifications = {
  id: number
  timestamp?: string
  status?: string
  recipient: string | DirectusUsers
  sender?: string | DirectusUsers
  subject: string
  message?: string
  collection?: string
  item?: string
}

export type DirectusShares = {
  id: string
  name?: string
  collection?: string | DirectusCollections
  item?: string
  role?: string | DirectusRoles
  password?: string
  user_created?: string | DirectusUsers
  date_created?: string
  date_start?: string
  date_end?: string
  times_used?: number
  max_uses?: number
}

export type DirectusFlows = {
  id: string
  name: string
  icon?: string
  color?: string
  description?: string
  status: string
  trigger?: string
  accountability?: string
  options?: unknown
  operation?: string | DirectusOperations
  date_created?: string
  user_created?: string | DirectusUsers
  operations: string | DirectusOperations[]
}

export type DirectusOperations = {
  id: string
  name?: string
  key: string
  type: string
  position_x: number
  position_y: number
  options?: unknown
  resolve?: string | DirectusOperations
  reject?: string | DirectusOperations
  flow: string | DirectusFlows
  date_created?: string
  user_created?: string | DirectusUsers
}

export type CustomDirectusTypes = {
  events: Events
  events_translations: EventsTranslations
  languages: Languages
  links: Links
  menu: Menu
  names: Names
  pages: Pages
  pages_translations: PagesTranslations
  directus_activity: DirectusActivity
  directus_collections: DirectusCollections
  directus_fields: DirectusFields
  directus_files: DirectusFiles
  directus_folders: DirectusFolders
  directus_migrations: DirectusMigrations
  directus_permissions: DirectusPermissions
  directus_presets: DirectusPresets
  directus_relations: DirectusRelations
  directus_revisions: DirectusRevisions
  directus_roles: DirectusRoles
  directus_sessions: DirectusSessions
  directus_settings: DirectusSettings
  directus_users: DirectusUsers
  directus_webhooks: DirectusWebhooks
  directus_dashboards: DirectusDashboards
  directus_panels: DirectusPanels
  directus_notifications: DirectusNotifications
  directus_shares: DirectusShares
  directus_flows: DirectusFlows
  directus_operations: DirectusOperations
}
