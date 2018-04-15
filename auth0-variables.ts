interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'V1s6wXuAS5zHVe616lnPh36L5r8uMLKK',
    domain: 'marvel-comics.auth0.com',
    callbackURL: 'http://localhost:3000/callback'
  };
  