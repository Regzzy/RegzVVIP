const fetch = require('node-fetch');
const moment = require('moment');
const colour = require('colour');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const dupe = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {
  console.log(` 
/ l! [Recode V2]
/ By : > Regzzy#0001 | Instagram : @RegaXiPetani < - Credit : @dkmpostor & @Eskey`.bold.blue);
  console.log('');
  console.log(`/ VVIP Script`.bold.blue);
  console.log(`/ SAFE VIP SC 088298841582!`.bold.blue);
  console.log(`/ MADED BY REGZZY!`.bold.blue)
  console.log('');
console.log(`/  Have problem? Report to my discord > Regzzy#0001 <`.bold.blue);
console.log('');

  const auth = rs.question('/ Code Auth Luhe 😜 : '.bold.red);
  console.log('');

  while (true) {
const result = await dupe(auth);

    if (!result) {
      console.log(`/ wrong auth code detected, if this was a spam then your auth is expired! (do CTRL + C to close script!)`.bold.red);
      console.log('');

    }
   else if (result.includes('User')) {

const data = JSON.parse(result);
const Nama Lu = data.User.Username;
const Negara = data.User.Country;
const Trophy = data.User.SkillRating;
const Crown = data.User.Crowns;

console.log(`\r / Date : ${moment().format('YYYY MMMM Do')} | Time : ${moment().format('HH:mm:ss')}`.grey);
console.log(`\r / In-Game Name : ${username}`.rainbow);
console.log(`\r / Country : ${country}`.grey);
console.log(`\r / Trophy : ${trophy}`.rainbow);
console.log(`\r / Crown : ${crown}`.rainbow);

      console.log('');
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(4725);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      console.log('');
      await sleep(500);
      console.log(`/ some trophy may not be duped into the account.`.grey);
      console.log(`/ 10 seconds delay starting...`.grey);
      await sleep(10325);
      console.log(`/ delay finished.`.grey);
      await sleep(500);
      console.log('');

    }
    
  else if (result == 'BANNED') {
      console.log(`Your Account is Banned!😜😜`.bold.red);
     break;
    }
   }
  
})();
