define(["exports"],(function(e){"use strict";const i="Diagrammi laadimisel ilmnes viga.",a="Selles diagrammis on kokku ${ elementCount } tulpa. Ühe seeriaga tulpdiagrammidel on ${ totalLimit } tulba piirang. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",t="Kahe seeriaga tulpdiagrammidel on ${ totalLimit } tulba piirang, või ${ seriesLimit } tulpa seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",r="Kolme või enama seeriaga tulpdiagrammidel on ${ totalLimit } tulba piirang, või ${ seriesLimit } tulpa seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",n="Lintdiagrammide sarjade piirarv on ${ seriesLimit }. Valige vähem unikaalsete väärtustega katkestamine välja alusel",o="Diagrammi loomisel ilmnes viga.",s="Logi teisendamisel ei saa kasutada negatiivseid väärtusi ega nullväärtusi.",l="Ruutjuure teisendamist ei saa rakendada negatiivsetele väärtustele.",m="Kihi laadimisel tekkis viga. URL = ${ url }. Portaaliüksuse ID = ${ portalItemId }.",u="${ dataPath } peab olema kordumatu. Seerial nimega ${ seriesName } on ID (${ seriesID }), mida kasutatakse juba muudes seeriates.",d="${ dataPath } ei tohi mittenumbrilisel väljal teha loendamisega mitteseotud agregeerimist.",g="Omadusel ${ dataPath } puudub omadus nimega ${ missingProperty }.",k="${ dataPath } ei tohi olla lühem kui ${ limit } märki.",v="Muutujal ${ dataPath } ei tohi olla vähem kui ${ limit } üksust.",h="Muutujal ${ dataPath } ei tohi olla rohkem kui ${ limit } üksust.",p="${ dataPath } peab sisaldama vähemalt ühte märki, mis pole tühimärk.",C="Muutujal ${ dataPath } ei tohi olla: ${ additionalProperty }.",L="${ dataPath } peab võrduma ühega allpool nimetatud väärtustest: ${ allowedValues }.",$="${ dataPath } peab vastama ühele nendest skeemidest: ${ schemaOptions }.",c="Proportsionaalsete sümbolitega hajuvusdiagramme ei toetata. Rakendatud on sümboli vaikesuurus.",x="Sisendandmete lugemine nurjus.",S="Histogrammid nõuavad vähemalt kaht numbrilist väärtust.",E="Eeldatud seeriatüüp indeksis ${ seriesIndex } on '${ expectedType }', kuid saadi hoopis '${ receivedType }'",b="Veenduge, et valitud numbriväljade kogusumma tagastaks kõik positiivsed väärtused või kõik negatiivsed väärtused.",P="Selles diagrammis on kokku ${ sliceCount } sektorit. Sektordiagrammide lõikude piirarv on ${ totalLimit }. Valige vähem unikaalsete väärtustega kategooria väli, lisage vähem arvulisi välju või rakendage oma andmetele filter.",f="Objektipõhised mõõdikud on piiratud ${ totalLimit } objektiga. Filtreerige oma andmeid.",V="Selles diagrammis on kokku ${ elementCount } markerit. Ühe seeriaga joondiagrammidel on tulba piirang ${ totalLimit } markerit. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",j="Kahe seeriaga joondiagrammidel kehtib piirang ${ totalLimit } markerit või ${ seriesLimit } markerit seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",y="Kolme või enama seeriaga joondiagrammidel kehtib piirang ${ totalLimit } markerit või ${ seriesLimit } markerit seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",I="Joondiagrammide seeriate piirang on ${ seriesLimit }. Valige vähem unikaalsete väärtustega katkestamine välja alusel",q="Selles diagrammis on kokku ${ elementCount } karpi. Ühe seeriaga karpdiagrammidel kehtib piirang ${ totalLimit } karpi. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",B="Kahe seeriaga karpdiagrammidel kehtib piirang ${ totalLimit } karpi või ${ seriesLimit } karpi seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",D="Kolme või enama seeriaga karpdiagrammil kehtib piirang ${ totalLimit } karpi või${ seriesLimit } karpi seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",F="Karpdiagrammide seeriate piirarv on ${ seriesLimit }. Valige vähem unikaalsete väärtustega katkestamine välja alusel",w="Karpdiagrammid saavad kuvada ainult kuni ${ totalLimit } võõrväärtusega punkti. Filtreeri andmed.";var K={defaultError:i,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:r,barSeriesCountCannotExceedLimit:n,defaultInvalidChart:o,negativeValueInDataForLogTransformation:s,negativeValueInDataForSqrtTransformation:l,layerLoadFailure:m,duplicateSeriesID:u,nonNumericAggregation:d,requiredProperty:g,minLength:k,minItems:v,maxItems:h,whiteSpacePattern:p,additionalProperty:C,enumValues:L,anyOfValues:$,bubbleChartValidateMsg:c,queryError:x,histogramEmptyField:S,invalidSeriesType:E,or:"või",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:b,pieChartSlicesCannotExceedLimit:P,gaugeCannotExceedLimit:f,uniqueSeriesLineCountCannotExceedLimit:V,twoSeriesLineCountCannotExceedLimit:j,threePlusSeriesLineCountCannotExceedLimit:y,lineSeriesCountCannotExceedLimit:I,uniqueSeriesBoxCountCannotExceedLimit:q,twoSeriesBoxCountCannotExceedLimit:B,threePlusBoxLineCountCannotExceedLimit:D,boxSeriesCountCannotExceedLimit:F,boxSeriesOutlierCannotExceedLimit:w};e.additionalProperty=C,e.anyOfValues=$,e.barSeriesCountCannotExceedLimit=n,e.boxSeriesCountCannotExceedLimit=F,e.boxSeriesOutlierCannotExceedLimit=w,e.bubbleChartValidateMsg=c,e.default=K,e.defaultError=i,e.defaultInvalidChart=o,e.duplicateSeriesID=u,e.enumValues=L,e.gaugeCannotExceedLimit=f,e.histogramEmptyField=S,e.invalidSeriesType=E,e.layerLoadFailure=m,e.lineSeriesCountCannotExceedLimit=I,e.maxItems=h,e.minItems=v,e.minLength=k,e.negativeValueInDataForLogTransformation=s,e.negativeValueInDataForSqrtTransformation=l,e.nonNumericAggregation=d,e.or="või",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=b,e.pieChartSlicesCannotExceedLimit=P,e.queryError=x,e.requiredProperty=g,e.threePlusBoxLineCountCannotExceedLimit=D,e.threePlusSeriesBarCountCannotExceedLimit=r,e.threePlusSeriesLineCountCannotExceedLimit=y,e.twoSeriesBarCountCannotExceedLimit=t,e.twoSeriesBoxCountCannotExceedLimit=B,e.twoSeriesLineCountCannotExceedLimit=j,e.uniqueSeriesBarCountCannotExceedLimit=a,e.uniqueSeriesBoxCountCannotExceedLimit=q,e.uniqueSeriesLineCountCannotExceedLimit=V,e.whiteSpacePattern=p}));