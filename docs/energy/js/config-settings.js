window.settings = {
	i18n: {
		defaultlocale: 'en',
		/* Set to 'browser' to use browser locale */
		languages: ['en'],
		showLangSwitch: false,
		/* set to true to show the language switcher */
	},
	general: {
		theming: {
			override: false,
			interactiveColor: '#0A852B',
			brandColor: '#0A852B',
		},
		ga: {
			enabled: true,
			trackingid: 'G-RJ6VT2L72P',
		},
		connection: {
			type: 'mashup',
			authtype: 'basic',
			clientid: '',
			clientsecret: '',
			webportal: '',
			c11nserver: '',
			PegaURL: '',
			authService: 'pega',
			themeID: '',
			showAttachments: true,
		},
		auth_2fa: {
			enabled: false,
			sendMode: 'email',
			url: '',
			emailSettings: {
				correspondenceName: 'pyDefaultOTPCorr',
				emailAccount: 'Default',
				subject: 'New OTP Request',
				validateMaxAge: 'false',
			},
			smsSettings: {
				from: 'Pega',
				account: 'Default',
				message: 'Uplus OTP login code',
				validateMaxAge: 'false',
			},
		},
	},
	quicklinks: [
		{
			title: {
				en: 'Start home move',
			},
			action: 'createNewWork',
			actionparam: '',
			objclass: '',
			url: '',
			startcase: 'pyStartCase',
			application: '',
			icon: '',
			extraparam: '',
			hide: false,
			channelid: '',
			tenantid: '',
			dataretained: false,
			hideassignmentheader: false,
			pageTemplate: 'assignment',
			hideusers: '',
			heading: '',
		},
		{
			title: {
				en: 'Get Quotes',
			},
			action: 'createNewWork',
			actionparam: '',
			objclass: '',
			url: '',
			startcase: 'pyStartCase',
			application: '',
			icon: '',
			extraparam: '',
			hide: false,
			channelid: '',
			tenantid: '',
			dataretained: false,
			hideassignmentheader: false,
			pageTemplate: 'assignment',
			hideusers: '',
			heading: '',
		},
		{
			title: {
				en: 'Update billing',
			},
			action: 'createNewWork',
			actionparam: '',
			objclass: '',
			url: '',
			startcase: 'pyStartCase',
			application: '',
			icon: '',
			extraparam: '',
			hide: false,
			channelid: '',
			tenantid: '',
			dataretained: false,
			hideassignmentheader: false,
			pageTemplate: 'assignment',
			hideusers: '',
			heading: '',
		},
		{
			title: {
				en: 'Proof of insurance',
			},
			action: 'createNewWork',
			actionparam: '',
			objclass: '',
			url: '',
			startcase: 'pyStartCase',
			application: '',
			icon: '',
			extraparam: '',
			hide: false,
			channelid: '',
			tenantid: '',
			dataretained: false,
			hideassignmentheader: false,
			pageTemplate: 'assignment',
			hideusers: '',
			heading: '',
		},
		{
			title: {
				en: 'Update your profile',
			},
			action: 'createNewWork',
			actionparam: '',
			objclass: '',
			url: '',
			startcase: 'pyStartCase',
			application: '',
			icon: '',
			extraparam: '',
			hide: false,
			channelid: '',
			tenantid: '',
			dataretained: false,
			hideassignmentheader: false,
			pageTemplate: 'assignment',
			hideusers: '',
			heading: '',
		},
	],
	billpay: {
		action: 'createNewWork',
		actionparam: '',
		objclass: '',
		url: '',
		startcase: 'pyStartCase',
		application: '',
		extraparam: '',
		hidebillpay: true,
		channelid: '',
		tenantid: '',
		dataretained: true,
		hideassignmentheader: false,
		pageTemplate: 'assignment',
		heading: '',
	},
	banner: {
		action: 'createNewWork',
		actionparam: '',
		objclass: '',
		url: '',
		startcase: 'pyStartCase',
		application: '',
		extraparam: '',
		hidebanner: true,
		hidebanner_button: false,
		color: '#CE9840',
		channelid: '',
		tenantid: '',
		dataretained: true,
		hideassignmentheader: false,
		pageTemplate: 'assignment',
		heading: '',
	},
	todo: {
		action: 'createNewWork',
		actionparam: '',
		objclass: '',
		url: '',
		startcase: 'pyStartCase',
		application: '',
		extraparam: '',
		hideactivity: false,
		hideaccount: false,
		hideaccountdetails: true,
		accountdetailsheading: 'Asset summary',
		accountpickerheading: 'Your assets',
		recentactivityheading: 'Recent activity',
		channelid: '',
		tenantid: '',
		dataretained: true,
		hideassignmentheader: false,
		pageTemplate: 'assignment',
		heading: '',
	},
	kmhelp: {
		action: "display",
		actionparam: "KMHelpSitePortal",
		objclass: "Data-Portal",
		url: '',
		startcase: 'pyStartCase',
		application: '',
		extraparam: '',
		username: '',
		password: '',
		channelid: '',
		tenantid: "",
		dataretained: true,
		hideassignmentheader: false,
		pageTemplate: 'assignment',
		heading: '',
	},
	activity: {
		action: 'createNewWork',
		actionparam: '',
		objclass: '',
		url: '',
		startcase: 'pyStartCase',
		application: '',
		extraparam: '',
		channelid: '',
		tenantid: '',
		dataretained: true,
		hideassignmentheader: false,
		pageTemplate: 'assignment',
		heading: '',
	},
	homeheroaction: {
		action: 'createNewWork',
		actionparam: '',
		objclass: '',
		url: '',
		startcase: 'pyStartCase',
		application: '',
		pega_userid: '',
		pega_pwd: '',
		extraparam: '',
		channelid: '',
		tenantid: '',
		dataretained: true,
		hideassignmentheader: false,
		pageTemplate: 'assignment',
		heading: '',
	},
	offeraction: {
		action: 'createNewWork',
		actionparam: '',
		objclass: '',
		url: '',
		startcase: 'pyStartCase',
		application: '',
		pega_userid: '',
		pega_pwd: '',
		extraparam: '',
		channelid: '',
		tenantid: '',
		dataretained: true,
		hideassignmentheader: false,
		pageTemplate: 'assignment',
		heading: '',
	},
	users: [
		{
			username: "John Brown",
			password: "rules",
			img: "avatar-1.jpg",
			company_name: "",
			name: "John Brown",
			accountID: "",
			contactID: "",
			customerID: "",
			extraparam: "",
			dmm_context_data: "",
			pega_userid: "",
			pega_pwd: "",
			bill_pay: 164.8,
			load_by_default: true,
			hide_from_dropdown: false,
			show_opname: false,
			otp_send_to: "",
			accountdetails: [[
				{
					label: "Card number",
					value: "***0219",
				},
				{
					label: "Card type",
					value: "VISA card",
				},
				{
					label: "Card status",
					value: "Active",
				}],
			[{
				label: "Card number",
				value: "***1875",
			},
			{
				label: "Card type",
				value: "Amex card",
			},
			{
				label: "Card status",
				value: "Active",
			}],
			],
			accountpicker: [
				{
					img: "",
					title: "Electricity Account",
					showbillpay: true,
					details: [
						{
							label: "Account balance",
							type: "currency",
							value: 164.80,
						},
						{
							label: "Statement balance",
							type: "currency",
							value: 193.27,
						},
						{
							label: "Minimum due",
							type: "currency",
							value: 25.00,
						},
						{
							label: "Due date",
							type: "duedate"
						}]
				},
				{
					title: "Gas Account",
					details: [
						{
							label: "Account number",
							value: "12456788689",
						},
						{
							label: "Account balance",
							type: "currency",
							value: 164.80,
						}]
				},
				{
					title: "EV Battery",
					details: [
						{
							label: "Account number",
							value: "12456788689",
						},
						{
							label: "Account balance",
							type: "currency",
							value: 2400.30,
						},
					]
				},
			],
			recentactivity: [
				{
					message: "You have submitted a recent meter reading",
					cost: 1230.45
				},
				{
					message: "Your energy statement",
					cost: 53.10
				},
				{
					message: "Meter reading reminder",
					cost: 143.12
				},
				{
					message: "Your Direct Debit payment is due soon",
					cost: 13.12
				},
			],
		},
		{
			username: 'Carmen Garcia',
			password: 'rules',
			img: 'avatar-2.jpg',
			company_name: '',
			name: 'Carmen Garcia',
			accountID: '',
			contactID: '',
			customerID: '',
			extraparam: '',
			dmm_context_data: '',
			pega_userid: '',
			pega_pwd: '',
			bill_pay: 164.8,
			load_by_default: true,
			hide_from_dropdown: false,
			show_opname: false,
			otp_send_to: '',
			accountdetails: [[
				{
					label: "Card number",
					value: "***0219",
				},
				{
					label: "Card type",
					value: "VISA card",
				},
				{
					label: "Card status",
					value: "Active",
				}],
			[{
				label: "Card number",
				value: "***1875",
			},
			{
				label: "Card type",
				value: "Amex card",
			},
			{
				label: "Card status",
				value: "Active",
			}],
			],
			accountpicker: [
				{
					img: "",
					title: "Electricity Account",
					details: [
						{
							label: "Account balance",
							type: "currency",
							value: 164.80,
						},
						{
							label: "Statement balance",
							type: "currency",
							value: 193.27,
						},
						{
							label: "Minimum due",
							type: "currency",
							value: 25.00,
						}]
				},
				{
					title: "Gas Account",
					details: [
						{
							label: "Account number",
							value: "12456788689",
						},
						{
							label: "Account balance",
							type: "currency",
							value: 164.80,
						}]
				},
				{
					title: "EV Battery",
					details: [
						{
							label: "Account number",
							value: "12456788689",
						},
						{
							label: "Account balance",
							type: "currency",
							value: 164.80,
						},
					]
				},
			],
			recentactivity: [
				{
					message: "You have submitted a recent meter reading",
					cost: 1230.45
				},
				{
					message: "Your energy statement",
					cost: 53.10
				},
				{
					message: "Meter reading reminder",
					cost: 143.12
				},
				{
					message: "Your Direct Debit payment is due soon",
					cost: 13.12
				},
			],
		}
	],
	CustomEvents: [
		{
			CustomEventAction: "HighlightElement",
			CustomEventName: "Custom Event 1",
			ElementName: "",
			SendAcknowledgement: false,
			AcknowledgeOn: "After5Seconds"
		},
		{
			CustomEventAction: "HighlightElement",
			CustomEventName: "Custom Event 2",
			ElementName: "",
			SendAcknowledgement: false,
			AcknowledgeOn: "After5Seconds"
		},
		{
			CustomEventAction: "HighlightElement",
			CustomEventName: "Custom Event 3",
			ElementName: "",
			SendAcknowledgement: false,
			AcknowledgeOn: "After5Seconds"
		}
	],
	pega_chat: {
		WCBConfigName: '',
		WebChatBotID: '',
		ApplicationName: '',
		MashupURL: '',
		ShowAsButton: true,
		EnableProActiveNotification: false,
		ResetLogout: false,
		ProActiveNotificationDismissTime: '',
		CoBrowseServerURL: '',
		CoBrowseToken: '',
		DMMURL: '',
		DMMID: "pega-wm-chat",
		DMMSecret: '',
		DMMPrivateURL: "https://ksxyk0i2hb.execute-api.us-east-1.amazonaws.com/Prod/private-data",
		DMMProactiveChatNewSessionTimeout: 0,
		DMMProactiveChatNewSessionCode: '5sonPage',
	},
	pega_marketing: {
		Host: window.location.origin,
		Port: '443',
		channel: "Web",
		requestTimeout: 10000,
		replaceHomePageHeader: false,
		showAIOverlay: true,
		enableRTS: false,
		enableClickStream: true,
		enableMergeAccount: true,
		useCaptureByChannel: false,
		apiLevel: "V4",
		contextName: "Customer",
		showLoadingIndicator: false,
		appID: '',
		homePage: {
			containerName: "NextBestAction",
			placement: "Hero,Tile,Tile,Tile",
			clickaction: "Mashup",
			attributes: '',
		},
		accountPage: {
			containerName: "NextBestAction",
			placement: "Tile",
			clickaction: "Mashup",
			attributes: '',
			showSingleOffer: false,
		},
		phonePage: {
			containerName: "NextBestAction",
			placement: "Tile",
			clickaction: "Mashup",
			attributes: '',
		},
		offerPage: {
			containerName: "NextBestAction",
			placement: "Hero,Tile,Tile,Tile",
			clickaction: "Mashup",
			attributes: '',
		},
	},
};
