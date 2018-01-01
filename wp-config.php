<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'foxginger');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '(N?af5w9_:bo5hf~< )L@<#vuI@Wh+GmR!+kH)OXv|NZgwe6|KsV!,RS&3fO~x_E');
define('SECURE_AUTH_KEY',  'Ow2p$+{8)h&^nYCu`2ck:V~g[>~Z-/ovc<r95x5Ce,^CRxnr|,k;ur$EZ%|-xJT~');
define('LOGGED_IN_KEY',    'uij1Di0}R3jEN3JBkMWr|Ax/p2E(7lk-osuH~(3wmsCapTkT8G6hFN;?`sF)TA3(');
define('NONCE_KEY',        '8T/`pLZ++P6$}x?YkP(-eazfd>od9cu,z?Bbh`+|~I+ACU^SYTN+cBV|0priu-}#');
define('AUTH_SALT',        '|f^#oi!:B,6[J$Bz}(V;%zC)aXS7z]d(kMRo+B+,$T%3`{qjaOcI[R^!AW+g~`6N');
define('SECURE_AUTH_SALT', 'Y.Mjud,568!85cp[IG`] E]c|.H]a8orVme=nqB(mKQpG#|Mfv&Shk{wK(Z9in>H');
define('LOGGED_IN_SALT',   '^rcOdUgb.xRS/E3CJH>H?VCnp&1Y |It%B+${Hn-QVNf_~T!h/pMmyah{-G:JnJ8');
define('NONCE_SALT',       ',c:x{(Of]&l2{MA8~!pt9R =IpOq}~lc1&pr6hwWKP-0d+-*Z;dM/W-,_x:5jv(a');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
