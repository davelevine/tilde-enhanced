const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'SearX',
      key: '*',
      url: 'https://search.cc',
      search: '/search?q={}'
    },
    {
      category: 'Homelab',
      name: 'Code',
      key: 'c',
      url: 'https://wired.io',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'code',
      quickLaunch: false,
    },
    {
      category: 'Homelab',
      name: 'Gitea',
      key: 'g',
      url: 'https://code.wired.io',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'git',
      quickLaunch: false,
    },
    {
      category: 'Homelab',
      name: 'MkDocs',
      key: 'mk',
      url: 'https://docs.levine.org',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mkdocs',
      quickLaunch: false,
    },
    {
      category: 'Homelab',
      name: 'SearX',
      key: 's',
      url: 'https://search.cc',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'devdocs',
      quickLaunch: false,
    },
    {
      category: 'Homelab',
      name: 'Unifi',
      key: 'u',
      url: 'https://digital.cc',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'devdocs',
      quickLaunch: false,
    },


    {
      category: 'General',
      name: 'Cloudflare',
      key: 'cf',
      url: 'https://dash.cloudflare.com',
      color: '#5682a3',
      icon: 'telegram',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'DigitalOcean',
      key: 'do',
      url: 'https://cloud.digitalocean.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'pfSense',
      key: 'pf',
      url: 'https://pfsense.davelevine.io',
      color: '#7289da',
      icon: 'discord',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Plausible',
      key: 'p',
      url: 'https://plausible.io',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'devdocs',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'ProtonMail',
      key: 'pm',
      url: 'https://protonmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: true,
    },


    {
      category: 'Programming',
      name: 'Atomic URL',
      key: 'a',
      url: 'https://dl.is',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      icon: 'stackoverflow',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Dev.to',
      key: 'dt',
      url: 'https://dev.to',
      search: '/search?q={}',
      color: '#212121',
      icon: 'mdn',
      quickLaunch: false,
    },
    {
      category: 'Programming',
      name: 'DevDocs',
      key: 'dd',
      url: 'https://devdocs.io',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'devdocs',
      quickLaunch: false,
    },
    {
      category: 'Programming',
      name: 'FreeCodeCamp',
      key: 'fc',
      url: 'https://freecodecamp.org/',
      search: '/search?stories[query]={}',
      color: 'linear-gradient(135deg, #FF6600, #DC5901)',
      icon: 'hackernews',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'GitHub',
      key: 'gh',
      url: 'https://github.com/davelevine',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },


    {
      category: 'Entertainment',
      name: 'Google Photos',
      key: 'g',
      url: 'https://photos.google.com',
      search: '/directory/game/{}',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'twitch',
      quickLaunch: false,
    },
    {
      category: 'Entertainment',
      name: 'Netflix',
      key: 'n',
      url: 'https://www.netflix.com',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },
    {
      category: 'Entertainment',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Entertainment',
      name: 'Spotify',
      key: 'sp',
      url: 'https://open.spotify.com/',
      search: '/search/{}',
      color: '#1dd35e',
      icon: 'spotify',
      quickLaunch: false,
    },
    {
      category: 'Entertainment',
      name: 'YouTube',
      key: 'yt',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },


    {
      category: 'Other',
      name: 'LinkedIn',
      key: 'l',
      url: 'https://linkedin.com/in/iamdavelevine',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'linkedin',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Notion',
      key: 'n',
      url: 'https://www.notion.so',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'notion',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Resume',
      key: 're',
      url: 'https://dave.levine.org',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'instagram',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'SimpleLogin',
      key: 'sl',
      url: 'https://app.simplelogin.io/dashboard/',
      search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
      color: '#1a73e8',
      icon: 'translate',
      quickLaunch: false,
    },
    {
      category: 'Other',
      name: 'Wikiless',
      key: 'wl',
      url: 'https://wiki.ttx.org',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'wiki',
      quickLaunch: true,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: false,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: true,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ':',

   // Show seconds on the clock. A monospaced font is recommended for this.
  clockShowSeconds: true,

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
