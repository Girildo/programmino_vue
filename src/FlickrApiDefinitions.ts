/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface FlickrApiDefinitions {
  ContextPhoto: {
    id?: string;
    secret?: string;
    server?: string;
    farm?: string;
    title?: string;
    url?: string;
    thumb?: string;
    media?: string;
    owner?: string;
    license?: number;
    safe?: boolean;
    is_faved?: boolean;
  };
  ContextPhotos: { photos?: FlickrApiDefinitions["ContextPhoto"][] };
  Cover: {
    id?: string;
    owner?: string;
    secret?: string;
    server?: string;
    farm?: string;
    title?: string;
    ispublic?: boolean;
    isfriend?: boolean;
    isfamily?: boolean;
    y?: string;
  };
  Group: {
    id?: string;
    path_alias?: string;
    iconserver?: string;
    iconfarm?: string;
    name?: { _content?: string };
    description?: { _content?: string };
    rules?: { _content?: string };
    members?: { _content?: string };
    pool_count?: { _content?: string };
    topic_count?: { _content?: string };
    privacy?: { _content?: string };
    lang?: string;
    ispoolmoderated?: boolean;
    roles?: { member?: string; moderator?: string; admin?: string };
    pool_rows?: number;
    coverphoto_server?: string;
    coverphoto_farm?: string;
    coverphoto_url?: FlickrApiDefinitions["PhotoURLs"];
    is_member?: boolean;
    is_moderator?: boolean;
    is_admin?: boolean;
    blast?: { _content?: string; date_blast_added?: string; user_id?: string };
    throttle?: { count?: number; mode?: string; remaining?: string };
    restrictions?: {
      photos_ok?: boolean;
      videos_ok?: boolean;
      images_ok?: boolean;
      screens_ok?: boolean;
      art_ok?: boolean;
      safe_ok?: boolean;
      moderate_ok?: boolean;
      restricted_ok?: boolean;
      has_geo?: boolean;
    };
    cover?: FlickrApiDefinitions["Cover"];
  };
  Note: { description?: string };
  Owner: {
    nsid?: string;
    username?: string;
    realname?: string;
    location?: string;
    iconserver?: string;
    iconfarm?: string;
    path_alias?: string;
    noindexfollow?: boolean;
    ispro?: boolean;
    is_ad_free?: boolean;
  };
  Person: {
    id?: string;
    nsid?: string;
    ispro?: boolean;
    can_buy_pro?: boolean;
    iconserver?: string;
    iconfarm?: string;
    path_alias?: string;
    has_stats?: boolean;
    coverphoto_server?: string;
    coverphoto_farm?: string;
    is_ad_free?: boolean;
    coverphoto?: FlickrApiDefinitions["PhotoURLs"];
    expire?: boolean;
    user_secret?: string;
    username?: { _content?: string };
    realname?: { _content?: string };
    mbox_sha1sum?: { _content?: string };
    location?: { _content?: string };
    timezone?: { label?: string; offset?: string; timezone_id?: string };
    description?: { _content?: string };
    photosurl?: { _content?: string };
    profileurl?: { _content?: string };
    mobileurl?: { _content?: string };
    photos?: {
      firstdatetaken?: { _content?: string };
      firstdate?: { _content?: string };
      count?: { _content?: string };
      views?: { _content?: string };
    };
    yintl?: string;
    unread_messages?: { _content?: string };
    cover?: FlickrApiDefinitions["Cover"];
    disable_keyboard_shortcuts?: { _content?: string };
  };
  Photo: {
    id?: string;
    secret?: string;
    server?: string;
    farm?: string;
    dateuploaded?: string;
    isfavorite?: boolean;
    license?: string;
    safety_level?: string;
    rotation?: string;
    originalsecret?: string;
    owner?: FlickrApiDefinitions["Owner"];
    title?: { _content?: string };
    description?: { _content?: string };
    visibility?: { ispublic?: boolean; isfriend?: boolean; isfamily?: boolean };
    dates?: {
      posted?: string;
      taken?: string;
      takengranularity?: string;
      takenunknown?: boolean;
      lastupdate?: string;
    };
    permissions?: { permcomment?: string; permaddmeta?: string };
    views?: string;
    editability?: { cancomment?: boolean; canaddmeta?: boolean };
    publiceditability?: { cancomment?: boolean; canaddmeta?: boolean };
    usage?: {
      candownload?: boolean;
      canblog?: boolean;
      canprint?: boolean;
      canshare?: boolean;
    };
    comments?: { _content?: string };
    notes?: { note?: FlickrApiDefinitions["Note"][] };
    people?: { haspeople?: boolean };
    tags?: { tag?: FlickrApiDefinitions["Tag"][] };
    urls?: { url?: FlickrApiDefinitions["URL"][] };
    safe?: boolean;
    media?: string;
  };
  PhotoURLs: { h?: string; l?: string; s?: string; t?: string };
  Stat: string;
  Tag: {
    id?: string;
    author?: string;
    authorname?: string;
    raw?: string;
    _content?: string;
    machine_tag?: boolean;
  };
  Topic: {
    id?: string;
    subject?: string;
    message?: { _content?: string };
    author?: string;
    authorname?: string;
    author_path_alias?: string;
    author_is_deleted?: boolean;
    is_pro?: boolean;
    role?: string;
    iconserver?: string;
    iconfarm?: string;
    count_replies?: number;
    can_edit?: boolean;
    can_delete?: boolean;
    can_reply?: boolean;
    is_sticky?: boolean;
    is_locked?: boolean;
    datecreate?: string;
    datelastpost?: string;
    last_reply?: string;
    lastedit?: string;
  };
  TopicReply: {
    id?: string;
    message?: { _content?: string };
    author?: string;
    authorname?: string;
    author_path_alias?: string;
    author_is_deleted?: boolean;
    is_pro?: boolean;
    iconserver?: string;
    iconfarm?: string;
    can_edit?: boolean;
    can_delete?: boolean;
    datecreate?: string;
    lastedit?: string;
  };
  URL: { type?: string; _content?: string };
  Album: {
    id?: string;
    primary?: string;
    secret?: string;
    server?: string;
    farm?: string;
    photos?: number;
    videos?: number;
    count_views?: number;
    count_comments?: number;
    can_comment?: boolean;
    date_create?: number;
    date_update?: number;
    title?: string;
    description?: string;
  };
  Size: {
    label?: string;
    width?: number;
    height?: number;
    source?: string;
    url?: string;
    media?: string;
  };
}
