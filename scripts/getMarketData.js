// dependencies
const BT = require("../controlers/BittrexController");
const sql = require('../controlers/mysql2ORMController');
const moment = require('moment');

// methods
module.exports = {
    key: {
        BTC: 1,
        LTC: 2,
        DOGE: 3,
        VTC: 4,
        PPC: 5,
        FTC: 6,
        RDD: 7,
        NXT: 8,
        DASH: 9,
        POT: 10,
        BLK: 11,
        EMC2: 12,
        XMY: 13,
        EFL: 14,
        GLC: 15,
        SLR: 16,
        GRS: 17,
        NLG: 18,
        XWC: 19,
        MONA: 20,
        THC: 21,
        ENRG: 22,
        VRC: 23,
        CURE: 24,
        XMR: 25,
        CLOAK: 26,
        BSD: 27,
        KORE: 28,
        XDN: 29,
        NAV: 30,
        XST: 31,
        VIA: 32,
        PINK: 33,
        IOC: 34,
        CANN: 35,
        SYS: 36,
        NEOS: 37,
        DGB: 38,
        BTS: 39,
        BURST: 40,
        EXCL: 41,
        BITS: 42,
        DOPE: 43,
        BLOCK: 44,
        ABY: 45,
        XMG: 46,
        BAY: 47,
        XRP: 48,
        GAME: 49,
        NXS: 50,
        COVAL: 51,
        XCP: 52,
        BITB: 53,
        XVG: 54,
        GEO: 55,
        FLDC: 56,
        GRC: 57,
        FLO: 58,
        NBT: 59,
        XEM: 60,
        MUE: 61,
        DMD: 62,
        GAM: 63,
        SPHR: 64,
        OK: 65,
        AEON: 66,
        ETH: 67,
        TX: 68,
        EXP: 69,
        OMNI: 70,
        USDT: 71,
        AMP: 72,
        XLM: 73,
        BITCNY: 74,
        RVR: 75,
        EMC: 76,
        FCT: 77,
        MAID: 78,
        EGC: 79,
        SLS: 80,
        RADS: 81,
        DCR: 82,
        PIVX: 83,
        MEME: 84,
        STEEM: 85,
        '2GIVE': 86,
        LSK: 87,
        DGD: 88,
        BRK: 89,
        WAVES: 90,
        LBC: 91,
        SBD: 92,
        BRX: 93,
        ETC: 94,
        STRAT: 95,
        SYNX: 96,
        EBST: 97,
        VRM: 98,
        SEQ: 99,
        SNGLS: 100,
        REP: 101,
        SHIFT: 102,
        ARDR: 103,
        XZC: 104,
        NEO: 105,
        ZEC: 106,
        ZCL: 107,
        IOP: 108,
        GOLOS: 109,
        GBG: 110,
        UBQ: 111,
        KMD: 112,
        SIB: 113,
        ION: 114,
        QWARK: 115,
        CRW: 116,
        SWT: 117,
        MLN: 118,
        TKS: 119,
        ARK: 120,
        DYN: 121,
        MUSIC: 122,
        DTB: 123,
        INCNT: 124,
        GBYTE: 125,
        GNT: 126,
        NXC: 127,
        EDG: 128,
        MORE: 129,
        TRST: 130,
        WINGS: 131,
        RLC: 132,
        GNO: 133,
        GUP: 134,
        LUN: 135,
        HMQ: 136,
        ANT: 137,
        ZEN: 138,
        SC: 139,
        BAT: 140,
        '1ST': 141,
        QRL: 142,
        PTOY: 143,
        BNT: 144,
        NMR: 145,
        SNT: 146,
        DCT: 147,
        XEL: 148,
        MCO: 149,
        ADT: 150,
        FUN: 151,
        PAY: 152,
        MTL: 153,
        STORJ: 154,
        ADX: 155,
        OMG: 156,
        CVC: 157,
        PART: 158,
        QTUM: 159,
        BCH: 160,
        DNT: 161,
        ADA: 162,
        MANA: 163,
        SALT: 164,
        TIX: 165,
        RCN: 166,
        VIB: 167,
        MER: 168,
        POWR: 169,
        ENG: 170,
        UKG: 171,
        IGNIS: 172,
        SRN: 173,
        WAX: 174,
        ZRX: 175,
        VEE: 176,
        BCPT: 177,
        TRX: 178,
        TUSD: 179,
        LRC: 180,
        UP: 181,
        DMT: 182,
        POLY: 183,
        PRO: 184,
        BLT: 185,
        STORM: 186,
        AID: 187,
        NGC: 188,
        GTO: 189,
        OCN: 190,
        USD: 191,
        TUBE: 192,
        CBC: 193,
        CMCT: 194,
        NLC2: 195,
        BKX: 196,
        MFT: 197,
        LOOM: 198,
        RFR: 199,
        RVN: 200,
        BFT: 201,
        GO: 202,
        HYDRO: 203,
        UPP: 204,
        ENJ: 205,
        MET: 206,
        DTA: 207,
        EDR: 208,
        BOXX: 209,
        IHT: 210,
        XHV: 211,
        NPXS: 212,
        PMA: 213,
        PAL: 214,
        PAX: 215,
        ZIL: 216,
        MOC: 217,
        OST: 218,
        SPC: 219,
        MEDX: 220,
        BSV: 221,
        IOST: 222,
        XNK: 223,
        NCASH: 224,
        SOLVE: 225,
        USDS: 226,
        JNT: 227,
        LBA: 228,
        MOBI: 229,
        DENT: 230,
        DRGN: 231,
        VITE: 232,
        IOTX: 233,
        BTM: 234,
        ELF: 235,
        QNT: 236,
        BTU: 237,
        SPND: 238,
        BTT: 239,
        NKN: 240,
        GRIN: 241,
        CTXC: 242,
        HXRO: 243,
        SERV: 244,
        META: 245,
        FSN: 246,
        HST: 247,
        ANKR: 248,
        TRAC: 249,
        CRO: 250,
        ONT: 251,
        ONG: 252,
        AERGO: 253,
        TTC: 254,
        SLT: 255,
        PTON: 256,
        PI: 257,
        PLA: 258,
        ART: 259,
        VBK: 260,
        ORBS: 261,
        BORA: 262,
        CND: 263,
        TRIO: 264,
        FX: 265,
        ATOM: 266,
        OCEAN: 267,
        XYO: 268,
        WIB: 269,
        BWX: 270,
        SNX: 271,
        SUSD: 272,
        VDX: 273,
        COSM: 274,
        OGO: 275,
        ITM: 276,
        STPT: 277,
        LAMB: 278,
        FET: 279,
        MKR: 280,
        DAI: 281,
        CPT: 282,
        ABT: 283,
        PROM: 284,
        FTM: 285,
        ABYSS: 286,
        EOS: 287,
        FXC: 288
    },
    storeCurrencyList: async function() {
        try {
            let output = {};
            let connection = await sql.GetConnection();
            let currencyData = await BT.makeCurrencyArray();
            for (let i = 0; i < currencyData.length; i++) {
                datapoint = {
                        fieldA: 'currency',
                        fieldB: 'currencyLong',
                        fieldC: 'txfee',
                        ValueA: currencyData[i].currency,
                        ValueB: currencyData[i].currencyLong,
                        ValueC: JSON.stringify(currencyData[i].TxFee)
                    }
                    // console.log(datapoint);
                let response = await sql.insertOne(connection, "currencies", datapoint)
                output[currencyData[i].currency] = response.insertId;
            }

            return new Promise((resolve, reject) => {
                // if output is not null 
                if (output != null) {
                    console.log("resolving promise")
                    resolve(output);
                } else {
                    reject({ err: "code 500. currency id pair object null check the SQL connection" })
                }
            })
        } catch (err) {
            console.log("failed to store currency");
            throw err;
        }


    },

    storeLiveCurrencyData: async function() {
        let eth = [];
        let usd = [];
        let btc = [];
        // put entire thing in try catch
        try {
            let connection = await sql.GetConnection();
            let marketSummeries = await BT.getAllMarketSummeries();
            for (let i = 0; i < marketSummeries.length; i++) {
                let marketNameArray = marketSummeries[i].MarketName.split('-');
                // switch statement to push market summaries into corresponding arrays
                switch (marketNameArray[0]) {
                    case "ETH":
                        let etherdatapoint = {
                            ms: marketSummeries[i],
                            // foreign key
                            key: this.key[marketNameArray[1]]
                        }
                        eth.push(etherdatapoint);
                        break;

                    case "BTC":
                        let BitcoinDatapoint = {
                            ms: marketSummeries[i],
                            // foreign key
                            key: this.key[marketNameArray[1]]
                        }
                        btc.push(BitcoinDatapoint);
                        break;

                    case "USD":
                        let USDdatapoint = {
                            ms: marketSummeries[i],
                            // foreign key
                            key: this.key[marketNameArray[1]]
                        }
                        usd.push(USDdatapoint);
                        break;
                }
            }
            // loop through the arrays
            for (let i = 0; i < eth.length; i++) {
                let ethpoint = {
                        fieldA: 'foreignId',
                        fieldB: 'high',
                        fieldC: 'low',
                        fieldD: 'Volume',
                        fieldE: 'last',
                        fieldF: 'unixTimestamp',
                        fieldG: 'bid',
                        fieldH: 'ask',
                        fieldI: 'openBuys',
                        fieldJ: 'openSells',
                        fieldK: 'prevDay',
                        ValueA: eth[i].key,
                        ValueB: eth[i].ms.High,
                        ValueC: eth[i].ms.Low,
                        ValueD: eth[i].ms.Volume,
                        ValueE: eth[i].ms.Last,
                        // convert timestamp using moment to unix
                        ValueF: moment(eth[i].ms.timeStamp).unix(),
                        ValueG: eth[i].ms.Bid,
                        ValueH: eth[i].ms.Ask,
                        ValueI: eth[i].ms.OpenBuyOrders,
                        ValueJ: eth[i].ms.OpenSellOrders,
                        ValueK: eth[i].ms.PrevDay
                    }
                    // console.log(ethpoint);
                let ethResponse = await sql.insertEleven(connection, "eth", ethpoint)
                console.log(ethResponse);
            }
            return new Promise((resolve, reject) => {
                if (ethResponse) {
                    resolve("yay");
                } else {
                    reject({ err: "something went wrong" });
                }
            })

        } catch (err) {
            console.log("failed to push market summary data into sql");
            throw err;
        }
    }
}