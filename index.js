const edgePaths = require("edge-paths");
const xlsx = require('xlsx');
const EDGE_PATH = edgePaths.getEdgePath();
const puppeteer = require('puppeteer-core');




// let n = 1;
// (async () => {

//   // Extract partners on the page, recursively check the next page in the URL pattern
//   const extractPartners = async url => {
    
//     // Scrape the data we want
//     const page = await browser.newPage();
//     await page.goto(url);
//     await page.waitForTimeout(3500)
//     console.log('Cкан: ' + url);
//     const partnersOnPage = await page.evaluate(() =>
//       Array.from(document.querySelectorAll(".market_listing_row")).map(searchResultsRows => ( {
//         title: searchResultsRows.querySelector(".market_listing_item_name").innerText,
//         price: searchResultsRows.querySelector(".normal_price").innerText
//       }))
//     );
//     await page.close();

//     // Recursively scrape the next page
//     if (partnersOnPage.length < 1 || n > 3) {
//       // Terminate if no partners exist
//       return partnersOnPage
//     } else {
//       // Go fetch the next page ?page=X+1
//     //   const nextPageNumber = parseInt(url.match(/p(\d+)$_price_asc/)[1], 10) + 1;
//     n++;
//       const nextUrl = "https://steamcommunity.com/market/search?q=&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=tag_weapon_ak47&appid=730#p" + n + "_price_asc";
//     //   await page.waitForTimeout(5000);
//       return partnersOnPage.concat(await extractPartners(nextUrl))
//     }
//   };

//   const browser = await puppeteer.launch({
//                 executablePath: EDGE_PATH,
//                 // headless: false
//             });
//   const firstUrl =
//     "https://steamcommunity.com/market/search?q=&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=tag_weapon_ak47&appid=730#p1_price_asc";
//   const partners = await extractPartners(firstUrl);
  
//   // Todo: Update database with partners
//   console.log(partners);
//   const aoaLinks = partners.map(l => [l]);
//   let wb = xlsx.utils.book_new();
//   let ws = xlsx.utils.aoa_to_sheet(aoaLinks);
//   xlsx.utils.book_append_sheet(wb,ws)
//   xlsx.writeFile(wb, 'prices.xlsx');

//   let names = [];
//   for(let i = 0; i<partners.length; i++){
//       names = partners[i]['title'];
//       console.log(names)
//   }
//   let aoanames = names.map(l => [l]);

//   await browser.close();
// })();





partners = [
    {
      title: 'AK-47 | Safari Mesh (Field-Tested)',
      price: 'Starting at:\n$0.21 USD'
    },
    {
      title: 'AK-47 | Safari Mesh (Battle-Scarred)',
      price: 'Starting at:\n$0.21 USD'
    },
    {
      title: 'AK-47 | Safari Mesh (Well-Worn)',
      price: 'Starting at:\n$0.30 USD'
    },
    {
      title: 'AK-47 | Uncharted (Battle-Scarred)',
      price: 'Starting at:\n$0.57 USD'
    },
    {
      title: 'AK-47 | Uncharted (Field-Tested)',
      price: 'Starting at:\n$0.57 USD'
    },
    {
      title: 'AK-47 | Safari Mesh (Minimal Wear)',
      price: 'Starting at:\n$0.62 USD'
    },
    {
      title: 'AK-47 | Uncharted (Minimal Wear)',
      price: 'Starting at:\n$0.83 USD'
    },
    {
      title: 'AK-47 | Uncharted (Well-Worn)',
      price: 'Starting at:\n$1.19 USD'
    },
    {
      title: 'AK-47 | Uncharted (Factory New)',
      price: 'Starting at:\n$1.55 USD'
    },
    {
      title: 'AK-47 | Elite Build (Battle-Scarred)',
      price: 'Starting at:\n$1.58 USD'
    }
  ]

  let names = [];
  for(let i = 0; i<partners.length; i++){
      names.push(partners[i]['title']);
  }
  let aoanames = names.map(l => [l]);
console.log(aoanames);

  let wb = xlsx.utils.book_new();
  let rd =  xlsx.readFile('prices.xlsx');
  var ws = xlsx.utils.aoa_to_sheet([ "Sheet1"]);

/* Write data starting at A2 */
xlsx.utils.sheet_add_aoa(ws, [[1,2], [2,3], [3,4]], {origin: "B1"});
  xlsx.utils.book_append_sheet(wb,ws)
//   xlsx.writeFile(wb, 'prices.xlsx');
