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
      interactiveColor: '#076bc9',
      brandColor: '#3C8712',
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
        en: 'Close an account',
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
      dataretained: true,
      hideassignmentheader: false,
      pageTemplate: 'assignment',
      hideusers: '',
      heading: '',
    },
    {
      title: {
        en: 'Transfer funds',
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
      dataretained: true,
      hideassignmentheader: false,
      pageTemplate: 'assignment',
      hideusers: '',
      heading: '',
    },
    {
      title: {
        en: 'Transact',
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
      dataretained: true,
      hideassignmentheader: false,
      pageTemplate: 'assignment',
      hideusers: '',
      heading: '',
    },
    {
      title: {
        en: 'Virtual assistance',
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
      dataretained: true,
      hideassignmentheader: false,
      pageTemplate: 'assignment',
      hideusers: '',
      heading: '',
    },
    {
      title: {
        en: 'Add beneficiaries',
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
      dataretained: true,
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
    hidebillpay: false,
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
    hideaccountdetails: false,
    accountdetailsheading: 'Portfolio Summary',
    accountpickerheading: 'Accounts overview',
    recentactivityheading: 'Recent transactions',
    channelid: '',
    tenantid: '',
    dataretained: true,
    hideassignmentheader: false,
    pageTemplate: 'assignment',
    heading: '',
  },
  kmhelp: {
    action: 'display',
    actionparam: 'KMHelpSitePortal',
    objclass: 'Data-Portal',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    username: '',
    password: '',
    channelid: '',
    tenantid: '',
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
      username: 'joe@pegasystems.com',
      password: 'rules',
      img: 'avatar-1.jpg',
      company_name: '',
      name: 'Joe Smith',
      accountID: '',
      contactID: '',
      customerID: '',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'jsmith',
      pega_pwd: 'rules',
      bill_pay: 870.8,
      roi: 8.4,
      load_by_default: true,
      hide_from_dropdown: false,
      show_opname: false,
      otp_send_to: '',
      accountdetails: [[
        {
          label: "Current balance",
          type: 'currency',
          value: 164.80,
        },
        {
          label: "Statement balance",
          type: 'duedate',
        },
        {
          label: "Annualized rate of return",
          value: "8.4%",
        },
      ],
      ],
      accountpicker: [
        {
          title: "Individual Investment",
          details: [
            {
              label: "Account number",
              value: "3456789-345",
            },
            {
              label: "Account balance",
              type: "currency",
              value: 10064.80,
            }]
        },
        {
          title: "Joint account",
          details: [
            {
              label: "Account number",
              value: "12456-788689",
            },
            {
              label: "Account balance",
              type: "currency",
              value: 164.80,
            }]
        },
        {
          title: "Retirement account",
          details: [
            {
              label: "Account number",
              value: "124577788689",
            },
            {
              label: "Account balance",
              type: "currency",
              value: 2400.30,
            }]
        },
      ],
      recentactivity: [
        {
          message: "Transfer to your joint account",
          cost: 1230.45
        },
        {
          message: "Dividend from Uplus",
          cost: 53.10
        },
      ]
    },
    {
      username: 'mary@pegasystems.com',
      password: 'rules',
      img: 'avatar-2.jpg',
      company_name: '',
      name: 'Mary Taylor',
      accountID: '',
      contactID: '',
      customerID: '',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'mtaylor',
      pega_pwd: 'rules',
      bill_pay: 560.8,
      roi: 4.4,
      load_by_default: false,
      hide_from_dropdown: false,
      show_opname: false,
      otp_send_to: '',
      accountdetails: [[
        {
          label: "Current balance",
          type: 'currency',
          value: 164.80,
        },
        {
          label: "Statement balance",
          type: 'duedate',
        },
        {
          label: "Annualized rate of return",
          value: "8.4%",
        },
      ],
      ],
      accountpicker: [
        {
          title: "Individual Investment",
          details: [
            {
              label: "Account number",
              value: "3456789-345",
            },
            {
              label: "Account balance",
              type: "currency",
              value: 10064.80,
            }]
        },
        {
          title: "Joint account",
          details: [
            {
              label: "Account number",
              value: "12456-788689",
            },
            {
              label: "Account balance",
              type: "currency",
              value: 164.80,
            }]
        },
        {
          title: "Retirement account",
          details: [
            {
              label: "Account number",
              value: "124577788689",
            },
            {
              label: "Account balance",
              type: "currency",
              value: 2400.30,
            }]
        },
      ],
      recentactivity: [
        {
          message: "Transfer to your joint account",
          cost: 1230.45
        },
        {
          message: "Dividend from Uplus",
          cost: 53.10
        },
      ],
    },
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
    DMMURL: "",
    DMMID: "pega-wm-chat",
    DMMSecret: "",
    DMMPrivateURL: "https://ksxyk0i2hb.execute-api.us-east-1.amazonaws.com/Prod/private-data",
    DMMProactiveChatNewSessionTimeout: 0,
    DMMProactiveChatNewSessionCode: '5sonPage',
  },
  pega_marketing: {
    Host: '',
    Port: '',
    channel: 'Web',
    requestTimeout: 10000,
    replaceHomePageHeader: false,
    showAIOverlay: false,
    enableRTS: false,
    enableClickStream: false,
    enableMergeAccount: false,
    useCaptureByChannel: true,
    apiLevel: 'V2',
    contextName: 'Customer',
    showLoadingIndicator: false,
    appID: '',
    homePage: {
      containerName: 'TopOffers',
      placement: 'Hero,Tile,Tile,Tile',
      clickaction: 'Mashup',
      attributes: '',
    },
    accountPage: {
      containerName: 'TopOffers',
      placement: 'Tile',
      clickaction: 'Mashup',
      attributes: '',
      showSingleOffer: false,
    },
    phonePage: {
      containerName: 'TopOffers',
      placement: 'Tile',
      clickaction: 'Mashup',
      attributes: '',
    },
    offerPage: {
      containerName: 'TopOffers',
      placement: 'Hero,Tile,Tile,Tile',
      clickaction: 'Mashup',
      attributes: '',
    },
  },
};
