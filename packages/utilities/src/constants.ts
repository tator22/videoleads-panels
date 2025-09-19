import { ASSET_PATHS } from "@repo/assets";

export const CONSTANTS = {
  APP_NAME: "Listing Hype",
  PRODUCTS: {
    ADMIN_PANEL: "Admin Panel",
    CREATOR_PANEL: "Creator Panel",
  },
  PATHS: {
    ROOT: "/app",
    LISTING: "/app/listing",
    get LISTING_DETAIL() {
      return `${this.LISTING}/:id`;
    },
    MEDIA: "/app/media",
    DEFAULTS: "/app/defaults",
    TEAM_MEMBERS: "/app/team-members",
    BILLING: "/app/billing",
    SETTINGS: "/app/settings",
    SUPPORT: "/app/support",
    INSPIRATION: "/app/inspiration",
    AUTHENTICATION: "/",
  },
  ROLE: {
    ADMIN: "admin",
    EDITOR: "editor",
  },
  SIDEBAR_MODE: "sidebarMode",
  QR_BODY_SHAPES: [
    {
      name: "body1",
      icon: ASSET_PATHS.IMAGES.SQUARE,
    },
    {
      name: "body2",
      icon: ASSET_PATHS.IMAGES.DOT_LINE,
    },
    {
      name: "body3",
      icon: ASSET_PATHS.IMAGES.SMALL_DOT,
    },
    {
      name: "body4",
      icon: ASSET_PATHS.IMAGES.DOT,
    },
    {
      name: "body5",
      icon: ASSET_PATHS.IMAGES.SQUARE_90,
    },
    {
      name: "body6",
      icon: ASSET_PATHS.IMAGES.SQUARE_ROUND,
    },
    {
      name: "body7",
      icon: ASSET_PATHS.IMAGES.STAR,
    },
  ],
  QR_FRAME_SHAPES: [
    {
      name: "frame1",
      icon: ASSET_PATHS.IMAGES.FRAME1,
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "frame2",
      icon: ASSET_PATHS.IMAGES.FRAME2,
      frameFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
    },
    {
      name: "frame3",
      icon: ASSET_PATHS.IMAGES.FRAME3,
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "frame4",
      icon: ASSET_PATHS.IMAGES.FRAME4,
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "frame5",
      icon: ASSET_PATHS.IMAGES.FRAME5,
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "frame6",
      icon: ASSET_PATHS.IMAGES.FRAME6,
      frameFlips: {
        topLeft: ["vertical"],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "frame7",
      icon: ASSET_PATHS.IMAGES.FRAME7,
      frameFlips: {
        topLeft: ["horizontal"],
        topRight: [],
        bottomLeft: ["vertical", "horizontal"],
      },
    },
    {
      name: "frame8",
      icon: ASSET_PATHS.IMAGES.FRAME8,
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "frame9",
      icon: ASSET_PATHS.IMAGES.FRAME9,
      frameFlips: {
        topLeft: ["vertical"],
        topRight: ["vertical", "horizontal"],
        bottomLeft: [],
      },
    },
    {
      name: "frame10",
      icon: ASSET_PATHS.IMAGES.FRAME10,
      frameFlips: {
        topLeft: ["horizontal"],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "frame11",
      icon: ASSET_PATHS.IMAGES.FRAME11,
      frameFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
    },
    {
      name: "frame12",
      icon: ASSET_PATHS.IMAGES.FRAME12,
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "frame13",
      icon: ASSET_PATHS.IMAGES.FRAME13,
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "frame14",
      icon: ASSET_PATHS.IMAGES.FRAME14,
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
  ],
  QR_BALL_SHAPES: [
    {
      name: "ball1",
      icon: ASSET_PATHS.IMAGES.BALL1,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball2",
      icon: ASSET_PATHS.IMAGES.BALL2,
      ballFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
    },
    {
      name: "ball3",
      icon: ASSET_PATHS.IMAGES.BALL3,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball4",
      icon: ASSET_PATHS.IMAGES.BALL4,
      ballFlips: {
        topLeft: ["horizontal"],
        topRight: [],
        bottomLeft: ["vertical", "horizontal"],
      },
    },
    {
      name: "ball5",
      icon: ASSET_PATHS.IMAGES.BALL5,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball6",
      icon: ASSET_PATHS.IMAGES.BALL6,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball7",
      icon: ASSET_PATHS.IMAGES.BALL7,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball8",
      icon: ASSET_PATHS.IMAGES.BALL8,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball9",
      icon: ASSET_PATHS.IMAGES.BALL9,
      ballFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
    },
    {
      name: "ball10",
      icon: ASSET_PATHS.IMAGES.BALL10,
      ballFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
    },
    {
      name: "ball11",
      icon: ASSET_PATHS.IMAGES.BALL11,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball12",
      icon: ASSET_PATHS.IMAGES.BALL12,
      ballFlips: {
        topLeft: ["horizontal"],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball13",
      icon: ASSET_PATHS.IMAGES.BALL13,
      ballFlips: {
        topLeft: ["vertical"],
        topRight: ["horizontal", "vertical"],
        bottomLeft: [],
      },
    },
    {
      name: "ball14",
      icon: ASSET_PATHS.IMAGES.BALL14,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball15",
      icon: ASSET_PATHS.IMAGES.BALL15,
      ballFlips: {
        topLeft: ["vertical"],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball16",
      icon: ASSET_PATHS.IMAGES.BALL16,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
    {
      name: "ball17",
      icon: ASSET_PATHS.IMAGES.BALL17,
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
    },
  ],
  COLORS: [
    "#e77453",
    "#403463",
    "#9b3d48",
    "#316ce0",
    "#1a0511",
    "#c7623e",
    "#4f1061",
    "#4ba378",
    "#d14d5b",
    "#a84bc7",
    "#6360c8",
  ],
  SOCIAL_LINKS: [
    {
      icon: ASSET_PATHS.SVGS.INSTAGRAM,
      name: "Instagram",
      label: "Instagram username",
      placeholder: "Enter Instagram username",
      helper: "Example: BlueberryBelle",
    },
    {
      icon: ASSET_PATHS.SVGS.THREADS,
      name: "Threads",
      label: "Threads username",
      placeholder: "Enter Threads username",
      helper: "Example: tech_threader",
    },
    {
      icon: ASSET_PATHS.SVGS.TIK_TOK,
      name: "Tik-Tok",
      label: "TikTok username",
      placeholder: "Enter TikTok username",
      helper: "Example: dance.pro88",
    },
    {
      icon: ASSET_PATHS.SVGS.YOUTUBE,
      name: "YouTube",
      label: "YouTube Channel URL",
      placeholder: "Paste your channel URL",
      helper: "Example: https://youtube.com/@channel",
    },
    {
      icon: ASSET_PATHS.SVGS.SNAPCHAT,
      name: "Snapchat",
      label: "Snapchat username",
      placeholder: "Enter Snapchat username",
      helper: "Example: snapuser123",
    },
    {
      icon: ASSET_PATHS.SVGS.X,
      name: "X",
      label: "X username",
      placeholder: "Enter X username",
      helper: "Example: the_x_handle",
    },
    {
      icon: ASSET_PATHS.SVGS.LINKEDIN,
      name: "LinkedIn",
      label: "LinkedIn Profile URL",
      placeholder: "Paste LinkedIn profile URL",
      helper: "Example: https://linkedin.com/in/username",
    },
    {
      icon: ASSET_PATHS.SVGS.PLAY_STORE,
      name: "Play Store",
      label: "Play Store App URL",
      placeholder: "Paste Google Play store app URL",
      helper: "Example: https://play.google.com/store/apps/details?id=app",
    },
    {
      icon: ASSET_PATHS.SVGS.APP_STORE,
      name: "App Store",
      label: "App Store App URL",
      placeholder: "Paste Apple App Store app URL",
      helper: "Example: https://apps.apple.com/app/id123456789",
    },
    {
      icon: ASSET_PATHS.SVGS.PODCAST,
      name: "Podcast",
      label: "Podcast URL",
      placeholder: "Paste your podcast link",
      helper: "Example: https://podcasts.apple.com/episode/id",
    },
    {
      icon: ASSET_PATHS.SVGS.BLUESKY,
      name: "Bluesky",
      label: "Bluesky username",
      placeholder: "Enter Bluesky username",
      helper: "Example: bluesky_user",
    },
    {
      icon: ASSET_PATHS.SVGS.INSTAGRAM,
      name: "Clubhouse",
      label: "Clubhouse username",
      placeholder: "Enter Clubhouse username",
      helper: "Example: club_user",
    },
    {
      icon: ASSET_PATHS.SVGS.DISCORD,
      name: "Discord",
      label: "Discord username",
      placeholder: "Enter Discord username",
      helper: "Example: User#1234",
    },
    {
      icon: ASSET_PATHS.SVGS.MASTODON,
      name: "Mastodon",
      label: "Mastodon handle",
      placeholder: "Enter Mastodon handle",
      helper: "Example: @user@mastodon.social",
    },
    {
      icon: ASSET_PATHS.SVGS.PATRION,
      name: "Patrion",
      label: "Patrion URL",
      placeholder: "Paste your Patrion page URL",
      helper: "Example: https://www.patreon.com/username",
    },
    {
      icon: ASSET_PATHS.SVGS.PINTEREST,
      name: "Pinterest",
      label: "Pinterest username",
      placeholder: "Enter Pinterest username",
      helper: "Example: pinterest_user",
    },
    {
      icon: ASSET_PATHS.SVGS.SIGNAL,
      name: "Signal",
      label: "Signal phone number",
      placeholder: "Enter your Signal phone number",
      helper: "Example: +123456789",
    },
    {
      icon: ASSET_PATHS.SVGS.SPOTIFY,
      name: "Spotify",
      label: "Spotify profile URL",
      placeholder: "Paste Spotify profile link",
      helper: "Example: https://open.spotify.com/user/username",
    },
    {
      icon: ASSET_PATHS.SVGS.SUB_STACK,
      name: "Substack",
      label: "Substack URL",
      placeholder: "Paste your Substack URL",
      helper: "Example: https://username.substack.com",
    },
    {
      icon: ASSET_PATHS.SVGS.TELEGRAM,
      name: "Telegram",
      label: "Telegram username",
      placeholder: "Enter Telegram username",
      helper: "Example: @telegramuser",
    },
    {
      icon: ASSET_PATHS.SVGS.TWITCH,
      name: "Twitch",
      label: "Twitch username",
      placeholder: "Enter Twitch username",
      helper: "Example: twitch_user",
    },
    {
      icon: ASSET_PATHS.SVGS.LEMON8,
      name: "Lemon8",
      label: "Lemon8 username",
      placeholder: "Enter Lemon8 username",
      helper: "Example: lemon8_user",
    },
    {
      icon: ASSET_PATHS.SVGS.WHATS_APP,
      name: "WhatsApp",
      label: "WhatsApp phone number",
      placeholder: "Enter WhatsApp phone number",
      helper: "Example: +123456789",
    },
    {
      icon: ASSET_PATHS.SVGS.WEBSITE,
      name: "Website",
      label: "Website URL",
      placeholder: "Paste your website URL",
      helper: "Example: https://example.com",
    },
    {
      icon: ASSET_PATHS.SVGS.PHONE,
      name: "Phone",
      label: "Phone number",
      placeholder: "Enter your phone number",
      helper: "Example: +123456789",
    },
    {
      icon: ASSET_PATHS.SVGS.EMAIL,
      name: "Email",
      label: "Email address",
      placeholder: "Enter your email address",
      helper: "Example: user@example.com",
    },
    {
      icon: ASSET_PATHS.SVGS.MESSAGE,
      name: "Message",
      label: "Message",
      placeholder: "Enter your message",
      helper: "",
    },
  ],
};
