const currencies = {
    "AFN": "AF", // Afghan Afghani
    "ALL": "AL", // Albanian Lek
    "DZD": "DZ", // Algerian Dinar
    "AOA": "AO", // Angolan Kwanza
    "ARS": "AR", // Argentine Peso
    "AUD": "AU", // Australian Dollar
    "AZN": "AZ", // Azerbaijani Manat
    "BAM": "BA", // Bosnia and Herzegovina Convertible Mark
    "BBD": "BB", // Barbadian Dollar
    "BDT": "BD", // Bangladeshi Taka
    "BGN": "BG", // Bulgarian Lev
    "BHD": "BH", // Bahraini Dinar
    "BIF": "BI", // Burundian Franc
    "BMD": "BM", // Bermudian Dollar
    "BND": "BN", // Brunei Dollar
    "BOB": "BO", // Bolivian Boliviano
    "BRL": "BR", // Brazilian Real
    "BSD": "BS", // Bahamian Dollar
    "BTN": "BT", // Bhutanese Ngultrum
    "BWP": "BW", // Botswana Pula
    "BYN": "BY", // Belarusian Ruble
    "BZD": "BZ", // Belize Dollar
    "CAD": "CA", // Canadian Dollar
    "CDF": "CD", // Congolese Franc
    "CHF": "CH", // Swiss Franc
    "CLP": "CL", // Chilean Peso
    "CNY": "CN", // Chinese Yuan
    "COP": "CO", // Colombian Peso
    "CRC": "CR", // Costa Rican Colón
    "CUP": "CU", // Cuban Peso
    "CVE": "CV", // Cape Verdean Escudo
    "CZK": "CZ", // Czech Koruna
    "DJF": "DJ", // Djiboutian Franc
    "DKK": "DK", // Danish Krone
    "DOP": "DO", // Dominican Peso
    "DZD": "DZ", // Algerian Dinar
    "EGP": "EG", // Egyptian Pound
    "ERN": "ER", // Eritrean Nakfa
    "ETB": "ET", // Ethiopian Birr
    "EUR": "EU", // Euro
    "FJD": "FJ", // Fijian Dollar
    "FKP": "FK", // Falkland Islands Pound
    "GBP": "GB", // British Pound Sterling
    "GEL": "GE", // Georgian Lari
    "GHS": "GH", // Ghanaian Cedi
    "GIP": "GI", // Gibraltar Pound
    "GMD": "GM", // Gambian Dalasi
    "GNF": "GN", // Guinean Franc
    "GTQ": "GT", // Guatemalan Quetzal
    "GYD": "GY", // Guyanese Dollar
    "HKD": "HK", // Hong Kong Dollar
    "HNL": "HN", // Honduran Lempira
    "HRK": "HR", // Croatian Kuna
    "HTG": "HT", // Haitian Gourde
    "HUF": "HU", // Hungarian Forint
    "IDR": "ID", // Indonesian Rupiah
    "ILS": "IL", // Israeli New Shekel
    "INR": "IN", // Indian Rupee
    "IQD": "IQ", // Iraqi Dinar
    "IRR": "IR", // Iranian Rial
    "ISK": "IS", // Icelandic Króna
    "JMD": "JM", // Jamaican Dollar
    "JOD": "JO", // Jordanian Dinar
    "JPY": "JP", // Japanese Yen
    "KES": "KE", // Kenyan Shilling
    "KGS": "KG", // Kyrgyzstani Som
    "KHR": "KH", // Cambodian Riel
    "KMF": "KM", // Comorian Franc
    "KPW": "KP", // North Korean Won
    "KRW": "KR", // South Korean Won
    "KWD": "KW", // Kuwaiti Dinar
    "KYD": "KY", // Cayman Islands Dollar
    "KZT": "KZ", // Kazakhstani Tenge
    "LAK": "LA", // Laotian Kip
    "LBP": "LB", // Lebanese Pound
    "LKR": "LK", // Sri Lankan Rupee
    "LRD": "LR", // Liberian Dollar
    "LSL": "LS", // Lesotho Loti
    "LYD": "LY", // Libyan Dinar
    "MAD": "MA", // Moroccan Dirham
    "MDL": "MD", // Moldovan Leu
    "MGA": "MG", // Malagasy Ariary
    "MKD": "MK", // Macedonian Denar
    "MMK": "MM", // Myanmar Kyat
    "MNT": "MN", // Mongolian Tögrög
    "MOP": "MO", // Macanese Pataca
    "MRU": "MR", // Mauritanian Ouguiya
    "MUR": "MU", // Mauritian Rupee
    "MVR": "MV", // Maldivian Rufiyaa
    "MWK": "MW", // Malawian Kwacha
    "MXN": "MX", // Mexican Peso
    "MYR": "MY", // Malaysian Ringgit
    "MZN": "MZ", // Mozambican Metical
    "NAD": "NA", // Namibian Dollar
    "NGN": "NG", // Nigerian Naira
    "NIO": "NI", // Nicaraguan Córdoba
    "NOK": "NO", // Norwegian Krone
    "NPR": "NP", // Nepalese Rupee
    "NZD": "NZ", // New Zealand Dollar
    "OMR": "OM", // Omani Rial
    "PAB": "PA", // Panamanian Balboa
    "PEN": "PE", // Peruvian Sol
    "PGK": "PG", // Papua New Guinean Kina
    "PHP": "PH", // Philippine Peso
    "PKR": "PK", // Pakistani Rupee
    "PLN": "PL", // Polish Zloty
    "PYG": "PY", // Paraguayan Guarani
    "QAR": "QA", // Qatari Rial
    "RON": "RO", // Romanian Leu
    "RSD": "RS", // Serbian Dinar
    "RUB": "RU", // Russian Ruble
    "RWF": "RW", // Rwandan Franc
    "SAR": "SA", // Saudi Riyal
    "SBD": "SB", // Solomon Islands Dollar
    "SCR": "SC", // Seychellois Rupee
    "SDG": "SD", // Sudanese Pound
    "SEK": "SE", // Swedish Krona
    "SGD": "SG", // Singapore Dollar
    "SHP": "SH", // Saint Helena Pound
    "SLL": "SL", // Sierra Leonean Leone
    "SOS": "SO", // Somali Shilling
    "SRD": "SR", // Surinamese Dollar
    "SSP": "SS", // South Sudanese Pound
    "STN": "ST", // São Tomé and Príncipe Dobra
    "SVC": "SV", // Salvadoran Colón
    "SZL": "SZ", // Swazi Lilangeni
    "THB": "TH", // Thai Baht
    "TJS": "TJ", // Tajikistani Somoni
    "TMT": "TM", // Turkmenistani Manat
    "TND": "TN", // Tunisian Dinar
    "TOP": "TO", // Tongan Paʻanga
    "TRY": "TR", // Turkish Lira
    "TTD": "TT", // Trinidad and Tobago Dollar
    "TWD": "TW", // New Taiwan Dollar
    "TZS": "TZ", // Tanzanian Shilling
    "UAH": "UA", // Ukrainian Hryvnia
    "UGX": "UG", // Ugandan Shilling
    "USD": "US", // United States Dollar
    "UYU": "UY", // Uruguayan Peso
    "UZS": "UZ", // Uzbekistani Som
    "VES": "VE", // Venezuelan Bolívar
    "VND": "VN", // Vietnamese Dong
    "VUV": "VU", // Vanuatu Vatu
    "WST": "WS", // Samoan Tala
    "XAF": "CM", // Central African CFA Franc
    "XCD": "AG", // East Caribbean Dollar
    "XOF": "BJ", // West African CFA Franc
    "XPF": "PF", // CFP Franc
    "YER": "YE", // Yemeni Rial
    "ZAR": "ZA", // South African Rand
    "ZMW": "ZM", // Zambian Kwacha
    "ZWL": "ZW"  // Zimbabwean Dollar
};
let baseURL = "https://hexarate.paikama.co/api/rates/latest/USD?target=INR"
let dropdown = document.querySelectorAll("select")
for(i in currencies){
    let newb = document.createElement("option")
    newb.innerText = i
    newb.value = i
    dropdown[0].appendChild(newb)
    if(newb.innerText == "USD"){
        newb.selected = true
    }
    let newb2 = document.createElement("option")
    newb2.innerText = i
    newb2.value = i
    dropdown[1].appendChild(newb2)
    if(newb2.innerText == "INR"){
        newb2.selected = true
    }
}
let values = Object.values(currencies);
let keys = Object.keys(currencies);
let image = document.querySelectorAll("img")
dropdown[0].addEventListener("change",upFlag)
dropdown[1].addEventListener("change",upFlag2)
function upFlag(){
    let countryCode = values[dropdown[0].selectedIndex]
    image[0].src = `https://flagsapi.com/${countryCode}/shiny/64.png`
}
function upFlag2(){
    let countryCode = values[dropdown[1].selectedIndex]
    image[1].src = `https://flagsapi.com/${countryCode}/shiny/64.png`
}
let container = document.querySelector("#container")
let inputValue = document.querySelector("input")
let newTag = document.createElement("h2")
document.querySelector("button").addEventListener("click",()=>{
    if(inputValue.value == ""){
        newTag.innerText = "Enter Some Value"
        newTag.style.textAlign = "center"
        newTag.style.paddingTop = "7px"
        container.appendChild(newTag)
    }
    else{
        let newURL = `https://hexarate.paikama.co/api/rates/latest/${keys[dropdown[0].selectedIndex]
        }?target=${keys[dropdown[1].selectedIndex]
        }`
        async function fk(){
            try {
                let promise = await fetch(newURL)
                let newPromise = await promise.json()
                let exr = newPromise.data.mid
                let fexr = exr * parseFloat(inputValue.value)
                newTag.innerText = fexr.toFixed(2)
                newTag.style.textAlign = "center"
                newTag.style.paddingTop = "7px"
                container.appendChild(newTag)
            } catch (error) {
                console.error("Error fetching data ",error)
                newTag.innerText = "Error fetching exchange rate";
                newTag.style.textAlign = "center";
                newTag.style.paddingTop = "7px";
                container.appendChild(newTag);
            }
        }
        fk()
    }
})