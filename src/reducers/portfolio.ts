import { round } from "../util/common-functions";

export enum PortfolioActions {
  addStock = "PORTFOLIO:ADD_STOCK",
  removeStock = "PORTFOLIO:REMOVE_STOCK",
  updateStock = "PORTFOLIO:UPDATE_STOCK",
  equalWeight = "PORTFOLIO:SET_EQUAL_WEIGHT",
  redistribute = "PORTFOLIO:REDISTRIBUtE_WEIGHTS"
}


let initSate = [{
  "name": " Trinity Industries",
  weight: 0,
  "id": 1
},
{
  "name": " Valmont Industries",
  weight: 0,
  "id": 2
},
{
  "name": "1&1 Drillisch",
  weight: 0,
  "id": 3
},
{
  "name": "2U",
  weight: 0,
  "id": 4
},
{
  "name": "361 Degrees",
  weight: 0,
  "id": 5
},
{
  "name": "3D Systems",
  weight: 0,
  "id": 6
},
{
  "name": "3M Corp.",
  weight: 0,
  "id": 7
},
{
  "name": "4imprint",
  weight: 0,
  "id": 8
},
{
  "name": "58.com",
  weight: 0,
  "id": 9
},
{
  "name": "888 Holdings",
  weight: 0,
  "id": 10
},
{
  "name": "A.O. Smith",
  weight: 0,
  "id": 11
},
{
  "name": "A2 Milk",
  weight: 0,
  "id": 12
},
{
  "name": "A2A",
  weight: 0,
  "id": 13
},
{
  "name": "AA Plc",
  weight: 0,
  "id": 14
},
{
  "name": "AAC Technologies",
  weight: 0,
  "id": 15
},
{
  "name": "AAK AB",
  weight: 0,
  "id": 16
},
{
  "name": "Aalberts Inds.",
  weight: 0,
  "id": 17
},
{
  "name": "Aareal Bk",
  weight: 0,
  "id": 18
},
{
  "name": "Aarons ",
  weight: 0,
  "id": 19
},
{
  "name": "AB InBev",
  weight: 0,
  "id": 20
},
{
  "name": "ABB",
  weight: 0,
  "id": 21
},
{
  "name": "ABB (India)",
  weight: 0,
  "id": 22
},
{
  "name": "Abbott Labs.",
  weight: 0,
  "id": 23
},
{
  "name": "AbbVie",
  weight: 0,
  "id": 24
},
{
  "name": "ABC-Mart",
  weight: 0,
  "id": 25
},
{
  "name": "Abcam",
  weight: 0,
  "id": 26
},
{
  "name": "Abercrombie & Fitch",
  weight: 0,
  "id": 27
},
{
  "name": "ABIOMED",
  weight: 0,
  "id": 28
},
{
  "name": "ABN Amro",
  weight: 0,
  "id": 29
},
{
  "name": "Absa Group",
  weight: 0,
  "id": 30
},
{
  "name": "Acacia Communications",
  weight: 0,
  "id": 31
},
{
  "name": "Acacia Mining",
  weight: 0,
  "id": 32
},
{
  "name": "Acadia Healthcare",
  weight: 0,
  "id": 33
},
{
  "name": "ACC",
  weight: 0,
  "id": 34
},
{
  "name": "Accenture",
  weight: 0,
  "id": 35
},
{
  "name": "accesso Technology",
  weight: 0,
  "id": 36
},
{
  "name": "Acciona",
  weight: 0,
  "id": 37
},
{
  "name": "Accor",
  weight: 0,
  "id": 38
},
{
  "name": "Ace Hardware Indonesia",
  weight: 0,
  "id": 39
},
{
  "name": "Acer",
  weight: 0,
  "id": 40
},
{
  "name": "Acerinox R",
  weight: 0,
  "id": 41
},
{
  "name": "ACI Worldwide",
  weight: 0,
  "id": 42
},
{
  "name": "ACS",
  weight: 0,
  "id": 43
},
{
  "name": "Activision Blizzard",
  weight: 0,
  "id": 44
},
{
  "name": "Acuity Brands",
  weight: 0,
  "id": 45
},
{
  "name": "Adani Enterprises",
  weight: 0,
  "id": 46
},
{
  "name": "Adani Ports & SEZ",
  weight: 0,
  "id": 47
},
{
  "name": "Adani Power",
  weight: 0,
  "id": 48
},
{
  "name": "Adaro Energy",
  weight: 0,
  "id": 49
},
{
  "name": "Addtech B",
  weight: 0,
  "id": 50
},
{
  "name": "Adecco",
  weight: 0,
  "id": 51
},
{
  "name": "Adelaide Brighton",
  weight: 0,
  "id": 52
},
{
  "name": "Adidas",
  weight: 0,
  "id": 53
},
{
  "name": "Adobe Sys.",
  weight: 0,
  "id": 54
},
{
  "name": "ADP",
  weight: 0,
  "id": 55
},
{
  "name": "ADP Inc",
  weight: 0,
  "id": 56
},
{
  "name": "ADT Inc.",
  weight: 0,
  "id": 57
},
{
  "name": "Adtalem Global Education",
  weight: 0,
  "id": 58
},
{
  "name": "Advance Auto Parts",
  weight: 0,
  "id": 59
},
{
  "name": "Advanced Medical Solutions",
  weight: 0,
  "id": 60
},
{
  "name": "Advantech",
  weight: 0,
  "id": 61
},
{
  "name": "Advantest",
  weight: 0,
  "id": 62
},
{
  "name": "Adyen",
  weight: 0,
  "id": 63
},
{
  "name": "AECOM",
  weight: 0,
  "id": 64
},
{
  "name": "Aecon",
  weight: 0,
  "id": 65
},
{
  "name": "Aegion Corp.",
  weight: 0,
  "id": 66
},
{
  "name": "Aena",
  weight: 0,
  "id": 67
},
{
  "name": "Aeon",
  weight: 0,
  "id": 68
},
{
  "name": "AEP",
  weight: 0,
  "id": 69
},
{
  "name": "AerCap",
  weight: 0,
  "id": 70
},
{
  "name": "AES",
  weight: 0,
  "id": 71
},
{
  "name": "AF Poyry",
  weight: 0,
  "id": 72
},
{
  "name": "Affiliated Managers",
  weight: 0,
  "id": 73
},
{
  "name": "AGC Inc",
  weight: 0,
  "id": 74
},
{
  "name": "AGCO",
  weight: 0,
  "id": 75
},
{
  "name": "Aggreko",
  weight: 0,
  "id": 76
},
{
  "name": "Agilent Technologies",
  weight: 0,
  "id": 77
},
{
  "name": "AGL Energy",
  weight: 0,
  "id": 78
},
{
  "name": "Agnico Eagle Mines",
  weight: 0,
  "id": 79
},
{
  "name": "Agricultural Bank of China H",
  weight: 0,
  "id": 80
},
{
  "name": "Ahlstrom-Munksjo",
  weight: 0,
  "id": 81
},
{
  "name": "Ahold Delhaize",
  weight: 0,
  "id": 82
},
{
  "name": "AIB Group",
  weight: 0,
  "id": 83
},
{
  "name": "Aimia",
  weight: 0,
  "id": 84
},
{
  "name": "Air Canada",
  weight: 0,
  "id": 85
},
{
  "name": "Air China",
  weight: 0,
  "id": 86
},
{
  "name": "Air France-KLM",
  weight: 0,
  "id": 87
},
{
  "name": "Air Lease",
  weight: 0,
  "id": 88
},
{
  "name": "Air Liquide",
  weight: 0,
  "id": 89
},
{
  "name": "Air New Zealand",
  weight: 0,
  "id": 90
},
{
  "name": "Air Products",
  weight: 0,
  "id": 91
},
{
  "name": "Air Water Inc",
  weight: 0,
  "id": 92
},
{
  "name": "Airbus SE",
  weight: 0,
  "id": 93
},
{
  "name": "Aircastle",
  weight: 0,
  "id": 94
},
{
  "name": "AirTac Intl.",
  weight: 0,
  "id": 95
},
{
  "name": "Aisin Seiki",
  weight: 0,
  "id": 96
},
{
  "name": "Aixtron",
  weight: 0,
  "id": 97
},
{
  "name": "Ajinomoto",
  weight: 0,
  "id": 98
},
{
  "name": "Ajisen (China)",
  weight: 0,
  "id": 99
},
{
  "name": "AK Steel",
  weight: 0,
  "id": 100
},
{
  "name": "Akamai Technologies",
  weight: 0,
  "id": 101
},
{
  "name": "Akastor",
  weight: 0,
  "id": 102
},
{
  "name": "Aker BP ASA",
  weight: 0,
  "id": 103
},
{
  "name": "Aker Solutions ASA",
  weight: 0,
  "id": 104
},
{
  "name": "AKR Corporindo",
  weight: 0,
  "id": 105
},
{
  "name": "Akzo Nobel",
  weight: 0,
  "id": 106
},
{
  "name": "Alaska Air",
  weight: 0,
  "id": 107
},
{
  "name": "Albemarle",
  weight: 0,
  "id": 108
},
{
  "name": "Albioma",
  weight: 0,
  "id": 109
},
{
  "name": "Alcoa",
  weight: 0,
  "id": 110
},
{
  "name": "ALD SA",
  weight: 0,
  "id": 111
},
{
  "name": "Alexion",
  weight: 0,
  "id": 112
},
{
  "name": "Alfa Financial Software",
  weight: 0,
  "id": 113
},
{
  "name": "Alfa Laval",
  weight: 0,
  "id": 114
},
{
  "name": "Algonquin Power & Utilities",
  weight: 0,
  "id": 115
},
{
  "name": "Alibaba Group",
  weight: 0,
  "id": 116
},
{
  "name": "Align Technology",
  weight: 0,
  "id": 117
},
{
  "name": "ALK-Abello",
  weight: 0,
  "id": 118
},
{
  "name": "Alkermes",
  weight: 0,
  "id": 119
},
{
  "name": "All Nippon Airways",
  weight: 0,
  "id": 120
},
{
  "name": "Allegheny Tech.",
  weight: 0,
  "id": 121
},
{
  "name": "Allegiant Travel",
  weight: 0,
  "id": 122
},
{
  "name": "Allegion",
  weight: 0,
  "id": 123
},
{
  "name": "Allergan",
  weight: 0,
  "id": 124
},
{
  "name": "Alliance Data Sys.",
  weight: 0,
  "id": 125
},
{
  "name": "Alliant Energy",
  weight: 0,
  "id": 126
},
{
  "name": "Allison Transmission",
  weight: 0,
  "id": 127
},
{
  "name": "Ally Financial",
  weight: 0,
  "id": 128
},
{
  "name": "Almirall",
  weight: 0,
  "id": 129
},
{
  "name": "Alpha Bank",
  weight: 0,
  "id": 130
},
{
  "name": "Alphabet A",
  weight: 0,
  "id": 131
},
{
  "name": "Alps Electric",
  weight: 0,
  "id": 132
},
{
  "name": "ALS Ltd.",
  weight: 0,
  "id": 133
},
{
  "name": "Also Holding",
  weight: 0,
  "id": 134
},
{
  "name": "Alstom",
  weight: 0,
  "id": 135
},
{
  "name": "AltaGas",
  weight: 0,
  "id": 136
},
{
  "name": "Alten",
  weight: 0,
  "id": 137
},
{
  "name": "Altice Europe NV",
  weight: 0,
  "id": 138
},
{
  "name": "Altran Tech.",
  weight: 0,
  "id": 139
},
{
  "name": "Altri",
  weight: 0,
  "id": 140
},
{
  "name": "Altria",
  weight: 0,
  "id": 141
},
{
  "name": "Amada",
  weight: 0,
  "id": 142
},
{
  "name": "Amadeus Fire",
  weight: 0,
  "id": 143
},
{
  "name": "Amadeus IT",
  weight: 0,
  "id": 144
},
{
  "name": "Amazon.com",
  weight: 0,
  "id": 145
},
{
  "name": "Ambarella",
  weight: 0,
  "id": 146
},
{
  "name": "Ambev",
  weight: 0,
  "id": 147
},
{
  "name": "Ambu B",
  weight: 0,
  "id": 148
},
{
  "name": "Ambuja Cements",
  weight: 0,
  "id": 149
},
{
  "name": "AMC Entertainment",
  weight: 0,
  "id": 150
},
{
  "name": "AMC Networks",
  weight: 0,
  "id": 151
},
{
  "name": "Amcor",
  weight: 0,
  "id": 152
},
{
  "name": "AMD",
  weight: 0,
  "id": 153
},
{
  "name": "Amdocs",
  weight: 0,
  "id": 154
},
{
  "name": "Amer Sports",
  weight: 0,
  "id": 155
},
{
  "name": "Ameren",
  weight: 0,
  "id": 156
},
{
  "name": "American Airlines",
  weight: 0,
  "id": 157
},
{
  "name": "American Eagle",
  weight: 0,
  "id": 158
},
{
  "name": "American Express",
  weight: 0,
  "id": 159
},
{
  "name": "American Outdoor Brands",
  weight: 0,
  "id": 160
},
{
  "name": "American States Water",
  weight: 0,
  "id": 161
},
{
  "name": "American Tower",
  weight: 0,
  "id": 162
},
{
  "name": "American Water",
  weight: 0,
  "id": 163
},
{
  "name": "Ameriprise Finl",
  weight: 0,
  "id": 164
},
{
  "name": "AmerisourceBergen",
  weight: 0,
  "id": 165
},
{
  "name": "AMETEK",
  weight: 0,
  "id": 166
},
{
  "name": "AMG",
  weight: 0,
  "id": 167
},
{
  "name": "Amgen",
  weight: 0,
  "id": 168
},
{
  "name": "AMN Healthcare",
  weight: 0,
  "id": 169
},
{
  "name": "Amorepacific Corp.",
  weight: 0,
  "id": 170
},
{
  "name": "Amorepacific Group",
  weight: 0,
  "id": 171
},
{
  "name": "Amphenol",
  weight: 0,
  "id": 172
},
{
  "name": "Amplifon",
  weight: 0,
  "id": 173
},
{
  "name": "ams AG",
  weight: 0,
  "id": 174
},
{
  "name": "Amundi",
  weight: 0,
  "id": 175
},
{
  "name": "Anadarko Ptl.",
  weight: 0,
  "id": 176
},
{
  "name": "Analog Devices",
  weight: 0,
  "id": 177
},
{
  "name": "Andritz",
  weight: 0,
  "id": 178
},
{
  "name": "Anglo American",
  weight: 0,
  "id": 179
},
{
  "name": "AngloGold Ashanti",
  weight: 0,
  "id": 180
},
{
  "name": "Anhui Conch Cement",
  weight: 0,
  "id": 181
},
{
  "name": "Anritsu",
  weight: 0,
  "id": 182
},
{
  "name": "Ansell",
  weight: 0,
  "id": 183
},
{
  "name": "Ansys",
  weight: 0,
  "id": 184
},
{
  "name": "Anta Sports",
  weight: 0,
  "id": 185
},
{
  "name": "Antero Resources",
  weight: 0,
  "id": 186
},
{
  "name": "Antofagasta",
  weight: 0,
  "id": 187
},
{
  "name": "Anton Oilfield Services",
  weight: 0,
  "id": 188
},
{
  "name": "ANZ Bank",
  weight: 0,
  "id": 189
},
{
  "name": "AO World",
  weight: 0,
  "id": 190
},
{
  "name": "Aozora Bank",
  weight: 0,
  "id": 191
},
{
  "name": "AP Moller-Maersk",
  weight: 0,
  "id": 192
},
{
  "name": "Apache",
  weight: 0,
  "id": 193
},
{
  "name": "Aperam SA",
  weight: 0,
  "id": 194
},
{
  "name": "Apogee Enterprises",
  weight: 0,
  "id": 195
},
{
  "name": "Apollo Hospitals",
  weight: 0,
  "id": 196
},
{
  "name": "Apple Inc",
  weight: 0,
  "id": 197
},
{
  "name": "Applied Materials",
  weight: 0,
  "id": 198
},
{
  "name": "Applus",
  weight: 0,
  "id": 199
},
{
  "name": "AptarGroup",
  weight: 0,
  "id": 200
},
{
  "name": "Aptiv",
  weight: 0,
  "id": 201
},
{
  "name": "Aqua America",
  weight: 0,
  "id": 202
},
{
  "name": "Aramark",
  weight: 0,
  "id": 203
},
{
  "name": "Arbonia",
  weight: 0,
  "id": 204
},
{
  "name": "ARC Resources",
  weight: 0,
  "id": 205
},
{
  "name": "Arcadis",
  weight: 0,
  "id": 206
},
{
  "name": "ArcelorMittal",
  weight: 0,
  "id": 207
},
{
  "name": "Arch Coal",
  weight: 0,
  "id": 208
},
{
  "name": "Archer-Daniels-Midland",
  weight: 0,
  "id": 209
},
{
  "name": "Arcos Dorados",
  weight: 0,
  "id": 210
},
{
  "name": "Ardmore Shipping",
  weight: 0,
  "id": 211
},
{
  "name": "Arezzo",
  weight: 0,
  "id": 212
},
{
  "name": "Arista Networks",
  weight: 0,
  "id": 213
},
{
  "name": "Aristocrat Leisure",
  weight: 0,
  "id": 214
},
{
  "name": "Aritzia",
  weight: 0,
  "id": 215
},
{
  "name": "Arkema",
  weight: 0,
  "id": 216
},
{
  "name": "Armstrong World Industries",
  weight: 0,
  "id": 217
},
{
  "name": "Arrow Electronics",
  weight: 0,
  "id": 218
},
{
  "name": "Arrow Global",
  weight: 0,
  "id": 219
},
{
  "name": "Artisan Partners",
  weight: 0,
  "id": 220
},
{
  "name": "Arvind Ltd.",
  weight: 0,
  "id": 221
},
{
  "name": "Aryzta",
  weight: 0,
  "id": 222
},
{
  "name": "Asahi Group",
  weight: 0,
  "id": 223
},
{
  "name": "Asahi Kasei",
  weight: 0,
  "id": 224
},
{
  "name": "Asaleo Care",
  weight: 0,
  "id": 225
},
{
  "name": "Asbury Automotive",
  weight: 0,
  "id": 226
},
{
  "name": "Ascena Retail",
  weight: 0,
  "id": 227
},
{
  "name": "Ascential",
  weight: 0,
  "id": 228
},
{
  "name": "Ascom",
  weight: 0,
  "id": 229
},
{
  "name": "ASE Technology",
  weight: 0,
  "id": 230
},
{
  "name": "ASGN Inc",
  weight: 0,
  "id": 231
},
{
  "name": "Ashland",
  weight: 0,
  "id": 232
},
{
  "name": "Ashmore Group",
  weight: 0,
  "id": 233
},
{
  "name": "Ashok Leyland",
  weight: 0,
  "id": 234
},
{
  "name": "Ashtead",
  weight: 0,
  "id": 235
},
{
  "name": "Asian Paints India",
  weight: 0,
  "id": 236
},
{
  "name": "Asics Corp.",
  weight: 0,
  "id": 237
},
{
  "name": "ASM Intl.",
  weight: 0,
  "id": 238
},
{
  "name": "ASM Pacific Technology",
  weight: 0,
  "id": 239
},
{
  "name": "ASML Holding",
  weight: 0,
  "id": 240
},
{
  "name": "ASOS",
  weight: 0,
  "id": 241
},
{
  "name": "Aspen Pharmacare",
  weight: 0,
  "id": 242
},
{
  "name": "Aspen Technology",
  weight: 0,
  "id": 243
},
{
  "name": "Assa Abloy B",
  weight: 0,
  "id": 244
},
{
  "name": "Assoc. British Foods",
  weight: 0,
  "id": 245
},
{
  "name": "Astellas Pharm.",
  weight: 0,
  "id": 246
},
{
  "name": "Aston Martin Lagonda",
  weight: 0,
  "id": 247
},
{
  "name": "Astra Intl.",
  weight: 0,
  "id": 248
},
{
  "name": "AstraZeneca",
  weight: 0,
  "id": 249
},
{
  "name": "Asustek Computer",
  weight: 0,
  "id": 250
},
{
  "name": "ASX",
  weight: 0,
  "id": 251
},
{
  "name": "AT&T",
  weight: 0,
  "id": 252
},
{
  "name": "Atco Ltd.",
  weight: 0,
  "id": 253
},
{
  "name": "Atea ASA",
  weight: 0,
  "id": 254
},
{
  "name": "Atlantia",
  weight: 0,
  "id": 255
},
{
  "name": "Atlas Copco",
  weight: 0,
  "id": 256
},
{
  "name": "Atlassian",
  weight: 0,
  "id": 257
},
{
  "name": "Atos",
  weight: 0,
  "id": 258
},
{
  "name": "Atresmedia",
  weight: 0,
  "id": 259
},
{
  "name": "Attendo",
  weight: 0,
  "id": 260
},
{
  "name": "AU Optronics",
  weight: 0,
  "id": 261
},
{
  "name": "Auckland Intl. Airport",
  weight: 0,
  "id": 262
},
{
  "name": "Aumann",
  weight: 0,
  "id": 263
},
{
  "name": "Aurizon",
  weight: 0,
  "id": 264
},
{
  "name": "Aurobindo Pharma",
  weight: 0,
  "id": 265
},
{
  "name": "Aurubis",
  weight: 0,
  "id": 266
},
{
  "name": "AusNet Services",
  weight: 0,
  "id": 267
},
{
  "name": "Austevoll Seafood",
  weight: 0,
  "id": 268
},
{
  "name": "Auto Trader",
  weight: 0,
  "id": 269
},
{
  "name": "AutoCanada",
  weight: 0,
  "id": 270
},
{
  "name": "Autodesk",
  weight: 0,
  "id": 271
},
{
  "name": "Autogrill",
  weight: 0,
  "id": 272
},
{
  "name": "Autohome",
  weight: 0,
  "id": 273
},
{
  "name": "Autoliv",
  weight: 0,
  "id": 274
},
{
  "name": "AutoNation",
  weight: 0,
  "id": 275
},
{
  "name": "Autozone",
  weight: 0,
  "id": 276
},
{
  "name": "Avangrid",
  weight: 0,
  "id": 277
},
{
  "name": "Avanza Bank",
  weight: 0,
  "id": 278
},
{
  "name": "Avast Plc",
  weight: 0,
  "id": 279
},
{
  "name": "Avaya Holdings",
  weight: 0,
  "id": 280
},
{
  "name": "Avery Dennison",
  weight: 0,
  "id": 281
},
{
  "name": "Aveva",
  weight: 0,
  "id": 282
},
{
  "name": "AVI Ltd.",
  weight: 0,
  "id": 283
},
{
  "name": "Avis Budget",
  weight: 0,
  "id": 284
},
{
  "name": "Avnet",
  weight: 0,
  "id": 285
},
{
  "name": "Avon Products",
  weight: 0,
  "id": 286
},
{
  "name": "Avon Rubber",
  weight: 0,
  "id": 287
},
{
  "name": "AVX",
  weight: 0,
  "id": 288
},
{
  "name": "Axalta Coating Systems",
  weight: 0,
  "id": 289
},
{
  "name": "Axel Springer",
  weight: 0,
  "id": 290
},
{
  "name": "Axfood",
  weight: 0,
  "id": 291
},
{
  "name": "Axis Bank",
  weight: 0,
  "id": 292
},
{
  "name": "Azimut",
  weight: 0,
  "id": 293
},
{
  "name": "B&G Foods",
  weight: 0,
  "id": 294
},
{
  "name": "B&M",
  weight: 0,
  "id": 295
},
{
  "name": "B3 SA Brasil Bolsa Balcao",
  weight: 0,
  "id": 296
},
{
  "name": "Babcock",
  weight: 0,
  "id": 297
},
{
  "name": "BAE Systems",
  weight: 0,
  "id": 298
},
{
  "name": "BAIC Motor",
  weight: 0,
  "id": 299
},
{
  "name": "Baidu",
  weight: 0,
  "id": 300
},
{
  "name": "Bajaj Auto",
  weight: 0,
  "id": 301
},
{
  "name": "Bajaj Finance",
  weight: 0,
  "id": 302
},
{
  "name": "Baker Hughes GE",
  weight: 0,
  "id": 303
},
{
  "name": "Bakkafrost",
  weight: 0,
  "id": 304
},
{
  "name": "Bakkavor",
  weight: 0,
  "id": 305
},
{
  "name": "Balfour Beatty",
  weight: 0,
  "id": 306
},
{
  "name": "Ball",
  weight: 0,
  "id": 307
},
{
  "name": "Banca Generali",
  weight: 0,
  "id": 308
},
{
  "name": "Banco BPM",
  weight: 0,
  "id": 309
},
{
  "name": "Banco do Brasil",
  weight: 0,
  "id": 310
},
{
  "name": "Banco Macro",
  weight: 0,
  "id": 311
},
{
  "name": "Banco Sabadell",
  weight: 0,
  "id": 312
},
{
  "name": "Bandai Namco",
  weight: 0,
  "id": 313
},
{
  "name": "Bank Central Asia",
  weight: 0,
  "id": 314
},
{
  "name": "Bank Danamon Indonesia",
  weight: 0,
  "id": 315
},
{
  "name": "Bank Mandiri Persero",
  weight: 0,
  "id": 316
},
{
  "name": "Bank Negara Indonesia",
  weight: 0,
  "id": 317
},
{
  "name": "Bank of America",
  weight: 0,
  "id": 318
},
{
  "name": "Bank of Baroda",
  weight: 0,
  "id": 319
},
{
  "name": "Bank of China H",
  weight: 0,
  "id": 320
},
{
  "name": "Bank of East Asia",
  weight: 0,
  "id": 321
},
{
  "name": "Bank of Georgia",
  weight: 0,
  "id": 322
},
{
  "name": "Bank of India",
  weight: 0,
  "id": 323
},
{
  "name": "Bank of Ireland",
  weight: 0,
  "id": 324
},
{
  "name": "Bank of Montreal",
  weight: 0,
  "id": 325
},
{
  "name": "Bank of Nova Scotia",
  weight: 0,
  "id": 326
},
{
  "name": "Bank OZK",
  weight: 0,
  "id": 327
},
{
  "name": "Bank Rakyat",
  weight: 0,
  "id": 328
},
{
  "name": "Bank Tabungan Negara",
  weight: 0,
  "id": 329
},
{
  "name": "Bankia",
  weight: 0,
  "id": 330
},
{
  "name": "Bankinter",
  weight: 0,
  "id": 331
},
{
  "name": "Banrisul B",
  weight: 0,
  "id": 332
},
{
  "name": "Bapcor",
  weight: 0,
  "id": 333
},
{
  "name": "Barclays",
  weight: 0,
  "id": 334
},
{
  "name": "Barco",
  weight: 0,
  "id": 335
},
{
  "name": "Barr (AG)",
  weight: 0,
  "id": 336
},
{
  "name": "Barratt Developments",
  weight: 0,
  "id": 337
},
{
  "name": "Barrick Gold",
  weight: 0,
  "id": 338
},
{
  "name": "Barry Callebaut",
  weight: 0,
  "id": 339
},
{
  "name": "BASF",
  weight: 0,
  "id": 340
},
{
  "name": "Basic-Fit",
  weight: 0,
  "id": 341
},
{
  "name": "BasWare",
  weight: 0,
  "id": 342
},
{
  "name": "Bausch Health Companies",
  weight: 0,
  "id": 343
},
{
  "name": "BAWAG",
  weight: 0,
  "id": 344
},
{
  "name": "Baxter Intl.",
  weight: 0,
  "id": 345
},
{
  "name": "Bayer",
  weight: 0,
  "id": 346
},
{
  "name": "Baytex Energy",
  weight: 0,
  "id": 347
},
{
  "name": "BayWa",
  weight: 0,
  "id": 348
},
{
  "name": "BB&T",
  weight: 0,
  "id": 349
},
{
  "name": "BBA Aviation",
  weight: 0,
  "id": 350
},
{
  "name": "BBMG Corp.",
  weight: 0,
  "id": 351
},
{
  "name": "BBVA",
  weight: 0,
  "id": 352
},
{
  "name": "BBVA Banco Frances",
  weight: 0,
  "id": 353
},
{
  "name": "BCA Marketplace",
  weight: 0,
  "id": 354
},
{
  "name": "BCE",
  weight: 0,
  "id": 355
},
{
  "name": "Bco Bradesco Pref.",
  weight: 0,
  "id": 356
},
{
  "name": "Bco Santander Brazil",
  weight: 0,
  "id": 357
},
{
  "name": "BCP R",
  weight: 0,
  "id": 358
},
{
  "name": "BE Semiconductor",
  weight: 0,
  "id": 359
},
{
  "name": "Beacon Roofing",
  weight: 0,
  "id": 360
},
{
  "name": "Bechtle",
  weight: 0,
  "id": 361
},
{
  "name": "Becton Dickinson",
  weight: 0,
  "id": 362
},
{
  "name": "Bed Bath & Byd.",
  weight: 0,
  "id": 363
},
{
  "name": "Befesa",
  weight: 0,
  "id": 364
},
{
  "name": "Beiersdorf",
  weight: 0,
  "id": 365
},
{
  "name": "Beijer Alma B",
  weight: 0,
  "id": 366
},
{
  "name": "Beijing Enterprises Holdings",
  weight: 0,
  "id": 367
},
{
  "name": "Beijing Enterprises Water",
  weight: 0,
  "id": 368
},
{
  "name": "Bekaert",
  weight: 0,
  "id": 369
},
{
  "name": "Belden",
  weight: 0,
  "id": 370
},
{
  "name": "Belimo",
  weight: 0,
  "id": 371
},
{
  "name": "Bellway",
  weight: 0,
  "id": 372
},
{
  "name": "Benesse",
  weight: 0,
  "id": 373
},
{
  "name": "Berkeley",
  weight: 0,
  "id": 374
},
{
  "name": "Berry Global",
  weight: 0,
  "id": 375
},
{
  "name": "Bertrandt",
  weight: 0,
  "id": 376
},
{
  "name": "Best Buy",
  weight: 0,
  "id": 377
},
{
  "name": "Betsson",
  weight: 0,
  "id": 378
},
{
  "name": "Bharat Electronics",
  weight: 0,
  "id": 379
},
{
  "name": "Bharat Forge",
  weight: 0,
  "id": 380
},
{
  "name": "Bharat Heavy Elec.",
  weight: 0,
  "id": 381
},
{
  "name": "Bharat Petroleum",
  weight: 0,
  "id": 382
},
{
  "name": "Bharti Airtel",
  weight: 0,
  "id": 383
},
{
  "name": "Bharti Infratel",
  weight: 0,
  "id": 384
},
{
  "name": "BHP Group Ltd.",
  weight: 0,
  "id": 385
},
{
  "name": "BHP Group Plc",
  weight: 0,
  "id": 386
},
{
  "name": "BIC",
  weight: 0,
  "id": 387
},
{
  "name": "Bid Corp.",
  weight: 0,
  "id": 388
},
{
  "name": "Bidvest",
  weight: 0,
  "id": 389
},
{
  "name": "Biffa ",
  weight: 0,
  "id": 390
},
{
  "name": "Big Lots",
  weight: 0,
  "id": 391
},
{
  "name": "Big Yellow",
  weight: 0,
  "id": 392
},
{
  "name": "Bilfinger",
  weight: 0,
  "id": 393
},
{
  "name": "BillerudKorsnas",
  weight: 0,
  "id": 394
},
{
  "name": "Bio-Rad Labs.",
  weight: 0,
  "id": 395
},
{
  "name": "Bio-Techne",
  weight: 0,
  "id": 396
},
{
  "name": "Biogen Inc.",
  weight: 0,
  "id": 397
},
{
  "name": "BioMarin",
  weight: 0,
  "id": 398
},
{
  "name": "bioMerieux",
  weight: 0,
  "id": 399
},
{
  "name": "BizLink",
  weight: 0,
  "id": 400
},
{
  "name": "Blackbaud",
  weight: 0,
  "id": 401
},
{
  "name": "BlackBerry",
  weight: 0,
  "id": 402
},
{
  "name": "Blackmores",
  weight: 0,
  "id": 403
},
{
  "name": "Blackrock",
  weight: 0,
  "id": 404
},
{
  "name": "Blue Prism",
  weight: 0,
  "id": 405
},
{
  "name": "BlueScope Steel",
  weight: 0,
  "id": 406
},
{
  "name": "BMW",
  weight: 0,
  "id": 407
},
{
  "name": "BNP Paribas",
  weight: 0,
  "id": 408
},
{
  "name": "BNY Mellon",
  weight: 0,
  "id": 409
},
{
  "name": "BOC Hong Kong",
  weight: 0,
  "id": 410
},
{
  "name": "Bodycote Intl.",
  weight: 0,
  "id": 411
},
{
  "name": "Boeing",
  weight: 0,
  "id": 412
},
{
  "name": "Boliden",
  weight: 0,
  "id": 413
},
{
  "name": "Bollore",
  weight: 0,
  "id": 414
},
{
  "name": "Bolsas y Mercados",
  weight: 0,
  "id": 415
},
{
  "name": "Bombardier B",
  weight: 0,
  "id": 416
},
{
  "name": "Bonava B",
  weight: 0,
  "id": 417
},
{
  "name": "boohoo Group",
  weight: 0,
  "id": 418
},
{
  "name": "Booking Holdings",
  weight: 0,
  "id": 419
},
{
  "name": "Booz Allen Hamilton",
  weight: 0,
  "id": 420
},
{
  "name": "Boral",
  weight: 0,
  "id": 421
},
{
  "name": "BorgWarner",
  weight: 0,
  "id": 422
},
{
  "name": "Boskalis Westminster",
  weight: 0,
  "id": 423
},
{
  "name": "Bossard",
  weight: 0,
  "id": 424
},
{
  "name": "Boston Scientific",
  weight: 0,
  "id": 425
},
{
  "name": "Bourbon",
  weight: 0,
  "id": 426
},
{
  "name": "Bouygues",
  weight: 0,
  "id": 427
},
{
  "name": "Bovis Homes",
  weight: 0,
  "id": 428
},
{
  "name": "Box Inc",
  weight: 0,
  "id": 429
},
{
  "name": "Boyd Group IF",
  weight: 0,
  "id": 430
},
{
  "name": "BP",
  weight: 0,
  "id": 431
},
{
  "name": "BPER Banca",
  weight: 0,
  "id": 432
},
{
  "name": "bpost",
  weight: 0,
  "id": 433
},
{
  "name": "Brambles",
  weight: 0,
  "id": 434
},
{
  "name": "Braskem",
  weight: 0,
  "id": 435
},
{
  "name": "Bravida",
  weight: 0,
  "id": 436
},
{
  "name": "Breedon",
  weight: 0,
  "id": 437
},
{
  "name": "Brembo",
  weight: 0,
  "id": 438
},
{
  "name": "Brenntag",
  weight: 0,
  "id": 439
},
{
  "name": "Brewin Dolphin",
  weight: 0,
  "id": 440
},
{
  "name": "BRF",
  weight: 0,
  "id": 441
},
{
  "name": "Bridgestone",
  weight: 0,
  "id": 442
},
{
  "name": "Brilliance China",
  weight: 0,
  "id": 443
},
{
  "name": "Brink's Co",
  weight: 0,
  "id": 444
},
{
  "name": "Brinker",
  weight: 0,
  "id": 445
},
{
  "name": "Bristol-Myers Squibb",
  weight: 0,
  "id": 446
},
{
  "name": "Britannia Industries",
  weight: 0,
  "id": 447
},
{
  "name": "British American Tobacco",
  weight: 0,
  "id": 448
},
{
  "name": "Britvic",
  weight: 0,
  "id": 449
},
{
  "name": "Broadcom Inc.",
  weight: 0,
  "id": 450
},
{
  "name": "Broadridge",
  weight: 0,
  "id": 451
},
{
  "name": "Brookfield Renewable (Canada)",
  weight: 0,
  "id": 452
},
{
  "name": "Brother Industries",
  weight: 0,
  "id": 453
},
{
  "name": "Brown-Forman",
  weight: 0,
  "id": 454
},
{
  "name": "Brown (N) Group",
  weight: 0,
  "id": 455
},
{
  "name": "BRP",
  weight: 0,
  "id": 456
},
{
  "name": "Bruker",
  weight: 0,
  "id": 457
},
{
  "name": "Brunello Cucinelli",
  weight: 0,
  "id": 458
},
{
  "name": "Brunswick",
  weight: 0,
  "id": 459
},
{
  "name": "BT Group",
  weight: 0,
  "id": 460
},
{
  "name": "BTG",
  weight: 0,
  "id": 461
},
{
  "name": "Bucher Industries",
  weight: 0,
  "id": 462
},
{
  "name": "Bunge",
  weight: 0,
  "id": 463
},
{
  "name": "Bunzl",
  weight: 0,
  "id": 464
},
{
  "name": "Burberry",
  weight: 0,
  "id": 465
},
{
  "name": "Burckhardt",
  weight: 0,
  "id": 466
},
{
  "name": "Bureau Veritas",
  weight: 0,
  "id": 467
},
{
  "name": "Burlington Stores",
  weight: 0,
  "id": 468
},
{
  "name": "Buzzi Unicem",
  weight: 0,
  "id": 469
},
{
  "name": "BWX Technologies",
  weight: 0,
  "id": 470
},
{
  "name": "BYD Company",
  weight: 0,
  "id": 471
},
{
  "name": "C&C Group",
  weight: 0,
  "id": 472
},
{
  "name": "C&J Energy",
  weight: 0,
  "id": 473
},
{
  "name": "Cabot Corp.",
  weight: 0,
  "id": 474
},
{
  "name": "Cabot Microelectronics",
  weight: 0,
  "id": 475
},
{
  "name": "Cabot Oil",
  weight: 0,
  "id": 476
},
{
  "name": "CACI International",
  weight: 0,
  "id": 477
},
{
  "name": "Cadence",
  weight: 0,
  "id": 478
},
{
  "name": "Cadila Healthcare",
  weight: 0,
  "id": 479
},
{
  "name": "CAE",
  weight: 0,
  "id": 480
},
{
  "name": "Caesars Entertainment",
  weight: 0,
  "id": 481
},
{
  "name": "Caesarstone",
  weight: 0,
  "id": 482
},
{
  "name": "CAF",
  weight: 0,
  "id": 483
},
{
  "name": "Cairn Homes",
  weight: 0,
  "id": 484
},
{
  "name": "CaixaBank",
  weight: 0,
  "id": 485
},
{
  "name": "Calbee",
  weight: 0,
  "id": 486
},
{
  "name": "California Water",
  weight: 0,
  "id": 487
},
{
  "name": "Caltex",
  weight: 0,
  "id": 488
},
{
  "name": "Cameco",
  weight: 0,
  "id": 489
},
{
  "name": "Campari",
  weight: 0,
  "id": 490
},
{
  "name": "Campbell Soup",
  weight: 0,
  "id": 491
},
{
  "name": "Canada Goose ",
  weight: 0,
  "id": 492
},
{
  "name": "Canadian National Railway",
  weight: 0,
  "id": 493
},
{
  "name": "Canadian Natural",
  weight: 0,
  "id": 494
},
{
  "name": "Canadian Pacific Railway",
  weight: 0,
  "id": 495
},
{
  "name": "Canadian Solar",
  weight: 0,
  "id": 496
},
{
  "name": "Canadian Tire",
  weight: 0,
  "id": 497
},
{
  "name": "Canadian Utilities",
  weight: 0,
  "id": 498
},
{
  "name": "Canadian Western Bank",
  weight: 0,
  "id": 499
},
{
  "name": "Canara Bank",
  weight: 0,
  "id": 500
},
{
  "name": "CANCOM",
  weight: 0,
  "id": 501
},
{
  "name": "Canon",
  weight: 0,
  "id": 502
},
{
  "name": "Canvest Environment Protection",
  weight: 0,
  "id": 503
},
{
  "name": "Capcom",
  weight: 0,
  "id": 504
},
{
  "name": "Capgemini",
  weight: 0,
  "id": 505
},
{
  "name": "Capita",
  weight: 0,
  "id": 506
},
{
  "name": "Capital One",
  weight: 0,
  "id": 507
},
{
  "name": "Capitec Bank",
  weight: 0,
  "id": 508
},
{
  "name": "Capri Holdings",
  weight: 0,
  "id": 509
},
{
  "name": "CAR Inc",
  weight: 0,
  "id": 510
},
{
  "name": "Card Factory",
  weight: 0,
  "id": 511
},
{
  "name": "Cardinal Health",
  weight: 0,
  "id": 512
},
{
  "name": "Cargotec",
  weight: 0,
  "id": 513
},
{
  "name": "Carl Zeiss Meditec",
  weight: 0,
  "id": 514
},
{
  "name": "Carlisle",
  weight: 0,
  "id": 515
},
{
  "name": "Carlsberg B",
  weight: 0,
  "id": 516
},
{
  "name": "CarMax",
  weight: 0,
  "id": 517
},
{
  "name": "Carnival Corp.",
  weight: 0,
  "id": 518
},
{
  "name": "Carnival Plc",
  weight: 0,
  "id": 519
},
{
  "name": "Carrefour",
  weight: 0,
  "id": 520
},
{
  "name": "carsales.com",
  weight: 0,
  "id": 521
},
{
  "name": "Carter's",
  weight: 0,
  "id": 522
},
{
  "name": "Carvana",
  weight: 0,
  "id": 523
},
{
  "name": "Casino",
  weight: 0,
  "id": 524
},
{
  "name": "Casio Computer",
  weight: 0,
  "id": 525
},
{
  "name": "Castrol India",
  weight: 0,
  "id": 526
},
{
  "name": "Catalent",
  weight: 0,
  "id": 527
},
{
  "name": "Catcher Tech.",
  weight: 0,
  "id": 528
},
{
  "name": "Caterpillar",
  weight: 0,
  "id": 529
},
{
  "name": "Cathay Pacific",
  weight: 0,
  "id": 530
},
{
  "name": "Caverion",
  weight: 0,
  "id": 531
},
{
  "name": "CBD Pref A",
  weight: 0,
  "id": 532
},
{
  "name": "CBOE Holdings",
  weight: 0,
  "id": 533
},
{
  "name": "CBRE Group",
  weight: 0,
  "id": 534
},
{
  "name": "CBS 'B'",
  weight: 0,
  "id": 535
},
{
  "name": "CCL Industries B",
  weight: 0,
  "id": 536
},
{
  "name": "CCR",
  weight: 0,
  "id": 537
},
{
  "name": "CDK Global",
  weight: 0,
  "id": 538
},
{
  "name": "CDW Corp.",
  weight: 0,
  "id": 539
},
{
  "name": "CECONOMY",
  weight: 0,
  "id": 540
},
{
  "name": "Celanese",
  weight: 0,
  "id": 541
},
{
  "name": "Celgene",
  weight: 0,
  "id": 542
},
{
  "name": "Cellectis",
  weight: 0,
  "id": 543
},
{
  "name": "Cellnex Telecom",
  weight: 0,
  "id": 544
},
{
  "name": "Celltrion",
  weight: 0,
  "id": 545
},
{
  "name": "Cembra Money Bank",
  weight: 0,
  "id": 546
},
{
  "name": "Cementir",
  weight: 0,
  "id": 547
},
{
  "name": "CEMIG Pref.",
  weight: 0,
  "id": 548
},
{
  "name": "Cenovus Energy",
  weight: 0,
  "id": 549
},
{
  "name": "Centamin",
  weight: 0,
  "id": 550
},
{
  "name": "Centerpoint Energy",
  weight: 0,
  "id": 551
},
{
  "name": "Centerra Gold",
  weight: 0,
  "id": 552
},
{
  "name": "Central Garden & Pet Common",
  weight: 0,
  "id": 553
},
{
  "name": "Central Puerto",
  weight: 0,
  "id": 554
},
{
  "name": "Centrica",
  weight: 0,
  "id": 555
},
{
  "name": "Century Aluminum",
  weight: 0,
  "id": 556
},
{
  "name": "Centurylink",
  weight: 0,
  "id": 557
},
{
  "name": "Cerner",
  weight: 0,
  "id": 558
},
{
  "name": "Cerved Information Solns.",
  weight: 0,
  "id": 559
},
{
  "name": "CESP B",
  weight: 0,
  "id": 560
},
{
  "name": "CEWE Stiftung",
  weight: 0,
  "id": 561
},
{
  "name": "CF Industries",
  weight: 0,
  "id": 562
},
{
  "name": "CFE",
  weight: 0,
  "id": 563
},
{
  "name": "CG Power & Ind. Solutions",
  weight: 0,
  "id": 564
},
{
  "name": "CGG",
  weight: 0,
  "id": 565
},
{
  "name": "CGI Inc.",
  weight: 0,
  "id": 566
},
{
  "name": "CH Robinson",
  weight: 0,
  "id": 567
},
{
  "name": "Chalco H",
  weight: 0,
  "id": 568
},
{
  "name": "Changyou.com",
  weight: 0,
  "id": 569
},
{
  "name": "Chargeurs",
  weight: 0,
  "id": 570
},
{
  "name": "Charles River Labs.",
  weight: 0,
  "id": 571
},
{
  "name": "Charles Schwab",
  weight: 0,
  "id": 572
},
{
  "name": "Charter Comms.",
  weight: 0,
  "id": 573
},
{
  "name": "Charter Court Financial",
  weight: 0,
  "id": 574
},
{
  "name": "Check Point Software",
  weight: 0,
  "id": 575
},
{
  "name": "Cheetah Mobile",
  weight: 0,
  "id": 576
},
{
  "name": "Cheil Worldwide",
  weight: 0,
  "id": 577
},
{
  "name": "Chemours",
  weight: 0,
  "id": 578
},
{
  "name": "Chemring Gp.",
  weight: 0,
  "id": 579
},
{
  "name": "Cheng Shin Rubber",
  weight: 0,
  "id": 580
},
{
  "name": "Cheniere Energy Inc.",
  weight: 0,
  "id": 581
},
{
  "name": "Chesapeake Energy",
  weight: 0,
  "id": 582
},
{
  "name": "Chevron",
  weight: 0,
  "id": 583
},
{
  "name": "Chiba Bank",
  weight: 0,
  "id": 584
},
{
  "name": "Chicony Electronics",
  weight: 0,
  "id": 585
},
{
  "name": "China Agri-Inds.",
  weight: 0,
  "id": 586
},
{
  "name": "China Airlines",
  weight: 0,
  "id": 587
},
{
  "name": "China Biologic Products",
  weight: 0,
  "id": 588
},
{
  "name": "China Coal Energy",
  weight: 0,
  "id": 589
},
{
  "name": "China Comms",
  weight: 0,
  "id": 590
},
{
  "name": "China Construction Bank H",
  weight: 0,
  "id": 591
},
{
  "name": "China Eastern Airlines",
  weight: 0,
  "id": 592
},
{
  "name": "China Everbright Intl",
  weight: 0,
  "id": 593
},
{
  "name": "China Gas Holdings",
  weight: 0,
  "id": 594
},
{
  "name": "China Literature",
  weight: 0,
  "id": 595
},
{
  "name": "China Longyuan Power",
  weight: 0,
  "id": 596
},
{
  "name": "China Maple Leaf Educational",
  weight: 0,
  "id": 597
},
{
  "name": "China Medical System",
  weight: 0,
  "id": 598
},
{
  "name": "China Mengniu Dairy",
  weight: 0,
  "id": 599
},
{
  "name": "China Merchants",
  weight: 0,
  "id": 600
},
{
  "name": "China Merchants Bank H",
  weight: 0,
  "id": 601
},
{
  "name": "China Mobile",
  weight: 0,
  "id": 602
},
{
  "name": "China Oilfield Services H",
  weight: 0,
  "id": 603
},
{
  "name": "China Resources Beer",
  weight: 0,
  "id": 604
},
{
  "name": "China Resources Gas",
  weight: 0,
  "id": 605
},
{
  "name": "China Resources Pwr.",
  weight: 0,
  "id": 606
},
{
  "name": "China Shenhua En.",
  weight: 0,
  "id": 607
},
{
  "name": "China Southern Airlines",
  weight: 0,
  "id": 608
},
{
  "name": "China State Construction Intl.",
  weight: 0,
  "id": 609
},
{
  "name": "China Steel",
  weight: 0,
  "id": 610
},
{
  "name": "China Telecom",
  weight: 0,
  "id": 611
},
{
  "name": "China Tower",
  weight: 0,
  "id": 612
},
{
  "name": "China Traditional Chinese Med.",
  weight: 0,
  "id": 613
},
{
  "name": "China Unicom",
  weight: 0,
  "id": 614
},
{
  "name": "Chipotle Mex. Grill",
  weight: 0,
  "id": 615
},
{
  "name": "Chiyoda Corp.",
  weight: 0,
  "id": 616
},
{
  "name": "Choice Hotels",
  weight: 0,
  "id": 617
},
{
  "name": "Chorus NZ",
  weight: 0,
  "id": 618
},
{
  "name": "Christian Hansen",
  weight: 0,
  "id": 619
},
{
  "name": "Chubu Electric Power",
  weight: 0,
  "id": 620
},
{
  "name": "Chugai Pharm.",
  weight: 0,
  "id": 621
},
{
  "name": "Chugoku EP",
  weight: 0,
  "id": 622
},
{
  "name": "Chunghwa Telecom.",
  weight: 0,
  "id": 623
},
{
  "name": "Church & Dwight",
  weight: 0,
  "id": 624
},
{
  "name": "CI Financial",
  weight: 0,
  "id": 625
},
{
  "name": "CIBC",
  weight: 0,
  "id": 626
},
{
  "name": "CIE Automotive",
  weight: 0,
  "id": 627
},
{
  "name": "Cielo",
  weight: 0,
  "id": 628
},
{
  "name": "Ciena",
  weight: 0,
  "id": 629
},
{
  "name": "CIMIC Group",
  weight: 0,
  "id": 630
},
{
  "name": "Cinemark",
  weight: 0,
  "id": 631
},
{
  "name": "Cineplex",
  weight: 0,
  "id": 632
},
{
  "name": "Cineworld",
  weight: 0,
  "id": 633
},
{
  "name": "Cintas",
  weight: 0,
  "id": 634
},
{
  "name": "Cipla",
  weight: 0,
  "id": 635
},
{
  "name": "Cisco Systems",
  weight: 0,
  "id": 636
},
{
  "name": "CIT Group",
  weight: 0,
  "id": 637
},
{
  "name": "CITIC Ltd.",
  weight: 0,
  "id": 638
},
{
  "name": "Citigroup",
  weight: 0,
  "id": 639
},
{
  "name": "Citizen Holdings",
  weight: 0,
  "id": 640
},
{
  "name": "Citizens Financial",
  weight: 0,
  "id": 641
},
{
  "name": "Citrix Systems",
  weight: 0,
  "id": 642
},
{
  "name": "City Dev.",
  weight: 0,
  "id": 643
},
{
  "name": "CJ CGV",
  weight: 0,
  "id": 644
},
{
  "name": "CJ CheilJedang Corp",
  weight: 0,
  "id": 645
},
{
  "name": "CJ Corp.",
  weight: 0,
  "id": 646
},
{
  "name": "CK Hutchison Holdings",
  weight: 0,
  "id": 647
},
{
  "name": "CK Infrastructure",
  weight: 0,
  "id": 648
},
{
  "name": "Clariant",
  weight: 0,
  "id": 649
},
{
  "name": "Clas Ohlson B",
  weight: 0,
  "id": 650
},
{
  "name": "Clean Harbors",
  weight: 0,
  "id": 651
},
{
  "name": "Cleveland-Cliffs",
  weight: 0,
  "id": 652
},
{
  "name": "Clicks Group",
  weight: 0,
  "id": 653
},
{
  "name": "Clinigen",
  weight: 0,
  "id": 654
},
{
  "name": "Cloetta",
  weight: 0,
  "id": 655
},
{
  "name": "Clorox",
  weight: 0,
  "id": 656
},
{
  "name": "Close Bros.",
  weight: 0,
  "id": 657
},
{
  "name": "CLP",
  weight: 0,
  "id": 658
},
{
  "name": "CMC Markets",
  weight: 0,
  "id": 659
},
{
  "name": "CME Group",
  weight: 0,
  "id": 660
},
{
  "name": "CMS Energy",
  weight: 0,
  "id": 661
},
{
  "name": "CNH Industrial",
  weight: 0,
  "id": 662
},
{
  "name": "CNOOC",
  weight: 0,
  "id": 663
},
{
  "name": "CNX Resources",
  weight: 0,
  "id": 664
},
{
  "name": "Coal India",
  weight: 0,
  "id": 665
},
{
  "name": "Coats",
  weight: 0,
  "id": 666
},
{
  "name": "Cobham",
  weight: 0,
  "id": 667
},
{
  "name": "Coca-Cola",
  weight: 0,
  "id": 668
},
{
  "name": "Coca-Cola Amatil",
  weight: 0,
  "id": 669
},
{
  "name": "Coca-Cola European Partners",
  weight: 0,
  "id": 670
},
{
  "name": "Coca-Cola HBC",
  weight: 0,
  "id": 671
},
{
  "name": "Cochlear",
  weight: 0,
  "id": 672
},
{
  "name": "Cogeco Communications",
  weight: 0,
  "id": 673
},
{
  "name": "Cognex",
  weight: 0,
  "id": 674
},
{
  "name": "Cognizant",
  weight: 0,
  "id": 675
},
{
  "name": "Coherent Inc.",
  weight: 0,
  "id": 676
},
{
  "name": "Colfax",
  weight: 0,
  "id": 677
},
{
  "name": "Colgate-Palm've Ind.",
  weight: 0,
  "id": 678
},
{
  "name": "Colgate-Palmolive",
  weight: 0,
  "id": 679
},
{
  "name": "COLOPL",
  weight: 0,
  "id": 680
},
{
  "name": "Coloplast",
  weight: 0,
  "id": 681
},
{
  "name": "Colruyt",
  weight: 0,
  "id": 682
},
{
  "name": "Columbia Sportswear",
  weight: 0,
  "id": 683
},
{
  "name": "Comcast",
  weight: 0,
  "id": 684
},
{
  "name": "Comerica",
  weight: 0,
  "id": 685
},
{
  "name": "Comfortdelgro",
  weight: 0,
  "id": 686
},
{
  "name": "Commercial Metals",
  weight: 0,
  "id": 687
},
{
  "name": "Commerzbank",
  weight: 0,
  "id": 688
},
{
  "name": "Commonwealth Bank",
  weight: 0,
  "id": 689
},
{
  "name": "CommScope",
  weight: 0,
  "id": 690
},
{
  "name": "Community Health Systems",
  weight: 0,
  "id": 691
},
{
  "name": "CommVault Systems",
  weight: 0,
  "id": 692
},
{
  "name": "Compal Electronics",
  weight: 0,
  "id": 693
},
{
  "name": "Compass",
  weight: 0,
  "id": 694
},
{
  "name": "Compeq Manufacturing",
  weight: 0,
  "id": 695
},
{
  "name": "CompuGroup Medical",
  weight: 0,
  "id": 696
},
{
  "name": "Computacenter",
  weight: 0,
  "id": 697
},
{
  "name": "Computer Modelling Group",
  weight: 0,
  "id": 698
},
{
  "name": "Computershare",
  weight: 0,
  "id": 699
},
{
  "name": "COMSYS Holdings",
  weight: 0,
  "id": 700
},
{
  "name": "Conagra Brands",
  weight: 0,
  "id": 701
},
{
  "name": "Concho Resources",
  weight: 0,
  "id": 702
},
{
  "name": "Concordia Financial",
  weight: 0,
  "id": 703
},
{
  "name": "Conduent",
  weight: 0,
  "id": 704
},
{
  "name": "Connect Group",
  weight: 0,
  "id": 705
},
{
  "name": "ConocoPhillips",
  weight: 0,
  "id": 706
},
{
  "name": "Cons.Edison",
  weight: 0,
  "id": 707
},
{
  "name": "Consort Medical",
  weight: 0,
  "id": 708
},
{
  "name": "Constellation Brands",
  weight: 0,
  "id": 709
},
{
  "name": "Constellation Software",
  weight: 0,
  "id": 710
},
{
  "name": "Constellium",
  weight: 0,
  "id": 711
},
{
  "name": "Contact Energy",
  weight: 0,
  "id": 712
},
{
  "name": "Container Corp India",
  weight: 0,
  "id": 713
},
{
  "name": "Continental",
  weight: 0,
  "id": 714
},
{
  "name": "Continental Resources",
  weight: 0,
  "id": 715
},
{
  "name": "ContourGlobal",
  weight: 0,
  "id": 716
},
{
  "name": "ConvaTec",
  weight: 0,
  "id": 717
},
{
  "name": "Cookpad",
  weight: 0,
  "id": 718
},
{
  "name": "Cooper Companies",
  weight: 0,
  "id": 719
},
{
  "name": "Cooper Tire",
  weight: 0,
  "id": 720
},
{
  "name": "Copa Holdings",
  weight: 0,
  "id": 721
},
{
  "name": "Copart",
  weight: 0,
  "id": 722
},
{
  "name": "Copel B",
  weight: 0,
  "id": 723
},
{
  "name": "Corbion",
  weight: 0,
  "id": 724
},
{
  "name": "Core Labs.",
  weight: 0,
  "id": 725
},
{
  "name": "CoreLogic",
  weight: 0,
  "id": 726
},
{
  "name": "Corestate Capital",
  weight: 0,
  "id": 727
},
{
  "name": "Corning",
  weight: 0,
  "id": 728
},
{
  "name": "Coromandel Ferts.",
  weight: 0,
  "id": 729
},
{
  "name": "Corporate Travel Management",
  weight: 0,
  "id": 730
},
{
  "name": "Corus Entertainment",
  weight: 0,
  "id": 731
},
{
  "name": "COSCO Shipping H",
  weight: 0,
  "id": 732
},
{
  "name": "COSCO SHIPPING Ports",
  weight: 0,
  "id": 733
},
{
  "name": "Cosmos Pharma.",
  weight: 0,
  "id": 734
},
{
  "name": "Costain",
  weight: 0,
  "id": 735
},
{
  "name": "CoStar",
  weight: 0,
  "id": 736
},
{
  "name": "Costco",
  weight: 0,
  "id": 737
},
{
  "name": "Cott Corp.",
  weight: 0,
  "id": 738
},
{
  "name": "Coty",
  weight: 0,
  "id": 739
},
{
  "name": "Couche Tard B",
  weight: 0,
  "id": 740
},
{
  "name": "Countryside Properties",
  weight: 0,
  "id": 741
},
{
  "name": "Coupa Software",
  weight: 0,
  "id": 742
},
{
  "name": "Covestro",
  weight: 0,
  "id": 743
},
{
  "name": "Coway",
  weight: 0,
  "id": 744
},
{
  "name": "CPFL Energia",
  weight: 0,
  "id": 745
},
{
  "name": "Cramo",
  weight: 0,
  "id": 746
},
{
  "name": "Crane",
  weight: 0,
  "id": 747
},
{
  "name": "Craneware",
  weight: 0,
  "id": 748
},
{
  "name": "Cranswick",
  weight: 0,
  "id": 749
},
{
  "name": "Cray",
  weight: 0,
  "id": 750
},
{
  "name": "Credicorp",
  weight: 0,
  "id": 751
},
{
  "name": "Credit Acceptance Corp.",
  weight: 0,
  "id": 752
},
{
  "name": "Credit Agricole",
  weight: 0,
  "id": 753
},
{
  "name": "Credit Saison",
  weight: 0,
  "id": 754
},
{
  "name": "Credit Suisse",
  weight: 0,
  "id": 755
},
{
  "name": "Cree",
  weight: 0,
  "id": 756
},
{
  "name": "Crest Nicholson",
  weight: 0,
  "id": 757
},
{
  "name": "CRH",
  weight: 0,
  "id": 758
},
{
  "name": "CRISIL",
  weight: 0,
  "id": 759
},
{
  "name": "Croda Intl.",
  weight: 0,
  "id": 760
},
{
  "name": "Crown",
  weight: 0,
  "id": 761
},
{
  "name": "Crown Castle",
  weight: 0,
  "id": 762
},
{
  "name": "Crown Holdings",
  weight: 0,
  "id": 763
},
{
  "name": "CRRC Corp.",
  weight: 0,
  "id": 764
},
{
  "name": "CSL",
  weight: 0,
  "id": 765
},
{
  "name": "CSN",
  weight: 0,
  "id": 766
},
{
  "name": "CSPC Pharma.",
  weight: 0,
  "id": 767
},
{
  "name": "CSR Ltd.",
  weight: 0,
  "id": 768
},
{
  "name": "CSX",
  weight: 0,
  "id": 769
},
{
  "name": "CTBC Finl.",
  weight: 0,
  "id": 770
},
{
  "name": "Ctrip.com",
  weight: 0,
  "id": 771
},
{
  "name": "CTS Eventim",
  weight: 0,
  "id": 772
},
{
  "name": "Cummins",
  weight: 0,
  "id": 773
},
{
  "name": "Cummins India",
  weight: 0,
  "id": 774
},
{
  "name": "Curtiss Wright",
  weight: 0,
  "id": 775
},
{
  "name": "CVS Group",
  weight: 0,
  "id": 776
},
{
  "name": "CVS Health",
  weight: 0,
  "id": 777
},
{
  "name": "CyberAgent",
  weight: 0,
  "id": 778
},
{
  "name": "CyberArk Software",
  weight: 0,
  "id": 779
},
{
  "name": "CYBERDYNE",
  weight: 0,
  "id": 780
},
{
  "name": "CYBG",
  weight: 0,
  "id": 781
},
{
  "name": "Cypress Semiconductor",
  weight: 0,
  "id": 782
},
{
  "name": "CyrusOne",
  weight: 0,
  "id": 783
},
{
  "name": "D'Ieteren",
  weight: 0,
  "id": 784
},
{
  "name": "D R Horton",
  weight: 0,
  "id": 785
},
{
  "name": "Dabur India",
  weight: 0,
  "id": 786
},
{
  "name": "Daelim Ind.",
  weight: 0,
  "id": 787
},
{
  "name": "Daetwyler",
  weight: 0,
  "id": 788
},
{
  "name": "Daewoo E&C",
  weight: 0,
  "id": 789
},
{
  "name": "Daicel Chemical",
  weight: 0,
  "id": 790
},
{
  "name": "Daido Steel",
  weight: 0,
  "id": 791
},
{
  "name": "Daifuku",
  weight: 0,
  "id": 792
},
{
  "name": "Daiichi Sankyo",
  weight: 0,
  "id": 793
},
{
  "name": "Daikin",
  weight: 0,
  "id": 794
},
{
  "name": "Daily Mail",
  weight: 0,
  "id": 795
},
{
  "name": "Daimler",
  weight: 0,
  "id": 796
},
{
  "name": "Daito Trust",
  weight: 0,
  "id": 797
},
{
  "name": "Daiwa House",
  weight: 0,
  "id": 798
},
{
  "name": "Daiwa Securities",
  weight: 0,
  "id": 799
},
{
  "name": "Dana Inc.",
  weight: 0,
  "id": 800
},
{
  "name": "Danaher",
  weight: 0,
  "id": 801
},
{
  "name": "Danone",
  weight: 0,
  "id": 802
},
{
  "name": "Danske Bank",
  weight: 0,
  "id": 803
},
{
  "name": "Darden Rests.",
  weight: 0,
  "id": 804
},
{
  "name": "Darling Ingredients",
  weight: 0,
  "id": 805
},
{
  "name": "Dassault Aviation",
  weight: 0,
  "id": 806
},
{
  "name": "Dassault Systemes",
  weight: 0,
  "id": 807
},
{
  "name": "DaVita",
  weight: 0,
  "id": 808
},
{
  "name": "DBS Group",
  weight: 0,
  "id": 809
},
{
  "name": "DCC",
  weight: 0,
  "id": 810
},
{
  "name": "De La Rue",
  weight: 0,
  "id": 811
},
{
  "name": "De Longhi",
  weight: 0,
  "id": 812
},
{
  "name": "Dean Foods",
  weight: 0,
  "id": 813
},
{
  "name": "Dechra Pharma.",
  weight: 0,
  "id": 814
},
{
  "name": "Deckers Outdoor",
  weight: 0,
  "id": 815
},
{
  "name": "Deere & Co.",
  weight: 0,
  "id": 816
},
{
  "name": "Delek",
  weight: 0,
  "id": 817
},
{
  "name": "Delivery Hero",
  weight: 0,
  "id": 818
},
{
  "name": "Delphi Technologies",
  weight: 0,
  "id": 819
},
{
  "name": "Delta Air Lines",
  weight: 0,
  "id": 820
},
{
  "name": "Delta Electronics",
  weight: 0,
  "id": 821
},
{
  "name": "Demant",
  weight: 0,
  "id": 822
},
{
  "name": "DeNA Co.",
  weight: 0,
  "id": 823
},
{
  "name": "Denbury Resources",
  weight: 0,
  "id": 824
},
{
  "name": "Denso",
  weight: 0,
  "id": 825
},
{
  "name": "Dentsply Sirona",
  weight: 0,
  "id": 826
},
{
  "name": "Dentsu",
  weight: 0,
  "id": 827
},
{
  "name": "Derichebourg",
  weight: 0,
  "id": 828
},
{
  "name": "Designer Brands",
  weight: 0,
  "id": 829
},
{
  "name": "Deutsche Bank",
  weight: 0,
  "id": 830
},
{
  "name": "Deutsche Boerse",
  weight: 0,
  "id": 831
},
{
  "name": "Deutsche Pfandbriefbank",
  weight: 0,
  "id": 832
},
{
  "name": "Deutsche Post",
  weight: 0,
  "id": 833
},
{
  "name": "Deutsche Telekom",
  weight: 0,
  "id": 834
},
{
  "name": "Deutz",
  weight: 0,
  "id": 835
},
{
  "name": "Devon Energy",
  weight: 0,
  "id": 836
},
{
  "name": "Devro",
  weight: 0,
  "id": 837
},
{
  "name": "DexCom",
  weight: 0,
  "id": 838
},
{
  "name": "DFDS",
  weight: 0,
  "id": 839
}]

export default function portfolio(state: IPortfolioItem[] = initSate, action: IPortfolioAction) {
  switch (action.type) {
    case PortfolioActions.addStock:
      return [...state, action.payload];

    case PortfolioActions.removeStock:
      return state.filter(item => item.id !== (action.payload as number));

    case PortfolioActions.updateStock:
      let result = state.map(item => (item.id !== action.payload.id ? item : { ...item, ...action.payload }));
      console.log(result);
      return result;

    case PortfolioActions.equalWeight:
      return state.map(x => ({ ...x, weight: round((1 / state.length) * 100, 6) }));

    case PortfolioActions.redistribute:
      let total = state.reduce((acc, current) => (acc += +current.weight), 0);
      return state.map(x => {
        let weight = +x.weight / total;
        let finalWeight = Number.isNaN(weight) ? 1 / state.length : weight;

        return {
          ...x,
          weight: round(finalWeight * 100, 6)
        };
      });

    default:
      return state;
  }
}
