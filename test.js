const options = {
  method: 'POST',

  headers: {
    Accept: 'application/json',

    'X-MailerLite-ApiDocs': 'true',

    'Content-Type': 'application/json',

    'X-MailerLite-ApiKey':
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiY2U4YTY5NWUyMDAzMzNiZTQ3OGEyOWFmYjcyMDJlZGM2NzMxYmQ4M2ZmMWFkMjg5NTliODJlMzI2OGM2ZWRhZjU5OGUwMGU4ZTJmM2Y1ZGIiLCJpYXQiOjE2NTA4MzE2NzAuNjk3MzYzLCJuYmYiOjE2NTA4MzE2NzAuNjk3MzY3LCJleHAiOjQ4MDY1MDUyNzAuNjkyMDAxLCJzdWIiOiI0NzA5MCIsInNjb3BlcyI6W119.XRLzQwf1te1aM1xd177Pq5LWDvHxdzsV836RYoZklvq5s6eLrLzTp3Cp4C44_7k2UR_YlPdLUX2Kc3AJLmGo6C_bomE8dl1pAurRdHE8a-rwuUGJ1pJfcIfltQIoq9FX3TM1W9tI_27wiVo1g_Dd6MaLwlENOoMb-dNsAwGy_Mwo2POKT20pmNT_jHC2BQHOhmA-KHF6t-hCxlmMPnLeTVAyzcoKGaYzH-LYDhtboME5EGBQHNSxezgQzZXAHemyXalmqgqjENRGJVrA-ujfH9oIEWgY9qvgnJAq13iIRPMkM5ca4KXV4_JkirNYh3D4AkAsuAgEHQ7VUbSbUdoUh6Q2FWP8RxIEbk7q7T2aCD1jzK_Z2SQ85TlFOz-SpLEGOTU4Jjre4B9JrcQQMlY2330ExhcmiVQJIg3rnzLIua4fFKyvYw7nQZy07IufwuZe1L-AHiS2ocKFHoMY-svkgtWYWW48m6euwdzjRu2sOxG1VUAnGexCJT9XwBZK1ENAz9bWuAYdhjKfaE5NeUtEATw_3RqYGPGRDsHuPHwYSUZo5xGocXED1ZTIKgtTN73Sh1H2J8jDWGbGl7BABctTHnVxiajtvP0FBkEFPpI0Sy-sXCPtWgfomdMSM0rCXtX0DF9FGX8Y1RuO7itdD8u-FlFtg-XZK7xre8q5SOTQADE',
  },

  body: JSON.stringify({
    email: 'test@gmail.com',

    resubscribe: true,

    autoresponders: true,

    type: 'null',

    group_name: 'melvynx.com',

    name: 'Tester',
  }),
};

fetch(
  'https://api.mailerlite.com/api/v2/groups/group_name/subscribers',
  options
)
  .then((response) => response.json())

  .then((response) => console.log(response))

  .catch((err) => console.error(err));


  curl -X POST https://api.mailerlite.com/api/v2/groups/melvynx.com/subscribers -d '{"group_name": "melvynx.com", "email":"demo@mailerlite.com", "name": "John", "fields": {"company": "MailerLite"}}' -H "Content-Type: application/json" -H "X-MailerLite-ApiKey: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiY2U4YTY5NWUyMDAzMzNiZTQ3OGEyOWFmYjcyMDJlZGM2NzMxYmQ4M2ZmMWFkMjg5NTliODJlMzI2OGM2ZWRhZjU5OGUwMGU4ZTJmM2Y1ZGIiLCJpYXQiOjE2NTA4MzE2NzAuNjk3MzYzLCJuYmYiOjE2NTA4MzE2NzAuNjk3MzY3LCJleHAiOjQ4MDY1MDUyNzAuNjkyMDAxLCJzdWIiOiI0NzA5MCIsInNjb3BlcyI6W119.XRLzQwf1te1aM1xd177Pq5LWDvHxdzsV836RYoZklvq5s6eLrLzTp3Cp4C44_7k2UR_YlPdLUX2Kc3AJLmGo6C_bomE8dl1pAurRdHE8a-rwuUGJ1pJfcIfltQIoq9FX3TM1W9tI_27wiVo1g_Dd6MaLwlENOoMb-dNsAwGy_Mwo2POKT20pmNT_jHC2BQHOhmA-KHF6t-hCxlmMPnLeTVAyzcoKGaYzH-LYDhtboME5EGBQHNSxezgQzZXAHemyXalmqgqjENRGJVrA-ujfH9oIEWgY9qvgnJAq13iIRPMkM5ca4KXV4_JkirNYh3D4AkAsuAgEHQ7VUbSbUdoUh6Q2FWP8RxIEbk7q7T2aCD1jzK_Z2SQ85TlFOz-SpLEGOTU4Jjre4B9JrcQQMlY2330ExhcmiVQJIg3rnzLIua4fFKyvYw7nQZy07IufwuZe1L-AHiS2ocKFHoMY-svkgtWYWW48m6euwdzjRu2sOxG1VUAnGexCJT9XwBZK1ENAz9bWuAYdhjKfaE5NeUtEATw_3RqYGPGRDsHuPHwYSUZo5xGocXED1ZTIKgtTN73Sh1H2J8jDWGbGl7BABctTHnVxiajtvP0FBkEFPpI0Sy-sXCPtWgfomdMSM0rCXtX0DF9FGX8Y1RuO7itdD8u-FlFtg-XZK7xre8q5SOTQADE"