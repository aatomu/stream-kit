package main

type DiscordPayload struct {
	Cmd   DiscordCmd     `json:"cmd"`   // Always
	Nonce string         `json:"nonce"` // In responses to commands (not subscribed events)
	Evt   DiscordEvent   `json:"evt"`   // In subscribed events, errors, and (un)subscribing events
	Data  map[string]any `json:"data"`  // In responses from the server
	Args  map[string]any `json:"args`   // In commands sent to the server
}

type DiscordCmd string

const (
	DISPATCH                   DiscordCmd = "DISPATCH"                   //event dispatch
	AUTHORIZE                  DiscordCmd = "AUTHORIZE"                  //used to authorize a new client with your app
	AUTHENTICATE               DiscordCmd = "AUTHENTICATE"               //used to authenticate an existing client with your app
	GET_GUILD                  DiscordCmd = "GET_GUILD"                  //used to retrieve guild information from the client
	GET_GUILDS                 DiscordCmd = "GET_GUILDS"                 //used to retrieve a list of guilds from the client
	GET_CHANNEL                DiscordCmd = "GET_CHANNEL"                //used to retrieve channel information from the client
	GET_CHANNELS               DiscordCmd = "GET_CHANNELS"               //used to retrieve a list of channels for a guild from the client
	SUBSCRIBE                  DiscordCmd = "SUBSCRIBE"                  //used to subscribe to an RPC event
	UNSUBSCRIBE                DiscordCmd = "UNSUBSCRIBE"                //used to unsubscribe from an RPC event
	SET_USER_VOICE_SETTINGS    DiscordCmd = "SET_USER_VOICE_SETTINGS"    //used to change voice settings of users in voice channels
	SELECT_VOICE_CHANNEL       DiscordCmd = "SELECT_VOICE_CHANNEL"       //used to join or leave a voice channel, group dm, or dm
	GET_SELECTED_VOICE_CHANNEL DiscordCmd = "GET_SELECTED_VOICE_CHANNEL" //used to get the current voice channel the client is in
	SELECT_TEXT_CHANNEL        DiscordCmd = "SELECT_TEXT_CHANNEL"        //used to join or leave a text channel, group dm, or dm
	GET_VOICE_SETTINGS         DiscordCmd = "GET_VOICE_SETTINGS"         //used to retrieve the client's voice settings
	SET_VOICE_SETTINGS         DiscordCmd = "SET_VOICE_SETTINGS"         //used to set the client's voice settings
	SET_CERTIFIED_DEVICES      DiscordCmd = "SET_CERTIFIED_DEVICES"      //used to send info about certified hardware devices
	SET_ACTIVITY               DiscordCmd = "SET_ACTIVITY"               //used to update a user's Rich Presence
	SEND_ACTIVITY_JOIN_INVITE  DiscordCmd = "SEND_ACTIVITY_JOIN_INVITE"  //used to consent to a Rich Presence Ask to Join request
	CLOSE_ACTIVITY_REQUEST     DiscordCmd = "CLOSE_ACTIVITY_REQUEST"     //used to reject a Rich Presence Ask to Join request
)

type DiscordEvent string

const (
	READY                   DiscordEvent = "READY"                   // non-subscription event sent immediately after connecting, contains server information
	ERROR                   DiscordEvent = "ERROR"                   // non-subscription event sent when there is an error, including command responses
	GUILD_STATUS            DiscordEvent = "GUILD_STATUS"            // sent when a subscribed server's state changes
	GUILD_CREATE            DiscordEvent = "GUILD_CREATE"            // sent when a guild is created/joined on the client
	CHANNEL_CREATE          DiscordEvent = "CHANNEL_CREATE"          // sent when a channel is created/joined on the client
	VOICE_CHANNEL_SELECT    DiscordEvent = "VOICE_CHANNEL_SELECT"    // sent when the client joins a voice channel
	VOICE_STATE_CREATE      DiscordEvent = "VOICE_STATE_CREATE"      // sent when a user joins a subscribed voice channel
	VOICE_STATE_UPDATE      DiscordEvent = "VOICE_STATE_UPDATE"      // sent when a user's voice state changes in a subscribed voice channel (mute, volume, etc.)
	VOICE_STATE_DELETE      DiscordEvent = "VOICE_STATE_DELETE"      // sent when a user parts a subscribed voice channel
	VOICE_SETTINGS_UPDATE   DiscordEvent = "VOICE_SETTINGS_UPDATE"   // sent when the client's voice settings update
	VOICE_CONNECTION_STATUS DiscordEvent = "VOICE_CONNECTION_STATUS" // sent when the client's voice connection status changes
	SPEAKING_START          DiscordEvent = "SPEAKING_START"          // sent when a user in a subscribed voice channel speaks
	SPEAKING_STOP           DiscordEvent = "SPEAKING_STOP"           // sent when a user in a subscribed voice channel stops speaking
	MESSAGE_CREATE          DiscordEvent = "MESSAGE_CREATE"          // sent when a message is created in a subscribed text channel
	MESSAGE_UPDATE          DiscordEvent = "MESSAGE_UPDATE"          // sent when a message is updated in a subscribed text channel
	MESSAGE_DELETE          DiscordEvent = "MESSAGE_DELETE"          // sent when a message is deleted in a subscribed text channel
	NOTIFICATION_CREATE     DiscordEvent = "NOTIFICATION_CREATE"     // sent when the client receives a notification (mention or new message in eligible channels)
	ACTIVITY_JOIN           DiscordEvent = "ACTIVITY_JOIN"           // sent when the user clicks a Rich Presence join invite in chat to join a game
	ACTIVITY_SPECTATE       DiscordEvent = "ACTIVITY_SPECTATE"       // sent when the user clicks a Rich Presence spectate invite in chat to spectate a game
	ACTIVITY_JOIN_REQUEST   DiscordEvent = "ACTIVITY_JOIN_REQUEST"   // sent when the user receives a Rich Presence Ask to Join request
)
