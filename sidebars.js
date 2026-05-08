module.exports = {
  mySidebar: [
    'index',
    'release-notes',
    'overview',
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      link: { type: 'doc', id: 'installation-overview' },
      items: [
        'installation',
        'configuration',
      ],
    },
    {
      type: 'category',
      label: 'Job definition',
      collapsed: true,
      link: { type: 'doc', id: 'job-definition-overview' },
      items: [
        'em-job-definition',
        'sm-job-definition',
      ],
    },
  ],
};
