// const API_HERO_STATS = "/api/heroStats"; // старая много данных героев
// const API_HERO_LIST = "/herolist"; // новые, мало данных для героев
// const API_HERO_DATA = "/herodata"; // новая, детальная информация про героя, нужно передать hero_id=...

const API_HERO_STATS = `/api/heroStats`; // старая много данных героев
const API_HERO_LIST = `https://${import.meta.env.VITE_API_URL}/herolist`; // новые, мало данных для героев
const API_HERO_DATA = `https://${import.meta.env.VITE_API_URL}/herodata`; // новая, детальная информация про героя, нужно передать hero_id=...

export const CONFIG = {
	API_HERO_STATS,
	API_HERO_LIST,
	API_HERO_DATA,
	EUNIVERSE: 1,
	WEB_UNIVERSE: "public",
	LANGUAGE: "english",
	COUNTRY: "US",
	MEDIA_CDN_COMMUNITY_URL:
		"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/",
	MEDIA_CDN_URL: "https://cdn.cloudflare.steamstatic.com/",
	COMMUNITY_CDN_URL: "https://community.cloudflare.steamstatic.com/",
	COMMUNITY_CDN_ASSET_URL: "https://cdn.cloudflare.steamstatic.com/",
	STORE_CDN_URL: "https://store.cloudflare.steamstatic.com/",
	PUBLIC_SHARED_URL: "https://www.dota2.com/public/shared/",
	COMMUNITY_BASE_URL: "https://steamcommunity.com/",
	CHAT_BASE_URL: "https://steamcommunity.com/",
	STORE_BASE_URL: "https://store.steampowered.com/",
	STORE_CHECKOUT_BASE_URL: "https://checkout.steampowered.com/",
	HERO_VIDEO_URL:
		"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders",
	ABILITY_VIDEO_URL:
		"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities",
	ABILITY_IMG_URL:
		"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities",
	HERO_PORTRET_URL:
		"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/",
	STEAMTV_BASE_URL: "https://steam.tv/",
	HELP_BASE_URL: "https://help.steampowered.com/",
	PARTNER_BASE_URL: "https://partner.steamgames.com/",
	STATS_BASE_URL: "https://partner.steampowered.com/",
	INTERNAL_STATS_BASE_URL: "https://steamstats.valve.org/",
	IN_CLIENT: false,
	USE_POPUPS: false,
	STORE_ICON_BASE_URL: "https://cdn.cloudflare.steamstatic.com/steam/apps/",
	WEBAPI_BASE_URL: "https://api.steampowered.com/",
	TOKEN_URL: "https://www.dota2.com//chat/clientjstoken",
	BUILD_TIMESTAMP: 1704487614,
	PAGE_TIMESTAMP: 1704812584,
	IN_TENFOOT: false,
	IN_GAMEPADUI: false,
	IN_CHROMEOS: false,
	IN_MOBILE_WEBVIEW: false,
	PLATFORM: "windows",
	BASE_URL_STORE_CDN_ASSETS: "https://cdn.cloudflare.steamstatic.com/store/",
	EREALM: 1,
	LOGIN_BASE_URL: "https://login.steampowered.com/",
	AVATAR_BASE_URL: "https://avatars.cloudflare.steamstatic.com/",
	FROM_WEB: true,
	WEBSITE_ID: "DotaWeb",
	BASE_URL_SHARED_CDN: "https://shared.cloudflare.steamstatic.com/",
	CLAN_CDN_ASSET_URL: "https://clan.cloudflare.steamstatic.com/",
	BASE_URL: "https://www.dota2.com/",
	IMG_URL:
		"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/",
	VIDEO_URL:
		"https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/",
	AUDIO_URL:
		"https://cdn.cloudflare.steamstatic.com/apps/dota2/audio/dota_react/",
	CDN_URL: "https://cdn.cloudflare.steamstatic.com/",
	COMMUNITY_URL: "https://steamcommunity.com/",
	STORE_URL: "https://store.steampowered.com/",
	CLIENT_ID: "9B2C1229",
	PROJECT_NAME: "",
	PROJECT_ROOT: "",
	RENDER_TIMESTAMP: 1704812584,
	DOTA_APP_ID: 570,
	ACCOUNT_ID: 0,
	SESSION_ID: "601def3c9d2ae7f622bdc888",
	PAGE_LOAD_ID: "cbd7d388ed29cc01a97318d7",
	ENABLE_METRICS: true,
	EVENT_ID_PLUS_SUBSCRIPTION: 19,
	VALVE_INTERNAL: false,
	PLAYER: "",
	REGION: "North America",
	DPC_DATA: [
		{
			event: 1,
			event_type: 1,
			leagues: [
				{
					region: 1,
					division: 1,
					league_id: 13119,
					phases: [
						{
							phase: 3,
							node_group_id: 2,
						},
					],
				},
				{
					region: 1,
					division: 2,
					league_id: 13120,
					phases: [
						{
							phase: 4,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 1,
					league_id: 13109,
					phases: [
						{
							phase: 4,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 2,
					league_id: 13110,
					phases: [
						{
							phase: 4,
							node_group_id: 3,
						},
					],
				},
				{
					region: 3,
					division: 1,
					league_id: 13114,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 2,
					league_id: 13115,
					phases: [
						{
							phase: 6,
							node_group_id: 3,
						},
					],
				},
				{
					region: 4,
					division: 1,
					league_id: 13116,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 2,
					league_id: 13117,
					phases: [
						{
							phase: 6,
							node_group_id: 3,
						},
					],
				},
				{
					region: 5,
					division: 1,
					league_id: 13112,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 2,
					league_id: 13113,
					phases: [
						{
							phase: 6,
							node_group_id: 3,
						},
					],
				},
				{
					region: 6,
					division: 1,
					league_id: 13108,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 2,
					league_id: 13107,
					phases: [
						{
							phase: 6,
							node_group_id: 3,
						},
					],
				},
			],
			registration_period: 6,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_spring21",
		},
		{
			event: 2,
			event_type: 2,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 12964,
					phases: [
						{
							phase: 1,
							node_group_id: 2,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 12964,
					phases: [
						{
							phase: 2,
							node_group_id: 3,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 12964,
					phases: [
						{
							phase: 6,
							node_group_id: 4,
						},
					],
				},
			],
			registration_period: 6,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_springmajor21",
		},
		{
			event: 3,
			event_type: 3,
			leagues: [
				{
					region: 1,
					division: 0,
					league_id: 13256,
					phases: [
						{
							phase: 6,
							node_group_id: 14,
						},
					],
				},
				{
					region: 2,
					division: 0,
					league_id: 13256,
					phases: [
						{
							phase: 6,
							node_group_id: 8,
						},
					],
				},
				{
					region: 3,
					division: 0,
					league_id: 13256,
					phases: [
						{
							phase: 6,
							node_group_id: 15,
						},
					],
				},
				{
					region: 4,
					division: 0,
					league_id: 13256,
					phases: [
						{
							phase: 6,
							node_group_id: 16,
						},
					],
				},
				{
					region: 5,
					division: 0,
					league_id: 13256,
					phases: [
						{
							phase: 6,
							node_group_id: 17,
						},
					],
				},
				{
					region: 6,
					division: 0,
					league_id: 13256,
					phases: [
						{
							phase: 6,
							node_group_id: 18,
						},
					],
				},
			],
			registration_period: 6,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_ti10qual",
		},
		{
			event: 4,
			event_type: 4,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 13256,
					phases: [
						{
							phase: 3,
							node_group_id: 20,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 13256,
					phases: [
						{
							phase: 4,
							node_group_id: 21,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 13256,
					phases: [
						{
							phase: 6,
							node_group_id: 23,
						},
					],
				},
			],
			registration_period: 6,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_ti10",
			multicast_league_id: 13256,
			multicast_streams: [
				2774, 2775, 2776, 3075, 3080, 3085, 3098, 3103, 3108, 3109,
			],
		},
		{
			event: 5,
			event_type: 1,
			leagues: [
				{
					region: 1,
					division: 1,
					league_id: 13741,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 1,
					division: 2,
					league_id: 13742,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 1,
					league_id: 13712,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 2,
					league_id: 13713,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 1,
					league_id: 13738,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 2,
					league_id: 13740,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 1,
					league_id: 13709,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 2,
					league_id: 13710,
					phases: [
						{
							phase: 5,
							node_group_id: 4,
						},
					],
				},
				{
					region: 5,
					division: 1,
					league_id: 13716,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 2,
					league_id: 13717,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 1,
					league_id: 13747,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 2,
					league_id: 13748,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_winter21",
			tour: 1,
		},
		{
			event: 6,
			event_type: 5,
			leagues: [
				{
					region: 1,
					division: 0,
					league_id: 13961,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 0,
					league_id: 13954,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 0,
					league_id: 13960,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 0,
					league_id: 13926,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 0,
					league_id: 13937,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 0,
					league_id: 13939,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_winter21_major",
			tour: 1,
		},
		{
			event: 7,
			event_type: 1,
			leagues: [
				{
					region: 1,
					division: 1,
					league_id: 14051,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 1,
					division: 2,
					league_id: 14050,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 1,
					league_id: 14071,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 2,
					league_id: 14072,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 1,
					league_id: 14052,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 2,
					league_id: 14053,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 1,
					league_id: 14041,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 2,
					league_id: 14040,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 1,
					league_id: 14067,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 2,
					league_id: 14068,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_spring21",
			tour: 2,
		},
		{
			event: 8,
			event_type: 2,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 14173,
					phases: [
						{
							phase: 3,
							node_group_id: 8,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 14173,
					phases: [
						{
							phase: 4,
							node_group_id: 9,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 14173,
					phases: [
						{
							phase: 6,
							node_group_id: 7,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_springmajor22",
			tour: 2,
		},
		{
			event: 12,
			event_type: 5,
			leagues: [
				{
					region: 5,
					division: 0,
					league_id: 14196,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_chinafinals22",
			tour: 2,
		},
		{
			event: 9,
			event_type: 1,
			leagues: [
				{
					region: 1,
					division: 1,
					league_id: 14281,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 1,
					division: 2,
					league_id: 14280,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 1,
					league_id: 14299,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 2,
					league_id: 14298,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 1,
					league_id: 14279,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 2,
					league_id: 14278,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 1,
					league_id: 14295,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 2,
					league_id: 14296,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 1,
					league_id: 14248,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 2,
					league_id: 14247,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 1,
					league_id: 14270,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 2,
					league_id: 14271,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_summer22",
			tour: 3,
		},
		{
			event: 10,
			event_type: 2,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 14417,
					phases: [
						{
							phase: 3,
							node_group_id: 8,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 14417,
					phases: [
						{
							phase: 4,
							node_group_id: 9,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 14417,
					phases: [
						{
							phase: 6,
							node_group_id: 10,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_summermajor22",
			tour: 3,
		},
		{
			event: 11,
			event_type: 4,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 14268,
					phases: [
						{
							phase: 3,
							node_group_id: 2,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 14268,
					phases: [
						{
							phase: 4,
							node_group_id: 3,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 14268,
					phases: [
						{
							phase: 6,
							node_group_id: 5,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_ti11",
		},
		{
			event: 13,
			event_type: 3,
			leagues: [
				{
					region: 1,
					division: 0,
					league_id: 14569,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 0,
					league_id: 14571,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 0,
					league_id: 14574,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 0,
					league_id: 14570,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 0,
					league_id: 14572,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 0,
					league_id: 14573,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_ti11qual",
		},
		{
			event: 14,
			event_type: 3,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 14642,
					phases: [
						{
							phase: 3,
							node_group_id: 2,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 14642,
					phases: [
						{
							phase: 4,
							node_group_id: 3,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 14642,
					phases: [
						{
							phase: 6,
							node_group_id: 5,
						},
					],
				},
			],
			registration_period: 7,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_ti11lastchance",
		},
		{
			event: 15,
			event_type: 1,
			leagues: [
				{
					region: 1,
					division: 1,
					league_id: 14893,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 1,
					division: 2,
					league_id: 14922,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 1,
					league_id: 14886,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 2,
					league_id: 14887,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 1,
					league_id: 14892,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 2,
					league_id: 14921,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 1,
					league_id: 14858,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 2,
					league_id: 14857,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 1,
					league_id: 14859,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 2,
					league_id: 14860,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 1,
					league_id: 14927,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 2,
					league_id: 14928,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 8,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_winter23",
			tour: 1,
			timestamp_drop_lock: 1670616000,
			timestamp_add_lock: 1670616000,
			timestamp_content_deadline: 1672084800,
		},
		{
			event: 16,
			event_type: 2,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 15089,
					phases: [
						{
							phase: 3,
							node_group_id: 2,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15089,
					phases: [
						{
							phase: 4,
							node_group_id: 3,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15089,
					phases: [
						{
							phase: 6,
							node_group_id: 7,
						},
					],
				},
			],
			registration_period: 8,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_wintermajor23",
			tour: 1,
		},
		{
			event: 17,
			event_type: 1,
			leagues: [
				{
					region: 1,
					division: 1,
					league_id: 15085,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 1,
					division: 2,
					league_id: 15087,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 1,
					league_id: 15135,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 2,
					league_id: 15136,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 1,
					league_id: 15086,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 2,
					league_id: 15088,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 1,
					league_id: 15137,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 2,
					league_id: 15138,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 1,
					league_id: 15140,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 2,
					league_id: 15141,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 1,
					league_id: 15125,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 2,
					league_id: 15126,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 8,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_spring23",
			tour: 2,
			timestamp_drop_lock: 1678219200,
			timestamp_add_lock: 1678564800,
			timestamp_content_deadline: 1677524400,
			timestamp_content_review_deadline: 1678820400,
		},
		{
			event: 18,
			event_type: 2,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 15251,
					phases: [
						{
							phase: 3,
							node_group_id: 8,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15251,
					phases: [
						{
							phase: 4,
							node_group_id: 9,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15251,
					phases: [
						{
							phase: 6,
							node_group_id: 7,
						},
					],
				},
			],
			registration_period: 8,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_springmajor23",
			tour: 2,
		},
		{
			event: 19,
			event_type: 1,
			leagues: [
				{
					region: 1,
					division: 1,
					league_id: 15350,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 1,
					division: 2,
					league_id: 15353,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 1,
					league_id: 15365,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 2,
					league_id: 15366,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 1,
					league_id: 15351,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 2,
					league_id: 15352,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 1,
					league_id: 15335,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 2,
					league_id: 15336,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 1,
					league_id: 15383,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 2,
					league_id: 15384,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 1,
					league_id: 15374,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 2,
					league_id: 15375,
					phases: [
						{
							phase: 5,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 8,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_summer23",
			tour: 3,
			timestamp_drop_lock: 1683658800,
			timestamp_add_lock: 1684004400,
			timestamp_content_deadline: 1684047600,
			timestamp_content_review_deadline: 1684652400,
		},
		{
			event: 20,
			event_type: 2,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 15438,
					phases: [
						{
							phase: 3,
							node_group_id: 7,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15438,
					phases: [
						{
							phase: 4,
							node_group_id: 8,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15438,
					phases: [
						{
							phase: 6,
							node_group_id: 13,
						},
					],
				},
			],
			registration_period: 8,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_summer23_major",
			tour: 3,
		},
		{
			event: 22,
			event_type: 3,
			leagues: [
				{
					region: 1,
					division: 0,
					league_id: 15690,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 2,
					division: 0,
					league_id: 15692,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 3,
					division: 0,
					league_id: 15693,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 4,
					division: 0,
					league_id: 15691,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 5,
					division: 0,
					league_id: 15689,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
				{
					region: 6,
					division: 0,
					league_id: 15694,
					phases: [
						{
							phase: 6,
							node_group_id: 2,
						},
					],
				},
			],
			registration_period: 8,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_ti12qual",
			timestamp_drop_lock: 1691089200,
			timestamp_add_lock: 1691694000,
		},
		{
			event: 21,
			event_type: 4,
			leagues: [
				{
					region: 0,
					division: 0,
					league_id: 15728,
					phases: [
						{
							phase: 3,
							node_group_id: 3,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15728,
					phases: [
						{
							phase: 4,
							node_group_id: 4,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15728,
					phases: [
						{
							phase: 9,
							node_group_id: 5,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15728,
					phases: [
						{
							phase: 10,
							node_group_id: 8,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15728,
					phases: [
						{
							phase: 11,
							node_group_id: 9,
						},
					],
				},
				{
					region: 0,
					division: 0,
					league_id: 15728,
					phases: [
						{
							phase: 6,
							node_group_id: 7,
						},
					],
				},
			],
			registration_period: 8,
			is_event_upcoming: false,
			is_event_completed: true,
			is_fantasy_enabled: false,
			event_name: "#dpc_event_ti12",
			timestamp_drop_lock: 1691089200,
			timestamp_add_lock: 1691694000,
			timestamp_content_deadline: 1693594799,
			timestamp_content_review_deadline: 1694199599,
		},
	],
	DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON: 10,
	DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD: 8,
};
