export const DEFLATE_COMPRESSION = 8;
export const NO_COMPRESSION = 0;

export const ESLINT_ERROR = 2;
export const ESLINT_NOTICE = 0;
export const ESLINT_WARNING = 1;

export const VALIDATION_ERROR = 'error';
export const VALIDATION_NOTICE = 'notice';
export const VALIDATION_WARNING = 'warning';

export const ESLINT_TYPES = {
  0: VALIDATION_NOTICE,
  1: VALIDATION_WARNING,
  2: VALIDATION_ERROR,
};

export const MESSAGE_TYPES = [
  VALIDATION_ERROR,
  VALIDATION_NOTICE,
  VALIDATION_WARNING,
];

export const RDF_UNALLOWED_TAGS = ['hidden'];
export const RDF_UNALLOWED_IF_LISTED_TAGS = ['updateKey', 'updateURL'];
export const RDF_OBSOLETE_TAGS = ['file', 'requires', 'skin'];

export const HTML_TAGS_WITH_REQUIRED_ATTRIBUTES = {
  prefwindow: ['id'],
};

// Package type constants.
export const PACKAGE_ANY = 0;
export const PACKAGE_EXTENSION = 1;
export const PACKAGE_THEME = 2;
export const PACKAGE_DICTIONARY = 3;
export const PACKAGE_LANGPACK = 4;
export const PACKAGE_SEARCHPROV = 5;
export const PACKAGE_MULTI = 1; // A multi extension is an extension
export const PACKAGE_SUBPACKAGE = 7;

export const PACKAGE_TYPES = {
  PACKAGE_ANY: PACKAGE_ANY,
  PACKAGE_EXTENSION: PACKAGE_EXTENSION,
  PACKAGE_THEME: PACKAGE_THEME,
  PACKAGE_DICTIONARY: PACKAGE_DICTIONARY,
  PACKAGE_LANGPACK: PACKAGE_LANGPACK,
  PACKAGE_SEARCHPROV: PACKAGE_SEARCHPROV,
  PACKAGE_MULTI: PACKAGE_MULTI,
  PACKAGE_SUBPACKAGE: PACKAGE_SUBPACKAGE,
};

// Types in install.rdf don't match the types
// we use internally. This provides a mapping.
export const INSTALL_RDF_TYPE_MAP = {
  2: PACKAGE_EXTENSION,
  4: PACKAGE_THEME,
  8: PACKAGE_LANGPACK,
  32: PACKAGE_MULTI,
  64: PACKAGE_DICTIONARY,
};
