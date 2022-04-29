/**
 * Define all stories that should be displayed in main storybook here
 */

const components = [
  //  "skhemata-editor-quill",
  //  "skhemata-google-analytics",
  'skhemata-blog',
  'skhemata-faq',
  'skhemata-testimonial',
  //"skhemata-contact",
  // 'skhemata-subscription',
  'skhemata-menu',
  'skhemata-portfolio',
  'skhemata-gdpr',
  'skhemata-footer',
  'skhemata-hero-banner',
  // 'skhemata-pageloader',
  //  "skhemata-login",
  //  "skhemata-register",
  //  "skhemata-okta",
];

module.exports = {
  addons: ['@storybook/addon-essentials'],
  stories: components.map(
    name =>
      `../node_modules/@skhemata/${name}/dist/stories/**/*.stories.{js,md,mdx}`
  ),
  framework: '@storybook/web-components',
};
