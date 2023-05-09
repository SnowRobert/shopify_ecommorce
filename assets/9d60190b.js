import{r as P,C as M,j as Yi}from"./index.b5c85110.js";import{f as Fi}from"./92add5bc.js";import{u as Zi,C as wi,a as xi,b as Wi,c as zi,d as Ji,e as ci,f as hi,g as Xi,h as Qi,i as qi}from"./ac832d7f.js";import"./4b26e715.js";import"./cac28650.js";import"./5eee88f8.js";import"./e933bd1f.js";import"./d6282b27.js";var k;(function(i){i.Author="AUTHOR",i.BlogTitle="BLOG_TITLE",i.Id="ID",i.PublishedAt="PUBLISHED_AT",i.Relevance="RELEVANCE",i.Title="TITLE",i.UpdatedAt="UPDATED_AT"})(k||(k={}));var j;(function(i){i.Handle="HANDLE",i.Id="ID",i.Relevance="RELEVANCE",i.Title="TITLE"})(j||(j={}));var m;(function(i){i.AmericanExpress="AMERICAN_EXPRESS",i.DinersClub="DINERS_CLUB",i.Discover="DISCOVER",i.Jcb="JCB",i.Mastercard="MASTERCARD",i.Visa="VISA"})(m||(m={}));var $;(function(i){i.Invalid="INVALID",i.InvalidMerchandiseLine="INVALID_MERCHANDISE_LINE",i.LessThan="LESS_THAN",i.MissingDiscountCode="MISSING_DISCOUNT_CODE",i.MissingNote="MISSING_NOTE"})($||($={}));var g;(function(i){i.AlreadyCompleted="ALREADY_COMPLETED",i.BadDomain="BAD_DOMAIN",i.Blank="BLANK",i.CartDoesNotMeetDiscountRequirementsNotice="CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE",i.CustomerAlreadyUsedOncePerCustomerDiscountNotice="CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE",i.DiscountAlreadyApplied="DISCOUNT_ALREADY_APPLIED",i.DiscountDisabled="DISCOUNT_DISABLED",i.DiscountExpired="DISCOUNT_EXPIRED",i.DiscountLimitReached="DISCOUNT_LIMIT_REACHED",i.DiscountNotFound="DISCOUNT_NOT_FOUND",i.Empty="EMPTY",i.ExpiredQueueToken="EXPIRED_QUEUE_TOKEN",i.GiftCardAlreadyApplied="GIFT_CARD_ALREADY_APPLIED",i.GiftCardCodeInvalid="GIFT_CARD_CODE_INVALID",i.GiftCardCurrencyMismatch="GIFT_CARD_CURRENCY_MISMATCH",i.GiftCardDepleted="GIFT_CARD_DEPLETED",i.GiftCardDisabled="GIFT_CARD_DISABLED",i.GiftCardExpired="GIFT_CARD_EXPIRED",i.GiftCardNotFound="GIFT_CARD_NOT_FOUND",i.GiftCardUnusable="GIFT_CARD_UNUSABLE",i.GreaterThanOrEqualTo="GREATER_THAN_OR_EQUAL_TO",i.Invalid="INVALID",i.InvalidCountryAndCurrency="INVALID_COUNTRY_AND_CURRENCY",i.InvalidForCountry="INVALID_FOR_COUNTRY",i.InvalidForCountryAndProvince="INVALID_FOR_COUNTRY_AND_PROVINCE",i.InvalidProvinceInCountry="INVALID_PROVINCE_IN_COUNTRY",i.InvalidQueueToken="INVALID_QUEUE_TOKEN",i.InvalidRegionInCountry="INVALID_REGION_IN_COUNTRY",i.InvalidStateInCountry="INVALID_STATE_IN_COUNTRY",i.LessThan="LESS_THAN",i.LessThanOrEqualTo="LESS_THAN_OR_EQUAL_TO",i.LineItemNotFound="LINE_ITEM_NOT_FOUND",i.Locked="LOCKED",i.MissingPaymentInput="MISSING_PAYMENT_INPUT",i.NotEnoughInStock="NOT_ENOUGH_IN_STOCK",i.NotSupported="NOT_SUPPORTED",i.Present="PRESENT",i.ShippingRateExpired="SHIPPING_RATE_EXPIRED",i.ThrottledDuringCheckout="THROTTLED_DURING_CHECKOUT",i.TooLong="TOO_LONG",i.TotalPriceMismatch="TOTAL_PRICE_MISMATCH",i.UnableToApply="UNABLE_TO_APPLY"})(g||(g={}));var n;(function(i){i.Id="ID",i.Relevance="RELEVANCE",i.Title="TITLE",i.UpdatedAt="UPDATED_AT"})(n||(n={}));var Y;(function(i){i.Ac="AC",i.Ad="AD",i.Ae="AE",i.Af="AF",i.Ag="AG",i.Ai="AI",i.Al="AL",i.Am="AM",i.An="AN",i.Ao="AO",i.Ar="AR",i.At="AT",i.Au="AU",i.Aw="AW",i.Ax="AX",i.Az="AZ",i.Ba="BA",i.Bb="BB",i.Bd="BD",i.Be="BE",i.Bf="BF",i.Bg="BG",i.Bh="BH",i.Bi="BI",i.Bj="BJ",i.Bl="BL",i.Bm="BM",i.Bn="BN",i.Bo="BO",i.Bq="BQ",i.Br="BR",i.Bs="BS",i.Bt="BT",i.Bv="BV",i.Bw="BW",i.By="BY",i.Bz="BZ",i.Ca="CA",i.Cc="CC",i.Cd="CD",i.Cf="CF",i.Cg="CG",i.Ch="CH",i.Ci="CI",i.Ck="CK",i.Cl="CL",i.Cm="CM",i.Cn="CN",i.Co="CO",i.Cr="CR",i.Cu="CU",i.Cv="CV",i.Cw="CW",i.Cx="CX",i.Cy="CY",i.Cz="CZ",i.De="DE",i.Dj="DJ",i.Dk="DK",i.Dm="DM",i.Do="DO",i.Dz="DZ",i.Ec="EC",i.Ee="EE",i.Eg="EG",i.Eh="EH",i.Er="ER",i.Es="ES",i.Et="ET",i.Fi="FI",i.Fj="FJ",i.Fk="FK",i.Fo="FO",i.Fr="FR",i.Ga="GA",i.Gb="GB",i.Gd="GD",i.Ge="GE",i.Gf="GF",i.Gg="GG",i.Gh="GH",i.Gi="GI",i.Gl="GL",i.Gm="GM",i.Gn="GN",i.Gp="GP",i.Gq="GQ",i.Gr="GR",i.Gs="GS",i.Gt="GT",i.Gw="GW",i.Gy="GY",i.Hk="HK",i.Hm="HM",i.Hn="HN",i.Hr="HR",i.Ht="HT",i.Hu="HU",i.Id="ID",i.Ie="IE",i.Il="IL",i.Im="IM",i.In="IN",i.Io="IO",i.Iq="IQ",i.Ir="IR",i.Is="IS",i.It="IT",i.Je="JE",i.Jm="JM",i.Jo="JO",i.Jp="JP",i.Ke="KE",i.Kg="KG",i.Kh="KH",i.Ki="KI",i.Km="KM",i.Kn="KN",i.Kp="KP",i.Kr="KR",i.Kw="KW",i.Ky="KY",i.Kz="KZ",i.La="LA",i.Lb="LB",i.Lc="LC",i.Li="LI",i.Lk="LK",i.Lr="LR",i.Ls="LS",i.Lt="LT",i.Lu="LU",i.Lv="LV",i.Ly="LY",i.Ma="MA",i.Mc="MC",i.Md="MD",i.Me="ME",i.Mf="MF",i.Mg="MG",i.Mk="MK",i.Ml="ML",i.Mm="MM",i.Mn="MN",i.Mo="MO",i.Mq="MQ",i.Mr="MR",i.Ms="MS",i.Mt="MT",i.Mu="MU",i.Mv="MV",i.Mw="MW",i.Mx="MX",i.My="MY",i.Mz="MZ",i.Na="NA",i.Nc="NC",i.Ne="NE",i.Nf="NF",i.Ng="NG",i.Ni="NI",i.Nl="NL",i.No="NO",i.Np="NP",i.Nr="NR",i.Nu="NU",i.Nz="NZ",i.Om="OM",i.Pa="PA",i.Pe="PE",i.Pf="PF",i.Pg="PG",i.Ph="PH",i.Pk="PK",i.Pl="PL",i.Pm="PM",i.Pn="PN",i.Ps="PS",i.Pt="PT",i.Py="PY",i.Qa="QA",i.Re="RE",i.Ro="RO",i.Rs="RS",i.Ru="RU",i.Rw="RW",i.Sa="SA",i.Sb="SB",i.Sc="SC",i.Sd="SD",i.Se="SE",i.Sg="SG",i.Sh="SH",i.Si="SI",i.Sj="SJ",i.Sk="SK",i.Sl="SL",i.Sm="SM",i.Sn="SN",i.So="SO",i.Sr="SR",i.Ss="SS",i.St="ST",i.Sv="SV",i.Sx="SX",i.Sy="SY",i.Sz="SZ",i.Ta="TA",i.Tc="TC",i.Td="TD",i.Tf="TF",i.Tg="TG",i.Th="TH",i.Tj="TJ",i.Tk="TK",i.Tl="TL",i.Tm="TM",i.Tn="TN",i.To="TO",i.Tr="TR",i.Tt="TT",i.Tv="TV",i.Tw="TW",i.Tz="TZ",i.Ua="UA",i.Ug="UG",i.Um="UM",i.Us="US",i.Uy="UY",i.Uz="UZ",i.Va="VA",i.Vc="VC",i.Ve="VE",i.Vg="VG",i.Vn="VN",i.Vu="VU",i.Wf="WF",i.Ws="WS",i.Xk="XK",i.Ye="YE",i.Yt="YT",i.Za="ZA",i.Zm="ZM",i.Zw="ZW",i.Zz="ZZ"})(Y||(Y={}));var y;(function(i){i.Bottom="BOTTOM",i.Center="CENTER",i.Left="LEFT",i.Right="RIGHT",i.Top="TOP"})(y||(y={}));var r;(function(i){i.Aed="AED",i.Afn="AFN",i.All="ALL",i.Amd="AMD",i.Ang="ANG",i.Aoa="AOA",i.Ars="ARS",i.Aud="AUD",i.Awg="AWG",i.Azn="AZN",i.Bam="BAM",i.Bbd="BBD",i.Bdt="BDT",i.Bgn="BGN",i.Bhd="BHD",i.Bif="BIF",i.Bmd="BMD",i.Bnd="BND",i.Bob="BOB",i.Brl="BRL",i.Bsd="BSD",i.Btn="BTN",i.Bwp="BWP",i.Byn="BYN",i.Byr="BYR",i.Bzd="BZD",i.Cad="CAD",i.Cdf="CDF",i.Chf="CHF",i.Clp="CLP",i.Cny="CNY",i.Cop="COP",i.Crc="CRC",i.Cve="CVE",i.Czk="CZK",i.Djf="DJF",i.Dkk="DKK",i.Dop="DOP",i.Dzd="DZD",i.Egp="EGP",i.Ern="ERN",i.Etb="ETB",i.Eur="EUR",i.Fjd="FJD",i.Fkp="FKP",i.Gbp="GBP",i.Gel="GEL",i.Ghs="GHS",i.Gip="GIP",i.Gmd="GMD",i.Gnf="GNF",i.Gtq="GTQ",i.Gyd="GYD",i.Hkd="HKD",i.Hnl="HNL",i.Hrk="HRK",i.Htg="HTG",i.Huf="HUF",i.Idr="IDR",i.Ils="ILS",i.Inr="INR",i.Iqd="IQD",i.Irr="IRR",i.Isk="ISK",i.Jep="JEP",i.Jmd="JMD",i.Jod="JOD",i.Jpy="JPY",i.Kes="KES",i.Kgs="KGS",i.Khr="KHR",i.Kid="KID",i.Kmf="KMF",i.Krw="KRW",i.Kwd="KWD",i.Kyd="KYD",i.Kzt="KZT",i.Lak="LAK",i.Lbp="LBP",i.Lkr="LKR",i.Lrd="LRD",i.Lsl="LSL",i.Ltl="LTL",i.Lvl="LVL",i.Lyd="LYD",i.Mad="MAD",i.Mdl="MDL",i.Mga="MGA",i.Mkd="MKD",i.Mmk="MMK",i.Mnt="MNT",i.Mop="MOP",i.Mru="MRU",i.Mur="MUR",i.Mvr="MVR",i.Mwk="MWK",i.Mxn="MXN",i.Myr="MYR",i.Mzn="MZN",i.Nad="NAD",i.Ngn="NGN",i.Nio="NIO",i.Nok="NOK",i.Npr="NPR",i.Nzd="NZD",i.Omr="OMR",i.Pab="PAB",i.Pen="PEN",i.Pgk="PGK",i.Php="PHP",i.Pkr="PKR",i.Pln="PLN",i.Pyg="PYG",i.Qar="QAR",i.Ron="RON",i.Rsd="RSD",i.Rub="RUB",i.Rwf="RWF",i.Sar="SAR",i.Sbd="SBD",i.Scr="SCR",i.Sdg="SDG",i.Sek="SEK",i.Sgd="SGD",i.Shp="SHP",i.Sll="SLL",i.Sos="SOS",i.Srd="SRD",i.Ssp="SSP",i.Std="STD",i.Stn="STN",i.Syp="SYP",i.Szl="SZL",i.Thb="THB",i.Tjs="TJS",i.Tmt="TMT",i.Tnd="TND",i.Top="TOP",i.Try="TRY",i.Ttd="TTD",i.Twd="TWD",i.Tzs="TZS",i.Uah="UAH",i.Ugx="UGX",i.Usd="USD",i.Uyu="UYU",i.Uzs="UZS",i.Ved="VED",i.Vef="VEF",i.Ves="VES",i.Vnd="VND",i.Vuv="VUV",i.Wst="WST",i.Xaf="XAF",i.Xcd="XCD",i.Xof="XOF",i.Xpf="XPF",i.Xxx="XXX",i.Yer="YER",i.Zar="ZAR",i.Zmw="ZMW"})(r||(r={}));var d;(function(i){i.AlreadyEnabled="ALREADY_ENABLED",i.BadDomain="BAD_DOMAIN",i.Blank="BLANK",i.ContainsHtmlTags="CONTAINS_HTML_TAGS",i.ContainsUrl="CONTAINS_URL",i.CustomerDisabled="CUSTOMER_DISABLED",i.Invalid="INVALID",i.InvalidMultipassRequest="INVALID_MULTIPASS_REQUEST",i.NotFound="NOT_FOUND",i.PasswordStartsOrEndsWithWhitespace="PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE",i.Taken="TAKEN",i.TokenInvalid="TOKEN_INVALID",i.TooLong="TOO_LONG",i.TooShort="TOO_SHORT",i.UnidentifiedCustomer="UNIDENTIFIED_CUSTOMER"})(d||(d={}));var u;(function(i){i.Local="LOCAL",i.None="NONE",i.PickupPoint="PICKUP_POINT",i.PickUp="PICK_UP",i.Retail="RETAIL",i.Shipping="SHIPPING"})(u||(u={}));var e;(function(i){i.AndroidPay="ANDROID_PAY",i.ApplePay="APPLE_PAY",i.GooglePay="GOOGLE_PAY",i.ShopifyPay="SHOPIFY_PAY"})(e||(e={}));var o;(function(i){i.Across="ACROSS",i.Each="EACH",i.One="ONE"})(o||(o={}));var C;(function(i){i.All="ALL",i.Entitled="ENTITLED",i.Explicit="EXPLICIT"})(C||(C={}));var ii;(function(i){i.LineItem="LINE_ITEM",i.ShippingLine="SHIPPING_LINE"})(ii||(ii={}));var Ii;(function(i){i.Boolean="BOOLEAN",i.List="LIST",i.PriceRange="PRICE_RANGE"})(Ii||(Ii={}));var Ai;(function(i){i.Jpg="JPG",i.Png="PNG",i.Webp="WEBP"})(Ai||(Ai={}));var Ti;(function(i){i.Af="AF",i.Ak="AK",i.Am="AM",i.Ar="AR",i.As="AS",i.Az="AZ",i.Be="BE",i.Bg="BG",i.Bm="BM",i.Bn="BN",i.Bo="BO",i.Br="BR",i.Bs="BS",i.Ca="CA",i.Ce="CE",i.Cs="CS",i.Cu="CU",i.Cy="CY",i.Da="DA",i.De="DE",i.Dz="DZ",i.Ee="EE",i.El="EL",i.En="EN",i.Eo="EO",i.Es="ES",i.Et="ET",i.Eu="EU",i.Fa="FA",i.Ff="FF",i.Fi="FI",i.Fo="FO",i.Fr="FR",i.Fy="FY",i.Ga="GA",i.Gd="GD",i.Gl="GL",i.Gu="GU",i.Gv="GV",i.Ha="HA",i.He="HE",i.Hi="HI",i.Hr="HR",i.Hu="HU",i.Hy="HY",i.Ia="IA",i.Id="ID",i.Ig="IG",i.Ii="II",i.Is="IS",i.It="IT",i.Ja="JA",i.Jv="JV",i.Ka="KA",i.Ki="KI",i.Kk="KK",i.Kl="KL",i.Km="KM",i.Kn="KN",i.Ko="KO",i.Ks="KS",i.Ku="KU",i.Kw="KW",i.Ky="KY",i.Lb="LB",i.Lg="LG",i.Ln="LN",i.Lo="LO",i.Lt="LT",i.Lu="LU",i.Lv="LV",i.Mg="MG",i.Mi="MI",i.Mk="MK",i.Ml="ML",i.Mn="MN",i.Mr="MR",i.Ms="MS",i.Mt="MT",i.My="MY",i.Nb="NB",i.Nd="ND",i.Ne="NE",i.Nl="NL",i.Nn="NN",i.No="NO",i.Om="OM",i.Or="OR",i.Os="OS",i.Pa="PA",i.Pl="PL",i.Ps="PS",i.Pt="PT",i.PtBr="PT_BR",i.PtPt="PT_PT",i.Qu="QU",i.Rm="RM",i.Rn="RN",i.Ro="RO",i.Ru="RU",i.Rw="RW",i.Sd="SD",i.Se="SE",i.Sg="SG",i.Si="SI",i.Sk="SK",i.Sl="SL",i.Sn="SN",i.So="SO",i.Sq="SQ",i.Sr="SR",i.Su="SU",i.Sv="SV",i.Sw="SW",i.Ta="TA",i.Te="TE",i.Tg="TG",i.Th="TH",i.Ti="TI",i.Tk="TK",i.To="TO",i.Tr="TR",i.Tt="TT",i.Ug="UG",i.Uk="UK",i.Ur="UR",i.Uz="UZ",i.Vi="VI",i.Vo="VO",i.Wo="WO",i.Xh="XH",i.Yi="YI",i.Yo="YO",i.Zh="ZH",i.ZhCn="ZH_CN",i.ZhTw="ZH_TW",i.Zu="ZU"})(Ti||(Ti={}));var Ei;(function(i){i.City="CITY",i.Distance="DISTANCE",i.Id="ID",i.Name="NAME"})(Ei||(Ei={}));var Ni;(function(i){i.ExternalVideo="EXTERNAL_VIDEO",i.Image="IMAGE",i.Model_3D="MODEL_3D",i.Video="VIDEO"})(Ni||(Ni={}));var Di;(function(i){i.Vimeo="VIMEO",i.Youtube="YOUTUBE"})(Di||(Di={}));var si;(function(i){i.Article="ARTICLE",i.Blog="BLOG",i.Catalog="CATALOG",i.Collection="COLLECTION",i.Collections="COLLECTIONS",i.Frontpage="FRONTPAGE",i.Http="HTTP",i.Page="PAGE",i.Product="PRODUCT",i.Search="SEARCH",i.ShopPolicy="SHOP_POLICY"})(si||(si={}));var Ri;(function(i){i.Customer="CUSTOMER",i.Declined="DECLINED",i.Fraud="FRAUD",i.Inventory="INVENTORY",i.Other="OTHER"})(Ri||(Ri={}));var li;(function(i){i.Authorized="AUTHORIZED",i.Paid="PAID",i.PartiallyPaid="PARTIALLY_PAID",i.PartiallyRefunded="PARTIALLY_REFUNDED",i.Pending="PENDING",i.Refunded="REFUNDED",i.Voided="VOIDED"})(li||(li={}));var Si;(function(i){i.Fulfilled="FULFILLED",i.InProgress="IN_PROGRESS",i.OnHold="ON_HOLD",i.Open="OPEN",i.PartiallyFulfilled="PARTIALLY_FULFILLED",i.PendingFulfillment="PENDING_FULFILLMENT",i.Restocked="RESTOCKED",i.Scheduled="SCHEDULED",i.Unfulfilled="UNFULFILLED"})(Si||(Si={}));var Oi;(function(i){i.Id="ID",i.ProcessedAt="PROCESSED_AT",i.Relevance="RELEVANCE",i.TotalPrice="TOTAL_PRICE"})(Oi||(Oi={}));var Pi;(function(i){i.Id="ID",i.Relevance="RELEVANCE",i.Title="TITLE",i.UpdatedAt="UPDATED_AT"})(Pi||(Pi={}));var _i;(function(i){i.ApplePay="APPLE_PAY",i.GooglePay="GOOGLE_PAY",i.ShopifyPay="SHOPIFY_PAY",i.StripeVaultToken="STRIPE_VAULT_TOKEN",i.Vault="VAULT"})(_i||(_i={}));var Gi;(function(i){i.BestSelling="BEST_SELLING",i.CollectionDefault="COLLECTION_DEFAULT",i.Created="CREATED",i.Id="ID",i.Manual="MANUAL",i.Price="PRICE",i.Relevance="RELEVANCE",i.Title="TITLE"})(Gi||(Gi={}));var fi;(function(i){i.CreatedAt="CREATED_AT",i.Id="ID",i.Position="POSITION",i.Relevance="RELEVANCE"})(fi||(fi={}));var Mi;(function(i){i.Id="ID",i.Position="POSITION",i.Relevance="RELEVANCE"})(Mi||(Mi={}));var Ui;(function(i){i.BestSelling="BEST_SELLING",i.CreatedAt="CREATED_AT",i.Id="ID",i.Price="PRICE",i.ProductType="PRODUCT_TYPE",i.Relevance="RELEVANCE",i.Title="TITLE",i.UpdatedAt="UPDATED_AT",i.Vendor="VENDOR"})(Ui||(Ui={}));var pi;(function(i){i.Id="ID",i.Position="POSITION",i.Relevance="RELEVANCE",i.Sku="SKU",i.Title="TITLE"})(pi||(pi={}));var Bi;(function(i){i.Percentage="PERCENTAGE",i.Price="PRICE"})(Bi||(Bi={}));var vi;(function(i){i.Authorization="AUTHORIZATION",i.Capture="CAPTURE",i.Change="CHANGE",i.EmvAuthorization="EMV_AUTHORIZATION",i.Sale="SALE"})(vi||(vi={}));var ai;(function(i){i.Error="ERROR",i.Failure="FAILURE",i.Pending="PENDING",i.Success="SUCCESS"})(ai||(ai={}));var Hi;(function(i){i.Area="AREA",i.Length="LENGTH",i.Volume="VOLUME",i.Weight="WEIGHT"})(Hi||(Hi={}));var ti;(function(i){i.Cl="CL",i.Cm="CM",i.G="G",i.Kg="KG",i.L="L",i.M="M",i.M2="M2",i.M3="M3",i.Mg="MG",i.Ml="ML",i.Mm="MM"})(ti||(ti={}));var Li;(function(i){i.ImperialSystem="IMPERIAL_SYSTEM",i.MetricSystem="METRIC_SYSTEM"})(Li||(Li={}));var Vi;(function(i){i.Grams="GRAMS",i.Kilograms="KILOGRAMS",i.Ounces="OUNCES",i.Pounds="POUNDS"})(Vi||(Vi={}));const ki=P.exports.createContext(null),b="shopifyCartId";function ji(i,N){switch(N.type){case"cartFetch":{if(i.status==="uninitialized")return{status:"fetching"};break}case"cartCreate":{if(i.status==="uninitialized")return{status:"creating"};break}case"resolve":{if(["updating","fetching","creating"].includes(i.status))return{status:"idle",cart:N.cart};break}case"reject":{if(N.errors){console.group("%cCart Error:","color:red");for(const[_,f]of N.errors.entries())console.log(`%c${_+1}. `+f.message,"color:red");console.groupEnd()}if(i.status==="fetching"||i.status==="creating")return{status:"uninitialized",error:N.errors};if(i.status==="updating")return{status:"idle",cart:i.lastValidCart,error:N.errors};break}case"resetCart":{if(i.status==="fetching")return{status:"uninitialized"};break}case"addLineItem":{if(i.status==="idle")return{status:"updating",cart:i.cart,lastValidCart:i.cart};break}case"removeLineItem":{if(i.status==="idle")return{status:"updating",cart:{...i.cart,lines:i.cart.lines.filter(({id:_})=>!N.lines.includes(_))},lastValidCart:i.cart};break}case"updateLineItem":{if(i.status==="idle")return{status:"updating",cart:{...i.cart,lines:i.cart.lines.map(_=>{const f=N.lines.find(({id:U})=>U===_.id);return f&&f.quantity?{..._,quantity:f.quantity}:_})},lastValidCart:i.cart};break}case"noteUpdate":{if(i.status==="idle")return{status:"updating",cart:i.cart,lastValidCart:i.cart};break}case"buyerIdentityUpdate":{if(i.status==="idle")return{status:"updating",cart:i.cart,lastValidCart:i.cart};break}case"cartAttributesUpdate":{if(i.status==="idle")return{status:"updating",cart:i.cart,lastValidCart:i.cart};break}case"discountCodesUpdate":{if(i.status==="idle")return{status:"updating",cart:i.cart,lastValidCart:i.cart};break}}throw new Error(`Cannot dispatch event (${N.type}) for current cart state (${i.status})`)}function ei({children:i,numCartLines:N,onCreate:_,onLineAdd:f,onLineRemove:U,onLineUpdate:v,onNoteUpdate:a,onBuyerIdentityUpdate:H,onAttributesUpdate:t,onDiscountCodesUpdate:L,data:p,cartFragment:S=qi,customerAccessToken:B,countryCode:R=Y.Us}){var X,Q;R&&(R=R.toUpperCase());const bi=p?{status:"idle",cart:G(p)}:{status:"uninitialized"},[D,s]=P.exports.useReducer((A,T)=>ji(A,T),bi),O=Zi(),F=D.status==="idle"&&R!==((Q=(X=D==null?void 0:D.cart)==null?void 0:X.buyerIdentity)==null?void 0:Q.countryCode)&&!D.error,Z=P.exports.useCallback(async A=>{s({type:"cartFetch"});const{data:T}=await O({query:wi(S),variables:{id:A,numCartLines:N,country:R}});if(!(T!=null&&T.cart)){window.localStorage.removeItem(b),s({type:"resetCart"});return}s({type:"resolve",cart:G(T.cart)})},[O,S,N,R]),K=P.exports.useCallback(async A=>{var I,l,q;s({type:"cartCreate"}),_==null||_(),R&&!((I=A.buyerIdentity)!=null&&I.countryCode)&&(A.buyerIdentity==null&&(A.buyerIdentity={}),A.buyerIdentity.countryCode=R),B&&!((l=A.buyerIdentity)!=null&&l.customerAccessToken)&&(A.buyerIdentity==null&&(A.buyerIdentity={}),A.buyerIdentity.customerAccessToken=B);const{data:T,errors:E}=await O({query:xi(S),variables:{input:A,numCartLines:N,country:R}});E&&s({type:"reject",errors:E}),(q=T==null?void 0:T.cartCreate)!=null&&q.cart&&(A.lines&&M.publish(M.eventNames.ADD_TO_CART,!0,{addedCartLines:A.lines,cart:T.cartCreate.cart}),s({type:"resolve",cart:G(T.cartCreate.cart)}),window.localStorage.setItem(b,T.cartCreate.cart.id))},[_,R,O,S,N,B]),w=P.exports.useCallback(async(A,T)=>{var E;if(T.status==="idle"){s({type:"addLineItem"}),f==null||f();const{data:I,errors:l}=await O({query:Wi(S),variables:{cartId:T.cart.id,lines:A,numCartLines:N,country:R}});l&&s({type:"reject",errors:l}),(E=I==null?void 0:I.cartLinesAdd)!=null&&E.cart&&(M.publish(M.eventNames.ADD_TO_CART,!0,{addedCartLines:A,cart:I.cartLinesAdd.cart}),s({type:"resolve",cart:G(I.cartLinesAdd.cart)}))}},[f,O,S,N,R]),x=P.exports.useCallback(async(A,T)=>{var E;if(T.status==="idle"){s({type:"removeLineItem",lines:A}),U==null||U();const{data:I,errors:l}=await O({query:zi(S),variables:{cartId:T.cart.id,lines:A,numCartLines:N,country:R}});l&&s({type:"reject",errors:l}),(E=I==null?void 0:I.cartLinesRemove)!=null&&E.cart&&(M.publish(M.eventNames.REMOVE_FROM_CART,!0,{removedCartLines:A,cart:I.cartLinesRemove.cart}),s({type:"resolve",cart:G(I.cartLinesRemove.cart)}))}},[U,O,S,N,R]),W=P.exports.useCallback(async(A,T)=>{var E;if(T.status==="idle"){s({type:"updateLineItem",lines:A}),v==null||v();const{data:I,errors:l}=await O({query:Ji(S),variables:{cartId:T.cart.id,lines:A,numCartLines:N,country:R}});l&&s({type:"reject",errors:l}),(E=I==null?void 0:I.cartLinesUpdate)!=null&&E.cart&&(M.publish(M.eventNames.UPDATE_CART,!0,{updatedCartLines:A,oldCart:T.cart}),s({type:"resolve",cart:G(I.cartLinesUpdate.cart)}))}},[v,O,S,N,R]),z=P.exports.useCallback(async(A,T)=>{var E;if(T.status==="idle"){s({type:"noteUpdate"}),a==null||a();const{data:I,errors:l}=await O({query:ci(S),variables:{cartId:T.cart.id,note:A,numCartLines:N,country:R}});l&&s({type:"reject",errors:l}),(E=I==null?void 0:I.cartNoteUpdate)!=null&&E.cart&&s({type:"resolve",cart:G(I.cartNoteUpdate.cart)})}},[a,O,S,N,R]),V=P.exports.useCallback(async(A,T)=>{var E;if(T.status==="idle"){s({type:"buyerIdentityUpdate"}),H==null||H();const{data:I,errors:l}=await O({query:hi(S),variables:{cartId:T.cart.id,buyerIdentity:A,numCartLines:N,country:R}});l&&s({type:"reject",errors:l}),(E=I==null?void 0:I.cartBuyerIdentityUpdate)!=null&&E.cart&&s({type:"resolve",cart:G(I.cartBuyerIdentityUpdate.cart)})}},[H,O,S,N,R]),J=P.exports.useCallback(async(A,T)=>{var E;if(T.status==="idle"){s({type:"cartAttributesUpdate"}),t==null||t();const{data:I,errors:l}=await O({query:Xi(S),variables:{cartId:T.cart.id,attributes:A,numCartLines:N,country:R}});l&&s({type:"reject",errors:l}),(E=I==null?void 0:I.cartAttributesUpdate)!=null&&E.cart&&s({type:"resolve",cart:G(I.cartAttributesUpdate.cart)})}},[t,O,S,N,R]),c=P.exports.useCallback(async(A,T)=>{var E;if(T.status==="idle"){s({type:"discountCodesUpdate"}),L==null||L();const{data:I,errors:l}=await O({query:Qi(S),variables:{cartId:T.cart.id,discountCodes:A,numCartLines:N,country:R}});l&&s({type:"reject",errors:l}),(E=I==null?void 0:I.cartDiscountCodesUpdate)!=null&&E.cart&&(M.publish(M.eventNames.DISCOUNT_CODE_UPDATED,!0,{updatedDiscountCodes:A,cart:I.cartDiscountCodesUpdate.cart}),s({type:"resolve",cart:G(I.cartDiscountCodesUpdate.cart)}))}},[L,O,S,N,R]),h=P.exports.useRef(!1);P.exports.useEffect(()=>{localStorage.getItem(b)&&D.status==="uninitialized"&&!h.current&&(h.current=!0,Z(localStorage.getItem(b)))},[Z,D]),P.exports.useEffect(()=>{!F||V({countryCode:R,customerAccessToken:B},D)},[D,V,R,B,F]);const Ki=P.exports.useMemo(()=>{var A,T;return{..."cart"in D?D.cart:{lines:[],attributes:[],...p?G(p):{}},status:D.status,error:"error"in D?D.error:void 0,totalQuantity:"cart"in D&&(T=(A=D==null?void 0:D.cart)==null?void 0:A.totalQuantity)!=null?T:0,cartCreate:K,linesAdd(E){"cart"in D&&D.cart.id?w(E,D):K({lines:E})},linesRemove(E){x(E,D)},linesUpdate(E){W(E,D)},noteUpdate(E){z(E,D)},buyerIdentityUpdate(E){V(E,D)},cartAttributesUpdate(E){J(E,D)},discountCodesUpdate(E){c(E,D)},cartFragment:S}},[D,p,K,S,w,x,W,z,V,J,c]);return Yi(ki.Provider,{value:Ki,children:i})}function G(i){var N;return{...i,lines:Fi(i.lines),note:(N=i.note)!=null?N:void 0}}export{ei as CartProvider};
//# sourceMappingURL=9d60190b.js.map