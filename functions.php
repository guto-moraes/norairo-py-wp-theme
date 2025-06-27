<?php

/**
 * Paraguay Ñorairõ functions and definitions
 *
 * @package Paraguay Ñorairõ
 * @since Paraguay Ñorairõ 1.0
 */

/**
 * Avoid direct access to function file
 */
if (!defined('ABSPATH')) {
	exit();
}

/**
 * Maximum content width
 * Limit the width of all uploaded images and embeds.
 */
if (!isset($content_width)) {
	$content_width = 1440; /* pixels */
}


if (!function_exists('norairo_setup')) :

	/**
	 * Sets up theme defaults and registers support for various
	 * WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme
	 * hook, which runs before the init hook. The init hook is too late
	 * for some features, such as indicating support post thumbnails.
	 */
	function norairo_setup()
	{

		/**
		 * Make theme available for translation.
		 * Translations can be placed in the /languages/ directory.
		 */
		load_theme_textdomain('norairo', get_template_directory() . '/languages');

		// Add support for block styles.
		add_theme_support('wp-block-styles');

		// Enqueue editor styles.
		add_editor_style('editor-style.css');

		add_theme_support('block-templates');
		add_theme_support('block-template-parts');

		/**
		 * Add default posts and comments RSS feed links to <head>.
		 */
		add_theme_support('automatic-feed-links');

		/**
		 * Enable support for post thumbnails and featured images.
		 */
		add_theme_support('post-thumbnails');

		/**
		 * Add support for two custom navigation menus.
		 */
		add_theme_support('menus');
		register_nav_menus(array(
			'main'   => "Menu Principal",
			'footer' => "Menu do Rodapé",
		));

		/**
		 * Enable support for the following post formats:
		 * aside, gallery, quote, image, and video
		 */
		add_theme_support('post-formats', array('aside', 'gallery', 'quote', 'image', 'video'));
	}
endif; // norairo_setup
add_action('after_setup_theme', 'norairo_setup');


//Add ReactJs Components Support
function norairo__theme()
{

	wp_enqueue_script_module(
		"norairo",
		get_stylesheet_directory_uri() . "/dist/main.js",
		array("react-jsx-runtime", "wp-element", "wp-i18n"),
		wp_get_theme()->get("Version"), //time()
		true
	);
	wp_set_script_translations('norairo', 'norairo');

	wp_enqueue_style(
		"norairo",
		get_stylesheet_directory_uri() . '/dist/main.css',
		wp_get_theme()->get('Version'), //time()
		true
	);
}
add_action('wp_enqueue_scripts', 'norairo__theme');

// Allow SVG
add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {

	global $wp_version;
	if ($wp_version !== '4.7.1') {
		return $data;
	}

	$filetype = wp_check_filetype($filename, $mimes);

	return [
		'ext'             => $filetype['ext'],
		'type'            => $filetype['type'],
		'proper_filename' => $data['proper_filename']
	];
}, 10, 4);

function cc_mime_types($mimes)
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function fix_svg()
{
	echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action('admin_head', 'fix_svg');

/**
 * Login logo customize
 */
// function og_custom_login_page(){
// 	wp_enqueue_style( 'custom-login', get_template_directory_uri() . '/style-custom-login-page.css' );
// }
// add_action("login_enqueue_scripts", "og_custom_login_page");

// function og_login_logo_url() {
//     return home_url();
// }
// add_filter( "login_headerurl", "og_login_logo_url" );

// function og_login_logo_url_title() {
//     return "Ofícios da Guerra | Transcrição de documentos da Guerra da Tríplice Aliança contra o Paraguai";
// }
// add_filter( "login_headertext", "og_login_logo_url_title" );
