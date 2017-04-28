export const homeDirPath = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
export const configDirName = '.misskey';
export const configFileName = 'web.json';
export const configDirectoryPath = `${homeDirPath}/${configDirName}`;
export const configPath = `${configDirectoryPath}/${configFileName}`;

export default loadConfig();

function loadConfig(): IConfig {
	try {
		return <IConfig>require(configPath);
	} catch (e) {
		return null;
	}
}

export interface IConfig {
	mongo: {
		uri: string;
		options: {
			user: string;
			pass: string;
		};
	};
	redis: {
		host: string;
		password: string;
	};
	port: {
		http: number;
		https: number;
		streaming: number;
	};
	https: {
		enable: boolean;
		keyPath: string;
		certPath: string;
	};
	apiPasskey: string;
	apiServerIp: string;
	apiServerPort: number;
	cookiePass: string;
	sessionKey: string;
	sessionSecret: string;
	googleRecaptchaSecret: string;
	publicConfig: {
		themeColor: string;
		domain: string;
		host: string;
		url: string;
		authorizeUrl: string;
		authorizeDomain: string;
		registerUrl: string;
		registerDomain: string;
		signinDomain: string;
		signinUrl: string;
		signoutDomain: string;
		signoutUrl: string;
		resourcesDomain: string;
		resourcesHost: string;
		resourcesUrl: string;
		aboutUrl: string;
		aboutDomain: string;
		searchDomain: string;
		searchUrl: string;
		helpUrl: string;
		helpDomain: string;
		talkDomain: string;
		talkUrl: string;
		apiHost: string;
		apiUrl: string;
		webApiDomain: string;
		webApiHost: string;
		webApiUrl: string;
		webStreamingUrl: string;
		shareDomain: string;
		shareUrl: string;
		widgetsDomain: string;
		widgetsUrl: string;
		googleRecaptchaSiteKey: string;
	};
}
