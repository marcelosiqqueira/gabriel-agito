
const { google } = require('googleapis');
const { OAuth2 } = google.auth;


// tentando usar direto em variavel sem usar o credentials (ta desatualizado tb)
const clientId = '871579058932-i5jt1bb76404724il1671h2tfae0o43v.apps.googleusercontent.com';
const clientSecret = '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';
const redirectUri = 'http://localhost';
const scope = 'https://www.googleapis.com/auth/photoslibrary.readonly';
// const code = '4%2F0AWtgzh4XGvidI2e5mLFRuG31Sx04x2ceav9VAL4-Ci6N_9zsb_OFuKgilPkOTRPoYbGk8g';

const oAuth2Client = new OAuth2(clientId, clientSecret, redirectUri);
const authorizeUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scope,
});

//ESSE CONSOLE RETORNA http://localhost/?code=4%2F0AWtgzh7QrrlKJyLauoBSAnx_Jwvd0fiSmqeAtxiVTDVMqlQYFVKUkDbl00NPidGBGpmE5A&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fphotoslibrary.readonly
// onde o code= é o código de autorização pra conseguir o acessToken, q usa pra fazer requisição da api, é até onde cheguei fazer funcionar

console.log('Por favor, visite esta URL para autorizar o aplicativo:', authorizeUrl);



// async function getAccessToken(code) {
//     const { tokens } = await oauth2Client.getToken(code);
//     return tokens.access_token;
//   }
  
  // Exemplo de como obter o código de autorização.
  // Este código deve ser obtido a partir de uma URL de autorização gerada pelo OAuth2Client.
  // A URL deve ser aberta em um navegador para que o usuário possa autorizar o acesso.
  // Uma vez que o usuário conceda a autorização, o código será retornado na query string da URL.
  // Por exemplo: http://localhost:3000/oauthcallback?code=<codigo>
//   const code = "seu-codigo-de-autorizacao";
  
//   const accessToken = await getAccessToken(code);
//   console.log(`Access token: ${accessToken}`);
  
  // Agora você pode usar o Access Token para fazer solicitações à API do Google Photos.
  // Por exemplo:
//   const photos = google.photoslibrary({ version: "v1", auth: accessToken });
//   const albums = await photos.albums.list();
//   console.log(albums);