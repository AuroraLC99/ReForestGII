System.register(["jimu-core","jimu-arcgis"],(function(e,t){var a={},r={};return{setters:[function(e){a.AbstractMessageAction=e.AbstractMessageAction,a.DataSourceManager=e.DataSourceManager,a.DataSourcesChangeType=e.DataSourcesChangeType,a.Immutable=e.Immutable,a.MessageCarryData=e.MessageCarryData,a.MessageType=e.MessageType,a.MutableStoreManager=e.MutableStoreManager,a.RecordSetChangeType=e.RecordSetChangeType,a.getAppStore=e.getAppStore},function(e){r.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{"use strict";var e={26826:e=>{e.exports=r},48891:e=>{e.exports=a}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,s),o.exports}s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{s.r(o),s.d(o,{default:()=>u});var e=s(48891),t=s(26826);function a(e,t){let a=null;return e.clone?a=e.clone():(a=t.fromJSON(Object.assign({},e)),a.attributes=Object.assign({},e.attributes)),a}function r(t,a,r){if(t&&a){const s=(0,e.getAppStore)().getState().appConfig.messageConfigs;if(s)return function(e,t,a,r,s){if(a){const o=Object.values(a);for(let a=0;a<o.length;a++){const n=o[a];if(n.widgetId===e&&n.messageType===r){const e=n.actions;for(let a=0;a<e.length;a++){const r=e[a];if(r.widgetId===t&&s.includes(r.actionName))return!0}}}}return!1}(t,a,s,r,["zoomToFeature"])}return!1}function n(t,a){var r;const s=function(t,a){var r,s;const o=i(),n=null===(r=null==o?void 0:o.widgets)||void 0===r?void 0:r[t],u=null===(s=null==n?void 0:n.manifest)||void 0===s?void 0:s.publishMessages;let c=e.MessageCarryData.UseDataSource;return null==u||u.forEach((e=>{const t=e;(null==t?void 0:t.messageCarryData)&&(null==t?void 0:t.messageType)===a&&(c=null==t?void 0:t.messageCarryData)})),c}(t,a),o=i(),n=null===(r=null==o?void 0:o.widgets)||void 0===r?void 0:r[t],u=(null==n?void 0:n.useDataSources)||(0,e.Immutable)([]),c=function(t){var a;const r=null!==(a=null==t?void 0:t.map((e=>({dataSourceId:e,mainDataSourceId:e,rootDataSourceId:null}))))&&void 0!==a?a:[];return(0,e.Immutable)(r)}(null==n?void 0:n.outputDataSources)||(0,e.Immutable)([]),d=null==u?void 0:u.asMutable({deep:!0}).concat(null==c?void 0:c.asMutable({deep:!0}));switch(s){case e.MessageCarryData.OutputDataSource:return c;case e.MessageCarryData.UseDataSource:return u;case e.MessageCarryData.BothDataSource:return(0,e.Immutable)(d)}}function i(){var t,a,r;return window.jimuConfig.isBuilder?null===(a=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===a?void 0:a.appConfig:null===(r=(0,e.getAppStore)().getState())||void 0===r?void 0:r.appConfig}class u extends e.AbstractMessageAction{constructor(){super(...arguments),this.NoLockTriggerLayerWidgets=["Map"]}filterMessageDescription(t){if(t.messageType===e.MessageType.ExtentChange)return!0;if(t.messageType===e.MessageType.DataSourcesChange)return!0;if(t.messageType!==e.MessageType.DataRecordSetChange&&t.messageType!==e.MessageType.DataRecordsSelectionChange&&t.messageType!==e.MessageType.DataSourceFilterChange)return!1;{const a=e.DataSourceManager.getInstance();return n(t.widgetId,t.messageType).some((e=>{const t=a.getDataSource(e.dataSourceId);if(t){if("WEB_MAP"===t.type||"WEB_SCENE"===t.type)return!0;{const e=t.getDataSourceJson();return!(!e||!e.geometryType)}}return!1}))}}filterMessage(e){return!0}getSettingComponentUri(t,a){return t===e.MessageType.DataRecordsSelectionChange||t===e.MessageType.DataSourceFilterChange?"message-actions/pan-to-action-setting":null}onExecute(s,o){return(0,t.loadArcGISJSAPIModules)(["esri/Graphic"]).then((t=>{var n;let i=null;switch([i]=t,s.type){case e.MessageType.DataRecordSetChange:if(r(s.widgetId,this.widgetId,e.MessageType.DataRecordSetChange))break;const t=s;if(t.changeType===e.RecordSetChangeType.CreateUpdate){const r=[];t.dataRecordSets.forEach((e=>{if(e&&e.records)for(let t=0;t<e.records.length;t++){const s=e.records[t].feature;s&&r.push(a(s,i).geometry)}}));const s={type:"pan-to-geometries",geometries:r};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",s)}break;case e.MessageType.DataRecordsSelectionChange:if(r(s.widgetId,this.widgetId,e.MessageType.DataRecordsSelectionChange))break;const u=(0,e.getAppStore)().getState().appConfig.widgets[s.widgetId].manifest.label,c=s,d=[];if(c.records){if(c.records[0])if(this.NoLockTriggerLayerWidgets.includes(u)){const e=c.records[0].dataSource.getMainDataSource();if(!(null===(n=null==o?void 0:o.useDataSources)||void 0===n?void 0:n.some((t=>(null==t?void 0:t.mainDataSourceId)===e.id))))break}else{const e=c.records[0].dataSource,t=null==e?void 0:e.getMainDataSource();if(!o.useDataSources.some((e=>(null==e?void 0:e.mainDataSourceId)===t.id)))break}for(let e=0;e<c.records.length;e++){const t=c.records[e].feature;t&&d.push(a(t,i).geometry)}}const g={type:"pan-to-geometries",geometries:d};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",g);break;case e.MessageType.ExtentChange:if(r(s.widgetId,this.widgetId,e.MessageType.ExtentChange))break;const l=s,p=l.getRelatedWidgetIds();if(p.includes(this.widgetId))break;const S={value:{type:"pan-to-extent",geometries:[l.extent],stationary:l.stationary,publishTime:l.publishTime,publishWidgetId:l.widgetId},relatedWidgets:p};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue",S);break;case e.MessageType.DataSourceFilterChange:if(r(s.widgetId,this.widgetId,e.MessageType.DataSourceFilterChange))break;const y=s;if(!o.useDataSources.some((e=>y.dataSourceIds.some((t=>(null==e?void 0:e.dataSourceId)===t)))))break;const f={type:"pan-to-query-params",dataSourceIds:y.dataSourceIds,useDataSources:o.useDataSources||[]};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",f);break;case e.MessageType.DataSourcesChange:if(r(s.widgetId,this.widgetId,e.MessageType.DataSourcesChange))break;const M=s;if(M.changeType===e.DataSourcesChangeType.Create){const t=[];M.dataSources.forEach((e=>{t.push(e.id)}));const a={type:"pan-to-layers",dataSourceIds:t};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",a)}}return!0}))}}})(),o})())}}}));