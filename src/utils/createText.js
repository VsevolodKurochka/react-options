const createText = (oldSite, newSite) => `UPDATE wp_options SET option_value = REPLACE(option_value, '${oldSite}', '${newSite}') WHERE option_name = 'home' OR option_name = 'siteurl';
    UPDATE wp_posts SET guid = REPLACE(guid, '${oldSite}', '${newSite}');
    UPDATE wp_posts SET post_content = REPLACE(post_content, '${oldSite}', '${newSite}');
`;

export {
    createText
};
