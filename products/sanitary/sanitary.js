const products = [
  // ONE PIECE CLOSET (Pages 6-10)
  { id: 1, name: "AVIATOR", code: "1002", category: "ONE PIECE CLOSET", images: ["1002.jpg"], price: 14225, offerPrice: 12932, badge: "new", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 2, name: "VOLVO", code: "1003", category: "ONE PIECE CLOSET", images: ["1003.jpg"], price: 14960, offerPrice: 13600, badge: "new", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 3, name: "SPANIA", code: "1005", category: "ONE PIECE CLOSET", images: ["1005.jpg"], price: 12144, offerPrice: 11040, badge: "sale", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 4, name: "KONA", code: "1006", category: "ONE PIECE CLOSET", images: ["1006.jpg"], price: 14080, offerPrice: 12800, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 5, name: "RAPID", code: "1007", category: "ONE PIECE CLOSET", images: ["1007.jpg"], price: 14225, offerPrice: 12932, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 6, name: "CASINO", code: "1008", category: "ONE PIECE CLOSET", images: ["1008.jpg"], price: 14080, offerPrice: 12800, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 7, name: "MILANO", code: "1009", category: "ONE PIECE CLOSET", images: ["1009.jpg"], price: 14916, offerPrice: 13560, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 8, name: "ZORO", code: "1010", category: "ONE PIECE CLOSET", images: ["1010.jpg"], price: 13530, offerPrice: 12300, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 9, name: "REVO", code: "1011", category: "ONE PIECE CLOSET", images: ["1011.jpg"], price: 14225, offerPrice: 12932, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 10, name: "FORBUS", code: "1012", category: "ONE PIECE CLOSET", images: ["1012.jpg"], price: 18040, offerPrice: 16400, badge: "trending", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 11, name: "NEXUS", code: "1013", category: "ONE PIECE CLOSET", images: ["1013.jpg"], price: 18040, offerPrice: 16400, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 12, name: "NEON", code: "1014", category: "ONE PIECE CLOSET", images: ["1014.jpg"], price: 18040, offerPrice: 16400, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 13, name: "LEGEND", code: "1015", category: "ONE PIECE CLOSET", images: ["1015.jpg"], price: 12980, offerPrice: 11800, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 14, name: "FLOTUS", code: "1016", category: "ONE PIECE CLOSET", images: ["1016.jpg"], price: 12980, offerPrice: 11800, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 15, name: "ONE WAY", code: "1017", category: "ONE PIECE CLOSET", images: ["1017.jpg"], price: 23100, offerPrice: 21000, badge: "premium", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 16, name: "CORUS", code: "1018", category: "ONE PIECE CLOSET", images: ["1018.jpg"], price: 26950, offerPrice: 24500, badge: "premium", warranty: "10 years", color: "Star White", material: "Ceramic" },
  { id: 17, name: "PENTA", code: "1019", category: "ONE PIECE CLOSET", images: ["1019.jpg"], price: 14225, offerPrice: 12932, badge: "", warranty: "10 years", color: "Star White", material: "Ceramic" },

  // WALL HUNG CLOSET (Pages 12-14)
  { id: 18, name: "TOYO", code: "2001", category: "WALL HUNG CLOSET", images: ["2001.jpg"], price: 12760, offerPrice: 11600, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 19, name: "SPIDER", code: "2002", category: "WALL HUNG CLOSET", images: ["2002.jpg"], price: 12980, offerPrice: 11800, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 20, name: "CRYSTAL", code: "2003", category: "WALL HUNG CLOSET", images: ["2003.jpg"], price: 12980, offerPrice: 11800, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 21, name: "APOLLO", code: "2004", category: "WALL HUNG CLOSET", images: ["2004.jpg"], price: 6270, offerPrice: 5700, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 22, name: "RUBIC", code: "2005", category: "WALL HUNG CLOSET", images: ["2005.jpg"], price: 5940, offerPrice: 5400, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 23, name: "ORBIT", code: "2006", category: "WALL HUNG CLOSET", images: ["2006.jpg"], price: 7986, offerPrice: 7260, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 24, name: "ARMANI", code: "2007", category: "WALL HUNG CLOSET", images: ["2007.jpg"], price: 5940, offerPrice: 5400, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 25, name: "DELTA", code: "2010", category: "WALL HUNG CLOSET", images: ["2010.jpg"], price: 7986, offerPrice: 7260, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 26, name: "PRADO", code: "2012", category: "WALL HUNG CLOSET", images: ["2012.jpg"], price: 10450, offerPrice: 9500, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 27, name: "ICONIC", code: "2013", category: "WALL HUNG CLOSET", images: ["2013.jpg"], price: 16280, offerPrice: 14800, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 28, name: "HUMBLE", code: "2014", category: "WALL HUNG CLOSET", images: ["2014.jpg"], price: 7986, offerPrice: 7260, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 29, name: "ELITE", code: "2015", category: "WALL HUNG CLOSET", images: ["2015.jpg"], price: 17160, offerPrice: 15600, badge: "premium", warranty: "10 years", color: "White", material: "Ceramic" },

  // TABLE TOP BASIN (Pages 15-18)
  { id: 30, name: "TOPIC", code: "3001", category: "TABLE TOP BASIN", images: ["3001.jpg"], price: 3467, offerPrice: 3152, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 31, name: "VITARA", code: "3002", category: "TABLE TOP BASIN", images: ["3002.jpg"], price: 10780, offerPrice: 9800, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 32, name: "SPIRIT", code: "3003", category: "TABLE TOP BASIN", images: ["3003.jpg"], price: 3467, offerPrice: 3152, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 33, name: "VIRGO", code: "3004", category: "TABLE TOP BASIN", images: ["3004.jpg"], price: 8250, offerPrice: 7500, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 34, name: "ROMA", code: "3005", category: "TABLE TOP BASIN", images: ["3005.jpg"], price: 2772, offerPrice: 2520, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 35, name: "TULI", code: "3006", category: "TABLE TOP BASIN", images: ["3006.jpg"], price: 3850, offerPrice: 3500, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 36, name: "CANDY", code: "3007", category: "TABLE TOP BASIN", images: ["3007.jpg"], price: 5940, offerPrice: 5400, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 37, name: "ORIS", code: "3008", category: "TABLE TOP BASIN", images: ["3008.jpg"], price: 6050, offerPrice: 5500, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 38, name: "SPENZO", code: "3009", category: "TABLE TOP BASIN", images: ["3009.jpg"], price: 7150, offerPrice: 6500, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 39, name: "NEXA", code: "3010", category: "TABLE TOP BASIN", images: ["3010.jpg"], price: 6050, offerPrice: 5500, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 40, name: "OMEGA", code: "3011", category: "TABLE TOP BASIN", images: ["3011.jpg"], price: 2772, offerPrice: 2520, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 41, name: "KOSTA", code: "3012", category: "TABLE TOP BASIN", images: ["3012.jpg"], price: 3850, offerPrice: 3500, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 42, name: "SYNOVA", code: "3013", category: "TABLE TOP BASIN", images: ["3013.jpg"], price: 4158, offerPrice: 3780, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 43, name: "CANTO", code: "3014", category: "TABLE TOP BASIN", images: ["3014.jpg"], price: 4158, offerPrice: 3780, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 44, name: "CONCART", code: "3016", category: "TABLE TOP BASIN", images: ["3016.jpg"], price: 2640, offerPrice: 2400, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 45, name: "DIAMOND", code: "3017", category: "TABLE TOP BASIN", images: ["3017.jpg"], price: 3137, offerPrice: 2852, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 46, name: "NEPTUNE", code: "3018", category: "TABLE TOP BASIN", images: ["3018.jpg"], price: 5940, offerPrice: 5400, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 47, name: "SLEEK", code: "3019", category: "TABLE TOP BASIN", images: ["3019.jpg"], price: 1487, offerPrice: 1352, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 48, name: "LUNAR", code: "3020", category: "TABLE TOP BASIN", images: ["3020.jpg"], price: 4158, offerPrice: 3780, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 49, name: "ASTON", code: "3021", category: "TABLE TOP BASIN", images: ["3021.jpg"], price: 2640, offerPrice: 2400, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 50, name: "MADRID", code: "3022", category: "TABLE TOP BASIN", images: ["3022.jpg"], price: 4092, offerPrice: 3720, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 51, name: "LOTUS", code: "3023", category: "TABLE TOP BASIN", images: ["3023.jpg"], price: 2200, offerPrice: 2000, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 52, name: "BERLIN", code: "3024", category: "TABLE TOP BASIN", images: ["3024.jpg"], price: 2508, offerPrice: 2280, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 53, name: "ELENA", code: "3025", category: "TABLE TOP BASIN", images: ["3025.jpg"], price: 5346, offerPrice: 4860, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 54, name: "SAVVY", code: "3026", category: "TABLE TOP BASIN", images: ["3026.jpg"], price: 3797, offerPrice: 3452, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 55, name: "ALEXA", code: "3027", category: "TABLE TOP BASIN", images: ["3027.jpg"], price: 3300, offerPrice: 3000, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 56, name: "MAJESTIC", code: "3028", category: "TABLE TOP BASIN", images: ["3028.jpg"], price: 10032, offerPrice: 9120, badge: "premium", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 57, name: "BENTLEY", code: "3029", category: "TABLE TOP BASIN", images: ["3029.jpg"], price: 4686, offerPrice: 4260, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 58, name: "BREEZY", code: "3030", category: "TABLE TOP BASIN", images: ["3030.jpg"], price: 4686, offerPrice: 4260, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 59, name: "DAZZLING", code: "3031", category: "TABLE TOP BASIN", images: ["3031.jpg"], price: 5940, offerPrice: 5400, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 60, name: "NAYARA", code: "3032", category: "TABLE TOP BASIN", images: ["3032.jpg"], price: 8360, offerPrice: 7600, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 61, name: "ACME", code: "3033", category: "TABLE TOP BASIN", images: ["3033.jpg"], price: 9350, offerPrice: 8500, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },

  // WALL MOUNTED BASIN (Pages 19-21)
  { id: 62, name: "KIVI", code: "4001", category: "WALL MOUNTED BASIN", images: ["4001.jpg"], price: 1386, offerPrice: 1260, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 63, name: "OPEL", code: "4002", category: "WALL MOUNTED BASIN", images: ["4002.jpg"], price: 1386, offerPrice: 1260, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 64, name: "DOLI", code: "4003", category: "WALL MOUNTED BASIN", images: ["4003.jpg"], price: 1870, offerPrice: 1700, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 65, name: "SOFIA", code: "4004", category: "WALL MOUNTED BASIN", images: ["4004.jpg"], price: 1870, offerPrice: 1700, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 66, name: "CORNER", code: "4005", category: "WALL MOUNTED BASIN", images: ["4005.jpg"], price: 1870, offerPrice: 1700, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 67, name: "SMART CORNER", code: "4006", category: "WALL MOUNTED BASIN", images: ["4006.jpg"], price: 1870, offerPrice: 1700, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 68, name: "MATIZ", code: "4007", category: "WALL MOUNTED BASIN", images: ["4007.jpg"], price: 1386, offerPrice: 1260, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 69, name: "NERO", code: "4008", category: "WALL MOUNTED BASIN", images: ["4008.jpg"], price: 1870, offerPrice: 1700, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 70, name: "GRENIC", code: "4009", category: "WALL MOUNTED BASIN", images: ["4009.jpg"], price: 1386, offerPrice: 1260, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 71, name: "SPA", code: "4010", category: "WALL MOUNTED BASIN", images: ["4010.jpg"], price: 1157, offerPrice: 1052, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 72, name: "JULLY", code: "4011", category: "WALL MOUNTED BASIN", images: ["4011.jpg"], price: 1236, offerPrice: 1124, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 73, name: "SANDY", code: "4012", category: "WALL MOUNTED BASIN", images: ["4012.jpg"], price: 1236, offerPrice: 1124, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 74, name: "NOVA", code: "4013", category: "WALL MOUNTED BASIN", images: ["4013.jpg"], price: 1386, offerPrice: 1260, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },

  // FULL PEDESTAL BASIN (Page 22)
  { id: 75, name: "FLORA", code: "5001", category: "FULL PEDESTAL BASIN", images: ["5001.jpg"], price: 4730, offerPrice: 4300, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 76, name: "MOKA", code: "5002", category: "FULL PEDESTAL BASIN", images: ["5002.jpg"], price: 4180, offerPrice: 3800, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 77, name: "FANCY", code: "5003", category: "FULL PEDESTAL BASIN", images: ["5003.jpg"], price: 4532, offerPrice: 4120, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 78, name: "TOGO", code: "5004", category: "FULL PEDESTAL BASIN", images: ["5004.jpg"], price: 4862, offerPrice: 4420, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 79, name: "ZARA", code: "5005", category: "FULL PEDESTAL BASIN", images: ["5005.jpg"], price: 4840, offerPrice: 4400, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 80, name: "EVITA", code: "5006", category: "FULL PEDESTAL BASIN", images: ["5006.jpg"], price: 5060, offerPrice: 4600, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 81, name: "CORNETO", code: "5007", category: "FULL PEDESTAL BASIN", images: ["5007.jpg"], price: 4730, offerPrice: 4300, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 82, name: "TESLA", code: "5009", category: "FULL PEDESTAL BASIN", images: ["5009.jpg"], price: 4510, offerPrice: 4100, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 83, name: "TITANIC", code: "5011", category: "FULL PEDESTAL BASIN", images: ["5011.jpg"], price: 7370, offerPrice: 6700, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },

  // ONE PIECE BASIN (Page 23)
  { id: 84, name: "AMIGO", code: "7001", category: "ONE PIECE BASIN", images: ["7001.jpg"], price: 15400, offerPrice: 14000, badge: "premium", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 85, name: "VINTAGE", code: "7002", category: "ONE PIECE BASIN", images: ["7002.jpg"], price: 8514, offerPrice: 7740, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 86, name: "JUPITER", code: "7003", category: "ONE PIECE BASIN", images: ["7003.jpg"], price: 8681, offerPrice: 7892, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },

  // FLOOR MOUNTED CLOSET (Page 25)
  { id: 87, name: "COSMO", code: "2008", category: "FLOOR MOUNTED CLOSET", images: ["2008.jpg"], price: 8681, offerPrice: 7892, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 88, name: "ASPIRE", code: "2009", category: "FLOOR MOUNTED CLOSET", images: ["2009.jpg"], price: 8681, offerPrice: 7892, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 89, name: "UNIQUE", code: "2011", category: "FLOOR MOUNTED CLOSET", images: ["2011.jpg"], price: 6833, offerPrice: 6212, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 90, name: "WILMAR", code: "2016", category: "FLOOR MOUNTED CLOSET", images: ["2016.jpg"], price: 10362, offerPrice: 9420, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },

  // EWC CLOSET (Page 26)
  { id: 91, name: "EWC - S", code: "EWC-S", category: "EWC CLOSET", images: ["ewc-s.jpg"], price: 5621, offerPrice: 5110, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 92, name: "EWC - P", code: "EWC-P", category: "EWC CLOSET", images: ["ewc-p.jpg"], price: 5621, offerPrice: 5110, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 93, name: "ANGLO - S", code: "ANGLO-S", category: "EWC CLOSET", images: ["anglo-s.jpg"], price: 3810, offerPrice: 3464, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 94, name: "ANGLO - P", code: "ANGLO-P", category: "EWC CLOSET", images: ["anglo-p.jpg"], price: 9460, offerPrice: 8600, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },

  // URINAL & PAN (Page 27)
  { id: 95, name: "EVA URINAL", code: "6001", category: "URINAL", images: ["6001.jpg"], price: 8580, offerPrice: 7800, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 96, name: "SPARK URINAL", code: "6002", category: "URINAL", images: ["6002.jpg"], price: 8580, offerPrice: 7800, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 97, name: "COMFORT URINAL", code: "6003", category: "URINAL", images: ["6003.jpg"], price: 3080, offerPrice: 2800, badge: "budget", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 98, name: "LADIES URINAL", code: "6004", category: "URINAL", images: ["6004.jpg"], price: 4180, offerPrice: 3800, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 99, name: "TWISTER URINAL", code: "6005", category: "URINAL", images: ["6005.jpg"], price: 11550, offerPrice: 10500, badge: "premium", warranty: "10 years", color: "White", material: "Ceramic" },

  // BLACK COLLECTION (Pages 31-32)
  { id: 100, name: "AVIATOR BLACK", code: "1002-BLACK", category: "BLACK COLLECTION", images: ["1002.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Black Glossy", material: "Ceramic" },
  { id: 101, name: "VOLVO BLACK", code: "1003-BLACK", category: "BLACK COLLECTION", images: ["1003.jpg"], price: 26400, offerPrice: 24000, badge: "premium", warranty: "10 years", color: "Black Glossy", material: "Ceramic" },
  { id: 102, name: "FORBUS BLACK", code: "1012-BLACK", category: "BLACK COLLECTION", images: ["1012.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Black Glossy", material: "Ceramic" },
  { id: 103, name: "NEON BLACK", code: "1014-BLACK", category: "BLACK COLLECTION", images: ["1014.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Black Glossy", material: "Ceramic" },
  { id: 104, name: "TOYO BLACK", code: "2001-BLACK", category: "BLACK COLLECTION", images: ["2001.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Black Glossy", material: "Ceramic" },
  { id: 105, name: "SPIDER BLACK", code: "2002-BLACK", category: "BLACK COLLECTION", images: ["2002.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Black Glossy", material: "Ceramic" },
  { id: 106, name: "DELTA BLACK", code: "2010-BLACK", category: "BLACK COLLECTION", images: ["2010.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Black Glossy", material: "Ceramic" },
  { id: 107, name: "ELITE BLACK", code: "2015-BLACK", category: "BLACK COLLECTION", images: ["2015.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Black Glossy", material: "Ceramic" },

  // GREEN COLLECTION (Pages 33-34)
  { id: 108, name: "VOLVO GREEN", code: "1003-GREEN", category: "GREEN COLLECTION", images: ["1003.jpg"], price: 26400, offerPrice: 24000, badge: "premium", warranty: "10 years", color: "Green Glossy", material: "Ceramic" },
  { id: 109, name: "FORBUS GREEN", code: "1012-GREEN", category: "GREEN COLLECTION", images: ["1012.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Green Glossy", material: "Ceramic" },
  { id: 110, name: "NEON GREEN", code: "1014-GREEN", category: "GREEN COLLECTION", images: ["1014.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Green Glossy", material: "Ceramic" },
  { id: 111, name: "SPIDER GREEN", code: "2002-GREEN", category: "GREEN COLLECTION", images: ["2002.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Green Glossy", material: "Ceramic" },
  { id: 112, name: "DELTA GREEN", code: "2010-GREEN", category: "GREEN COLLECTION", images: ["2010.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Green Glossy", material: "Ceramic" },
  { id: 113, name: "ELITE GREEN", code: "2015-GREEN", category: "GREEN COLLECTION", images: ["2015.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Green Glossy", material: "Ceramic" },

  // BLUE COLLECTION (Pages 35-36)
  { id: 114, name: "VOLVO BLUE", code: "1003-BLUE", category: "BLUE COLLECTION", images: ["1003.jpg"], price: 26400, offerPrice: 24000, badge: "premium", warranty: "10 years", color: "Blue Glossy", material: "Ceramic" },
  { id: 115, name: "FORBUS BLUE", code: "1012-BLUE", category: "BLUE COLLECTION", images: ["1012.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Blue Glossy", material: "Ceramic" },
  { id: 116, name: "NEON BLUE", code: "1014-BLUE", category: "BLUE COLLECTION", images: ["1014.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Blue Glossy", material: "Ceramic" },
  { id: 117, name: "SPIDER BLUE", code: "2002-BLUE", category: "BLUE COLLECTION", images: ["2002.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Blue Glossy", material: "Ceramic" },
  { id: 118, name: "DELTA BLUE", code: "2010-BLUE", category: "BLUE COLLECTION", images: ["2010.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Blue Glossy", material: "Ceramic" },
  { id: 119, name: "ELITE BLUE", code: "2015-BLUE", category: "BLUE COLLECTION", images: ["2015.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Blue Glossy", material: "Ceramic" },

  // GREY COLLECTION (Pages 37-38)
  { id: 120, name: "VOLVO GREY", code: "1003-GREY", category: "GREY COLLECTION", images: ["1003.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Grey Glossy", material: "Ceramic" },
  { id: 121, name: "FORBUS GREY", code: "1012-GREY", category: "GREY COLLECTION", images: ["1012.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Grey Glossy", material: "Ceramic" },
  { id: 122, name: "NEON GREY", code: "1014-GREY", category: "GREY COLLECTION", images: ["1014.jpg"], price: 21450, offerPrice: 19500, badge: "premium", warranty: "10 years", color: "Grey Glossy", material: "Ceramic" },
  { id: 123, name: "SPIDER GREY", code: "2002-GREY", category: "GREY COLLECTION", images: ["2002.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Grey Glossy", material: "Ceramic" },
  { id: 124, name: "DELTA GREY", code: "2010-GREY", category: "GREY COLLECTION", images: ["2010.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Grey Glossy", material: "Ceramic" },
  { id: 125, name: "ELITE GREY", code: "2015-GREY", category: "GREY COLLECTION", images: ["2015.jpg"], price: 16500, offerPrice: 15000, badge: "premium", warranty: "10 years", color: "Grey Glossy", material: "Ceramic" },

  // HALF PEDESTAL BASIN (Page 24)
  { id: 126, name: "FLORA HALF PEDESTAL", code: "5001-HALF", category: "HALF PEDESTAL BASIN", images: ["5001.jpg"], price: 4422, offerPrice: 4020, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 127, name: "MOKA HALF PEDESTAL", code: "5002-HALF", category: "HALF PEDESTAL BASIN", images: ["5002.jpg"], price: 3762, offerPrice: 3420, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },

  // UNDER COUNTER WASH BASIN (Page 24)
  { id: 128, name: "WONDER", code: "9001", category: "UNDER COUNTER WASH BASIN", images: ["9001.jpg"], price: 7040, offerPrice: 6400, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 129, name: "CLIPER", code: "9002", category: "UNDER COUNTER WASH BASIN", images: ["9002.jpg"], price: 7260, offerPrice: 6600, badge: "", warranty: "10 years", color: "White", material: "Ceramic" },

  // THUNDER COLLECTION (Page 29)
  { id: 130, name: "THUNDER ONE PIECE", code: "1012-THUNDER", category: "THUNDER COLLECTION", images: ["1012-thunder.jpg"], price: 26400, offerPrice: 24000, badge: "premium", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 131, name: "THUNDER TABLE TOP", code: "3004-THUNDER", category: "THUNDER COLLECTION", images: ["3004-thunder.jpg"], price: 7260, offerPrice: 6600, badge: "premium", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 132, name: "THUNDER ONE PIECE BASIN", code: "8004-THUNDER", category: "THUNDER COLLECTION", images: ["8004-thunder.jpg"], price: 10120, offerPrice: 9200, badge: "premium", warranty: "10 years", color: "White", material: "Ceramic" },
  { id: 133, name: "THUNDER AMIGO", code: "7001-THUNDER", category: "THUNDER COLLECTION", images: ["7001-thunder.jpg"], price: 13200, offerPrice: 12000, badge: "premium", warranty: "10 years", color: "White", material: "Ceramic" },

  // MATT COLLECTION (Page 30)
  { id: 134, name: "TULI WHITE MATT", code: "3006-WHITE-MATT", category: "MATT COLLECTION", images: ["3006.jpg"], price: 4620, offerPrice: 4200, badge: "", warranty: "10 years", color: "White Matt", material: "Ceramic" },
  { id: 135, name: "TULI BLACK MATT", code: "3006-BLACK-MATT", category: "MATT COLLECTION", images: ["3006-2.jpg"], price: 6402, offerPrice: 5820, badge: "", warranty: "10 years", color: "Black Matt", material: "Ceramic" },
  { id: 136, name: "ASTON WHITE MATT", code: "3021-WHITE-MATT", category: "MATT COLLECTION", images: ["3021.jpg"], price: 4127, offerPrice: 3752, badge: "", warranty: "10 years", color: "White Matt", material: "Ceramic" },
  { id: 137, name: "ASTON BLACK MATT", code: "3021-BLACK-MATT", category: "MATT COLLECTION", images: ["3021-2.jpg"], price: 5940, offerPrice: 5400, badge: "", warranty: "10 years", color: "Black Matt", material: "Ceramic" }
];