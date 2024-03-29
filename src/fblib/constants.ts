export const FB_SECRET_COOKIE = 'fbsecret';

export const TOKEN_TYPE_BEARER = 'bearer';

// table names in the database
export const TBL_USER         = 'users';
export const TBL_ASSET        = 'assets';
export const TBL_ENTITY_ASSET = 'entities_assets';
export const TBL_LOOKUP       = 'lookups';
export const TBL_POST         = 'posts';
export const TBL_ARTICLE      = 'articles';
export const TBL_ADVERT       = 'adverts';
export const TBL_EMAIL_VERIF  = 'email_verifications';
export const TBL_PHONE_VERIF  = 'phone_verifications';

export const ENTITY_ASSET_PARENT_KIND = {
  USER:    TBL_USER,
  POST:    TBL_POST,
  ADVERT:  TBL_ADVERT,
  ARTICLE: TBL_ARTICLE,
};

export const ENTITY_ASSET_PURPOSE = {
  USER_PROFILE_IMAGE: 'user-profile-image',
  POST_IMAGE:         'post-image',
  ADVERT_IMAGE:       'advert-image',
  ARTICLE_IMAGE:      'article-image',
};

export const tablesFields = {
  [TBL_USER]: [
    'id', 'username', 'password_hash', 'first_name', 'last_name',
    'headline', 'neighbourhood',
    'email', 'email_verified',
    'phone', 'phone_verified',
    'lat', 'lon', 'geo_accuracy', 'geo_updated_at', // geolocation tracking
    'created_at', 'updated_at', 'created_by', 'updated_by', // audit trail
  ],
  [TBL_EMAIL_VERIF]: [
    'id', 'email', 'code', 'created_at', 'used',
  ],
  [TBL_PHONE_VERIF]: [
    'id', 'phone', 'code', 'created_at', 'used',
  ],
  [TBL_ASSET]: [
    'id', 'asset_type', 'media_type', 'label', 'url', 'meta',
    'created_at', 'updated_at', 'created_by', 'updated_by', // audit trail
  ],
  [TBL_ENTITY_ASSET]: [
    'id', 'parent_entity_kind', 'parent_entity_id', 'asset_id', 'purpose', 'meta',
    'created_at', 'updated_at', 'created_by', 'updated_by', // audit trail
  ],
  [TBL_LOOKUP]: [
    'id', 'category', 'value', 'label', 'meta',
    'created_at', 'updated_at', 'created_by', 'updated_by', // audit trail
  ],
  [TBL_POST]: [
    'id', 'user_id', 'slug', 'title', 'content', 'tags',
    'lat', 'lon', 'geo_accuracy', 'geo_updated_at', // geolocation tracking
    'created_at', 'updated_at', 'created_by', 'updated_by', // audit trail
  ],
  [TBL_ADVERT]: [
    'id', 'user_id', 'slug', 'title', 'content', 'tags',
    'is_buying', 'is_service', 'price', 'currency', 'price_info', // advert info
    'lat', 'lon', 'geo_accuracy', 'geo_updated_at', // geolocation tracking
    'created_at', 'updated_at', 'created_by', 'updated_by', // audit trail
  ],
  [TBL_ARTICLE]: [ // TODO: deprecated
    'id', 'slug', 'title', 'content', 'keywords',
    'created_at', 'updated_at', 'created_by', 'updated_by', // audit trail
  ],
};

export const ACCEPT_MIMETYPES      = ['image/jpeg', 'image/png'];
export const ERR_NO_FILE_UPLOADED  = 'upload JPEG or PNG image';
export const ERR_INVALID_FILE_TYPE = 'JPEG or PNG images are allowed';
export const ERR_INVALID_FILE_SIZE = 'max file size allowed is 50MB';
export const MAX_FILE_SIZE         = 50 * 1024 * 1024; // 50MB
export const MAX_FILE_DIMS = { // max width
  large: 2048,
  medium: 1024,
  small: 400,
};

export const MIN_PASSWORD_LEN = 8;

export const USERNAME_NOT_ACCEPTABLE_CHAR = /[^a-zA-Z0-9.\-_]+/;
export const FILENAME_NOT_ACCEPTABLE_CHAR = /[^a-z0-9.-]/;

export const HAS_LOWERCASE_CHAR = /[a-z]/;
export const HAS_UPPERCASE_CHAR = /[A-Z]/;
export const HAS_DIGIT          = /[0-9]/;
export const HAS_SPECIAL_CHAR   = /[.|,|-|_|<|>|?|!|@|$|;|:|(|)|&|%|+|-|*|/|\\]/;

export const MSG_INVALID_USERNAME    = 'invalid username';
export const MSG_NONUNIQUE_USERNAME  = 'enter another username';
export const MSG_INVALID_PASSWORD    = 'enter a strong password';
export const MSG_UNKNOWN_ERROR       = 'there was an error, please try again later';
export const MSG_INVALID_CREDENTIALS = 'Invalid credentials';
export const MSG_ID_REQUIRED         = 'id required';
export const MSG_USERNAME_REQUIRED   = 'username is required';
export const MSG_RECORD_NOT_FOUND    = 'record not found';
export const MSG_POST_NOT_FOUND      = 'post not found';
export const MSG_USER_NOT_FOUND      = 'user not found';
export const MSG_ARTICLE_NOT_FOUND   = 'article not found';
export const MSG_ADVERT_NOT_FOUND    = 'advert not found';

export const CURRENCY_EUR = {
  code: 'EUR',
  sign: '€',
  name: 'Euro',
};

export const CURRENCY_GBP = {
  code: 'GBP',
  sign: '£',
  name: 'Pound Sterling',
};

export const CURRENCY_USD = {
  code: 'USD',
  sign: '$',
  name: 'US Dollar',
};

export const CURRENCY_LIST = [
  CURRENCY_EUR,
  CURRENCY_GBP,
  CURRENCY_USD,
];
