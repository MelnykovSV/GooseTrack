"use strict";(self.webpackChunkGooseTrack=self.webpackChunkGooseTrack||[]).push([[653],{69998:function(e,t){t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",a=(e.type||"").toLowerCase(),o=a.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):a===t}))}return!0}},18267:function(e,t,n){n.d(t,{uI:function(){return he}});var r=n(72791),a=n(52007),o=n.n(a),i=n(75971),u=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function c(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=u.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"===typeof e&&null!==e}function f(e){return m(e.target.files).map((function(e){return c(e)}))}function p(e){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return c(e)}))]}}))}))}function v(e,t){return(0,i.mG)(this,void 0,void 0,(function(){var n;return(0,i.Jh)(this,(function(r){switch(r.label){case 0:return e.items?(n=m(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(g))]):[3,2];case 1:return[2,d(h(r.sent()))];case 2:return[2,d(m(e.files).map((function(e){return c(e)})))]}}))}))}function d(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function m(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function g(e){if("function"!==typeof e.webkitGetAsEntry)return y(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?w(t):y(e)}function h(e){return e.reduce((function(e,t){return(0,i.ev)((0,i.ev)([],(0,i.CR)(e),!1),(0,i.CR)(Array.isArray(t)?h(t):[t]),!1)}),[])}function y(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=c(t);return Promise.resolve(n)}function b(e){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){return[2,e.isDirectory?w(e):D(e)]}))}))}function w(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function a(){var o=this;t.readEntries((function(t){return(0,i.mG)(o,void 0,void 0,(function(){var o,u,c;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:if(t.length)return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return o=i.sent(),e(o),[3,4];case 3:return u=i.sent(),n(u),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(b)),r.push(c),a(),i.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function D(e){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=c(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var x=n(69998);function S(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||F(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}(e,t)||F(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k="file-invalid-type",P="file-too-large",V="file-too-small",I="too-many-files",R=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:k,message:"File type must be ".concat(t)}},T=function(e){return{code:P,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},N=function(e){return{code:V,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},z={code:I,message:"Too many files"};function B(e,t){var n="application/x-moz-file"===e.type||(0,x.Z)(e,t);return[n,n?null:R(t)]}function M(e,t,n){if(L(e.size))if(L(t)&&L(n)){if(e.size>n)return[!1,T(n)];if(e.size<t)return[!1,N(t)]}else{if(L(t)&&e.size<t)return[!1,N(t)];if(L(n)&&e.size>n)return[!1,T(n)]}return[!0,null]}function L(e){return void 0!==e&&null!==e}function K(e){var t=e.files,n=e.accept,r=e.minSize,a=e.maxSize,o=e.multiple,i=e.maxFiles,u=e.validator;return!(!o&&t.length>1||o&&i>=1&&t.length>i)&&t.every((function(e){var t=E(B(e,n),1)[0],o=E(M(e,r,a),1)[0],i=u?u(e):null;return t&&o&&!i}))}function G(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function W(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function _(e){e.preventDefault()}function U(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function $(e){return-1!==e.indexOf("Edge/")}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return U(e)||$(e)}function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t.some((function(t){return!G(e)&&t&&t.apply(void 0,[e].concat(r)),G(e)}))}}function H(){return"showOpenFilePicker"in window}function q(e){return L(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=E(e,2),n=t[0],r=t[1],a=!0;return ee(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),a=!1),Array.isArray(r)&&r.every(te)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),a=!1),a})).reduce((function(e,t){var n=E(t,2),r=n[0],a=n[1];return j(j({},e),{},A({},r,a))}),{})}]:e}function Y(e){if(L(e))return Object.entries(e).reduce((function(e,t){var n=E(t,2),r=n[0],a=n[1];return[].concat(S(e),[r],S(a))}),[]).filter((function(e){return ee(e)||te(e)})).join(",")}function Q(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function X(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}function ee(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function te(e){return/^.*\.[\w]+$/.test(e)}var ne=["children"],re=["open"],ae=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],oe=["refKey","onChange","onClick"];function ie(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ce(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}(e,t)||ce(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){if(e){if("string"===typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var de=(0,r.forwardRef)((function(e,t){var n=e.children,a=he(ve(e,ne)),o=a.open,i=ve(a,re);return(0,r.useImperativeHandle)(t,(function(){return{open:o}}),[o]),r.createElement(r.Fragment,null,n(fe(fe({},i),{},{open:o})))}));de.displayName="Dropzone";var me={disabled:!1,getFilesFromEvent:function(e){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){return s(e)&&s(e.dataTransfer)?[2,v(e.dataTransfer,e.type)]:function(e){return s(e)&&s(e.target)}(e)?[2,f(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,p(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};de.defaultProps=me,de.propTypes={children:o().func,accept:o().objectOf(o().arrayOf(o().string)),multiple:o().bool,preventDropOnDocument:o().bool,noClick:o().bool,noKeyboard:o().bool,noDrag:o().bool,noDragEventsBubbling:o().bool,minSize:o().number,maxSize:o().number,maxFiles:o().number,disabled:o().bool,getFilesFromEvent:o().func,onFileDialogCancel:o().func,onFileDialogOpen:o().func,useFsAccessApi:o().bool,autoFocus:o().bool,onDragEnter:o().func,onDragLeave:o().func,onDragOver:o().func,onDrop:o().func,onDropAccepted:o().func,onDropRejected:o().func,onError:o().func,validator:o().func};var ge={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function he(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=fe(fe({},me),e),n=t.accept,a=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,u=t.minSize,c=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,v=t.onDrop,d=t.onDropAccepted,m=t.onDropRejected,g=t.onFileDialogCancel,h=t.onFileDialogOpen,y=t.useFsAccessApi,b=t.autoFocus,w=t.preventDropOnDocument,D=t.noClick,x=t.noKeyboard,S=t.noDrag,O=t.noDragEventsBubbling,j=t.onError,A=t.validator,E=(0,r.useMemo)((function(){return Y(n)}),[n]),F=(0,r.useMemo)((function(){return q(n)}),[n]),C=(0,r.useMemo)((function(){return"function"===typeof h?h:be}),[h]),k=(0,r.useMemo)((function(){return"function"===typeof g?g:be}),[g]),P=(0,r.useRef)(null),V=(0,r.useRef)(null),I=(0,r.useReducer)(ye,ge),R=ue(I,2),T=R[0],N=R[1],L=T.isFocused,U=T.isFileDialogActive,$=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&y&&H()),ee=function(){!$.current&&U&&setTimeout((function(){V.current&&(V.current.files.length||(N({type:"closeDialog"}),k()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",ee,!1),function(){window.removeEventListener("focus",ee,!1)}}),[V,U,k,$]);var te=(0,r.useRef)([]),ne=function(e){P.current&&P.current.contains(e.target)||(e.preventDefault(),te.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",_,!1),document.addEventListener("drop",ne,!1)),function(){w&&(document.removeEventListener("dragover",_),document.removeEventListener("drop",ne))}}),[P,w]),(0,r.useEffect)((function(){return!a&&b&&P.current&&P.current.focus(),function(){}}),[P,b,a]);var re=(0,r.useCallback)((function(e){j?j(e):console.error(e)}),[j]),ce=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Fe(e),te.current=[].concat(ie(te.current),[e.target]),W(e)&&Promise.resolve(o(e)).then((function(t){if(!G(e)||O){var n=t.length,r=n>0&&K({files:t,accept:E,minSize:u,maxSize:i,multiple:c,maxFiles:l,validator:A});N({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return re(e)}))}),[o,s,re,O,E,u,i,c,l,A]),le=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Fe(e);var t=W(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1}),[p,O]),se=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Fe(e);var t=te.current.filter((function(e){return P.current&&P.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),te.current=t,t.length>0||(N({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),W(e)&&f&&f(e))}),[P,f,O]),de=(0,r.useCallback)((function(e,t){var n=[],r=[];e.forEach((function(e){var t=ue(B(e,E),2),a=t[0],o=t[1],c=ue(M(e,u,i),2),l=c[0],s=c[1],f=A?A(e):null;if(a&&l&&!f)n.push(e);else{var p=[o,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!c&&n.length>1||c&&l>=1&&n.length>l)&&(n.forEach((function(e){r.push({file:e,errors:[z]})})),n.splice(0)),N({acceptedFiles:n,fileRejections:r,type:"setFiles"}),v&&v(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&d&&d(n,t)}),[N,c,E,u,i,l,v,d,m,A]),he=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Fe(e),te.current=[],W(e)&&Promise.resolve(o(e)).then((function(t){G(e)&&!O||de(t,e)})).catch((function(e){return re(e)})),N({type:"reset"})}),[o,de,re,O]),we=(0,r.useCallback)((function(){if($.current){N({type:"openDialog"}),C();var e={multiple:c,types:F};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){de(e,null),N({type:"closeDialog"})})).catch((function(e){Q(e)?(k(e),N({type:"closeDialog"})):X(e)?($.current=!1,V.current?(V.current.value=null,V.current.click()):re(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):re(e)}))}else V.current&&(N({type:"openDialog"}),C(),V.current.value=null,V.current.click())}),[N,C,k,y,de,re,F,c]),De=(0,r.useCallback)((function(e){P.current&&P.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),we()))}),[P,we]),xe=(0,r.useCallback)((function(){N({type:"focus"})}),[]),Se=(0,r.useCallback)((function(){N({type:"blur"})}),[]),Oe=(0,r.useCallback)((function(){D||(J()?setTimeout(we,0):we())}),[D,we]),je=function(e){return a?null:e},Ae=function(e){return x?null:je(e)},Ee=function(e){return S?null:je(e)},Fe=function(e){O&&e.stopPropagation()},Ce=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,o=e.onKeyDown,i=e.onFocus,u=e.onBlur,c=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,v=ve(e,ae);return fe(fe(pe({onKeyDown:Ae(Z(o,De)),onFocus:Ae(Z(i,xe)),onBlur:Ae(Z(u,Se)),onClick:je(Z(c,Oe)),onDragEnter:Ee(Z(l,ce)),onDragOver:Ee(Z(s,le)),onDragLeave:Ee(Z(f,se)),onDrop:Ee(Z(p,he)),role:"string"===typeof r&&""!==r?r:"presentation"},n,P),a||x?{}:{tabIndex:0}),v)}}),[P,De,xe,Se,Oe,ce,le,se,he,x,S,a]),ke=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Pe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,a=e.onClick,o=ve(e,oe),i=pe({accept:E,multiple:c,type:"file",style:{display:"none"},onChange:je(Z(r,he)),onClick:je(Z(a,ke)),tabIndex:-1},n,V);return fe(fe({},i),o)}}),[V,n,c,he,a]);return fe(fe({},T),{},{isFocused:L&&!a,getRootProps:Ce,getInputProps:Pe,rootRef:P,inputRef:V,open:je(we)})}function ye(e,t){switch(t.type){case"focus":return fe(fe({},e),{},{isFocused:!0});case"blur":return fe(fe({},e),{},{isFocused:!1});case"openDialog":return fe(fe({},ge),{},{isFileDialogActive:!0});case"closeDialog":return fe(fe({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return fe(fe({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return fe(fe({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return fe({},ge);default:return e}}function be(){}},30948:function(e,t,n){n.r(t),n.d(t,{NumberFormatBase:function(){return E},NumericFormat:function(){return I},PatternFormat:function(){return B},getNumericCaretBoundary:function(){return P},getPatternCaretBoundary:function(){return N},numericFormatter:function(){return F},patternFormatter:function(){return R},removeNumericFormat:function(){return k},removePatternFormat:function(){return T},useNumericFormat:function(){return V},usePatternFormat:function(){return z}});var r,a=n(72791);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function i(){}function u(e){return!!(e||"").match(/\d/)}function c(e){return null===e||void 0===e}function l(e){return c(e)||function(e){return"number"===typeof e&&isNaN(e)}(e)||"number"===typeof e&&!isFinite(e)}function s(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function f(e,t){void 0===t&&(t=!0);var n="-"===e[0],r=n&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNegation:n,addNegation:r}}function p(e,t,n){for(var r="",a=n?"0":"",o=0;o<=t-1;o++)r+=e[o]||a;return r}function v(e,t){return Array(t+1).join(e)}function d(e){var t=e+"",n="-"===t[0]?"-":"";n&&(t=t.substring(1));var r=t.split(/[eE]/g),a=r[0],o=r[1];if(!(o=Number(o)))return n+a;var i=1+o,u=(a=a.replace(".","")).length;return i<0?a="0."+v("0",Math.abs(i))+a:i>=u?a+=v("0",i-u):a=(a.substring(0,i)||"0")+"."+a.substring(i),n+a}function m(e,t,n){if(-1!==["","-"].indexOf(e))return e;var r=(-1!==e.indexOf(".")||n)&&t,a=f(e),o=a.beforeDecimal,i=a.afterDecimal,u=a.hasNegation,c=parseFloat("0."+(i||"0")),l=(i.length<=t?"0."+i:c.toFixed(t)).split(".");return""+(u?"-":"")+o.split("").reverse().reduce((function(e,t,n){return e.length>n?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),l[0])+(r?".":"")+p(l[1]||"",t,n)}function g(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}!function(e){e.event="event",e.props="prop"}(r||(r={}));var h=function(e){var t,n=void 0;return function(){for(var r=[],a=arguments.length;a--;)r[a]=arguments[a];return t&&r.length===t.length&&r.every((function(e,n){return e===t[n]}))?n:(t=r,n=e.apply(void 0,r))}}((function(e,t){for(var n=0,r=0,a=e.length,o=t.length;e[n]===t[n]&&n<a;)n++;for(;e[a-1-r]===t[o-1-r]&&o-r>n&&a-r>n;)r++;return{from:{start:n,end:a-r},to:{start:n,end:o-r}}}));function y(e){return Math.max(e.selectionStart,e.selectionEnd)}function b(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function w(e,t){return void 0===e&&(e=" "),"string"===typeof e?e:e[t]||" "}function D(e){var t=e.currentValue,n=e.formattedValue,r=e.currentValueIndex,a=e.formattedValueIndex;return t[r]===n[a]}function x(e,t,n,r){var a,o,i,u=e.length;if(a=t,o=0,i=u,t=Math.min(Math.max(a,o),i),"left"===r){for(;t>=0&&!n[t];)t--;-1===t&&(t=n.indexOf(!0))}else{for(;t<=u&&!n[t];)t++;t>u&&(t=n.lastIndexOf(!0))}return-1===t&&(t=u),t}function S(e){for(var t=Array.from({length:e.length+1}).map((function(){return!0})),n=0,r=t.length;n<r;n++)t[n]=Boolean(u(e[n])||u(e[n-1]));return t}function O(e,t,n,r,o,u){void 0===u&&(u=i);var s=function(e){var t=(0,a.useRef)(e);t.current=e;var n=(0,a.useRef)((function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return t.current.apply(t,e)}));return n.current}((function(e,t){var n,a;return l(e)?(a="",n=""):"number"===typeof e||t?(a="number"===typeof e?d(e):e,n=r(a)):(a=o(e,void 0),n=r(a)),{formattedValue:n,numAsString:a}})),f=(0,a.useState)((function(){return s(c(e)?t:e,n)})),p=f[0],v=f[1],m=e,g=n;c(e)&&(m=p.numAsString,g=!0);var h=s(m,g);return(0,a.useMemo)((function(){v(h)}),[h.formattedValue]),[p,function(e,t){e.formattedValue!==p.formattedValue&&v({formattedValue:e.formattedValue,numAsString:e.value}),u(e,t)}]}function j(e){return e.replace(/[^0-9]/g,"")}function A(e){return e}function E(e){var t=e.type;void 0===t&&(t="text");var n=e.displayType;void 0===n&&(n="input");var c=e.customInput,l=e.renderText,s=e.getInputRef,f=e.format;void 0===f&&(f=A);var p=e.removeFormatting;void 0===p&&(p=j);var v=e.defaultValue,d=e.valueIsNumericString,m=e.onValueChange,b=e.isAllowed,w=e.onChange;void 0===w&&(w=i);var E=e.onKeyDown;void 0===E&&(E=i);var F=e.onMouseUp;void 0===F&&(F=i);var C=e.onFocus;void 0===C&&(C=i);var k=e.onBlur;void 0===k&&(k=i);var P=e.value,V=e.getCaretBoundary;void 0===V&&(V=S);var I=e.isValidInputCharacter;void 0===I&&(I=u);var R=e.isCharacterSame,T=o(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),N=O(P,v,Boolean(d),f,p,m),z=N[0],B=z.formattedValue,M=z.numAsString,L=N[1],K=(0,a.useRef)({formattedValue:B,numAsString:M}),G=function(e,t){K.current={formattedValue:e.formattedValue,numAsString:e.value},L(e,t)},W=(0,a.useState)(!1),_=W[0],U=W[1],$=(0,a.useRef)(null),J=(0,a.useRef)({setCaretTimeout:null,focusTimeout:null});(0,a.useEffect)((function(){return U(!0),function(){clearTimeout(J.current.setCaretTimeout),clearTimeout(J.current.focusTimeout)}}),[]);var Z=f,H=function(e,t){var n=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(n)?void 0:n}},q=function(e,t,n){0===e.selectionStart&&e.selectionEnd===e.value.length||(g(e,t),J.current.setCaretTimeout=setTimeout((function(){e.value===n&&e.selectionStart!==e.selectionEnd&&g(e,t)}),0))},Y=function(e,t,n){return x(e,t,V(e),n)},Q=function(e,t,n){var r=V(t),a=function(e,t,n,r,a,o,i){void 0===i&&(i=D);var u=a.findIndex((function(e){return e})),c=e.slice(0,u);t||n.startsWith(c)||(t=c,n=c+n,r+=c.length);for(var l=n.length,s=e.length,f={},p=new Array(l),v=0;v<l;v++){p[v]=-1;for(var d=0,m=s;d<m;d++)if(i({currentValue:n,lastValue:t,formattedValue:e,currentValueIndex:v,formattedValueIndex:d})&&!0!==f[d]){p[v]=d,f[d]=!0;break}}for(var g=r;g<l&&(-1===p[g]||!o(n[g]));)g++;var h=g===l||-1===p[g]?s:p[g];for(g=r-1;g>0&&-1===p[g];)g--;var y=-1===g||-1===p[g]?0:p[g]+1;return y>h?h:r-y<h-r?y:h}(t,B,e,n,r,I,R);return a=x(t,a,r)};(0,a.useEffect)((function(){var e=K.current,t=e.formattedValue,n=e.numAsString;B===t||B===M&&t===n||G(H(B,M),{event:void 0,source:r.props})}),[B,M]);var X=$.current?y($.current):void 0;("undefined"!==typeof window?a.useLayoutEffect:a.useEffect)((function(){var e=$.current;if(B!==K.current.formattedValue&&e){var t=Q(K.current.formattedValue,B,X);e.value=B,q(e,t,B)}}),[B]);var ee=function(e,t,n){var r=h(B,e),a=Object.assign(Object.assign({},r),{lastValue:B}),o=p(e,a),i=Z(o);if(o=p(i,void 0),b&&!b(H(i,o))){var u=t.target,c=y(u),l=Q(e,B,c);return u.value=B,q(u,l,B),!1}return function(e){var t=e.formattedValue;void 0===t&&(t="");var n=e.input,r=e.setCaretPosition;void 0===r&&(r=!0);var a=e.source,o=e.event,i=e.numAsString,u=e.caretPos;if(n){if(void 0===u&&r){var c=e.inputValue||n.value,l=y(n);n.value=t,u=Q(c,t,l)}n.value=t,r&&void 0!==u&&q(n,u,t)}t!==B&&G(H(t,i),{event:o,source:a})}({formattedValue:i,numAsString:o,inputValue:e,event:t,source:n,setCaretPosition:!0,input:t.target}),!0},te=!_||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",ne=Object.assign({inputMode:te},T,{type:t,value:B,onChange:function(e){var t=e.target.value;ee(t,e,r.event)&&w(e)},onKeyDown:function(e){var t,n=e.target,r=e.key,a=n.selectionStart,o=n.selectionEnd,i=n.value;if(void 0===i&&(i=""),"ArrowLeft"===r||"Backspace"===r?t=Math.max(a-1,0):"ArrowRight"===r?t=Math.min(a+1,i.length):"Delete"===r&&(t=a),void 0!==t&&a===o){var u=t;if("ArrowLeft"===r||"ArrowRight"===r)(u=Y(i,t,"ArrowLeft"===r?"left":"right"))!==t&&e.preventDefault();else"Delete"!==r||I(i[t])?"Backspace"!==r||I(i[t])||(u=Y(i,t,"left")):u=Y(i,t,"right");u!==t&&q(n,u,i),e.isUnitTestRun&&q(n,u,i),E(e)}else E(e)},onMouseUp:function(e){var t=e.target,n=t.selectionStart,r=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),n===r){var o=Y(a,n);o!==n&&q(t,o,a)}F(e)},onFocus:function(e){e.persist&&e.persist();var t=e.target;$.current=t,J.current.focusTimeout=setTimeout((function(){var n=t.selectionStart,r=t.selectionEnd,a=t.value;void 0===a&&(a="");var o=Y(a,n);o===n||0===n&&r===a.length||q(t,o,a),C(e)}),0)},onBlur:function(e){$.current=null,clearTimeout(J.current.focusTimeout),clearTimeout(J.current.setCaretTimeout),k(e)}});if("text"===n)return l?a.createElement(a.Fragment,null,l(B,T)||null):a.createElement("span",Object.assign({},T,{ref:s}),B);if(c){var re=c;return a.createElement(re,Object.assign({},ne,{ref:s}))}return a.createElement("input",Object.assign({},ne,{ref:s}))}function F(e,t){var n=t.decimalScale,r=t.fixedDecimalScale,a=t.prefix;void 0===a&&(a="");var o=t.suffix;void 0===o&&(o="");var i=t.allowNegative,u=t.thousandsGroupStyle;if(void 0===u&&(u="thousand"),""===e||"-"===e)return e;var c=C(t),l=c.thousandSeparator,s=c.decimalSeparator,v=0!==n&&-1!==e.indexOf(".")||n&&r,d=f(e,i),m=d.beforeDecimal,g=d.afterDecimal,h=d.addNegation;return void 0!==n&&(g=p(g,n,!!r)),l&&(m=function(e,t,n){var r=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(n),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(r,"$1"+t)}(m,l,u)),a&&(m=a+m),o&&(g+=o),h&&(m="-"+m),e=m+(v&&s||"")+g}function C(e){var t=e.decimalSeparator;void 0===t&&(t=".");var n=e.thousandSeparator,r=e.allowedDecimalSeparators;return!0===n&&(n=","),r||(r=[t,"."]),{decimalSeparator:t,thousandSeparator:n,allowedDecimalSeparators:r}}function k(e,t,n){var r;void 0===t&&(t=b(e));var a=n.allowNegative,o=n.prefix;void 0===o&&(o="");var i=n.suffix;void 0===i&&(i="");var c=n.decimalScale,l=t.from,p=t.to,v=p.start,d=p.end,m=C(n),g=m.allowedDecimalSeparators,h=m.decimalSeparator,y=e[d]===h;if(u(e)&&(e===o||e===i)&&""===t.lastValue)return e;if(d-v===1&&-1!==g.indexOf(e[v])){var w=0===c?"":h;e=e.substring(0,v)+w+e.substring(v+1,e.length)}var D=function(e,t,n){var r=!1,a=!1;o.startsWith("-")?r=!1:e.startsWith("--")?(r=!1,a=!0):i.startsWith("-")&&e.length===i.length?r=!1:"-"===e[0]&&(r=!0);var u=r?1:0;return a&&(u=2),u&&(e=e.substring(u),t-=u,n-=u),{value:e,start:t,end:n,hasNegation:r}},x=D(e,v,d),S=x.hasNegation;e=(r=x).value,v=r.start,d=r.end;var O=D(t.lastValue,l.start,l.end),j=O.start,A=O.end,E=O.value,F=e.substring(v,d);!(e.length&&E.length&&(j>E.length-i.length||A<o.length))||F&&i.startsWith(F)||(e=E);var k=0;e.startsWith(o)?k+=o.length:v<o.length&&(k=v),d-=k;var P=(e=e.substring(k)).length,V=e.length-i.length;e.endsWith(i)?P=V:(d>V||d>e.length-i.length)&&(P=d),e=e.substring(0,P),e=function(e,t){void 0===e&&(e="");var n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),a=n.test(e),o=r.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}(S?"-"+e:e,a),e=(e.match(function(e,t){return new RegExp("(^-)|[0-9]|"+s(e),t?"g":void 0)}(h,!0))||[]).join("");var I=e.indexOf(h),R=f(e=e.replace(new RegExp(s(h),"g"),(function(e,t){return t===I?".":""})),a),T=R.beforeDecimal,N=R.afterDecimal,z=R.addNegation;return p.end-p.start<l.end-l.start&&""===T&&y&&!parseFloat(N)&&(e=z?"-":""),e}function P(e,t){var n=t.prefix;void 0===n&&(n="");var r=t.suffix;void 0===r&&(r="");var a=Array.from({length:e.length+1}).map((function(){return!0})),o="-"===e[0];a.fill(!1,0,n.length+(o?1:0));var i=e.length;return a.fill(!1,i-r.length+1,i+1),a}function V(e){e=function(e){var t=C(e),n=t.thousandSeparator,r=t.decimalSeparator,a=e.prefix;void 0===a&&(a="");var o=e.allowNegative;if(void 0===o&&(o=!0),n===r)throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+n+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+r+" (default value for decimalSeparator is .)\n     ");return a.startsWith("-")&&o&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+a+"\n      allowNegative: "+o+"\n    "),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}(e);e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,n=e.allowNegative,a=e.allowLeadingZeros,s=e.onKeyDown;void 0===s&&(s=i);var f=e.onBlur;void 0===f&&(f=i);var p=e.thousandSeparator,v=e.decimalScale,y=e.fixedDecimalScale,b=e.prefix;void 0===b&&(b="");var w=e.defaultValue,D=e.value,x=e.valueIsNumericString,S=e.onValueChange,j=o(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),A=C(e),E=A.decimalSeparator,V=A.allowedDecimalSeparators,I=function(t){return F(t,e)},R=function(t,n){return k(t,n,e)},T=c(D)?w:D,N=null!==x&&void 0!==x?x:function(e,t,n){return""===e||!(null===t||void 0===t?void 0:t.match(/\d/))&&!(null===n||void 0===n?void 0:n.match(/\d/))&&"string"===typeof e&&!isNaN(Number(e))}(T,b,t);c(D)?c(w)||(N=N||"number"===typeof w):N=N||"number"===typeof D;var z=function(e){return l(e)?e:("number"===typeof e&&(e=d(e)),N&&"number"===typeof v?m(e,v,Boolean(y)):e)},B=O(z(D),z(w),Boolean(N),I,R,S),M=B[0],L=M.numAsString,K=M.formattedValue,G=B[1];return Object.assign(Object.assign({},j),{value:K,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===E||u(e)},isCharacterSame:function(e){var t=e.currentValue,n=e.lastValue,r=e.formattedValue,a=e.currentValueIndex,o=e.formattedValueIndex,i=t[a],u=r[o],c=h(n,t).to;return!!(a>=c.start&&a<c.end&&V&&V.includes(i)&&u===E)||i===u},onValueChange:G,format:I,removeFormatting:R,getCaretBoundary:function(t){return P(t,e)},onKeyDown:function(e){var t=e.target,r=e.key,a=t.selectionStart,o=t.selectionEnd,i=t.value;if(void 0===i&&(i=""),a===o){"Backspace"===r&&"-"===i[0]&&a===b.length+1&&n&&g(t,1),v&&y&&("Backspace"===r&&i[a-1]===E?(g(t,a-1),e.preventDefault()):"Delete"===r&&i[a]===E&&e.preventDefault()),(null===V||void 0===V?void 0:V.includes(r))&&i[a]===E&&g(t,a+1);var u=!0===p?",":p;"Backspace"===r&&i[a-1]===u&&g(t,a-1),"Delete"===r&&i[a]===u&&g(t,a+1),s(e)}else s(e)},onBlur:function(t){var n=L;if(n.match(/\d/g)||(n=""),a||(n=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",a=n[1]||"";return(t?"-":"")+r+(a?"."+a:"")}(n)),y&&v&&(n=m(n,v,y)),n!==L){var o=F(n,e);G({formattedValue:o,value:n,floatValue:parseFloat(n)},{event:t,source:r.event})}f(t)}})}function I(e){var t=V(e);return a.createElement(E,Object.assign({},t))}function R(e,t){var n=t.format,r=t.allowEmptyFormatting,a=t.mask,o=t.patternChar;if(void 0===o&&(o="#"),""===e&&!r)return"";for(var i=0,u=n.split(""),c=0,l=n.length;c<l;c++)n[c]===o&&(u[c]=e[i]||w(a,i),i+=1);return u.join("")}function T(e,t,n){void 0===t&&(t=b(e));var r=n.format,a=n.patternChar;void 0===a&&(a="#");var o=t.from,i=t.to,c=t.lastValue;void 0===c&&(c="");var l=function(e){return r[e]===a},s=function(e,t){for(var n="",r=0;r<e.length;r++)l(t+r)&&u(e[r])&&(n+=e[r]);return n},f=function(e){return e.replace(/[^0-9]/g,"")};if(!r.match(/\d/))return f(e);if(""===c&&e.length===r.length){for(var p="",v=0;v<e.length;v++)if(l(v))u(e[v])&&(p+=e[v]);else if(e[v]!==r[v])return f(e);return p}var d=c.substring(0,o.start),m=e.substring(i.start,i.end),g=c.substring(o.end);return""+s(d,0)+f(m)+s(g,o.end)}function N(e,t){var n=t.format,r=t.mask,a=t.patternChar;void 0===a&&(a="#");var o=Array.from({length:e.length+1}).map((function(){return!0})),i=0,u=-1,c={};n.split("").forEach((function(t,n){var o=void 0;t===a&&(i++,o=w(r,i-1),-1===u&&e[n]===o&&(u=n)),c[n]=o}));for(var l=function(t){return n[t]===a&&e[t]!==c[t]},s=0,f=o.length;s<f;s++)o[s]=s===u||l(s)||l(s-1);return o[n.indexOf(a)]=!0,o}function z(e){e.mask,e.allowEmptyFormatting;var t=e.format,n=e.inputMode;void 0===n&&(n="numeric");var r=e.onKeyDown;void 0===r&&(r=i);var a=e.patternChar;void 0===a&&(a="#");var u=e.value,l=e.defaultValue,s=e.valueIsNumericString,f=o(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);!function(e){var t=e.mask;if(t&&("string"===t?t:t.toString()).match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}(e);var p=function(t){return N(t,e)},v=c(u)?l:u,d=null!==s&&void 0!==s?s:function(e,t){return""===e||!(null===t||void 0===t?void 0:t.match(/\d/))&&"string"===typeof e&&(!!e.match(/^\d+$/)||""===e)}(v,t),m=Object.assign(Object.assign({},e),{valueIsNumericString:d});return Object.assign(Object.assign({},f),{value:u,defaultValue:l,valueIsNumericString:d,inputMode:n,format:function(e){return R(e,m)},removeFormatting:function(e,t){return T(e,t,m)},getCaretBoundary:p,onKeyDown:function(e){var n=e.key,o=e.target,i=o.selectionStart,u=o.selectionEnd,c=o.value;if(i===u){var l=i;if("Backspace"===n||"Delete"===n){var s="right";if("Backspace"===n){for(;l>0&&t[l-1]!==a;)l--;s="left"}else{for(var f=t.length;l<f&&t[l]!==a;)l++;s="right"}l=x(c,l,p(c),s)}else t[l]!==a&&"ArrowLeft"!==n&&"ArrowRight"!==n&&(l=x(c,l+1,p(c),"right"));l!==i&&g(o,l),r(e)}else r(e)}})}function B(e){var t=z(e);return a.createElement(E,Object.assign({},t))}}}]);
//# sourceMappingURL=653.1f1011b3.chunk.js.map