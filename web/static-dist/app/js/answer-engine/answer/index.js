!function(l){function e(e){for(var t,a,n=e[0],o=e[1],r=e[2],i=0,s=[];i<n.length;i++)a=n[i],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&s.push(u[a][0]),u[a]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(p&&p(e);s.length;)s.shift()();return d.push.apply(d,r||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var a=d[t],n=!0,o=1;o<a.length;o++){var r=a[o];0!==u[r]&&(n=!1)}n&&(d.splice(t--,1),e=i(i.s=a[0]))}return e}var a={},u={60:0},d=[];function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=l,i.c=a,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=n;d.push([719,0]),c()}({353:function(e,t){e.exports=function(e){"use strict";if(!window||window.window!==window)throw new Error("This module is only available in browser");var t=window.Blob||window.MozBlob||window.WebKitBlob;if(!t)throw new Error("Blob was not supported");var a=e.match(/^data:((.*?)(;charset=.*?)?)(;base64)?,/);if(!a)throw new Error("invalid dataURI");for(var n=a[2]?a[1]:"text/plain"+(a[3]||";charset=utf-8"),o=!!a[4],r=e.slice(a[0].length),i=(o?atob:decodeURIComponent)(r),s=[],l=0;l<i.length;l++)s.push(i.charCodeAt(l));return new t([new Uint8Array(s)],{type:n})}},719:function(e,t,a){"use strict";a.r(t);var n,o=a(20),r=a.n(o),i=a(18),s=a.n(i),l=a(15),c=a(135),u=a(353),d=a.n(u),p={data:function(){var e=0<$("[name=token]").length&&""!==$("[name=token]").val();return{showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),uploadSDKInitData:{sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:$("[name=upload_init_url]").val(),finishUrl:$("[name=upload_finish_url]").val(),accept:JSON.parse($("[name=upload_accept]").val()),fileSingleSizeLimit:$("[name=upload_size_limit]").val(),locale:document.documentElement.lang},fileId:0,inspectionOpen:e,isNotMobile:!Object(l.f)()}},created:function(){this.emitter=new c.a,this.emitter.emit("doing",{data:""}),this.assessment=JSON.parse($("[name=assessment]").val()),this.answerRecord=JSON.parse($("[name=answer_record]").val()),this.answerScene=JSON.parse($("[name=answer_scene]").val()),this.assessmentResponse=JSON.parse($("[name=assessment_response]").val())},methods:{getAnswerData:function(e){var t=this;$.ajax({url:$("[name='answer_engine_submit_url']").val(),contentType:"application/json;charset=utf-8",type:"post",data:s()(e),beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t.emitter.emit("finish",{data:""}),location.replace($("[name=submit_goto_url]").val())})},reachTimeSubmitAnswerData:function(e){var t=this;$.ajax({url:$("[name='answer_engine_submit_url']").val(),contentType:"application/json;charset=utf-8",type:"post",data:s()(e),beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t.emitter.emit("finish",{data:""}),cd.confirm({title:"答题结束",content:"答题已结束，您的试卷已提交，请点击下面的按钮查看结果！",okText:"查看结果",cancelText:"返回",className:""}).on("ok",function(){location.replace($("[name=submit_goto_url]").val())}).on("cancel",function(){location.replace($("[name=submit_goto_url]").val())})})},timeSaveAnswerData:function(e){$.ajax({url:$("[name='answer_engine_save_url']").val(),contentType:"application/json;charset=utf-8",type:"post",data:s()(e),beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){})},saveAnswerData:function(e){$.ajax({url:$("[name='answer_engine_save_url']").val(),contentType:"application/json;charset=utf-8",type:"post",data:s()(e),beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){parent.location.href=$("[name=save_goto_url]").val()})},deleteAttachment:function(e,t){t&&(this.fileId=e)},previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,a=this;return new r.a(function(t){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){e.data.playServer=app.cloudPlayServer,e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,t(e),a.fileId=0})})},downloadAttachmentCallback:function(){var e=this,a=this;return new r.a(function(t){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),a.fileId=0})})},deleteAttachmentCallback:function(){var e=this,a=this;return new r.a(function(t){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),a.fileId=0})})},readyHandler:function(){var e=$("[name=img-url]");0<e.length&&""!==e.val()?this.$refs.inspection.captureModal({token:$("[name=token]").val(),faceUrl:e.val()}):this.$refs.inspection.captureModal({token:$("[name=token]").val()})},saveCheatRecord:function(e){var t=new FormData;t.append("status",e.status),t.append("level",e.level),t.append("duration",e.duration),t.append("behavior",e.behavior),t.append("picture",d()(e.picture)),$.ajax({url:$("[name=inspection-save-url]").val(),type:"POST",contentType:!1,processData:!1,data:t,beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))},success:function(e){console.log(e)}})},captureHandler:function(e){new Image(480).src=e.capture;var t=new FormData;t.append("picture",d()(e.capture)),$.ajax({url:$("[name=upload-url]").val(),type:"POST",contentType:!1,processData:!1,data:t,beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))},success:function(){}})}}},m=a(91),f=Object(m.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[a("div",{attrs:{id:"cd-modal"}}),e._v(" "),a("item-engine",{attrs:{assessment:e.assessment,answerRecord:e.answerRecord,answerScene:e.answerScene,showCKEditorData:e.showCKEditorData,assessmentResponse:e.assessmentResponse,showAttachment:e.showAttachment,cdnHost:e.cdnHost,uploadSDKInitData:e.uploadSDKInitData,deleteAttachmentCallback:e.deleteAttachmentCallback,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback},on:{getAnswerData:e.getAnswerData,saveAnswerData:e.saveAnswerData,timeSaveAnswerData:e.timeSaveAnswerData,reachTimeSubmitAnswerData:e.reachTimeSubmitAnswerData,deleteAttachment:e.deleteAttachment,previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment}},[e.inspectionOpen&&e.isNotMobile?a("template",{slot:"inspection"},[a("inspection-control",{ref:"inspection",attrs:{mode:"watching"},on:{ready:e.readyHandler,cheatHappened:e.saveCheatRecord,faceCaptured:e.captureHandler}})],1):e._e()],2)],1)},[],!1,null,null,null).exports;Vue.config.productionTip=!1,"en"==app.lang&&(n=local.default,itemBank.default.install(Vue,{locale:n})),new Vue({render:function(e){return e(f)}}).$mount("#app")}});