{
    const $___mock_0af09b6b8c778d41 = {};
    (exports => {
        'use strict';
        let isSealed = false;
        class Storage {
            constructor() {
                if (isSealed) {
                    throw new TypeError('Illegal constructor');
                }
            }
            get length() {
                return Object.keys(this).length;
            }
            key(index) {
                const keys = Object.keys(this);
                if (index < 0 || index >= keys.length) {
                    return null;
                }
                return keys[index];
            }
            getItem(key) {
                return Object.prototype.hasOwnProperty.call(this, key) ? this[key] : null;
            }
            setItem(key, value) {
                this[key] = String(value);
            }
            removeItem(key) {
                delete this[key];
            }
            clear() {
                const keys = Object.keys(this);
                for (const key of keys) {
                    delete this[key];
                }
            }
        }
        exports.Storage = {
            configurable: true,
            enumerable: true,
            value: Storage,
            writable: true
        };
        const localStorage = new Storage();
        exports.localStorage = {
            configurable: true,
            enumerable: true,
            get() {
                return localStorage;
            }
        };
        const sessionStorage = new Storage();
        exports.sessionStorage = {
            configurable: true,
            enumerable: true,
            get() {
                return sessionStorage;
            }
        };
        isSealed = true;
    })($___mock_0af09b6b8c778d41);
    (function () {
        (function () {
            var data = {
                'resource': {
                    'version': '52',
                    'macros': [
                        { 'function': '__e' },
                        {
                            'function': '__u',
                            'vtp_component': 'URL',
                            'vtp_enableMultiQueryKeys': false,
                            'vtp_enableIgnoreEmptyQueryParam': false
                        },
                        {
                            'function': '__u',
                            'vtp_component': 'HOST',
                            'vtp_enableMultiQueryKeys': false,
                            'vtp_enableIgnoreEmptyQueryParam': false
                        },
                        {
                            'function': '__u',
                            'vtp_component': 'PATH',
                            'vtp_enableMultiQueryKeys': false,
                            'vtp_enableIgnoreEmptyQueryParam': false
                        },
                        {
                            'function': '__f',
                            'vtp_component': 'URL'
                        },
                        { 'function': '__e' }
                    ],
                    'tags': [
                        {
                            'function': '__html',
                            'priority': 11,
                            'vtp_html': '<script type="text/gtmscript"></script>',
                            'vtp_supportDocumentWrite': false,
                            'vtp_enableIframeMode': false,
                            'vtp_enableEditJsMacroBehavior': false,
                            'tag_id': 45
                        },
                        {
                            'function': '__html',
                            'priority': 10,
                            'vtp_html': '<script type="text/gtmscript">(function(a,y,v){a.s_hsp=function(){for(var b=0;b<arguments.length;b++){if(a.mt_special_params.includes(arguments[b]))return 1;if(a.localStorage.getItem("mt_spec_params_array")){var d=JSON.parse(a.localStorage.getItem("mt_spec_params_array"));if(d&&d.includes(arguments[b]))return 1}if(a.mt_temp_params&&a.mt_temp_params.includes(arguments[b]))return 1}return 0};a.pb_sdp=function(b,d,c){for(var e in d){var g=e;"."==e[0]&&(g=e.substr(1));if("undefined"==typeof b[g]||c&&!b[e])b[g]=d[e]}};a.mt_gdpr_on||\n(a.mt_gdpr_on=1,a.mt_gdpr_content={cmpApi:"iab",timeout:8E3,defaultGdprScope:!0});a.pb_4=0;a.pb_9="BP";a.pb_sdp(a,{".mt_ext_stat":0,".mt_ext_stat_send":0,".mt_bid_cache":!1,".mt_cmp_on":!0,".pb_t":[],".pb_4":0,".pb_l_result_found":0,".pb_8":Math.floor(Date.now()/1E3),".pb_gv":0,".mt_temp_params":[],".pb_gv":0,".mt_global_build_time":0,".pb_cl":[],".mt_special_params":[]},1);a.mt_google_slot_statuses={};for(var w=0,u=0;u<a.pb_cl.length;u++)884==a.pb_cl[u].id&&(w=1);w||a.pb_cl.push({id:884,pub_id:"TZNXXBV",\nversion:314,app:"BP",time:1627048022,started:1,old:0});if(314>a.pb_gv&&1627048022>a.mt_global_build_time)a.pb_gv=314,a.mt_global_build_time=1627048022;else{for(u=0;u<a.pb_cl.length;u++)884==a.pb_cl[u].id&&(a.pb_cl[u].old=1);console.log("%cDisactivate "+a.pb_gv+"/314","color:#F00;");return 0}w=a.location.href;a.frameElement&&(w=a.location.href);-1<w.indexOf("#")&&(a.mt_special_params=w.split("#")[1],a.mt_special_params=a.mt_special_params.split(","));if(a.s_hsp("stop_all_containers")&&!a.s_hsp("start_container_884")||\na.s_hsp("stop_container_884")){for(u=0;u<a.pb_cl.length;u++)884==a.pb_cl[u].id&&(a.pb_cl[u].started=0);console.log("%cStop container TZNXXBV","color:#F00;");return 0}console.log("CONTAINER %cTZNXXBV%c-884 BUILD 2021-07-23 13:47:02 [BP|314] ","color:#00661d;text-decoration:underline","color:#000");w=Math.floor((new Date).getTime()/1E3)-1627048022;console.log(Math.floor(w/3600)+"h "+Math.floor((w-3600*Math.floor(w/3600))/60)+"m");a.pb_lg_proc_style=function(b){if(b){var d={};a.mt_outdata&&a.mt_outdata.console_styles&&\n(d=a.mt_outdata.console_styles);b=b.split(",");for(var c=0;c<b.length;c++)"undefined"!=typeof d[b[c]]&&(b[c]=d[b[c]]);return b}return[]};a.pb_lg=function(b,d,c,e,g,h){if(a.pb_lg_cond(b,h)){e=a.pb_lg_proc_style(e);g=a.pb_lg_proc_style(g);b||(b={id:"sys","do":"sys"},e.push("font-style:italic"));h="";var f=new Date;h+="["+b.id+"/"+(b["do"]?b["do"]:"")+"]["+("0"+f.getMinutes()).slice(-2)+":"+("0"+f.getSeconds()).slice(-2)+":"+("00"+f.getMilliseconds()).slice(-3)+"] %c%s ";null!=c&&"undefined"!=typeof c&&\n(h="object"==typeof c?c instanceof HTMLElement?h+"%o":h+"%O":"string"==typeof c||"boolean"==typeof c?h+"%s":h+"%d");console.log(h,e.join(";"),d,g.join(";"),c)}};a.pb_lg_m=function(b,d,c,e,g){if(a.pb_lg_cond(b,g))for(var h in d)a.pb_lg(b,h,d[h],c,e,g)};a.pb_lg_group=function(b,d,c){b||(b={debug:1,id:"sys","do":"sys"});a.pb_lg_cond(b)&&(c?console.group("\\x3e\\x3e ["+b.id+"/"+(b["do"]?b["do"]:"")+"] "+d):console.groupEnd())};a.pb_lg_cond=function(b,d){return d&&!a.s_hsp(d)?0:a.s_hsp("show_logs_all")||\n!b&&(a.s_hsp("show_logs")||a.s_hsp(d))||b&&(b.db||a.s_hsp("show_logs_"+b.id))?1:0};a.mt_add_temp_param=function(b){a.mt_temp_params.includes(b)||a.mt_temp_params.push(b)};a.pb_ib=function(b,d,c,e){a.pb_lg(b,"Parent",d);e?(-1==e&&(a.pb_lg(b,"Append before",c,"subtest","","show_logs_sub"),d.parentNode.insertBefore(c,d)),1==e&&(a.pb_lg(b,"Append after",c,"subtest","","show_logs_sub"),d.parentNode.insertBefore(c,d.nextSibling))):(a.pb_lg(b,"Append inside",c,"subtest","","show_logs_sub"),d.appendChild(c))};\na.mt_search_div=function(b,d,c){var e=a,g=y,h;a.pb_lg(0,"Search block:"+d,0,"subtest","","show_logs_sub");a.frameElement?(a.pb_lg(b,"Block inside iframe"),(h=a.pb_f(d,c,g,b))?a.pb_lg(b,"Block succefuly found inside iFrame",0,"subtest","","show_logs_sub"):(a.pb_lg(b,"Block is not found inside iFrame",0,"subtest","","show_logs_sub"),e=parent.window,g=parent.window.document,(h=a.pb_f(d,c,g,b))||a.pb_lg(b,"Block is not found outside iFrame",0,"subtest","","show_logs_sub"))):h=a.pb_f(d,c,g,b);b.xw=e;b.xd=\ng;a.pb_lg(0,"Block:",h,"subtest","","show_logs_sub");return h};a.pb_f=function(b,d,c,e,g){try{var h=0;h=a.pb_f_sub(e,c,b,d);if(g)return h?1:0;if(!h){a.pb_lg(e,"Search in iframes",0,"subtest","","show_logs_sub");var f=c.getElementsByTagName("iframe");a.pb_lg(e,f);for(c=0;c<f.length;c++)if(a.pb_lg(e,"search in:",f[c],"subtest","","show_logs_sub"),!h){try{var k=f[c].contentDocument||f[c].contentWindow.document;k&&(h=a.pb_f_sub(e,k,b,d))}catch(q){}h&&a.pb_lg(e,"Block found in iframe:",f[c],"subtest",\n"","show_logs_sub")}}}catch(q){a.pb_se(e,120,q.name+":"+q.message,q)}h&&a.pb_lg(e,"Element",h,"subtest","","show_logs_sub");return h};a.pb_f_sub=function(b,d,c,e){a.pb_lg(b,"SEARCH BLOCK INSIDE",d,"subtest","","show_logs_sub");if(""==c||"#"==c)return a.pb_lg(b,"SEARCH BODY",null,"subtest","","show_logs_sub"),el=d.getElementsByTagName("BODY")[0],a.pb_lg(b,"SEARCH RESULT",el,"subtest","","show_logs_sub"),el;if("."==c[0])return a.pb_lg(b,"SEARCH BLOCK BY CLASS",c+"["+e+"]","subtest","","show_logs_sub"),\nel=-1!=e?d.getElementsByClassName(c.substr(1))[e]:d.getElementsByClassName(c.substr(1)),a.pb_lg(b,"SEARCH RESULT",el,"subtest","","show_logs_sub"),el;if("["==c[0])return a.pb_lg(b,"SEARCH BLOCK BY RAW QUERY",c,"subtest","","show_logs_sub"),el=d.querySelector(c),a.pb_lg(b,"SEARCH RESULT",el,"subtest","","show_logs_sub"),el;if("*"==c[0])return c="[id*\\x3d\'"+c.substr(1)+"\']",a.pb_lg(b,"SEARCH BLOCK BY ID LIKE",c,"subtest","","show_logs_sub"),el=d.querySelector(c),a.pb_lg(b,"SEARCH RESULT",el,"subtest",\n"","show_logs_sub"),el;if("."!=c[0]&&"["!=c[0]&&"*"!=c[0])return"#"==c[0]&&(c=c.substr(1)),a.pb_lg(b,"SEARCH BLOCK BY ID",c,"subtest","","show_logs_sub"),el=d.getElementById(c),a.pb_lg(b,"SEARCH RESULT",el,"subtest","","show_logs_sub"),el;a.pb_lg(b,"SEARCH RESULT",el,"subtest","","show_logs_sub");return el};a.pb_i=function(b,d,c,e,g,h){a.pb_lg(h,"START ADD IFRAME "+b);h&&h.id!=b&&(b=h.id);var f=y.createElement("iframe");f.setAttribute("marginwidth","0");f.setAttribute("marginheight","0");f.setAttribute("frameborder",\n"no");f.setAttribute("id",d);f.setAttribute("generated",b);f.border=0;f.scrolling="no";f.margin=0;f.allowtransparency=1;f.width=0==c?"100%":c;f.height=0==e?"100%":e;d=0;if(h)d=h;else for(c=0;c<a.pb_t.length;c++)e=a.pb_t[c],a.pb_lg(h,"Check tag ID "+e.id),e.id==b&&null!=e.d&&(d=e);d&&(g=a.mt_custom_replace(g,"_MTTAGIDDYN_",d.id),a.pb_lg(h,"TAG",d),null!=d.d&&(a.pb_lg(h,"Check tag ID ",d.id),a.pb_lg(h,"DIV",d.d),a.pb_lg(h,"IFRAME",f),d.d.appendChild(f),b=f.contentWindow.document,b.write("\\x3chtml\\x3e\\x3chead\\x3e\\x3c/head\\x3e\\x3cbody\\x3e"+\ng+"\\x3c/body\\x3e\\x3c/html\\x3e"),b.close()));a.pb_lg(h,"END ADD IFRAME")};a.mt_get_tag_by_block=function(b){if(b)for(var d=0;d<a.pb_t.length;d++){var c=a.pb_t[d];if(c.rnb&&c.random_params){if(b.hasAttribute(c.random_params.mt_tag_key)&&b.getAttribute(c.random_params.mt_tag_key)==c.random_params.mt_tag_value)return c}else if(b.hasAttribute("mt-tag")&&b.getAttribute("mt-tag")=="mt_"+c.id)return c}return 0};a.pb_l=function(b,d){if(a.pb_l_result_found)return 0;if(a.s_hsp("pblooker_first_1_only")&&!b.first_pb_skip)return b.first_pb_skip=\n1,a.pb_l_result_found=0;if(a.s_hsp("pblooker_1_only"))return a.pb_lg(b,"abort passback looker (1)"),a.pb_l_result_found=0;if(a.s_hsp("pblooker_0_only"))return a.pb_lg(b,"abort passback looker (0)"),a.pb_l_result_found=1;a.pb_lg(b,"Passback looker called for tag",b.id,0,0,"show_logs_pb");a.pb_lg(b,"Passback looker called for element",d,0,0,"show_logs_pb");d.childNodes&&d.childNodes.forEach(function(c){if(1==c.nodeType&&"none"!=a.getComputedStyle(c,null).getPropertyValue("display")&&"hidden"!=a.getComputedStyle(c,\nnull).getPropertyValue("visibility")){var e=0;b.rnb&&b.random_params?c.hasAttribute(b.random_params.mt_tag_key)&&c.getAttribute(b.random_params.mt_tag_key)==b.random_params.mt_tag_value&&(e=1):c.hasAttribute("mt-tag")&&c.getAttribute("mt-tag")==b.id&&(e=1);if(e)b.last_script_is_passback||a.pb_lg(b,"SKIP SELF SCAN",null,0,0,"show_logs_pb");else if(e=c.tagName,a.pb_lg(b,"CHILD NAME ["+e+"] ["+c.getAttribute("id")+"]",null,0,0,"show_logs_pb"),!["HEAD","SCRIPT","LINK"].includes(e.toUpperCase())){if("A"==\ne)return a.pb_lg(b,"WHITE -\\x3e NOT LINK FOUND",0,"bold",null,"show_logs_pb"),a.pb_l_result_found=1,0;if("IMG"==e&&(a.pb_lg(b,"image params ["+c.width+"/"+c.height+"] ["+c.naturalWidth+"/"+c.naturalHeight+"] url\\x3d"+c.getAttribute("src"),0,0,null,"show_logs_pb"),2<c.width+c.height&&2<c.naturalWidth+c.naturalHeight))return a.pb_lg(b,"WHITE -\\x3e NOT IMG FOUND",c,"bold",null,"show_logs_pb"),a.pb_l_result_found=1,0;if("DIV"==e&&c.style.backgroundImage&&30<c.style.backgroundImage.length&&5<c.clientHeight)if(a.pb_lg(b,\n"DIV WITH IMG:",c),a.mt_check_image(b,c.style.backgroundImage))a.pb_lg(b,"Empty",null,null,null,"show_logs_pb");else return a.pb_lg(b,"WHITE -\\x3e NOT DIV BGIMG",c,"bold",null,"show_logs_pb"),a.pb_l_result_found=1,0;if("CANVAS"==e&&(a.pb_lg(b,"canvas params ["+c.clientWidth+"/"+c.clientHeight+"]"),10<c.clientWidth||10<c.clientHeight))return a.pb_lg(b,"WHITE -\\x3e BIG CANVAS",c,"bold",null,"show_logs_pb"),a.pb_l_result_found=1,0;if("IFRAME"==e)if(a.pb_lg(b,"IS IFRAME "+c.src,0,0,null,"show_logs_pb"),\nnull==c.contentDocument){if(e=a.s_g2(b,c),!e)return a.pb_lg(b,"WHITE -\\x3e BLOCKED CONTENT",0,"bold",null,"show_logs_pb"),a.pb_l_result_found=1,0}else return c=c.contentDocument||c.contentWindow.document,a.pb_l(b,c);if(!a.pb_l_result_found)return a.pb_l(b,c)}}});return 1};a.pb_sc=function(b,d){!d||d instanceof HTMLBodyElement||(a.pb_lg(b,"CLEAR BLOCK "+d.id,d),a.pb_th(b,"c","Smart clear block "+d.id),d.childNodes.forEach(function(c){1==c.nodeType&&(c.getAttribute("mt-tag")?(a.pb_lg(b,"Clear content "+\nd.id,c),c.innerHTML=""):(a.pb_lg(b,"Remove child "+d.id,c),c.parentNode.removeChild(c)))}))};a.pb_cp=function(b,d){try{d&&"none"==getComputedStyle(d,null).display&&(a.pb_lg(b,"PARENT INVISIBLE"),d.style.display="block")}catch(c){a.pb_se(b,120,c.name+":"+c.message,c)}};a.mt_get_geo=function(b){var d=(new Date).getTime();if(null==localStorage.getItem("mt_gcode_country")||localStorage.getItem("mt_gcode_time")&&108E5<d-localStorage.getItem("mt_gcode_time")){if(a.pb_lg(0,"\\x3e geolocation start"),"undefined"==\ntypeof a.pb_7){a.pb_7=1;var c=new XMLHttpRequest;c.onload=function(){4===c.readyState&&200===c.status?(a.pb_lg(0,"\\x3e GEO result",c.responseText),a.pb_4=c.responseText.trim().toLowerCase(),localStorage.setItem("mt_gcode_country",a.pb_4),localStorage.setItem("mt_gcode_time",(new Date).getTime()),b&&a.pb_pt()):console.error(c.statusText)};c.open("GET","https://gs.moneytag.tech/ips",1);c.send(null)}}else a.pb_4=localStorage.getItem("mt_gcode_country"),a.pb_lg(0,"\\x3e GEO result from storage",a.pb_4),\nb&&a.pb_pt()};a.mt_check_image=function(b,d){a.pb_lg_group(b,"CHECK IMG",1);a.pb_lg(b,"START CHECK IMAGE");var c=0;if("string"===typeof d){d=d.trim();d.startsWith("url(")&&(d=d.substring(5),d=d.substring(0,d.length-2));var e=d.split(",");d=e[0];e=e[1];if(d.includes("png;base64")){a.pb_lg(b,"[PNG]");var g=window.atob(e),h=g.length;d=new Uint8Array(h);for(e=0;e<h;e++)d[e]=g.charCodeAt(e);var f=h=0;g=0;var k=255,q=0;d=d.subarray(8);for(var l="";"IEND"!=l;){a.pb_lg(b,"_________________");e=a.intFromBytes(d.subarray(0,\n4));d=d.subarray(4);l=a.bin2String(d.subarray(0,4)).toUpperCase();d=d.subarray(4);var m=d.subarray(0,e);d=d.subarray(e);d=d.subarray(4);a.pb_lg(b,"chunk_name\\x3d["+l+"]");a.pb_lg(b,"chunk_length\\x3d"+e);a.pb_lg(b,"chunk content",m);"IHDR"==l&&(h=a.intFromBytes(m.subarray(0,4)),f=a.intFromBytes(m.subarray(4,8)),a.intFromBytes(m.subarray(8,9)),a.intFromBytes(m.subarray(9,10)));"IDAT"==l&&(g=m.length);if("TRNS"==l)for(img_alpaha_palette_length=m.length,e=0;e<m.length;e++){var p=a.intFromBytes([m[e]]);\na.pb_lg(b,"alpha\\x3d"+p);p>q&&(q=p);p<k&&(k=p)}}d=h*f;d/2>g&&(c=1)}}a.pb_lg_group(b,"CHECK IMG",0);return c};a.intFromBytes=function(b){for(var d=0,c=0;c<b.length;++c)d+=b[c],c<b.length-1&&(d<<=8);return d};a.bin2String=function(b){for(var d="",c=0;c<b.length;c++)d+=String.fromCharCode(b[c]);return d};a.pb_cb=function(b){a.pb_lg(b,"Create block for tag:",b.id,"subtest","","show_logs_sub");var d=y.createElement("div");if(b.rnb){var c=a.pb_rds(10),e=a.pb_rdn(5,8);b.random_params={mt_tag_key:a.pb_rds(e),\nmt_tag_value:a.pb_rds(e)};d.setAttribute(b.random_params.mt_tag_key,b.random_params.mt_tag_value)}else c="mt_"+b.id,d.setAttribute("mt-tag",b.id);d.setAttribute("id",c);a.pb_ib(b,b.d_parent,d,b.append_type);b.d=a.pb_f(c,b.n,b.xd,b);b.d&&(b.first_div_id_generated||(b["do"]=b.di,b.first_div_id_generated=1),b.di=c,""!=b.css&&b.d.setAttribute("style",b.css),a.s_hsp("hightlight_blocks")&&(b.d.style.border="2px solid #00FF00",b.d_parent.style.border="2px dotted #0000FF"),b.d.onmouseover=function(){b.rm=\n1},b.d.onmouseout=function(){b.rm=0;b.rs=0})};a.check_double_time_diap=function(b){if(b.dto){a.pb_lg(b,"Check time diapasone",b.dt,"subtest","","show_logs_sub");var d=b.dt.split("-");if(2==d.length)return b=1*d[0],d=1*d[1],a.check_time_diap(b,d)}return 0};a.check_time_diap=function(b,d){var c=(new Date).getHours();if(b<d){if(c>=b&&c<=d)return 1}else if(c<b){if(c<=d)return 1}else if(c>=b)return 1;return 0};a.pb_rds=function(b,d){var c="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";d&&\n(e+="1234567890");for(d=0;d<b;d++)c+=e.charAt(Math.floor(Math.random()*e.length));return c};a.pb_rdn=function(b,d){return Math.random()*(d-b)+b};a.pb_rde=function(b,d){var c=Math.random();a.pb_lg(b,"Random limit:",d/100,"subtest","","show_logs_sub");a.pb_lg(b,"Random result:",c,"subtest","","show_logs_sub");return c<d/100?(a.pb_lg(b,"Random TRUE",null,"subtest","","show_logs_sub"),1):0};a.pb_ggr=function(b,d,c,e){if(!e)return 1;a.pb_lg(b,"Start geo check",d,"subtest","","show_logs_sub");a.pb_lg(b,\n"Invert",c,"subtest","","show_logs_sub");d=d.includes(a.pb_4);c&&(d=!d);a.pb_lg(b,"Result:",d,"subtest","","show_logs_sub");return d};a.pb_ci=function(b,d){try{b.tc||(b.tc={}),b.tc[d]?b.tc[d]++:b.tc[d]=1}catch(c){}};a.pb_cg=function(b,d){try{return b.tc?b.tc[d]?b.tc[d]:0:null}catch(c){}return null};a.pb_cc=function(b,d){try{if(!b.tc)return null;b.tc[d]||(b.tc[d]=0)}catch(c){}};a.pb_glv=function(b,d,c){b=a.localStorage.getItem(b);if(null==b){if(d)return d}else return c?JSON.parse(b):b;return null};\na.pb_clo=function(b){if(null==b||"object"!=typeof b)return b;var d=b.constructor(),c;for(c in b)b.hasOwnProperty(c)&&(d[c]=b[c]);return d};a.mt_check_block_mask_id=function(b,d,c){for(var e=0;e<c.length;e++)if(-1!=b.toLowerCase().indexOf(c[e].blockid.toLowerCase()))return 0;e=c=0;"*"==d[0]&&(e=1);"*"==d[d.length-1]&&(c=1);e&&c&&(e=c=0);d=d.replace("*","");if(b==d)return 1;var g=b.indexOf(d);return-1==g?0:!c&&!e||c&&0==g||e&&g==b.length-d.length?1:0};a.mt_undnone_elements=function(b){for(var d=0;d<\nb.length;d++)"none"==a.getComputedStyle(b[d],null).getPropertyValue("display")&&(b[d].style.display="block"),"hidden"==a.getComputedStyle(b[d],null).getPropertyValue("visibility")&&(b[d].style.visibility="visible")};a.pb_pi=function(b,d){a.pb_lg(b,"Check parent visibility for block",d,"subtest","","show_logs_sub");var c=[],e=0,g=null;do if(d){var h=0;"none"==a.getComputedStyle(d,null).getPropertyValue("display")&&(h=1,a.pb_lg(b,"Element is display none",d,"subtest","","show_logs_sub"),e=1,c.push(d),\ng=null);"hidden"==a.getComputedStyle(d,null).getPropertyValue("visibility")&&(h=1,a.pb_lg(b,"Element is hidden",d,"subtest","","show_logs_sub"),e=1,c.push(d),g=null);h||null!=g||(g=d)}while(d=d.parentElement);return{result:e,blocks:c,last_visible:g}};a.pb_v=function(b,d,c){try{if(c.frameElement){d=c.frameElement;var e=d.getBoundingClientRect();return 0<e.top+e.height/2&&e.top+e.height/2<parent.window.innerHeight?1:0}if(d){b=0;for(e=d;e=e.parentElement;)if("sticky"==c.getComputedStyle(e,null).getPropertyValue("position")){var g=\nd.getBoundingClientRect();return 0<g.top+g.height/2&&g.top+g.height/2<c.innerHeight?1:0}if(!b){for(var h=d.offsetTop,f=d.offsetHeight;d.offsetParent;)d=d.offsetParent,h+=d.offsetTop;return h+f/2>c.pageYOffset&&h+f/2<c.pageYOffset+c.innerHeight}}else return 0}catch(k){c.pb_se(0,110,k.name+":"+k.message,k)}};a.pb_xr=function(b,d){var c=new XMLHttpRequest;c.open("POST",b,1);c.setRequestHeader("Content-type","application/json;charset\\x3dutf-8");c.onload=function(){4===c.readyState&&(a.pb_lg(0,"Response:",\nc.responseText),200!==c.status&&console.error(c.statusText))};c.send(JSON.stringify(d))};a.mt_get_day_of_week=function(){var b=new Date;b=b.getDay();0==b&&(b=7);return b};a.mt_set_script_tags=function(b,d){for(b=0;b<d.length;b++);};a.mt_custom_replace=function(b,d,c){for(var e=b;-1!=e.indexOf(d);){var g=e.indexOf(d);b=e.substr(0,g);e=e.substr(g+d.length);e=b+c+e}return e};a.mt_check_have_childs=function(b){var d=0;b.childNodes&&b.childNodes.forEach(function(c){1==c.nodeType&&(c.hasAttribute("mt-tag")||\nd++)});return d};a.mt_prebid_timeout_default=2E3;a.mt_prebid_timeout=a.mt_prebid_timeout_default;a.mt_prebid_timeout_changed=0;a.pb_h=function(b,d){a.pb_lg(b,"\\x3e headerbidding called",null,"headerbidding,bold");200>b.headerbidding_delay&&(b.headerbidding_delay=200);b.headerbidding_delay!=a.mt_prebid_timeout&&(a.mt_prebid_timeout_changed?a.mt_prebid_timeout<b.headerbidding_delay&&(a.mt_prebid_timeout=b.headerbidding_delay,a.pb_lg(b,"\\x3e set prebid timeout to ",a.mt_prebid_timeout,"headerbidding")):\n(a.mt_prebid_timeout_changed=1,a.mt_prebid_timeout=b.headerbidding_delay,a.pb_lg(b,"\\x3e set prebid timeout to ",a.mt_prebid_timeout,"headerbidding")));a.pb_lg(b,"\\x3e hb timeout",a.mt_prebid_timeout,"headerbidding,bold","","show_logs_hb");a.pb_1=a.pb_1||[];for(var c=0;c<d.au.length;c++){a.pb_lg(b,"\\x3e add to prebid tags ",d.au[c].code,"headerbidding","","show_logs_hb");var e=d.au[c].code;a.pb_1[e]=b;a.pb_i(b.id,e+"_iframe",1,1,"")}a.pb_lg(b,"\\x3e prebid tags:",a.pb_1,"headerbidding","","show_logs_hb");\na.pb_lg(b,"\\x3e PBJS AT INIT:",a.pbjs,"headerbidding","","show_logs_hb");if("undefined"==typeof a.mt_addunits__storage||"undefined"!=typeof a.pb_2)a.mt_addunits__storage=[],a.pb_lg(b,"\\x3e CREATE STORAGE ",null,"headerbidding","","show_logs_hb"),a.pb_lg(0,"\\x3e CREATE STORAGE ",null,"headerbidding","","show_logs_hb");a.mt_addunits__storage.push(d.au[0]);a.pbjs=a.pbjs||{};a.pbjs.que=a.pbjs.que||[];var g=a.mt_addunits__storage;a.pb_lg(b,"STORAGE VALUE",g,"headerbidding","","show_logs_hb");d=function(){a.pb_2=\n1;a.pb_lg(0,"START PBJS QUE",g,"headerbidding","","show_logs_hb");var f={debug:a.s_hsp("show_logs_hb"),cache:{url:0}};a.mt_cmp_on&&(a.pb_lg(0,"set CMP on",null,"headerbidding","","show_logs_hb"),f.consentManagement=a.mt_gdpr_on&&a.mt_gdpr_content?{gdpr:a.mt_gdpr_content}:{gdpr:{cmpApi:"iab",timeout:3E3,allowAuctionWithoutConsent:0}});a.mt_bid_cache&&(a.pb_lg(0,"set BID CACHE on",null,"headerbidding","","show_logs_hb"),f.useBidCache=1);a.pb_lg(0,"Final config:",f,"headerbidding","","show_logs_hb");\na.pbjs.setConfig(f);a.pbjs.aliasBidder("appnexus","oando");a.pbjs.aliasBidder("rubicon","rubiconbrand");a.pbjs.aliasBidder("rubicon","rubiconclassic");a.pbjs.aliasBidder("appnexus","apx2");a.pbjs.aliasBidder("appnexus","apx3");a.pbjs.aliasBidder("appnexus","apx4");a.pbjs.aliasBidder("appnexus","apx5");a.pbjs.aliasBidder("appnexus","media152apx");a.pbjs.aliasBidder("appnexus","mediasquareclass");a.pbjs.aliasBidder("appnexus","mediasquaremax");a.pbjs.requestBids({adUnits:g,timeout:a.mt_prebid_timeout,\nbidsBackHandler:function(k){a.pb_lg(0,"\\x3e start handler",a.pbjs,"headerbidding","","show_logs_hb");var q=a.pbjs.getAdserverTargeting(),l=a.pbjs.getNoBids();a.pb_lg(0,"\\x3e response",q,"headerbidding","","show_logs_hb");a.pb_lg(0,"\\x3e bids raw",k,"headerbidding","","show_logs_hb");a.pb_lg(0,"\\x3e no bids",l,"headerbidding","","show_logs_hb");a.pb_lg(0,"\\x3e request",g,"headerbidding","","show_logs_hb");for(var m in q){var p=a.pb_1[m];a.pb_lg(0,"\\x3e HB RESPONSE FOR DIV",m,"headerbidding");var n=\n0,r;for(r in g)g[r].code==m&&(n=1);a.pb_lg(0,"\\x3e process\\x3d",n,"headerbidding","","show_logs_hb");if(n){n=q[m];var z=1;a.pb_lg(0,"\\x3e UNIT FOR ",m,"headerbidding","","show_logs_hb");a.pb_lg(0,"\\x3e UNIT FOR ",n,"headerbidding","","show_logs_hb");if(n&&n.hb_adid){var x=document.getElementById(m+"_iframe"),A=x.contentWindow.document;a.pb_lg(0,"\\x3e iFrame ",x,"headerbidding","","show_logs_hb");if(n.hb_native_title){a.pb_lg(0,"\\x3e RENDER NATIVE",k[m],"headerbidding");x=null;for(var B in k[m].bids)k[m].bids[B].adId==\nn.hb_adid&&(x=k[m].bids[B]);a.pb_rn(n,x,p)}else a.pbjs.renderAd(A,n.hb_adid);a.pb_lg(p,"\\x3e CALL PASSBACK white\\x3d0",null,"headerbidding","","show_logs_hb");a.pb_th(p,"p","White (hb)\\x3d0");a.pb_cc(p,"hb_fail_series");a.pb_p({t:p,white:0,white_real:0,direct:1})}else z=0,a.pb_lg(p,"\\x3e CALL PASSBACK white\\x3d1",null,"headerbidding","","show_logs_hb"),a.pb_th(p,"p","White (hb)\\x3d1"),a.pb_ci(b,"hb_fail_series"),a.pb_ci(b,"hb_fail_"+b.ls),a.pb_p({t:p,white:1,white_real:1,direct:1});a.mt_hbstat_process&&\na.mt_hbstat_process(p,z,m,k,l,g)}a.pbjs.removeAdUnit(m)}a.mt_prebid_timeout_changed=0;a.mt_prebid_timeout=a.mt_prebid_timeout_default}})};a.pb_lg(b,"\\x3e tag first run",b.f,"headerbidding");a.pb_lg(b,"\\x3e tag script loaded",a.pb_3,"headerbidding");a.pb_lg(b,"\\x3e tag script loaded end",a.pb_3_end,"headerbidding");"undefined"==typeof a.pb_3_end?(a.pb_lg(0,"\\x3e ADUNITS SET",null,"headerbidding"),a.pbjs.que[0]=d,a.pb_lg(0,"\\x3e ADUNITS VALUE",a.pbjs.que[0],"headerbidding")):(a.pb_lg(0,"\\x3e ADUNITS PUSH",\nnull,"headerbidding"),d());a.pb_lg(0,"\\x3e END HB",null,"headerbidding");if("undefined"==typeof a.pb_3){a.pb_lg(0,"\\x3e Start load PDJS library",null,"headerbidding","","show_logs_hb");a.pb_3=1;var h=y.createElement("script");h.type="text/javascript";h.src="https://storage.googleapis.com/moneytag-hb-lib/prebid-moneytag-big.js";h.onload=function(){a.pb_lg(0,"\\x3e PDJS library loaded",null,"headerbidding","","show_logs_hb");a.pb_3_end=1};a.setTimeout(function(){var f=y.querySelector("body").firstChild;\na.pb_lg(0,"\\x3e append PDJS library to",f,"headerbidding","","show_logs_hb");f.parentNode.insertBefore(h,f)},100)}};String.prototype.replaceAll=function(b,d){var c=this;return c.split(b).join(d)};a.pb_rn=function(b,d,c){var e="hb_native_",g=127,h="";a.mt_outdata&&a.mt_outdata.native_template&&(h=a.mt_outdata);""!=c.nt&&(h=c.nt);for(var f in d["native"].impressionTrackers)h+=\'\\x3cimg src\\x3d"\'+d["native"].impressionTrackers[f]+\'" style\\x3d"width:0px;height:0px;"\\x3e\';b[e+"body"].length>g&&(b[e+"body"]=\nb[e+"body"].substring(0,127)+"...");h=h.replaceAll("https://wamiz.com/",b[e+"linkurl"]);h=h.replaceAll("[IMG]",b[e+"image"]);h=h.replaceAll("[TITLE]",b[e+"title"]);h=h.replaceAll("[BODY]",b[e+"body"]);h=h.replaceAll("[BRAND]",b[e+"brand"]);h=b[e+"icon"]?h.replaceAll("[ICON]",b[e+"icon"]):h.replaceAll("[ICON_STYLE]","display:none;");a.pb_i(c.id,"test_"+c.id,0,0,h)};a.pb_m=function(){try{this.n=navigator.userAgent,this.A=function(){return this.n.match(/Android/i)},this.BB=function(){return this.n.match(/BlackBerry/i)},\nthis.i=function(){return this.n.match(/iPhone|iPad|iPod/i)},this.O=function(){return this.n.match(/Opera Mini/i)},this.W=function(){return this.n.match(/IEMobile/i)},this.any=function(){return this.A()||this.BB()||this.i()||this.O()||this.W()}}catch(b){a.pb_se(0,110,t["do"],b)}};a.pb_d=function(b){if(b[0]&&b[1]&&b[2])return 1;var d=new a.pb_m,c=a.frameElement?parent.window.innerWidth:a.innerWidth;return b[2]&&d.any()&&780>=c||b[1]&&d.any()&&780<c||b[0]&&!d.any()?1:0};a.setTimeout(function(){if(a.s_hsp("stop_refresh"))return 0;\n"undefined"==typeof a.pb_0&&(1==a.pb_0,a.mt_time_old=v.now(),a.setInterval(function(){a.mt_time_new=v.now();var b=a.mt_time_new-a.mt_time_old;a.mt_time_old=v.now();"visible"==y.visibilityState&&a.pb_t.forEach(function(d){try{if(d.a&&0<d.rt&&!d.rm&&(d.pa&&0==d.s.length||0<d.s.length)&&(a.pb_v(d,d.d,window)&&(d.rs+=b,a.pb_lg(d,"time:",d.rs)),d.rs>d.rt)){d.was_refreshed=1;d.rs=0;var c=a.getComputedStyle(d.d,null),e=c.getPropertyValue("height");d.d.style.minHeight=e;0<d.s.length&&(d.d.innerHTML="",a.pb_th(d,\n"c","Inner block cleared"),a.pb_lg(d,"Block cleared:",d.d));d.clear_after_refresh&&(a.pb_lg(d,"Clear after refresh",d.d_parent),a.pb_th(d,"c","Clear parent after refresh"),a.pb_sc(d,d.d_parent));a.pb_s(d)}}catch(g){a.pb_se(0,110,g.name+":"+g.message,g)}})},500))},3E3);a.mt_window_focus_state=1;a.addEventListener("blur",function(){a.pb_lg(0,"window blur",null,"refresh",null,"show_logs_rf");a.mt_window_focus_state=0});a.addEventListener("focus",function(){a.pb_lg(0,"window focus",null,"refresh",null,\n"show_logs_rf");a.mt_window_focus_state=1});a.pb_srl=function(){a.mt_refresh_looker_start||(a.mt_refresh_looker_start=1,a.setInterval(function(){a.pb_lg(0,"START REFRESH LOOKER",null,"refresh",null,"show_logs_rf");a.pb_t.forEach(function(b){if(b.rl&&b.a){a.pb_lg(b,"TAG "+b.id,b.d_parent,"refresh",null,"show_logs_rf");var d="1",c=0;a.pb_lg(b,"Ident:"+d,null,"refresh",null,"show_logs_rf");b.rl_ident||(b.rl_ident="");var e=0;b.d_parent&&b.d_parent.childNodes&&0<b.d_parent.childNodes.length&&(e=1,b.d_parent.childNodes.forEach(function(g){a.pb_lg(b,\n"Child found",g,"refresh",null,"show_logs_rf");if(1==g.nodeType)if(g.hasAttribute("mt-tag"))g.getAttribute("mt-tag")!=b.id&&(a.pb_lg(b,"Another mt-tag found",null,"refresh",null,"show_logs_rf"),0<g.childNodes.length&&(a.pb_lg(b,"Have child nodes",g.childNodes,"refresh",null,"show_logs_rf"),g=g.childNodes[0],g.hasAttribute("mt-mark")||(a.pb_lg(b,"Refresh [1] by block",g,"refresh",null,"show_logs_rf"),c=1,g.setAttribute("mt-mark",d))));else if(a.pb_lg(b,"DIV found",null,"refresh",null,"show_logs_rf"),\n!g.hasAttribute("mt-mark")){for(var h="",f=0;f<g.attributes.length;f++)h+="["+g.attributes[f].name+"\\x3d"+g.attributes[f].value+"]";a.pb_lg(b,"Refresh [2] by block "+h,g,"refresh",null,"show_logs_rf");c=1;g.setAttribute("mt-mark",d)}}));c&&""!=b.rl_ident&&(a.pb_lg(b,"-------Parent refresh-------",null,"refresh,bold",null),a.pb_th(b,"f","Parent refreshed"),a.pb_spt(b,0,1));e&&(b.rl_ident=d)}})},500))};a.pb_a=function(){try{if(a.s_hsp("stop_init"))return 0;a.pb_lg(0,"\\x3e mt activate called");var b=\n0;"undefined"==typeof a.pb_5?b=1:a.pb_6&&(a.pb_lg(0,"\\x3e START LATER TAGS"),b=1);b&&(a.pb_lg(0,"\\x3e set mt activate timer"),a.pb_5=setTimeout(function(){a.pb_lg(0,"\\x3e timer called",a.pb_t);var d=0,c=0;a.pb_t.forEach(function(e){e.g&&0<e.c.length&&(d=1);e.dtg&&0<e.dtc.length&&a.check_double_time_diap(e)&&(d=1);e.gs&&(c=1)});a.mt_ext_stat&&(d=1);a.pb_lg(0,"\\x3e geo\\x3d",d);a.pb_lg(0,"\\x3e geo_statistick\\x3d",c);d?a.mt_get_geo(1):(c&&a.mt_get_geo(0),a.pb_pt())},50))}catch(d){a.pb_se(0,110,null,d)}};\na.pb_pt=function(b){try{a.pb_lg(0,"\\x3e process called",a.pb_t);a.pb_t||(a.pb_t=[]);a.pb_6=1;a.pb_t.forEach(function(c){a.pb_lg(c,"CHECK IN LOOP",c.activated+"/"+c.ch,"subtest","","show_logs_sub");if(c.activated||!(!c.disactivated||c.disactivated&&c.reactivate)||c.ch||b&&b!=c.id)a.pb_lg(c,"Skip reactivation",0,"subtest","","show_logs_sub");else{a.pb_lg(c,"LOOP IN",0,"subtest","","show_logs_sub");try{a.pb_th(c,"a","Process");try{if(!c.di||c.di&&2>c.di.lenth)c.di="";for(var e=0;e<c.s.length;e++)if(!c.s[e].di||\nc.s[e]&&2>c.s[e].di.length)c.s[e].di="";for(e=0;e<c.p.length;e++)if(!c.p[e].di||c.p[e].di&&2>c.p[e].di.length)c.p[e].di=""}catch(r){console.log(r)}c.website_id=c.id.split("_")[1];c.tag_id=c.id.split("_")[0];c._copy||(c._copy=a.pb_clo(c),a.mt_set_tag_overriden_params&&a.mt_set_tag_overriden_params(c));if(a.s_hsp("stop_all_containers")&&!a.s_hsp("start_container_"+c.website_id)||a.s_hsp("stop_container_"+c.website_id))return a.mt_dt(c,"Container "+c.website_id+" is stopped");if(a.s_hsp("stop_tag_"+\nc.id)||a.s_hsp("stop_all_tags")&&!a.s_hsp("start_tag_"+c.id))return a.mt_dt(c,"Stop tag");if(c.st&&!a.s_hsp("start_tag_"+c.id))return a.mt_dt(c,"Sleep");if(c.dac_allow){var g=a.mt_get_day_of_week();if(7<=c.dac.length&&"1"!=c.dac[g-1])return a.mt_dt(c,"Day not allowed")}if(c.wta&&!a.check_time_diap(c.wts,c.wte))return a.mt_dt(c,"Worktime");c.a=1;c.db=0;"undefined"==typeof c.rnd&&(c.rnd=1);c.rnd_current||(c.rnd_current=c.rnd+1);c.rnl||(c.rnl=10);c.reactivate_attemps||(c.reactivate_attemps=1);c.mlt&&\n(c.n=-1);if(c.reactivate)if(c.rnd_current--,0==c.rnd||0>=c.rnd_current)c.ll||c.mlt||a.pb_th(c,"r","Reactivate "+c.reactivate_attemps+"/"+c.rnl),c.rnd_current=c.rnd+1,c.reactivate_attemps++;else return a.mt_dt(c,"Skip reinit "+c.rnd_current+"/"+c.rnd);if(!a.pb_d(c.sh))return a.mt_dt(c,"Devices");if(!a.pb_pttg(c.id,c)&&!a.s_hsp("skip_custom_triggers","skip_custom_triggers_"+c.id))return c.ll&&(c.reactivate=1),a.mt_dt(c,"Custom triggers");if(!a.pb_ggr(c,c.c,c.gi,c.g))return a.mt_dt(c,"Countries");c.mlt&&\n(a.pb_lg(c,"Search multi_tag:",c.mlt),a.pb_lg(c,"Search multi_blocks:",c.mlb.length),a.pb_lg(c,"Search multi_tag_template:",c.mltt));if(c.mlt&&0==c.mlb.length&&!c.mltt||!c.mlt)c.d_parent||(c.d_parent=a.mt_search_div(c,c.di,c.n)),a.pb_lg(c,"Search block result:",c.d_parent);else{c.d_parent=[];a.pb_lg(c,"Result:",c.d_parent);if(c.mltt){a.pb_lg(c,"Search blocks by template");a.mt_search_div(c,c.di,c.n);var h=c.mltt.replace("*",""),f=document.querySelectorAll("[id*\\x3d\'"+h+"\']");a.pb_lg(c,"Blocks to check:",\nf);for(g=0;g<f.length;g++){var k=f[g].getAttribute("id");k&&a.mt_check_block_mask_id(k,c.mltt,c.mlb)&&c.d_parent.push(f[g])}}else for(a.pb_lg(c,"Search blocks by list",c.mlb),e=0;e<c.mlb.length;e++)if(!c.mlb[e].a){var q=a.mt_search_div(c,c.mlb[e].blockid,0);q&&(c.d_parent.push(q),c.mlb[e].a=1)}a.pb_lg(c,"Result:",c.d_parent)}if(c.mlt){a.pb_lg(c,"MULTI TAG",c.d_parent);c.a=0;c.reactivate=1;if(0<c.mlb.length){for(e=f=0;e<c.mlb.length;e++)c.mlb[e].a||(f=1);f||(c.reactivate=0)}if(c.d_parent)for(e=0;e<\nc.d_parent.length;e++){var l=c.d_parent[e];a.pb_lg(c,"Check element",l);f=1;for(k=l;k=k.parentElement;)1==k.nodeType&&(k.hasAttribute("mt-mtag")||k.hasAttribute("mt-tag"))&&(f=0);if(!l.hasAttribute("mt-mtag")&&f){a.pb_lg(c,"BLOCK TO INIT ",l);c.childs_amount||(c.childs_amount=0);l.setAttribute("mt-mtag",e);f={};Object.assign(f,c);f.a=0;f.parent_tag_object=c;f.id=c.id+"_"+c.childs_amount;f.d_parent=l;f.ch=0;f.mlt=0;f.mltt="";f.reactivate=0;f.history=[];f.clone_number=c.childs_amount+1;f.stat_block_tag=\nnull;f.stat_block_status=null;f.stat_block_tag_history=null;f.reactivate_attemps=1;f.ptk_reinits=0;f.s=Object.assign({},c.s);f.p=Object.assign({},c.p);k=[];for(var m=0;m<c.s.length;m++)f.s[m].h?k.push(JSON.parse(JSON.stringify(f.s[m]))):k.push(f.s[m]);f.s=null;f.s=k;k=[];for(m=0;m<c.p.length;m++)f.p[m].h?k.push(JSON.parse(JSON.stringify(f.p[m]))):k.push(f.p[m]);f.p=null;f.p=k;if(c.mlb.length||c.mltt)f["do"]=l.getAttribute("id"),f.di=l.getAttribute("id");for(k=0;k<f.s.length;k++)if(1==f.s[k].h)for(var p=\n0;p<f.s[k].au.length;p++)f.s[k].au[p].code=f.s[k].au[p].code+"_"+c.childs_amount;for(k=0;k<f.p.length;k++)if(1==f.p[k].h)for(p=0;p<f.p[k].au.length;p++)f.p[k].au[p].code=f.p[k].au[p].code+"_"+c.childs_amount;c.childs_amount++;a.pb_t.push(f);a.pb_th(c,"ct","Create tag #"+f.id);a.pb_pt(f.id)}}else return c.block_not_found=1,a.mt_dt(c,"BLOCKS not found")}else if(a.pb_lg(c,"GET CREDS ",c.website_id+"/"+c.tag_id,"subtest","","show_logs_sub"),0==c.s.length+c.p.length)if(a.pb_lg(c,"Activate as custom statistick tag ",\nc.id),""!=c.di){if(!c.d_parent)return a.mt_dt(c,"BLOCK not found")}else a.pb_st(c,1,0);else if(a.pb_lg(c,"Activate simple tag"),c.d_parent){a.pb_lg(c,"Have div parent",0,"subtest","","show_logs_sub");m=a.pb_v(c,c.d_parent,window);var n=a.pb_pi(c,c.d_parent);c.undnone&&n.result&&n.last_visible&&(a.pb_lg(c,"recheck parent in viewport ",n.last_visible,"subtest","","show_logs_sub"),m=a.pb_v(c,n.last_visible,window));a.pb_lg(c,"parent in viewport ",m,"subtest","","show_logs_sub");a.pb_lg(c,"parent invisible result ",\nn,"subtest","","show_logs_sub");if(c.ll&&m&&(!n.result&&!c.undnone||c.undnone)||!c.ll){a.pb_lg(c,"Init",0,"subtest","","show_logs_sub");if(a.pb_f("mt_"+c.id,0,c.xd,c))return a.mt_dt(c,"div already created");a.pb_lg(c,"DIV not found","mt_"+c.id,"subtest","","show_logs_sub");a.pb_lg(c,"Create tag block");a.pb_cb(c);a.pb_lg(c,"Created block:",c.d);if(c.d)a.pb_lg(c,"Set block activated",0,"subtest","","show_logs_sub"),c.activated=1;else return a.pb_se(c,3,c["do"]),a.mt_dt(c,"tag div creation error")}else return c.reactivate=\n1,a.pb_lg(c,"Set reactivate",c.reactivate),a.mt_dt(c,"Lazyload")}else return c.block_not_found=1,a.pb_lg(c,"No div parent",0,"subtest","","show_logs_sub"),0==c.s.length&&0<c.p.length&&(c.reactivate=1,a.pb_lg(c,"Set reactivate",c.reactivate),a.pb_th(c,"r","Set reactivation timer")),a.pb_se(c,1,c["do"]),a.mt_dt(c,"BLOCK not found")}catch(r){console.log(r)}}});a.pb_t.forEach(function(c){c.reactivate&&(a.pb_lg(c,"Reactivate attemps block",c.reactivate_attemps-1,"subtest","","show_logs_sub"),c.reactivate_attemps>\nc.rnl&&!c.ll&&(a.pb_lg(c,"Stop reactivation (attempts counter)"),a.pb_th(c,"r","Stop reactivation"),c.reactivate=0));c.a&&c.reactivate&&(a.pb_lg(c,"Stop reactivation"),a.pb_th(c,"r","Stop reactivation"),c.reactivate=0)});a.pb_lg(0,"\\x3e check countries rest");a.pb_t.forEach(function(c){c.a&&(0<c.s.length||0<c.p.length)&&c.g&&0==c.c.length&&a.pb_t.forEach(function(e){e.di==c.di&&e.g&&0<e.c.length&&c.a&&a.mt_dt(c,"\\u0421ountries")})});a.pb_lg(0,"\\x3e rotation groups");var d=[];a.pb_t.forEach(function(c){c.a&&\nc.rg&&(Array.isArray(d[c.rg])||(d[c.rg]=[]),d[c.rg].push(c))});d.forEach(function(c){a.pb_lg(0,"-- GROUP --",c);var e=Math.floor(Math.random()*(c.length+1));a.pb_lg(0,"To stay",e);for(var g=0;g<c.length;g++)g!=e&&a.mt_dt(c[g],"Gountries")});a.pb_lg(0,"\\x3e before activate");a.pb_t.forEach(function(c){c.mlt||!c.a||c.ch||(c.clb&&a.pb_sc(c,c.d_parent),c.rl&&(a.s_hsp("stop_refresh")||a.pb_srl()),a.pb_s(c));c.reactivate?(a.pb_lg(c,"\\x3e SET REACTIVATE TIMER"),clearInterval(a.pb_5),a.pb_5=setTimeout(function(){a.s_hsp("stop_reinit")||\n(a.pb_lg(0,"\\x3e START REINIT TIMER"),a.pb_pt())},1E3)):c.mlt||(c.ch=1)})}catch(c){a.pb_se(0,110,null,c)}};a.mt_dt=function(b,d){b.a=0;b.disactivated=1;a.pb_lg(b,"Disactivate Tag ("+d+")",null,"disactivate");a.pb_th(b,"d",d)};a.pb_s=function(b){try{b.rs=0,b.ls=0,b.last_script_call_counter=0,a.pb_th(b,"s","Start tag"),a.pb_lg(b,"\\x3e call start tag"),a.pb_e(b,b.s,0),a.pb_lg(b,"\\x3e set first run 0"),b.f=0}catch(d){a.pb_se(b,110,b["do"],d)}};a.pb_spt=function(b,d,c,e){e||(e=0);if(!b.f&&a.s_hsp("only_first_execution"))return 0;\ntry{a.pb_lg(b,"SET PASSBACK TIMER ",b.pd);if(b.wait_for_passback)return a.pb_lg(b,"PASSBACK TIMER ALREADY SET"),0;b.wait_for_passback=1;var g=3E3+b.pd+1E3*e;c&&(g=3E3);0==b.s.length&&b.pa&&0==b.ls&&(g=100,a.pb_lg(b,"SET SHORT TIME"));a.pb_lg(b,"SET CUSTOM PASSBACK time "+g,null,"passback");if(b.ptk&&b.pf)if(a.pb_lg(b,"CHECK TICKER",null,"subtest","","show_logs_sub"),a.mt_check_have_childs(b.d_parent))a.pb_th(b,"tk","TICKER FILLED"),a.pb_lg(b,"TICKER FILLED",null,"subtest","","show_logs_sub");else if(a.pb_lg(b,\n"TICKER EMPTY",null,"subtest","","show_logs_sub"),a.pb_th(b,"tk","TICKER EMPTY "+b.ptkl+"\\x3c"+b.ptk_reinits/2),b.ptk_reinits||(b.ptk_reinits=0),b.ptk_reinits++,a.pb_lg(b,"REINITS "+b.ptk_reinits,b.ptkl+"\\x3c"+b.ptk_reinits/2,"subtest","","show_logs_sub"),b.ptkl>=2*b.ptk_reinits||0==b.ptkl)return a.pb_lg(b,"TICKER SET TIMER",null,"subtest","","show_logs_sub"),b.ptk_timer=setTimeout(function(){console.log("TICKER TIMER FIRES");b.wait_for_passback=0;a.pb_spt(b,d,c,e)},500),0;b.pb_timer=setTimeout(function(){var h=\n0;a.pb_lg(b,"--\\x3d\\x3d start custom passback \\x3d\\x3d--",null,"passback,bold");b.wait_for_passback=0;a.pb_th(b,"p","Start passback");0==b.s.length&&b.pa&&0==b.ls&&a.pb_lg(b,"simple mode",null,"passback");!d&&b.pf&&b.clp&&(a.pb_th(b,"c","Clear before passback"),a.pb_sc(b,b.d));a.pb_l_result_found=0;b.force_outer=0;var f=b.d,k=1;if(b.pf&&(b.ou||0==b.s.length)||c)f=b.d_parent;if(b.last_script_obj&&b.last_script_obj.di&&""!=b.last_script_obj.di.trim()){a.pb_lg(b,"Look for script block",1,"passback");\nvar q=a.mt_search_div(b,b.last_script_obj.di,0);q?f=q:(a.pb_lg(b,"Script block to check not found",1,"passback"),k=0,a.pb_l_result_found=0)}k&&(b.pf&&(b.ou||0==b.s.length)||c?(a.pb_lg(b,"CHECK OUTER",f,"passback"),a.pb_lg(b,"CHECK OUTER",f.innerHTML,"passback"),a.pb_lg_group(b,"PB LOOKER",1),a.pb_l(b,f),a.pb_lg_group(b,"PB LOOKER",0),c&&(b.force_outer=1),!a.pb_l_result_found&&b.ca&&b.pb&&!a.s_hsp("dont_clear_after_passback")&&(a.pb_th(b,"c","Clear after passback"),a.pb_lg(b,"CLEAR PARENT",1,"passback"),\na.pb_sc(b,f))):(a.pb_lg(b,"CHECK INNER",f,"passback"),a.pb_lg_group(b,"PB LOOKER",1),a.pb_l(b,f),a.pb_lg_group(b,"PB LOOKER",0)));f=white=!a.pb_l_result_found;a.pb_th(b,"p","White\\x3d"+f);0==b.s.length&&b.pa&&0==b.ls&&(a.pb_lg(b,"Fake white",1,"passback"),white=1);a.pb_lg(b,"\\x3e\\x3e\\x3e White ",white,"passback,bold");a.pb_p({t:b,white:white,white_real:f,direct:0,force_noclear:h,statistick_only:d,force_outer:c});b.pf=0;a.pb_lg(b,"\\x3e\\x3e\\x3e --\\x3d\\x3d end custom passback \\x3d\\x3d--",null,"passback,bold")},\ng)}catch(h){a.pb_se(b,110,null,h)}};a.pb_p=function(b){try{var d=b.t,c=1,e=0;a.mt_remove_special_passback(d);var g=d.last_script_is_passback;if(!b.statistick_only){var h=a.pb_v(d,d.d_parent,window),f=a.pb_pi(d,d.d_parent);d.undnone&&f.result&&f.last_visible&&(a.pb_lg(d,"recheck parent in viewport ",f.last_visible,"subtest","","show_logs_sub"),h=a.pb_v(d,f.last_visible,window));var k=0;if(a.mt_ext_stat&&a.mt_client_analyze&&0==d.s.length){for(var q=0,l=0;l<d.p.length;l++)"lvl2"==d.p[l].sp&&(q=1);a.pb_lg(d,\n"Start valerization",null,"cstat","","show_logs_cs");if(b.white){var m=a.mt_client_analyze(1);.2>m.eff_p&&10<m.imp_p+m.g_p&&0==m.clicks&&(a.pb_lg(d,"Try to stop passback",null,"cstat","","show_logs_cs"),a.pb_rde(d,d.ssph)||(q?(a.pb_lg(d,"Set deamon leveling mode",null,"cstat","","show_logs_cs"),d.pb_level=2,a.pb_th(d,"lv","Set passback level "+d.pb_level)):(a.pb_lg(d,"Stop passback",null,"cstat","","show_logs_cs"),c=a.disp(d,"VAL:low analys",3),k||(a.mt_add_dnone_stat(d,3),k=1))))}else if(1<a.mt_client_analyze(7).clicks){a.pb_lg(d,\n"Client analyzed",null,"cstat","","show_logs_cs");var p=a.pb_ggr(d,d.ssc,d.ssgi,d.ssg);p||a.pb_lg(d,"GEO Filtered",null,"cstat","","show_logs_cs");p&&a.pb_rde(d,d.ssp)&&(a.pb_lg(d,"Client selected",null,"cstat","","show_logs_cs"),b.white=1,b.force_noclear=1)}}b.white&&f.result&&(d.undnone&&h?(a.pb_th(d,"ue","set blocks visible"),a.mt_undnone_elements(f.blocks)):(c=a.disp(d,"VIS:block not displayed "+(d.undnone&&!h)?"and invisible":""),k||(a.mt_add_dnone_stat(d,1),k=1)));b.white&&d.pvc&&!h&&(0<d.pvp?\na.pb_rde(d,d.pvp)||(q?(a.pb_lg(d,"Set deamon leveling mode",null,"cstat","","show_logs_cs"),d.pb_level=2,a.pb_th(d,"lv","Set passback level "+d.pb_level)):(c=a.disp(d,"VIS:random factor"),k||a.mt_add_dnone_stat(d,2))):(c=a.disp(d,"VIS:block invisible"),k||a.mt_add_dnone_stat(d,2)));if(!g&&a.check_double_time_diap(d))if(d.dtg&&0<d.dtc.length){a.pb_lg(d,"Double time",1,"passback");var n=a.pb_ggr(d,d.dtc,d.dtgi,d.dtg);n&&(b.white=1,b.force_noclear=1,a.pb_lg(d,"Double time passback activated",1,"passback"),\na.pb_th(d,"dt","Double time passback"))}else b.white=1,b.force_noclear=1,a.pb_lg(d,"Double time passback activated",1,"passback"),a.pb_th(d,"dt","Double time passback")}if(b.direct){for(l=g=0;l<d.p.length;l++)0!=d.p[l].pid&&(g=1);d.last_script_is_passback&&!g&&(e=1);if(!g&&d.last_script_is_passback&&d.last_script_is_headerbidding){if(1==d.last_script_call_counter||1==a.pb_cg(d,"hb_fail_series"))additional_time=1;if(2==d.last_script_call_counter||2==a.pb_cg(d,"hb_fail_series"))additional_time=2;if(2<\nd.last_script_call_counter||2<a.pb_cg(d,"hb_fail_series"))c=a.disp(d,"Too many HB attempts")}a.pb_lg(d,"Call counter:",d.last_script_call_counter,"passback");a.pb_lg(d,"Call after passback:",d.last_script_is_passback,"passback");a.pb_lg(d,"Have parent id:",g,"passback");a.pb_lg(d,"Call with timer:",e,"passback");a.pb_lg(d,"Allow passback:",c,"passback")}a.pb_lg(d,"\\x3e\\x3e\\x3e start passback execution",b,"passback,bold");var r=b.white,z=b.white_real?b.white_real:r,x=b.statistick_only?b.statistick_only:\n0;a.pb_lg(d,"--\\x3d\\x3d passback function \\x3d\\x3d--",x,"passback,bold");this.pb_st(d,1,z);if(r&&!x){if(d.rs=0,a.pb_lg(d,"Allow passback:",c,"passback"),d.pb&&c){var A=a.getComputedStyle(d.d,null),B=A.getPropertyValue("height");d.dont_fix_height||(d.d.style.minHeight=B);a.pb_lg(d,"Activate passback");d.pa=1;0<d.p.length&&(b.force_noclear||(a.pb_lg(d,"Before clear",d.d,"passback"),d.d instanceof HTMLBodyElement||(d.d.innerHTML=""),a.pb_lg(d,"Block cleared",d.d,"passback")),e?(a.pb_lg(d,"Call with timer",\nnull,"passback"),a.pb_spt(d,0,0,additional_time)):(a.pb_lg(d,"Call immediately",null,"passback"),a.pb_e(d,d.p,1)))}}else b.force_outer&&0==d.s.length&&!r&&(a.pb_lg(d,"Clear passback result",null,"passback,bold"),d.d.innerHTML="",d.d.style.minHeight="0px"),a.pb_lg(d,"Do nothing",null,"passback,bold")}catch(C){a.pb_se(d,110,null,C)}};a.disp=function(b,d){a.pb_lg(b,"DISACTIVATE PASSBACK ","("+d+")","passback,bold");a.pb_th(b,"sp","Skip passback "+d);return 0};a.pb_e=function(b,d,c){b.s_called=1;b.pb_called=\nc;b.s_executed=0;b.cl||(b.cl=0);try{if(!b.d_parent)return a.pb_lg(b,"No parent div",null,"passback"),a.pb_se(b,4,b["do"]),0;a.pb_cp(b,b.d_parent);0!=b.append_type||b.d&&b.d.ownerDocument.getElementById(b.di)||(a.pb_cb(b),a.pb_lg(b,"\\x3e RECREATE DIV ",b.d,"execute,bold"));var e=0;if(0==d.length)return c||(a.pb_lg(b,"Call pb timer 1",null,"passback"),a.pb_spt(b,0)),0;a.pb_lg(b,"\\x3e call exec function last_id/passback ",b.ls+"/"+c,"execute,bold");for(var g=0,h=0,f=Math.random(),k=[],q=0,l=0;l<d.length;l++)0!=\nd[l].pid&&(q=1);if(q){var m=0;for(l=0;l<b.s.length;l++)b.s[l].id==b.ls&&(m=1);a.pb_lg(b,"After primary:",m,"execute");for(l=0;l<d.length;l++)if(a.pb_lg(b,"Script pid\\x3d",d[l].pid+"/"+b.ls,"execute"),d[l].pid==b.ls&&d[l].id!=b.ls||m&&0==d[l].pid)a.pb_lg(b,"Add",null,"execute"),k.push(d[l])}else k=d,c&&(e=1);a.pb_lg(b,"fns_fin init",k,"execute");if(b.parent_tag_object&&b.parent_tag_object.script_exec_history&&0==b.ls&&b.parent_tag_object){var p=[];for(l=0;l<k.length;l++)b.parent_tag_object.script_exec_history.includes(k[l].id)||\np.push(k[l]);0<p.length?k=p:b.parent_tag_object.script_exec_history=[]}p=[];a.pb_lg(b,"fns_fin before leveling",k,"execute");for(l=0;l<k.length;l++)"lvl2"==k[l].sp?2==b.pb_level&&p.push(k[l]):p.push(k[l]);k=p;a.pb_lg(b,"Statistick only",e,"execute");a.pb_lg(b,"fns_fin final",k,"execute");for(l=0;l<k.length;l++)g+=k[l].fr;for(l=0;l<k.length;l++)a.pb_lg(b,"frtoadd\\x3d",k[l].fr+"/"+k[l].fr/g,"execute");a.pb_lg(b,"tfr\\x3d",g,"execute");a.pb_lg(b,"random\\x3d",f,"execute");l=0;k.some(function(n){l++;h+=\nn.fr/g;a.pb_lg(b,l+") cfr\\x3d"+h+" r\\x3d "+f,null,"execute");if(h>=f){a.pb_lg(b,"Start function "+l+" ("+n.id+")",null,"execute");b.last_script_call_counter&&b.ls==n.id?b.last_script_call_counter++:b.last_script_call_counter=1;b.parent_tag_object&&0==b.ls&&(b.parent_tag_object.script_exec_history||(b.parent_tag_object.script_exec_history=[]),b.parent_tag_object.script_exec_history.push(n.id));b.ls=n.id;b.last_script_obj=n;b.last_script_is_passback=c;b.rnb||(b.d.setAttribute("mt-ls",b.ls),b.d.setAttribute("mt-pb",\nc?1:0),b.d.setAttribute("mt-hb",n.h));var r="[m]";c&&(r="[p]");if(0==n.h){b.last_script_is_headerbidding=0;a.pb_th(b,"e",r+" Script #"+n.id);a.pb_lg(b,"Start custom function",null,"execute");v._h&&0!=v._h&&(b.d.style.minHeight=v._h+"px");v._w&&0!=v._w&&(b.d.style.minWidth=v._w+"px");0==v._w&&(b.d.style.minWidth="100%");0==v._h&&(b.d.style.minHeight="100%");try{n.fn(b),b.s_executed=1,b.cl++}catch(A){a.pb_se(b,100,null,A)}a.pb_lg(b,"Start passback timer,stat only",e,"execute");a.pb_spt(b,e)}else{b.last_script_is_headerbidding=\n1;a.pb_th(b,"e",r+" Headerbidding #"+n.id);a.pb_lg(b,"Start headerbidding",null,"execute");try{b.ht=n.ht;b.nt=n.nt;if(b.ht&&b.ht.trim()&&!b.ht_inserted){a.pb_lg(b,"Set HB template",null,"execute");b.d&&b.d.remove();var z=(new DOMParser).parseFromString(b.ht,"text/html");for(r=0;r<z.body.childNodes.length;r++)y.body.appendChild(z.body.childNodes[r]);var x="tpl_block_"+b.website_id+"_"+b.tag_id;b.d_parent=a.mt_search_div(b,x,0);a.pb_cb(b);b.ht_inserted=1}a.pb_h(b,n);b.s_executed=1;b.cl++}catch(A){a.pb_se(b,\n100,null,A)}}return 1}});0==k.length&&c&&q&&(a.pb_lg(b,"Call pb timer,no functions found",null,"passback"),a.pb_spt(b,1))}catch(n){a.pb_se(b,110,null,n)}};a.mt_set_special_passback=function(b,d){a.pb_lg(b,"Set special passback ",d,"passback");b.special_passback_wait=1;b.special_passback_type=d};a.mt_remove_special_passback=function(b){a.pb_lg(b,"Remove special passback",null,"passback");b.special_passback_wait=0};a.mt_google_collector_activate_attempt=0;a.s_g1=function(){console.log(a.googletag.pubadsReady);\na.mt_google_collector_activated||(a.pb_lg(0,"Activate google collector",a.mt_google_collector_activated,"google_pb","","show_logs_gp"),a.mt_google_collector_activated=1,a.googletag.pubads().addEventListener("impressionViewable",function(b){var d=b.slot.getAdUnitPath(),c=b.slot.getSlotElementId();b.slot.getSlotId().getId();a.pb_lg(0,"--------------\\x3e impressionViewable",d+" ["+c+"]","google_pb","","show_logs_gp");a.pb_lg(0,"event:",b,"google_pb","","show_logs_gp");a.pb_lg(0,"slot:",b.slot,"google_pb",\n"","show_logs_gp");a.mt_google_slot_statuses[c]="impressionViewable";console.log(b)}),a.googletag.pubads().addEventListener("slotOnload",function(b){var d=b.slot.getAdUnitPath(),c=b.slot.getSlotElementId();b.slot.getSlotId().getId();a.pb_lg(0,"--------------\\x3e slotOnload",d+" ["+c+"]","google_pb","","show_logs_gp");a.pb_lg(0,"event:",b,"google_pb","","show_logs_gp");a.pb_lg(0,"slot:",b.slot,"google_pb","","show_logs_gp");a.mt_google_slot_statuses[c]="slotOnLoad";console.log(b)}),a.googletag.pubads().addEventListener("slotRequested",\nfunction(b){var d=b.slot.getAdUnitPath(),c=b.slot.getSlotElementId();b.slot.getSlotId().getId();a.pb_lg(0,"--------------\\x3e slotRequested",d+" ["+c+"]","google_pb","","show_logs_gp");a.pb_lg(0,"event:",b,"google_pb","","show_logs_gp");a.pb_lg(0,"slot:",b.slot,"google_pb","","show_logs_gp");a.mt_google_slot_statuses[c]="slotRequested";console.log(b)}),a.googletag.pubads().addEventListener("SlotResponseReceived",function(b){var d=b.slot.getAdUnitPath(),c=b.slot.getSlotElementId();b.slot.getSlotId().getId();\na.pb_lg(0,"--------------\\x3e SlotResponseReceived",d+" ["+c+"]","google_pb","","show_logs_gp");a.pb_lg(0,"event:",b,"google_pb","","show_logs_gp");a.pb_lg(0,"slot:",b.slot,"google_pb","","show_logs_gp");a.pb_lg(0,"size:",b.size,"google_pb","","show_logs_gp");a.pb_lg(0,"empty:",b.isEmpty,"google_pb","","show_logs_gp");a.mt_google_slot_statuses[c]="SlotResponseReceived";console.log(b)}),a.googletag.pubads().addEventListener("slotRenderEnded",function(b){a.mt_process_google_event(b)}))};a.mt_process_google_event=\nfunction(b){var d=b.slot.getAdUnitPath(),c=b.slot.getSlotElementId(),e=b.slot.getSlotId().getId();a.mt_google_slot_statuses[c]="slotRenderEnded";a.pb_lg(0,"--------------\\x3e Ad rendered",d+" ["+c+"]","google_pb","","show_logs_gp");a.pb_lg(0,"event:",b,"google_pb","","show_logs_gp");a.pb_lg(0,"slot:",b.slot,"google_pb","","show_logs_gp");a.pb_lg(0,"size:",b.size,"google_pb","","show_logs_gp");a.pb_lg(0,"empty:",b.isEmpty,"google_pb","","show_logs_gp");a.pb_lg_m(0,{path:d,div_id:c,iframe_id:e});a.mt_add_google_event_stat_click&&\na.mt_add_google_event_stat_click(b);a.mt_google_stack||(a.mt_google_stack=[]);a.mt_google_stack[e]={path:d,div_id:c,iframe_id:e,success:!b.isEmpty,size:b.size,slot:b.slot};if(0<c.indexOf("tag_")&&0<c.indexOf("_multisize")){d=c;d=d.replace("_multisize","");d=d.substr(d.indexOf("tag_")+4);for(e=c=0;e<window.pb_t.length;e++)window.pb_t[e].id==d&&(c=window.pb_t[e]);if(b.size){a.pb_lg(0,"Process multisize",b.size,"google_pb","","show_logs_gp");a.pb_lg(0,"Tag",c,"google_pb","","show_logs_gp");a.pb_lg(0,\n"Tag block",c.d,"google_pb","","show_logs_gp");b=b.size;c.d.style.minWidth=b[0]+"px";c.d.style.minHeight=b[1]+"px";var g=0;for(e=0;e<c.d.childNodes.length;e++)c.d.childNodes[e].getAttribute("generated")==d&&(g=c.d.childNodes[e]);g&&(a.pb_lg(0,"IFrame",g,"google_pb","","show_logs_gp"),g.style.minWidth=b[0],g.style.minHeight=b[1],g.setAttribute("width",b[0]),g.setAttribute("height",b[1]))}}};a.s_g2=function(b,d){return d.getAttribute("id")&&-1!=d.getAttribute("id").indexOf("google_ads_iframe_")&&(a.pb_lg(b,\n"Google iframe suspected",d,"google_pb","","show_logs_gp"),d=a.mt_get_google_iframe_ad(b,d.getAttribute("id")))&&(a.pb_lg(b,"Record in stack found",d,"google_pb","","show_logs_gp"),!d.success)?(a.pb_lg(b,"WHITE -\\x3e GOOGLE WHITE IMPRESSION",0,"bold",null,"show_logs_pb"),1):0};a.mt_get_google_iframe_ad=function(b,d){d=d.replace("google_ads_iframe_","");d=d.replace("__container__","");a.pb_lg(b,"ad\\x3d"+d,null,"google_pb","","show_logs_gp");return a.mt_google_stack&&a.mt_google_stack[d]?a.mt_google_stack[d]:\n0};a.googletag?a.googletag.apiReady?a.s_g1():(a.googletag.cmd=a.googletag.cmd||[],a.googletag.cmd.push(function(){a.pb_lg(0,"GOOGLETAG CMD 2 START",null,"google_pb","","show_logs_gp");a.s_g1()})):(a.pb_lg(0,"Set GOOGLETAG cmd",null,"google_pb","","show_logs_gp"),a.googletag=a.googletag||{},a.googletag.cmd=a.googletag.cmd||[],a.googletag.cmd.push(function(){a.pb_lg(0,"GOOGLETAG CMD START",null,"google_pb","","show_logs_gp");a.s_g1()}));a.pb_st=function(b,d,c){try{d=1;a.pb_lg(b,"Statstick param to add (type\\x3d"+\nd+") ",c,"statistick");a.pb_10&&"undefined"!=typeof a.pb_10||(a.pb_10=[]);a.pb_10[d]&&"undefined"!=typeof a.pb_10[d]&&null!=a.pb_10[d]||(a.pb_10[d]={u:document.location.pathname,g:a.pb_4?a.pb_4:"00",x:[]});a.pb_10[d].g=b.gs?a.pb_4?a.pb_4:"00":"00";var e=b.website_id,g=b.tag_id;b.parent_tag_object&&(e=b.parent_tag_object.website_id,g=b.parent_tag_object.tag_id);var h={c:g,u:e,s:b.ls,a:c?0:1,p:0};if(b.force_outer)a.pb_lg(b,"Dont check last script",c,"statistick");else for(e=0;e<b.p.length;e++)b.p[e].id==\nb.ls&&(h.p=1);a.mt_client_stat_add&&(a.pb_lg(0,"Start add stat ",null,"cstat","","show_logs_cs"),a.mt_client_stat_add(h));if(0==b.s.length&&0==h.p&&1==h.a)return a.pb_lg(b,"Abort statistick send",c,"statistick"),0;a.pb_lg(b,"Statstick object ",h,"statistick");a.pb_10[d].x.push(h);"undefined"!=typeof a.pb_5?"undefined"!=typeof a.pb_5[d]&&clearInterval(a.pb_5[d]):(a.pb_5=[],a.pb_5[d]=[]);c=500;1==d&&a.pb_t.length==a.pb_10[d].length&&(c=50);a.pb_5[d]&&clearTimeout(a.pb_5[d]);a.pb_5[d]=setTimeout(function(){a.pb_ss(d)},\nc)}catch(f){a.pb_se(b,120,f.name+":"+f.message,f)}};a.pb_ss=function(b){var d="https://analyse.bcovery.com/ifaddisplayednew";2==b&&(d="https://hbanalyse.bcovery.com");a.pb_10[b]&&(a.pb_xr(d,a.pb_10[b]),a.pb_10[b]=0)};a.pb_se=function(b,d,c,e){e&&(console.log("Log exception:"),(console.error||console.log).call(console,e.stack||e));if(!b)return 0;!c&&e&&(c=e.name+":"+e.message);e=window.localStorage.getItem("mt_error_"+d);var g=window.localStorage.getItem("mt_error_"+d+"_time"),h=(new Date).getTime();\ne&&600<h-g&&(e=0);e||(localStorage.setItem("mt_error_"+d,d),localStorage.setItem("mt_error_"+d+"_time",(new Date).getTime()),e=0,a.pb_d([0,1,0])&&(e=1),a.pb_d([0,0,1])&&(e=2),g=b.website_id,h=b.tag_id,b.parent_tag_object&&(g=b.parent_tag_object.website_id,h=b.parent_tag_object.tag_id),d={website_id:g,tag_id:h,script_id:b.ls,code:d,sub:c,url:document.location.pathname,time:Math.floor(Date.now()/1E3)-a.pb_8,device:e},c=1,a.s_hsp("send_all_errors")&&(c=100),a.pb_rde(b,c)&&a.pb_xr("https://errors.bcovery.com/errorstat",\nd))}})(window,document,performance);</script>\n',
                            'vtp_supportDocumentWrite': false,
                            'vtp_enableIframeMode': false,
                            'vtp_enableEditJsMacroBehavior': false,
                            'tag_id': 5
                        },
                        {
                            'function': '__html',
                            'priority': 9,
                            'metadata': ['map'],
                            'vtp_html': '<script type="text/gtmscript">(function(d,n,p){window.mt_custom_triggers=window.mt_custom_triggers||[];window.mt_custom_triggers_to_tags=window.mt_custom_triggers_to_tags||[];d.pb_pttg=function(a,c){d.pb_lg(c,"Start process custom triggers",b,"ctrigger,bold","","show_logs_tg");if(d.mt_custom_triggers_to_tags&&d.mt_custom_triggers_to_tags[a]){d.pb_lg(c,"Tag have triggers",null,"ctrigger","","show_logs_tg");for(var b=[],f=0;f<d.mt_custom_triggers_to_tags[a].length;f++){var e=d.mt_custom_triggers_to_tags[a][f];d.mt_custom_triggers[e]&&\n(e={filters:d.mt_custom_triggers[e]},b.push(e))}return d.mt_process_triggers(b,c)}return 1};d.mt_process_triggers=function(a,c){d.pb_lg(c,"Process triggers called",a,"ctrigger","","show_logs_tg");if(!a||0==a.length)return 1;if(c.cta)for(var b=1,f=0;f<a.length;f++){var e=d.mt_process_trigger(a[f],c);e||(b=0)}else for(f=b=0;f<a.length;f++)(e=d.mt_process_trigger(a[f],c))&&(b=1);return b};d.mt_process_trigger=function(a,c){d.pb_lg(c,"Process trigger obj called",a,"ctrigger","","show_logs_tg");for(var b=\n[],f=[],e=[],h=null,k=null,l=null,m=0,g=0;g<a.filters.length;g++)d.mt_process_filter(a.filters[g],c),1==a.filters[g].logic&&b.push(a.filters[g]),2==a.filters[g].logic&&f.push(a.filters[g]),3==a.filters[g].logic&&e.push(a.filters[g]);if(0<b.length)for(g=h=0;g<b.length;g++)b[g].result&&(h=1);if(0<f.length)for(k=1,g=0;g<f.length;g++)f[g].result||(k=0);if(0<e.length)for(k=1,g=0;g<e.length;g++)e[g].result||(l=0);d.pb_lg(c,"group_or_result\\x3d",h,"ctrigger","","show_logs_tg");d.pb_lg(c,"group_and_result\\x3d",\nk,"ctrigger","","show_logs_tg");d.pb_lg(c,"group_required_result\\x3d",l,"ctrigger","","show_logs_tg");if(null!=l)l&&(h||k)&&(m=1);else if(null==h&&(h=0),null==k&&(k=0),h||k)m=1;d.pb_lg(c,"TRIGGER RESULT\\x3d",m,"ctrigger,bold","","show_logs_tg");return m};d.mt_process_filter=function(a,c){var b=document.location.pathname,f=document.location.origin;a.result=0;var e=Math.abs(a.type);if(3>=e){if(0==a.param.length)return 0;"/"!=a.param[0]&&(a.param="/"+a.param)}1==e&&(d.pb_lg(c,"\\x3e Check URL contains:"+\na.param,b,"ctrigger","","show_logs_tg"),0<=b.toLowerCase().indexOf(a.param.toLowerCase())&&(a.result=1));2==e&&(d.pb_lg(c,"\\x3e Check URL starts with:"+a.param,b,"ctrigger","","show_logs_tg"),0==b.toLowerCase().indexOf(a.param.toLowerCase())&&(a.result=1));3==e&&(d.pb_lg(c,"\\x3e Check URL ends with:"+a.param,b,"ctrigger","","show_logs_tg"),a.result=b.toLowerCase().endsWith(a.param.toLowerCase()));4==e&&(d.pb_lg(c,"\\x3e Check is mainpage",b,"ctrigger","","show_logs_tg"),"/"==b&&(a.result=1));if(5==\ne||6==e){d.pb_lg(c,"\\x3e Search block",a.param,"ctrigger","","show_logs_tg");var h=d.mt_search_div(c,a.param,0);d.pb_lg(c,"block:",h);d.pb_l_result_found=0;h?5==e?(d.pb_l(c,h),a.result=d.pb_l_result_found):a.result=1:a.result=0}7==e&&(d.pb_lg(c,"\\x3e Check HOST contains:"+a.param,f,"ctrigger","","show_logs_tg"),0<=f.toLowerCase().indexOf(a.param.toLowerCase())&&(a.result=1));if(8==e){for(d.pb_lg(c,"\\x3e Check var "+a.param,null,"ctrigger","","show_logs_tg");0<=a.param.indexOf("[");)a.param=a.param.replace("[",\n".");for(;0<=a.param.indexOf("]");)a.param=a.param.replace("]","");for(;0<=a.param.indexOf(";");)a.param=a.param.replace(";","");a.result=d.mt_get_var_sub(c,d,a.param,0)}9==e&&(f=window.navigator.userAgent,d.pb_lg(c,"\\x3e Check agent "+a.param+" in ",f,"ctrigger","","show_logs_tg"),f&&f.toLowerCase().includes(a.param.toLowerCase())&&(a.result=1));10==e&&(f=window.navigator.platform,d.pb_lg(c,"\\x3e Check platform "+a.param+" in ",f,"ctrigger","","show_logs_tg"),f&&f.toLowerCase().includes(a.param.toLowerCase())&&\n(a.result=1));11==e&&(f=d.mt_get_day_of_week(),d.pb_lg(c,"\\x3e Check day of week "+a.param+" in ",f,"ctrigger","","show_logs_tg"),a.param==f&&(a.result=1));12==e&&(f=window.location.href,d.pb_lg(c,"\\x3e Check full HREF equals "+a.param+" in ",f,"ctrigger","","show_logs_tg"),a.param.toLowerCase()==f.toLowerCase()&&(a.result=1));13==e&&(d.pb_lg(c,"\\x3e Check full URL equals "+a.param+" in ",b,"ctrigger","","show_logs_tg"),a.param.toLowerCase()==b.toLowerCase()&&(a.result=1));0>a.type&&(d.pb_lg(c,"invert result",\nnull,"ctrigger","","show_logs_tg"),a.result=!a.result);d.pb_lg(c,"Result:",a.result,"ctrigger,bold","","show_logs_tg")};d.mt_get_var_sub=function(a,c,b,f){d.pb_lg(a,"START GET VAR SUB "+b,c,"ctrigger,bold","","show_logs_tg");b=b.trim();param_parts=b.split(".");if(1<param_parts.length){for(var e=0;e<param_parts.length;e++)if(param_parts[e].trim()&&(c=d.mt_get_var_sub(a,c,param_parts[e],f),param_parts=b.split("."),0===c||null===c||"undefined"==typeof c))return null;return c}if(f)return 1*b==b?1*b:"1"==\nb?1:"0"==b?0:"\'"==b[0]||\'"\'==b[0]?b.slice(1,-1):c[b];if(0<=b.indexOf("(")){e=b.indexOf("(");a=b.substring(0,e);b=b.substring(e).slice(1,-1);b=b.trim()?b.split(","):[];f=[];for(e=0;e<b.length;e++)f.push(get_var_sub(c,b[e],1));try{return c[a].apply(c,f)}catch(h){return null}}d.pb_lg(a,"parent.param ("+c+"."+b+")",c[b],"ctrigger,bold","","show_logs_tg");return c[b]}})(window,document,performance);</script>\n',
                            'vtp_supportDocumentWrite': false,
                            'vtp_enableIframeMode': false,
                            'vtp_enableEditJsMacroBehavior': false,
                            'tag_id': 6
                        },
                        {
                            'function': '__html',
                            'priority': 8,
                            'vtp_html': '<script type="text/gtmscript">(function(a,x,q){a.mt_spec_params_toggler=[{title:"LOGS:",params:[{param:"show_logs",label:"[SHOW]"},{param:"show_logs_all",label:"[ALL]"},{param:"show_logs_sub",label:"[SUB]"},{param:"show_logs_hb",label:"[HB]"},{param:"show_logs_pb",label:"[PB]"},{param:"show_logs_gp",label:"[GP]"},{param:"show_logs_rf",label:"[RF]"},{param:"show_logs_tg",label:"[TG]"},{param:"show_logs_cs",label:"[CS]"}]},{title:"PASSBACKS:",params:[{param:"pblooker_1_only",label:"[TRUE]"},{param:"pblooker_0_only",label:"[FALSE]"},\n{param:"pblooker_first_1_only",label:"[FIRST TRUE]"}]},{title:"TAGS:",params:[{param:"stop_refresh",label:"[NO REFRESH]"},{param:"stop_reinit",label:"[NO REINIT]"},{param:"stop_all_tags",label:"[STOP ALL]"},{param:"hightlight_blocks",label:"[HIGHTLIGHT]"}]},{title:"CONTAINERS:",params:[{param:"stop_all_containers",label:"[STOP ALL]"}]}];a.mt_tag_params=[{title:"DIV ID",variable:".di",type:"string"},{title:"DIV index",variable:".n",type:"int"},{title:"DIV ins.",variable:".append_type",type:"int"},\n{title:"Clear block",variable:".clb",type:"bool"},{title:"Ch. outer",variable:".ou",type:"bool"},{title:"RND. IDs",variable:".rnb",type:"bool"},{title:"Devices d/t/m",variable:".sh",type:"object"},{title:"Refresh",variable:".rt",type:"int"},{title:"Lazyload",variable:".ll",type:"bool"},{title:"Ref. looker",variable:".rl",type:"bool"},{title:"Multitag",variable:".mlt",type:"bool"},{title:"Multitag tpl",variable:".mltt",type:"string"},{title:"Multiblock",variable:".mlb",type:"object"},{title:"Geo",\nvariable:".g",type:"bool"},{title:"GEO inv.",variable:".gi",type:"bool"},{title:"Countries",variable:".c",type:"object"},{title:"PB delay",variable:".pd",type:"int"},{title:"PB cl. aft.",variable:".ca",type:"bool"},{title:"PB cl.",variable:".pc",type:"bool"},{title:"PB vis. ch.",variable:".pvc",type:"bool"},{title:"PB vis. ch. %",variable:".pvp",type:"int"},{title:"HB delay",variable:".headerbidding_delay",type:"int"},{title:"DT on",variable:".dto",type:"bool"},{title:"DT time",variable:".dt",type:"string"},\n{title:"DT geo",variable:".dtg",type:"bool"},{title:"DT geo inv.",variable:".dtgi",type:"bool"},{title:"DT countries",variable:".dtc",type:"object"},{title:"Rein. del.",variable:".rnd",type:"int"},{title:"Rein. lim",variable:".rnl",type:"int"},{title:"WT on",variable:".wta",type:"bool"},{title:"WT start",variable:".wts",type:"int"},{title:"WT end",variable:".wte",type:"int"},{title:"SS geo",variable:".ssg",type:"bool"},{title:"SS geo inv.",variable:".ssgi",type:"bool"},{title:"SS countries",variable:".ssc",\ntype:"object"},{title:"SS % double",variable:".ssp",type:"int"},{title:"SS % show",variable:".ssph",type:"int"}];for(q=0;q<a.mt_tag_params.length;q++)a.mt_tag_params[q].variable=a.mt_tag_params[q].variable.replace(".","");a.pb_updbm=function(){if(!a.pb_t)return 0;try{var b=document.getElementById("mt_debug_style");if(!b){b=document.createElement("style");b.type="text/css";b.setAttribute("id","mt_debug_style");var c=" #st_stat_service_block_B { font-size:12px;z-index:999999999;left:0px;top:0px;background:#EEE;border:1px solid #DDD;font-family:arial;}";\nc=a.s_hsp("status_menu_fixed","status_menu_fixed_B")?c+" #st_stat_service_block_B { position:fixed;} ":c+" #st_stat_service_block_B { position:absolute;} ";c+=" .st_stat_service_block_header {height:20px;cursor:pointer;background:#DDD;}  .st_stat_service_table_header {border-bottom:2px solid #FFF!important;font-weight:bold;}  .st_block_tag { height:25px;line-height:25px;border-bottom:1px solid #DDD;display:flex;}  .st_block_tag\\x3ediv { display:flex;box-sizing:border-box;align-items:center;float:left;height:25px;line-height:25px;padding:0px 3px;padding-left:5px;padding-right:5px;}  .st_block_tag\\x3ediv.right { float:right;}  .spacer { flex-grow:1;}  .st_tagstatus_block { height:15px;width:15px;border-radius:20px;margin-top:5px;}  .st_additional_param { height:22px;line-height:22px;padding-left:5px;}  .st_additional_param span { cursor:pointer;padding-left:2px;padding-right:2px;}  .st_active { color:#00a700;}  .st_extend { float:left;}  .st_block_hist { height:20px;line-height:20px;}  .st_block_hist\\x3ediv { transition:1s all;display:block;float:left;height:20px;line-height:20px;padding:0px 3px;padding-left:10px;padding-right:10px;}  .st_visible\\x3ediv { display:flex;align-items:center;justify-content:center;transition:1s height;border:2px solid #000;width:10px;height:8px;border-radius:99px;background:#FFF;}  .st_visible.invisible\\x3ediv { height:1px;}  .st_visible\\x3ediv\\x3ediv { border:1px solid #000;width:2px;height:2px;border-radius:99px;background:#000;}  .st_status_block { width:12px;height:12px;line-height:12px;text-align:center;font-size:10px;background:#9a9a9a;box-shadow:inset 1px 1px 5px 0px rgba(0,0,0,0.3);transition:1s all;color:#FFF;}  .st_act .st_status_block { background:#00d600;}  .st_disact .st_status_block { background:#d60000;}  .st_warn .st_status_block { background:#ffa824;}  .st_tagstatus { width:20px;}  .st_tagid { width:70px;cursor:pointer;text-decoration:underline;}  .st_tagrefresh { width:50px;}  .st_tagdiv {width:150px;cursor:pointer;text-decoration:underline;text-overflow:ellipsis;overflow:hidden;}  .st_tagdiv.not_found { color:#c3535e;}  .st_taglogs,.st_tagedit { cursor:pointer;}  .st_taglogs.act { color:#00a700;}  .st_block_history { background:#DDD;max-height:400px;overflow-y:scroll;clear:both;}  .st_hist_event_s { background:#FFF;}  .st_hist_event_p { background:#ccffff;}  .st_hist_event_e { background:#ffffcc;}  .st_hist_event_d { background:#ffcccc;}  .st_hist_event_ct { background:#ffccf6;}  .st_hist_event_st { background:#c8f7d6;}  .st_hist_event_md { background:#454545;color:#FFF;}  .st_on\\x3ediv { background:#0F0;}  .st_off\\x3ediv { background:#F00;}  .st_container_header { color:#666;background:#FFF;}  .st_control_block { cursor:pointer;width:12px;height:12px;background:#AAA;}  .st_control_block.sleep { border-radius:10px;}  .act .st_control_block { background:#d60000;}  .act .st_control_block.sleep { background:#00d600;}  .mt_tag_menu { position:fixed;width:500px;height:500px;background:#EEE;padding:10px;left:20px;top:20px;z-index:9999999991;font-size:12px;font-family:arial;border:1px solid #DDD;}  .mt_tag_menu_header { height:30px;border-bottom:2px solid #DDD;}  #mt_tag_menu_close { cursor:pointer;float:right;} .mt_tag_menu_name{ float:left;}  .mt_tag_menu_block { height:26px;line-height:26px;border-bottom:1px solid #e2e2e2;} .mt_tag_menu_block\\x3ediv { display:inline-block;padding-left:5px;padding-right:5px;box-sizing:border-box;height:inherit;line-height:inherit;}  .mt_tag_menu_variable { width:20%;font-weight:bold;}  .mt_tag_menu_current { width:35%;}  .mt_tag_menu_new { width:45%;}  .mt_inp_string { width:100%;}  .mt_inp_int,.mt_inp_bool { width:50px;}  #mt_tag_menu_body { overflow-y:scroll;height:470px;} ";\nb.innerHTML=c;document.getElementsByTagName("head")[0].appendChild(b)}a.block_stat_B=document.getElementById("st_stat_service_block_B");if(!a.block_stat_B){a.block_stat_B=a.pb_cb_helper("st_stat_service_block_B","","",document.body);a.localStorage.getItem("mt_dmenu_left_B_"+window.innerWidth)&&(a.block_stat_B.style.marginLeft=a.localStorage.getItem("mt_dmenu_left_B_"+window.innerWidth));a.localStorage.getItem("mt_dmenu_top_B_"+window.innerWidth)&&(a.block_stat_B.style.marginTop=a.localStorage.getItem("mt_dmenu_top_B_"+\nwindow.innerWidth));var d=a.pb_cb_helper("","st_stat_service_block_header","",a.block_stat_B);a.s_hsp("status_menu_fixed","status_menu_fixed_B")&&(d.onmousedown=function(n){console.log("START DRAG B");a.mt_move_status_menu_B=1;a.mt_move_status_menu_cursor_x_B=n.pageX;a.mt_move_status_menu_cursor_y_B=n.pageY;a.mt_move_status_menu_start_x_B=1*a.block_stat_B.style.marginLeft.replace("px","");a.mt_move_status_menu_start_y_B=1*a.block_stat_B.style.marginTop.replace("px","");n.stopPropagation()},d.onmouseup=\nfunction(n){console.log("STOP DRAG B");a.mt_move_status_menu_B=0;n.stopPropagation()},a.addEventListener("mousemove",function(){a.mt_move_status_menu_B&&(console.log("MOVE B"),a.block_stat_B.style.marginLeft=a.mt_move_status_menu_start_x_B+event.pageX-a.mt_move_status_menu_cursor_x_B,a.block_stat_B.style.marginTop=a.mt_move_status_menu_start_y_B+event.pageY-a.mt_move_status_menu_cursor_y_B,a.localStorage.setItem("mt_dmenu_left_B_"+window.innerWidth,a.block_stat_B.style.marginLeft),a.localStorage.setItem("mt_dmenu_top_B_"+\nwindow.innerWidth,a.block_stat_B.style.marginTop))}));var e=a.pb_cb_helper("","st_extend","[+]",d);e.onclick=function(){a.mt_toggle_display("st_extended_params_B")};var g=a.pb_cb_helper("st_extended_params_B","","",a.block_stat_B);g.style.display="none";for(var h=0;h<a.mt_spec_params_toggler.length;h++){var t=a.mt_spec_params_toggler[h].title;for(b=0;b<a.mt_spec_params_toggler[h].params.length;b++)t+=\'\\x3cspan id\\x3d"spec_param_\'+a.mt_spec_params_toggler[h].params[b].param+\'"\\x3e\'+a.mt_spec_params_toggler[h].params[b].label+\n"\\x3c/span\\x3e";a.pb_cb_helper("st_extended_params_"+h,"st_additional_param",t,g);for(b=0;b<a.mt_spec_params_toggler[h].params.length;b++)a.mt_spec_params_toggler[h].params[b].block=document.getElementById("spec_param_"+a.mt_spec_params_toggler[h].params[b].param),a.mt_spec_params_toggler[h].params[b].block.setAttribute("param",a.mt_spec_params_toggler[h].params[b].param),a.mt_spec_params_toggler[h].params[b].block.onclick=function(){a.mt_toggle_special_param(this.getAttribute("param"));a.mt_stat_update_special_params()}}a.table_header=\na.pb_cb_helper("","st_stat_service_table_header st_block_tag","",a.block_stat_B)}a.mt_stat_update_special_params();for(g=0;g<a.pb_cl.length;g++){var f=a.pb_cl[g];if(!f.stat_block_container){f.stat_block_container=a.pb_cb_helper("st_container_block_"+f.id,"st_container_block","",a.block_stat_B);f.stat_block_header=a.pb_cb_helper("st_container_block_header_"+f.id,"st_container_header st_block_tag","",f.stat_block_container);f.stat_block_status=a.pb_cb_helper("st_container_block_status_"+f.id,"st_tagstatus",\n\'\\x3cdiv class\\x3d"st_status_block"\\x3e\\x3c/div\\x3e\',f.stat_block_header);var r=a.pb_cb_helper("","",f.pub_id,f.stat_block_header);r.onclick=function(){};a.pb_cb_helper("","",f.id,f.stat_block_header);a.pb_cb_helper("","spacer","",f.stat_block_header);var m=Math.floor((new Date).getTime()/1E3)-f.time,p=24>Math.floor(m/3600)?Math.floor(m/3600)+"h "+Math.floor((m-3600*Math.floor(m/3600))/60)+"m":Math.floor(m/86400)+"d";a.pb_cb_helper("","",p,f.stat_block_header);a.pb_cb_helper("","",f.version,f.stat_block_header);\nvar u="st_control_block";a.s_hsp("stop_all_containers")&&(u+=" sleep");f.stat_block_control=a.pb_cb_helper("","st_tagcontrol",\'\\x3cdiv class\\x3d"\'+u+\'"\\x3e\\x3c/div\\x3e\',f.stat_block_header);f.stat_block_control.setAttribute("cid",f.id);f.stat_block_control.onclick=function(){var n=this.getAttribute("cid");a.s_hsp("stop_all_containers")?a.mt_toggle_special_param("start_container_"+n):a.mt_toggle_special_param("stop_container_"+n);a.pb_updbm()};f.stat_block_content=a.pb_cb_helper("st_container_block_content_"+\nf.id,"st_container_content","",f.stat_block_container)}a.s_hsp("stop_all_containers")?a.s_hsp("start_container_"+f.id)?f.stat_block_control.className="st_tagcontrol act":f.stat_block_control.className="st_tagcontrol":a.s_hsp("stop_container_"+f.id)?f.stat_block_control.className="st_tagcontrol act":f.stat_block_control.className="st_tagcontrol";!f.old&&f.started?a.pb_dbc(0,f.stat_block_status,"st_tagstatus st_act"):(f.old&&a.pb_dbc(0,f.stat_block_status,"st_tagstatus st_warn"),f.started||a.pb_dbc(0,\nf.stat_block_status,"st_tagstatus st_disact"));for(h=0;h<a.pb_t.length;h++)if(a.pb_t[h].id.toString().includes("_"+f.id)){var k=a.pb_t[h],y=a.pb_t[h].id;if(!k.stat_block_tag){k.stat_block_tag=a.pb_cb_helper("st_tag_block_"+k.id,"st_block_tag","",f.stat_block_content);b="";k.ll&&(b="L");k.st&&(b="S");a.pb_cdb(k,"st_tagstatus","S",\'\\x3cdiv class\\x3d"st_status_block" id\\x3d"st_status_block_\'+k.id+\'"\\x3e\'+b+"\\x3c/div\\x3e",0);k.stat_block_status=document.getElementById("st_status_block_"+k.id);a.pb_cdb(k,\n"st_tagid","ID",k.id,function(){var n=a.mt_toggle_display("st_tag_blockhist_"+this.getAttribute("tid"));a.localStorage.setItem("mt_extend_tag_"+this.getAttribute("tid"),n?1:0)});a.pb_cdb(k,"st_tagdiv","DIV",k["do"],function(){for(var n=this.getAttribute("tid"),v=0;v<window.pb_t.length;v++)if(window.pb_t[v].id==n){var w=window.pb_t[v];w.d_parent&&(w.d_parent.style.border="3px solid #a832a0",w.d_parent.scrollIntoView(),w.d_parent.scrollTop-=200)}});b="";this.rotation&&(b="\\x3cdiv\\x3e\\x3cdiv\\x3e\\x3c/div\\x3e\\x3c/div\\x3e");\na.pb_cdb(k,"st_visible","",b,0);a.pb_cdb(k,"st_tagrefresh","Ref","",0);u="st_control_block";if(k.st||a.s_hsp("stop_all_tags"))u+=" sleep";a.pb_cdb(k,"st_tagedit","E","[E]",function(){var n=this.getAttribute("tid");a.mt_show_tag_menu(n)});a.pb_cdb(k,"st_taglogs","L","[L]",function(){var n=this.getAttribute("tid");a.mt_toggle_special_param("show_logs_"+n)});a.pb_cdb(k,"st_tagcontrol","C",\'\\x3cdiv class\\x3d"\'+u+\'"\\x3e\\x3c/div\\x3e\',function(){for(var n=this.getAttribute("tid"),v=0;v<window.pb_t.length;v++)window.pb_t[v].id==\nn&&(k.st||a.s_hsp("stop_all_tags")?a.mt_toggle_special_param("start_tag_"+n):a.mt_toggle_special_param("stop_tag_"+n),a.pb_updbm())});k.stat_block_tag_history=a.pb_cb_helper("st_tag_blockhist_"+y,"st_block_history","",f.stat_block_content);0!=a.localStorage.getItem("mt_extend_tag_"+y)?k.stat_block_tag_history.style.display="block":k.stat_block_tag_history.style.display="none"}if(k.history)for(b=0;b<k.history.length;b++)if(k.history[b].t){var z=document.getElementById("st_tag_blockhist_"+k.id+"_n_"+\nb);z||(t="\\x3cdiv\\x3e"+k.history[b].t.getMinutes()+":"+k.history[b].t.getSeconds().toString().padStart(2,"0")+"\\x3c/div\\x3e\\x3cdiv\\x3e"+k.history[b].e+"\\x3c/div\\x3e\\x3cdiv\\x3e"+k.history[b].c+"\\x3c/div\\x3e",z=a.pb_cb_helper("st_tag_blockhist_"+k.id+"_n_"+b,"st_block_hist st_hist_event_"+k.history[b].e,t,k.stat_block_tag_history),k.stat_block_tag_history.scrollTop=k.stat_block_tag_history.scrollHeight)}k.a&&a.pb_dbc(k,"st_tagstatus","st_act");!k.a&&k.disactivated&&a.pb_dbc(k,"st_tagstatus","st_disact");\n0!=k.ls&&(k.stat_block_status.innerHTML=k.last_script_is_passback?"P":"M");k.block_not_found?a.pb_dbc(k,"st_tagdiv","not_found"):a.pb_dbc(k,"st_tagdiv","");k.rt&&(k.visible?a.pb_dbc(k,"st_visible",""):a.pb_dbc(k,"st_visible","invisible"),a.mt_set_debugmenu_block_content(k,"st_tagrefresh",Math.round(a.pb_t[h].rt-a.pb_t[h].rs)));k.st||a.s_hsp("stop_all_tags")?a.s_hsp("start_tag_"+k.id)?a.pb_dbc(k,"st_tagcontrol","act"):a.pb_dbc(k,"st_tagcontrol",""):a.s_hsp("stop_tag_"+k.id)?a.pb_dbc(k,"st_tagcontrol",\n"act"):a.pb_dbc(k,"st_tagcontrol","");a.s_hsp("show_logs_"+k.id)?a.pb_dbc(k,"st_taglogs","act"):a.pb_dbc(k,"st_taglogs","")}}}catch(n){console.log(n)}};a.pb_cdb=function(b,c,d,e,g){var h=document.getElementById("title_"+c);h||a.pb_cb_helper("title_"+c,c,d,a.table_header);d=a.pb_cb_helper("st_tag_"+c+"_"+b.id,c,e);d.setAttribute("tid",b.id);g&&(d.onclick=g);b.stat_block_tag.appendChild(d);b.stat_blocks||(b.stat_blocks=[]);return b.stat_blocks[c]=d};a.pb_dbc=function(b,c,d){b&&(d=c+" "+d,c=b.stat_blocks[c]);\nc.className.trim()!=d&&(c.className=d)};a.mt_set_debugmenu_block_content=function(b,c,d){b.stat_blocks[c].innerHTML!=d&&(b.stat_blocks[c].innerHTML=d)};a.pb_cb_helper=function(b,c,d,e){var g=document.createElement("div");g.setAttribute("id",b);c&&(g.className=c);d&&(g.innerHTML=d);e&&e.appendChild(g);return g};a.mt_toggle_display=function(b){console.log("Toggle display");console.log(b);b=document.getElementById(b);if("block"==b.style.display)return b.style.display="none",0;b.style.display="block";\nreturn 1};a.mt_stat_update_special_params=function(){try{for(var b=0;b<a.mt_spec_params_toggler.length;b++)for(var c=0;c<a.mt_spec_params_toggler[b].params.length;c++)a.s_hsp(a.mt_spec_params_toggler[b].params[c].param)?a.mt_spec_params_toggler[b].params[c].block.className="st_active":a.mt_spec_params_toggler[b].params[c].block.className=""}catch(d){console.log(d)}};window.setInterval(function(){a.s_hsp("status_menu","status_menu_fixed","status_menu_B","status_menu_fixed_B")&&a.pb_updbm()},1E3);a.mt_show_tag_menu=\nfunction(b){console.log("CALL MENU "+b);var c=document.getElementById("mt_tag_menu");console.log(c);c?c.style.display="block":(c=document.createElement("div"),c.setAttribute("id","mt_tag_menu"),c.className="mt_tag_menu",c.innerHTML=\'\\x3cdiv class\\x3d"mt_tag_menu_header"\\x3e\\x3cdiv class\\x3d"mt_tag_menu_name" id\\x3d"mt_tag_menu_name"\\x3e\\x3c/div\\x3e\\x3cdiv id\\x3d"mt_tag_menu_close"\\x3e[X]\\x3c/div\\x3e\\x3c/div\\x3e\\x3cdiv class\\x3d"mt_tag_menu_body" id\\x3d"mt_tag_menu_body"\\x3e\\x3c/div\\x3e\',document.getElementsByTagName("body")[0].appendChild(c),\ndocument.getElementById("mt_tag_menu_close").onclick=function(){console.log("Close");document.getElementById("mt_tag_menu").style.display="none"});document.getElementById("mt_tag_menu_name").innerText=b;var d=document.getElementById("mt_tag_menu_body");d.innerHTML="";for(var e=0,g=0;g<a.pb_t.length;g++)e=a.pb_t[g];if(e)for(g=0;g<a.mt_tag_params.length;g++){var h="mt_override_"+b+"_"+a.mt_tag_params[g].variable,t=e._copy[a.mt_tag_params[g].variable];h=a.localStorage.getItem(h);null==h&&(h="");var f=\n"onblur\\x3d\\"window.mt_set_temp_tag_param(\'"+b+"\',"+g+\',this)" \',r=document.createElement("div");r.className="mt_tag_menu_block";var m=\'\\x3cdiv class\\x3d"mt_tag_menu_cell mt_tag_menu_variable"\\x3e\'+a.mt_tag_params[g].title+"\\x3c/div\\x3e";if("string"==a.mt_tag_params[g].type||"int"==a.mt_tag_params[g].type||"bool"==a.mt_tag_params[g].type)m+=\'\\x3cdiv class\\x3d"mt_tag_menu_cell mt_tag_menu_current"\\x3e\'+t+"\\x3c/div\\x3e",m+=\'\\x3cdiv class\\x3d"mt_tag_menu_cell mt_tag_menu_new"\\x3e\\x3cinput type\\x3d"text" \'+\nf+\' class\\x3d"mt_inp_\'+a.mt_tag_params[g].type+\'" value\\x3d"\'+h+\'"\\x3e\\x3c/div\\x3e\';"object"==a.mt_tag_params[g].type&&(m+=\'\\x3cdiv class\\x3d"mt_tag_menu_cell mt_tag_menu_current"\\x3e\'+JSON.stringify(t)+"\\x3c/div\\x3e",m+=\'\\x3cdiv class\\x3d"mt_tag_menu_cell mt_tag_menu_new"\\x3e\\x3cinput type\\x3d"text" \'+f+\' class\\x3d"mt_inp_string" value\\x3d"\'+h+\'"\\x3e\\x3c/div\\x3e\');r.innerHTML=m;d.appendChild(r)}console.log(c)};a.mt_set_temp_tag_param=function(b,c,d){d=d.value.trim();c=a.mt_tag_params[c];b="mt_override_"+\nb+"_"+c.variable;console.log("Value\\x3d["+d+"]");0==d.length?(console.log("Remove"),a.localStorage.removeItem(b)):(console.log("Save"),a.localStorage.setItem(b,d))};a.mt_set_tag_overriden_params=function(b){for(var c=0;c<a.mt_tag_params.length;c++){var d=a.mt_tag_params[c],e="mt_override_"+b.id+"_"+d.variable;e=a.localStorage.getItem(e);if(null!=e){console.log("Variable found "+d.variable);if("object"==d.type)e=JSON.parse(e);else if("bool"==d.type||"int"==d.type)e*=1;b[d.variable]=e;console.log(b)}}};\na.pb_th=function(b,c,d){b.history||(b.history=[]);b.history.push({t:new Date,e:c,c:d})};a.mt_client_stat_add=function(b){if(!a.mt_ext_stat)return 0;a.pb_lg(0,"Add stat object ",b,"cstat","","show_logs_cs");var c=Math.floor(Date.now()/1E3);obj_fin={tg:b.c,cn:b.u,t:c};b.click?(obj_fin.c=1,obj_fin.p=-1,obj_fin.a=-1):(obj_fin.c=0,obj_fin.p=b.p,obj_fin.a=b.a);a.mt_add_client_stat(obj_fin,obj_fin.c)};a.mt_add_client_stat=function(b,c){var d=Math.floor(Date.now()/1E3),e=JSON.parse(a.localStorage.getItem("mt_an_arr_comp_2"));\nif(e){for(var g=[],h=0;h<e.length;h++)2592E3>d-e[h].t&&g.push(e[h]);e=g}else e=[];for(h=g=0;h<e.length;h++)3600>d-e[h].t&&e[h].tg==b.tg&&e[h].cn==b.cn&&(g=1,b.c?(e[h].c||(e[h].c=0),e[h].c++):b.p?b.a?(e[h].sp||(e[h].sp=0),e[h].sp++):(e[h].fp||(e[h].fp=0),e[h].fp++):b.a?(e[h].s||(e[h].s=0),e[h].s++):(e[h].f||(e[h].f=0),e[h].f++));g||(b.a?(b.s=1,b.f=0):(b.s=0,b.f=1),e.push(b));a.localStorage.setItem("mt_an_arr_comp_2",JSON.stringify(e));a.mt_send_client_stat(c)};a.mt_clear_client_stat=function(b){a.pb_lg(0,\n"Clear stat ",b,"cstat","","show_logs_cs");var c=JSON.parse(a.localStorage.getItem("mt_an_arr_comp_2")),d=[];c||(c=[]);if(b)for(var e=0;e<c.length;e++)c[e].t>b&&d.push(c[e]);a.localStorage.setItem("mt_an_arr_comp_2",JSON.stringify(d))};a.mt_send_client_stat=function(b){a.pb_lg(0,"Stat send ",b,"cstat","","show_logs_cs");if(!a.mt_ext_stat_send)return a.pb_lg(0,"Abort stat send ",a.mt_ext_stat_send,"cstat","","show_logs_cs"),0;a.pb_lg(0,"Set timer ",null,"cstat","","show_logs_cs");a.mt_clientstat_timer&&\nclearTimeout(a.mt_clientstat_timer);b=b?50:3E3;a.mt_clientstat_timer=a.setTimeout(function(){var c=a.mt_client_stat_show(0);c={r:c.data,a:c.anonym_clicks};c.u=a.pb_glv("mt_analys_uid",a.pb_rds(20).toString().toUpperCase());var d=localStorage.getItem("mt_gcode_country");c.g=d?d:"00";c.v=3;a.pb_rde(0,50)?(a.pb_lg(0,"Send object ",c,"cstat","","show_logs_cs"),a.pb_xr("https://tempstat.bcovery.com",c)):a.pb_lg(0,"Dont send object",null,"cstat","","show_logs_cs")},b)};a.mt_client_stat_show=function(b,\nc,d,e){var g=JSON.parse(a.localStorage.getItem("mt_an_arr_comp_2"));a.pb_lg(0,"Raw stat ",g,"cstat","","show_logs_cs");var h=Math.floor(Date.now()/1E3),t=[],f="https://wamiz.com/";f=f.replace("http://","").replace("https://","").replace("www.","").replace("/","");url_parts=f.split(".");f=url_parts[0];for(var r="",m=0,p=0;p<f.length;p++)3>p&&(r+=f.charCodeAt(p)),3<=p&&(m+=f.charCodeAt(p)+3*p);r+=1*(m+"");g||(g=[]);for(p=0;p<g.length;p++)m=1,f=g[p],c&&f.t<c&&(m=0),!c&&86400<h-f.t&&(m=0),d&&f.cn!=d&&\n(m=0),e&&f.tg!=e&&(m=0),m&&t.push(f);c=[];d=0;a.pb_lg(0,"Stat filtered ",t,"cstat","","show_logs_cs");for(p=0;p<t.length;p++)if(f=t[p],0!=f.cn){e={w:f.cn,t_c:0,imp_p:0,g_p:0,imp_pb:0,g_pb:0};if(b)for(h=g=0;h<c.length;h++)c[h].w==f.cn&&(e=c[h],g=1);else g=1,c[0]||(c[0]=e),e=c[0],e.w=1*r;f.sp&&(e.imp_pb+=f.sp);f.fp&&(e.g_pb+=f.fp);f.s&&(e.imp_p+=f.s);f.f&&(e.g_p+=f.f);f.c&&(e.t_c+=f.c);g||c.push(e)}else d+=f.c;return{anonym_clicks:d,data:c}};a.mt_add_google_event_stat_click=function(b){if(!b.isEmpty){var c=\nb.slot.getSlotId().getId();b=b.slot.getSlotElementId();c=x.getElementById("google_ads_iframe_"+c);b=x.getElementById(b);b=a.mt_get_tag_by_block(b);var d=0,e=0;b&&(d=b.website_id,e=b.tag_id);a.pb_lg(0,"REGISTER GOOGLE CLICK","["+d+"/"+e+"]","cstat","","show_logs_cs");a.mt_client_add_click_event(c,d,e)}};a.mt_client_click_iframe_stat_object=null;a.mt_client_add_click_event=function(b,c,d){!b||b instanceof HTMLBodyElement||("IFRAME"==b.tagName?(a.pb_lg(0,"ADD EVENT TO IFRAME:",b,"cstat","","show_logs_cs"),\nb.addEventListener("mouseenter",function(){var e={c:d,u:c,click:1};a.pb_lg(0,"TEST EVENT ON IFRAME:mouseenter",this,"cstat","","show_logs_cs");a.mt_client_click_iframe_stat_object=e}),b.addEventListener("mouseleave",function(){a.pb_lg(0,"TEST EVENT ON IFRAME:mouseleave",this,"cstat","","show_logs_cs");a.mt_client_click_iframe_stat_object=null})):(a.pb_lg(0,"ADD EVENT TO BLOCK:",b,"cstat","","show_logs_cs"),b.addEventListener("click",function(){a.pb_lg(0,"CLICK ON AD:",this,"cstat","","show_logs_cs");\na.mt_client_stat_add({c:d,u:c,click:1})}),b.addEventListener("mouseenter",function(){a.pb_lg(0,"TEST EVENT ON AD:mouseenter",this,"cstat","","show_logs_cs")}),b.addEventListener("mouseleave",function(){a.pb_lg(0,"TEST EVENT ON AD:mouseleave",this,"cstat","","show_logs_cs")}),b.addEventListener("onmouseup",function(){a.pb_lg(0,"TEST EVENT ON AD:onmouseup ",this,"cstat","","show_logs_cs")}),b.addEventListener("onmousedown",function(){a.pb_lg(0,"TEST EVENT ON AD:onmousedown ",this,"cstat","","show_logs_cs");\na.mt_client_stat_add({c:d,u:c,click:1})})))};a.mt_client_analyze=function(b){b=Date.now()/1E3-86400*b;var c=a.mt_client_stat_show(0,b);b={imp_p:0,imp_pb:0,g_p:0,g_pb:0,pb_calls:0,pb_success:0,eff_p:0,eff_pb:0,clicks:0};b.clicks+=c.anonym_clicks;for(var d=0;d<c.data.length;d++)b.clicks+=c.data[d].t_c,b.imp_p+=1*c.data[d].imp_p,b.imp_pb+=1*c.data[d].imp_pb,b.g_p+=1*c.data[d].g_p,b.g_pb+=1*c.data[d].g_pb;if(c=a.localStorage.getItem("mt_fake_stat"))"undefined"!=typeof c.clicks&&(b.clicks=c.clicks),"undefined"!=\ntypeof c.g_p&&(b.g_p=c.g_p),"undefined"!=typeof c.g_pb&&(b.g_pb=c.g_pb),"undefined"!=typeof c.imp_p&&(b.imp_p=c.imp_p),"undefined"!=typeof c.imp_pb&&(b.imp_pb=c.imp_pb);b.eff_p=0!=b.g_p?b.imp_p/b.g_p:0;b.eff_pb=0!=b.g_pb?b.imp_pb/b.g_pb:0;a.pb_lg(0,"Client analyze result",b,"cstat","","show_logs_cs");return b};a.mt_blur_event_added||(a.addEventListener("blur",function(){a.pb_lg(0,"WINDOW BLUR WITH OBJECT ",a.mt_client_click_iframe_stat_object,"cstat","","show_logs_cs");a.mt_client_click_iframe_stat_object&&\n(a.mt_client_stat_add(a.mt_client_click_iframe_stat_object),a.mt_client_click_iframe_stat_object=null)}),a.mt_blur_event_added=1);a.mt_hbstat_process=function(b,c,d,e,g,h){if(!b.hb_stat)return 0;var t=[],f="",r="",m="";if(c)for(var p in e[d].bids){var u=0;c=e[d].bids[p];t.push(c.bidderCode);f=c.auctionId;r=c.mediaType;m=c.currency;c.adId==unit.hb_adid&&(u=1);u={partner:c.bidderCode,no_bid:0,fail_bid:0,is_winner:u,cpm:c.cpm,currency:c.currency,auction:c.auctionId,status:c.statusMessage,time_response:c.timeToRespond/\n1E3,media_type:c.mediaType};a.pb_lg(0,"\\x3e BID",c,"headerbidding");a.pb_lg(0,"\\x3e BID OBJ ",u,"headerbidding");a.pb_so(b,u)}if(g.hasOwnProperty(d))for(p in g[d].bids){c=g[d].bids[p];t.push(c.bidder);f=c.auctionId;if(""==r)for(var k in c.mediaTypes)r=k;u={partner:c.bidder,no_bid:1,fail_bid:0,auction:c.auctionId,script_id:b.ls,media_type:r,currency:m,time_response:c.timeToRespond/1E3};a.pb_so(b,u)}""==f&&(f=b.id+"_"+b.ls+"_"+Date.now());for(e=0;e<h.length;e++){c=h[e];if(""==r)for(k in c.mediaTypes)r=\nk;if(c.code==d)for(g=0;g<c.bids.length;g++)t.includes(c.bids[g].bidder)||(u={partner:c.bids[g].bidder,no_bid:0,fail_bid:1,auction:f,script_id:b.ls,media_type:r,time_response:0},a.pb_so(b,u))}};a.pb_so=function(b,c){if(!b.hb_stat)return 0;var d=2;a.pb_10||(a.pb_10=[]);a.pb_10[d]||(a.pb_10[d]={g:a.pb_4?a.pb_4:"00",w:[],l:[],n:[],f:[]});2>c.media_type.length&&(c.media_type=" ");var e={w:b.website_id,t:b.tag_id,s:c.script_id,m:c.media_type[0],p:c.partner};e.u=c.time_response?c.time_response:0;a.pb_lg(b,\n"Statstick object:",e,"statistick");if(c.is_winner||!c.fail_bid&&!c.no_bid)e.q=c.cpm,e.r=c.currency,e.u=c.timeout,c.is_winner?a.pb_10[d].w.push(e):l.pb_10[d].l.push(e);if(c.fail_bid||c.no_bid)c.fail_bid&&a.pb_10[d].f.push(e),c.no_bid&&a.pb_10[d].n.push(e);a.pb_lg(b,"Statstick object final:",e,"statistick");b=500;a.pb_5[d]&&clearTimeout(a.pb_5[d]);a.pb_5[d]=setTimeout(function(){a.pb_ss(d)},b)};a.mt_add_dnone_stat=function(b,c){if(!b.dnone_stat)return 0;var d=b.website_id;b=b.tag_id;a.mt_dnone_stat_arr||\n(a.mt_dnone_stat_arr=[]);for(var e=0,g=0;g<a.mt_dnone_stat_arr.length;g++)a.mt_dnone_stat_arr[g].w==d&&a.mt_dnone_stat_arr[g].t==b&&a.mt_dnone_stat_arr[g].type==c&&(a.mt_dnone_stat_arr[g].a++,e=1);e||a.mt_dnone_stat_arr.push({w:d,t:b,type:c,a:1});a.mt_dnone_timer&&clearTimeout(a.mt_dnone_timer);a.mt_dnone_timer=setTimeout(function(){a.mt_send_dnone_stat()},2E3)};a.mt_send_dnone_stat=function(){a.mt_dnone_stat_arr&&0<a.mt_dnone_stat_arr.length&&(a.pb_xr("https://tempstat.bcovery.com/dnone.php",{arr:a.mt_dnone_stat_arr}),\na.mt_dnone_stat_arr=[])};a.mt_add_special_params=function(){var b=a.localStorage.getItem("mt_spec_params_array");b=b?JSON.parse(b):[];for(var c=0;c<arguments.length;c++)arguments[c].includes("start_tag_")&&a.mt_remove_special_param("stop_tag_"+arguments[c].replace("start_tag_","")),arguments[c].includes("stop_tag_")&&a.mt_remove_special_param("start_tag_"+arguments[c].replace("stop_tag_","")),b.includes(arguments[c])||b.push(arguments[c]);a.localStorage.setItem("mt_spec_params_array",JSON.stringify(b))};\na.mt_remove_special_param=function(b){var c=a.localStorage.getItem("mt_spec_params_array");c&&(c=JSON.parse(c),b=c.indexOf(b),-1!==b&&c.splice(b,1));a.localStorage.setItem("mt_spec_params_array",JSON.stringify(c))};a.mt_clear_special_params=function(){a.localStorage.setItem("mt_spec_params_array","")};a.mt_show_special_params=function(){console.log("--\\x3e START");var b=a.localStorage.getItem("mt_spec_params_array");if((b=JSON.parse(b))&&b.length)for(var c=0;c<b.length;c++)console.log("----\\x3e "+\nb[c]);else console.log("---\\x3e PARAMS IS EMPTY");console.log("--\\x3e END")};a.mt_toggle_special_param=function(b){if(a.s_hsp(b))return a.mt_remove_special_param(b),0;a.mt_add_special_params(b);return 1};console.log("LOAD -------------------------------------\\x3e");a.mt_outdata||(a.mt_outdata=[]);q=\'\\x3cdiv style\\x3d"width:300px;height:250px;border:1px solid black;cursor:pointer;" onclick\\x3d"document.location.href\\x3d\\\'https://wamiz.com/\\\'"\\x3e\';q+=\'\\x3cimg style\\x3d"margin:5px 5px 0px 5px;" align\\x3d"left" width\\x3d"142px" height\\x3d"auto" src\\x3d"[IMG]"/\\x3e\';\nq+=\'\\x3cdiv style\\x3d"margin:5px;font-size:16px;"\\x3e\';q+=\'\\x3cdiv style\\x3d"margin-bottom:5px;"\\x3e\\x3cb\\x3e[TITLE]\\x3c/b\\x3e\\x3c/div\\x3e\';q+=\'\\x3cp style\\x3d"text-overflow:ellipsis;"\\x3e[BODY]\\x3c/p\\x3e\';q+=\'\\x3cdiv style\\x3d"margin-top:2px;"\\x3e\\x3cb\\x3e[BRAND]\\x3c/b\\x3e\\x3c/div\\x3e\';q+="\\x3cdiv\\x3e";q+=\'\\x3cimg style\\x3d"float:right;" width\\x3d"42px" height\\x3d"auto" src\\x3d"[ICON]" style\\x3d"[ICON_STYLE]" /\\x3e\';q+="\\x3c/div\\x3e";q+="\\x3c/div\\x3e";q+="\\x3c/div\\x3e";a.mt_outdata.native_template=\nq;q={execute:"background:#ffffc8;",passback:"background:#cddef7;",statistick:"background:#FFF;color:#000;",headerbidding:"background:#e6d4fc;",system:"font-style:italic;",bold:"font-weight:bold;",comment:"color:#DDD;",disactivate:"color:#F00;",refresh:"color:#51a800;",subtest:"color:#AAA;",google_pb:"color:#4184f4",ctrigger:"color:#c300d1;font-style:italic;",cstat:"background-color:#ADFF33;",module:"background-color:#075700;color:#FFF;"};a.mt_outdata.console_styles=q;a.mt_words_dict=[];a.mt_try_words_dict=\nfunction(b){if("string"==typeof b)return b;for(var c="",d=0;d<b.length;d++)a.mt_words_dict[b[d]]&&(c+=a.mt_words_dict[b[d]]);return c};a.mt_module_google_placement_refresh=function(b,c){a.pb_lg(b,"START WITH PARAMS",c,"module","","show_logs_module_placement_refresh");a.pb_th(b,"md","Start module");if(c.block){var d=c.block;if(d){a.pb_lg(b,"Block",d,"module","","show_logs_module_placement_refresh");c=d.getElementsByTagName("div");a.pb_lg(b,"Elements",c,"module","","show_logs_module_placement_refresh");\nif(0<c.length)for(var e=0;e<c.length;e++){var g=a.mt_module_google_placement_refresh_check_node(b,c[e]);if(g&&!g.success)return a.mt_module_google_placement_refresh_refresh_adunit(b,g),1}c=d.getElementsByTagName("iframe");a.pb_lg(b,"Elements",c,"module","","show_logs_module_placement_refresh");if(0<c.length)for(e=0;e<c.length;e++){d=c[e];a.pb_lg(b,"C:",d,"module","","show_logs_module_placement_refresh");if((g=a.mt_module_google_placement_refresh_check_node(b,d))&&!g.success)return a.mt_module_google_placement_refresh_refresh_adunit(b,\ng),1;if(null!=d.contentDocument){a.pb_lg(b,"Search inside:",d.contentDocument,"module","","show_logs_module_placement_refresh");d=d.contentDocument.getElementsByTagName("iframe");a.pb_lg(b,"Inner Iframes:",d,"module","","show_logs_module_placement_refresh");for(var h=0;h<d.length;h++)if((g=a.mt_module_google_placement_refresh_check_node(b,d[h]))&&!g.success)return a.mt_module_google_placement_refresh_refresh_adunit(b,g),1}}}}else a.pb_lg(b,"NO BLOCK PARAM",c,"module","","show_logs_module_placement_refresh")};\na.mt_module_google_placement_refresh_check_node=function(b,c){a.pb_lg(b,"Check iframe:",c.getAttribute("id"),"module","","show_logs_module_placement_refresh");return c.getAttribute("id")&&-1!=c.getAttribute("id").indexOf("google_ads_iframe_")&&(c=a.mt_get_google_iframe_ad(0,c.getAttribute("id")),a.pb_lg(b,"GOOGLE suspected",c,"module","","show_logs_module_placement_refresh"),c)?c:0};a.mt_module_google_placement_refresh_event_set=0;a.mt_module_google_placement_refresh_refresh_adunit=function(b,c){a.pb_lg(b,\n"REFRESH ADUNIT:",c,"module","","show_logs_module_placement_refresh");c.slot.setTargeting("bcovery","1");googletag.pubads().refresh([c.slot]);a.pb_lg(b,"ADUNIT REFRESHED",c,"module","","show_logs_module_placement_refresh");a.mt_module_google_placement_refresh_event_set||(a.mt_module_google_placement_refresh_event_set=1,a.googletag.pubads().addEventListener("slotRenderEnded",function(d){a.pb_lg(0,"\\x3e\\x3e\\x3e\\x3e\\x3e Module event fired",d.slot,"module","","show_logs_module_placement_refresh");"1"==\nd.slot.getTargeting("bcovery")&&(d.slot.setTargeting("bcovery","0"),a.pb_lg(0,"\\x3e\\x3e\\x3e\\x3e\\x3e Flag removed",d.slot,"module","","show_logs_module_placement_refresh"))}))}})(window,document,performance);</script>\n',
                            'vtp_supportDocumentWrite': false,
                            'vtp_enableIframeMode': false,
                            'vtp_enableEditJsMacroBehavior': false,
                            'tag_id': 46
                        },
                        {
                            'function': '__paused',
                            'vtp_originalTagType': 'html',
                            'tag_id': 3
                        },
                        {
                            'function': '__paused',
                            'vtp_originalTagType': 'html',
                            'tag_id': 7
                        },
                        {
                            'function': '__html',
                            'priority': 0,
                            'vtp_html': '<script type="text/gtmscript">"function"==typeof window.pb_lg_cond&&window.pb_lg_cond(0)&&console.log("TAG %c1_884%c COMPILE 2021-07-23 13:29:29 (BP)","color:#00661d;text-decoration:underline","color:#000");window.pb_t=window.pb_t||[];var p=1;window.pb_t.forEach(function(a){"1_884"==a.id&&(p=0)});"function"==typeof window.pb_lg_cond&&window.pb_lg_cond(0)&&console.log("Activate\\x3d"+p);\np&&window.setTimeout(function(){window.pb_t.push({id:"1_884",app:"BP",ls:0,a:!0,ch:!1,append_type:0,s:[],p:[{id:5543,pid:0,fr:1,di:"",sp:"",h:1,_w:0,_h:0,ht:"",nt:"",au:[{code:"dfp-bloc-top",sizes:[[300,250]],mediaTypes:{banner:{sizes:[[300,250]]}},bids:[{bidder:"ix",params:{siteId:"686667",size:[300,250]}}]}]}],pa:!1,pf:!0,pb:!0,di:"#dfp-bloc-top","do":"#dfp-bloc-top",n:0,css:"",nt:"",ht:"",d:null,div_sub:null,div_parent:null,g:!1,gi:!1,c:[],sh:[!0,!0,!0],f:!0,rt:0,rs:0,db:0,ll:0,rm:!1,pd:3E3,headerbidding_delay:3E3,\nca:1,clear_pb:0,ou:0,rg:0,dont_fix_height:0,gs:0,clb:0,rl:1,es:0,st:0,mlt:0,mltt:"",mlb:[],dtc:[],dtg:0,dtgi:0,dto:0,dt:"0-0",rnd:0,rnl:10,pvc:0,pvp:100,rnb:0,ssg:0,ssgi:0,ssc:[],ssp:0,ssph:100,wta:0,wts:0,wte:0,hb_stat:0,dnone_stat:0,undnone:0,daily_activity_allow:0,dac:1111111,cta:1,ptk:0,ptkl:0,clear_after_refresh:0});window.pb_a()},0);</script>\n',
                            'vtp_supportDocumentWrite': false,
                            'vtp_enableIframeMode': false,
                            'vtp_enableEditJsMacroBehavior': false,
                            'tag_id': 1
                        },
                        {
                            'function': '__html',
                            'priority': 0,
                            'vtp_html': '<script type="text/gtmscript">"function"==typeof window.pb_lg_cond&&window.pb_lg_cond(0)&&console.log("TAG %c2_884%c COMPILE 2021-07-23 13:29:47 (BP)","color:#00661d;text-decoration:underline","color:#000");window.pb_t=window.pb_t||[];var p=1;window.pb_t.forEach(function(a){"2_884"==a.id&&(p=0)});"function"==typeof window.pb_lg_cond&&window.pb_lg_cond(0)&&console.log("Activate\\x3d"+p);\np&&window.setTimeout(function(){window.pb_t.push({id:"2_884",app:"BP",ls:0,a:!0,ch:!1,append_type:0,s:[],p:[{id:5544,pid:0,fr:1,di:"",sp:"",h:1,_w:0,_h:0,ht:"",nt:"",au:[{code:"dfp-bloc-bottom",sizes:[[728,90]],mediaTypes:{banner:{sizes:[[728,90]]}},bids:[{bidder:"ix",params:{siteId:"686465",size:[728,90]}}]}]}],pa:!1,pf:!0,pb:!0,di:"#dfp-bloc-bottom","do":"#dfp-bloc-bottom",n:0,css:"",nt:"",ht:"",d:null,div_sub:null,div_parent:null,g:!1,gi:!1,c:[],sh:[!0,!0,!0],f:!0,rt:0,rs:0,db:0,ll:0,rm:!1,pd:3E3,\nheaderbidding_delay:3E3,ca:0,clear_pb:0,ou:0,rg:0,dont_fix_height:0,gs:0,clb:0,rl:1,es:0,st:0,mlt:0,mltt:"",mlb:[],dtc:[],dtg:0,dtgi:0,dto:0,dt:"0-0",rnd:0,rnl:10,pvc:0,pvp:100,rnb:0,ssg:0,ssgi:0,ssc:[],ssp:0,ssph:100,wta:0,wts:0,wte:0,hb_stat:0,dnone_stat:0,undnone:0,daily_activity_allow:0,dac:1111111,cta:1,ptk:0,ptkl:0,clear_after_refresh:0});window.pb_a()},0);</script>\n',
                            'vtp_supportDocumentWrite': false,
                            'vtp_enableIframeMode': false,
                            'vtp_enableEditJsMacroBehavior': false,
                            'tag_id': 2
                        },
                        {
                            'function': '__html',
                            'priority': 0,
                            'vtp_html': '<script type="text/gtmscript">"function"==typeof window.pb_lg_cond&&window.pb_lg_cond(0)&&console.log("TAG %c4_884%c COMPILE 2021-06-14 07:45:47 (BP)","color:#00661d;text-decoration:underline","color:#000");window.pb_t=window.pb_t||[];var p=1;window.pb_t.forEach(function(a){"4_884"==a.id&&(p=0)});"function"==typeof window.pb_lg_cond&&window.pb_lg_cond(0)&&console.log("Activate\\x3d"+p);\np&&window.setTimeout(function(){window.pb_t.push({id:"4_884",app:"BP",ls:0,a:!0,ch:!1,append_type:0,s:[],p:[{id:2525,pid:0,fr:1,di:"",sp:"",h:0,_w:0,_h:0,fn:function(a){window.pb_i("4_884","","0","0","\\x3cscript src\\x3d\\"https://www.googletagservices.com/tag/js/gpt.js\\"\\x3e  googletag.pubads().definePassback(\'/21775459675/FR_WAMIZ/FR_Wamiz_BCOVERY_HB_Native_HP\', [\'fluid\']).display();\\x3c/script\\x3e",a)}}],pa:!1,pf:!0,pb:!0,di:"#dfp-home-native-ad","do":"#dfp-home-native-ad",n:0,css:"",nt:"",ht:"",\nd:null,div_sub:null,div_parent:null,g:!1,gi:!1,c:[],sh:[!0,!0,!0],f:!0,rt:0,rs:0,db:0,ll:0,rm:!1,pd:3E3,headerbidding_delay:3E3,ca:0,clear_pb:0,ou:0,rg:0,dont_fix_height:0,gs:0,clb:0,rl:1,es:0,st:0,mlt:0,mltt:"",mlb:[],dtc:[],dtg:0,dtgi:0,dto:0,dt:"0-0",rnd:0,rnl:10,pvc:0,pvp:100,rnb:0,ssg:0,ssgi:0,ssc:[],ssp:0,ssph:100,wta:0,wts:0,wte:0,hb_stat:0,dnone_stat:0,undnone:0,daily_activity_allow:0,dac:1111111,cta:1,ptk:0,ptkl:0,clear_after_refresh:0});window.pb_a()},0);</script>\n',
                            'vtp_supportDocumentWrite': false,
                            'vtp_enableIframeMode': false,
                            'vtp_enableEditJsMacroBehavior': false,
                            'tag_id': 4
                        }
                    ],
                    'predicates': [{
                            'function': '_eq',
                            'arg0': [
                                'macro',
                                0
                            ],
                            'arg1': 'gtm.js'
                        }],
                    'rules': [[
                            [
                                'if',
                                0
                            ],
                            [
                                'add',
                                4,
                                5,
                                6,
                                7,
                                8,
                                1,
                                2,
                                0,
                                3
                            ]
                        ]]
                },
                'runtime': []
            };
            var ba, ca = function (a) {
                    var b = 0;
                    return function () {
                        return b < a.length ? {
                            done: !1,
                            value: a[b++]
                        } : { done: !0 };
                    };
                }, da = function (a) {
                    var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
                    return b ? b.call(a) : { next: ca(a) };
                }, ea = 'function' == typeof Object.create ? Object.create : function (a) {
                    var b = function () {
                    };
                    b.prototype = a;
                    return new b();
                }, fa;
            if ('function' == typeof Object.setPrototypeOf)
                fa = Object.setPrototypeOf;
            else {
                var ha;
                a: {
                    var ja = { a: !0 }, ka = {};
                    try {
                        ka.__proto__ = ja;
                        ha = ka.a;
                        break a;
                    } catch (a) {
                    }
                    ha = !1;
                }
                fa = ha ? function (a, b) {
                    a.__proto__ = b;
                    if (a.__proto__ !== b)
                        throw new TypeError(a + ' is not extensible');
                    return a;
                } : null;
            }
            var la = fa, ma = function (a, b) {
                    a.prototype = ea(b.prototype);
                    a.prototype.constructor = a;
                    if (la)
                        la(a, b);
                    else
                        for (var c in b)
                            if ('prototype' != c)
                                if (Object.defineProperties) {
                                    var d = Object.getOwnPropertyDescriptor(b, c);
                                    d && Object.defineProperty(a, c, d);
                                } else
                                    a[c] = b[c];
                    a.jj = b.prototype;
                }, pa = this || self, qa = function (a) {
                    return a;
                };
            var ra = {}, sa = function (a, b) {
                    ra[a] = ra[a] || [];
                    ra[a][b] = !0;
                }, ta = function (a) {
                    for (var b = [], c = ra[a] || [], d = 0; d < c.length; d++)
                        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
                    for (var e = 0; e < b.length; e++)
                        b[e] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(b[e] || 0);
                    return b.join('');
                };
            var ua = function () {
                }, va = function (a) {
                    return 'function' == typeof a;
                }, g = function (a) {
                    return 'string' == typeof a;
                }, wa = function (a) {
                    return 'number' == typeof a && !isNaN(a);
                }, xa = function (a) {
                    var b = '[object Array]' == Object.prototype.toString.call(Object(a));
                    Array.isArray ? Array.isArray(a) !== b && sa('TAGGING', 4) : sa('TAGGING', 5);
                    return b;
                }, ya = function (a, b) {
                    if (Array.prototype.indexOf) {
                        var c = a.indexOf(b);
                        return 'number' == typeof c ? c : -1;
                    }
                    for (var d = 0; d < a.length; d++)
                        if (a[d] === b)
                            return d;
                    return -1;
                }, za = function (a, b) {
                    if (a && xa(a))
                        for (var c = 0; c < a.length; c++)
                            if (a[c] && b(a[c]))
                                return a[c];
                }, Ba = function (a, b) {
                    if (!wa(a) || !wa(b) || a > b)
                        a = 0, b = 2147483647;
                    return Math.floor(Math.random() * (b - a + 1) + a);
                }, Ga = function (a, b) {
                    for (var c = new Da(), d = 0; d < a.length; d++)
                        c.set(a[d], !0);
                    for (var e = 0; e < b.length; e++)
                        if (c.get(b[e]))
                            return !0;
                    return !1;
                }, Ja = function (a, b) {
                    for (var c in a)
                        Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
                }, La = function (a) {
                    return !!a && ('[object Arguments]' == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, 'callee'));
                }, Ma = function (a) {
                    return Math.round(Number(a)) || 0;
                }, Na = function (a) {
                    return 'false' == String(a).toLowerCase() ? !1 : !!a;
                }, Oa = function (a) {
                    var b = [];
                    if (xa(a))
                        for (var c = 0; c < a.length; c++)
                            b.push(String(a[c]));
                    return b;
                }, Pa = function (a) {
                    return a ? a.replace(/^\s+|\s+$/g, '') : '';
                }, Qa = function () {
                    return new Date(Date.now());
                }, Ra = function () {
                    return Qa().getTime();
                }, Da = function () {
                    this.prefix = 'gtm.';
                    this.values = {};
                };
            Da.prototype.set = function (a, b) {
                this.values[this.prefix + a] = b;
            };
            Da.prototype.get = function (a) {
                return this.values[this.prefix + a];
            };
            var Sa = function (a, b, c) {
                    return a && a.hasOwnProperty(b) ? a[b] : c;
                }, Ta = function (a) {
                    var b = a;
                    return function () {
                        if (b) {
                            var c = b;
                            b = void 0;
                            try {
                                c();
                            } catch (d) {
                            }
                        }
                    };
                }, Ua = function (a, b) {
                    for (var c in b)
                        b.hasOwnProperty(c) && (a[c] = b[c]);
                }, Va = function (a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b))
                            return !0;
                    return !1;
                }, Wa = function (a, b) {
                    for (var c = [], d = 0; d < a.length; d++)
                        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
                    return c;
                }, Xa = function (a, b) {
                    for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++)
                        d = d[e[f]] = {};
                    d[e[e.length - 1]] = b;
                    return c;
                }, Ya = /^\w{1,9}$/, Za = function (a) {
                    var b = [];
                    Ja(a, function (c, d) {
                        Ya.test(c) && d && b.push(c);
                    });
                    return b.join(',');
                };
            var $a, ab = function () {
                    if (void 0 === $a) {
                        var a = null, b = pa.trustedTypes;
                        if (b && b.createPolicy) {
                            try {
                                a = b.createPolicy('goog#html', {
                                    createHTML: qa,
                                    createScript: qa,
                                    createScriptURL: qa
                                });
                            } catch (c) {
                                pa.console && pa.console.error(c.message);
                            }
                            $a = a;
                        } else
                            $a = a;
                    }
                    return $a;
                };
            var eb = function (a, b) {
                this.o = b === bb ? a : '';
            };
            eb.prototype.toString = function () {
                return this.o + '';
            };
            var bb = {};
            var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
            var gb;
            a: {
                var hb = pa.navigator;
                if (hb) {
                    var mb = hb.userAgent;
                    if (mb) {
                        gb = mb;
                        break a;
                    }
                }
                gb = '';
            }
            var nb = function (a) {
                return -1 != gb.indexOf(a);
            };
            var ob = {}, pb = function (a, b, c) {
                    this.o = c === ob ? a : '';
                };
            pb.prototype.toString = function () {
                return this.o.toString();
            };
            var qb = function (a) {
                    return a instanceof pb && a.constructor === pb ? a.o : 'type_error:SafeHtml';
                }, rb = function (a) {
                    var b = ab(), c = b ? b.createHTML(a) : a;
                    return new pb(c, null, ob);
                }, sb = new pb(pa.trustedTypes && pa.trustedTypes.emptyHTML || '', 0, ob);
            var tb = function (a, b) {
                    var c = function () {
                    };
                    c.prototype = a.prototype;
                    var d = new c();
                    a.apply(d, Array.prototype.slice.call(arguments, 1));
                    return d;
                }, ub = function (a) {
                    var b = a;
                    return function () {
                        if (b) {
                            var c = b;
                            b = null;
                            c();
                        }
                    };
                };
            var vb = function (a) {
                    var b = !1, c;
                    return function () {
                        b || (c = a(), b = !0);
                        return c;
                    };
                }(function () {
                    var a = document.createElement('div'), b = document.createElement('div');
                    b.appendChild(document.createElement('div'));
                    a.appendChild(b);
                    var c = a.firstChild.firstChild;
                    a.innerHTML = qb(sb);
                    return !c.parentElement;
                }), wb = function (a, b) {
                    if (vb())
                        for (; a.lastChild;)
                            a.removeChild(a.lastChild);
                    a.innerHTML = qb(b);
                };
            var m = window, A = document, xb = navigator, yb = A.currentScript && A.currentScript.src, zb = function (a, b) {
                    var c = m[a];
                    m[a] = void 0 === c ? b : c;
                    return m[a];
                }, Ab = function (a, b) {
                    b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                        a.readyState in {
                            loaded: 1,
                            complete: 1
                        } && (a.onreadystatechange = null, b());
                    });
                }, Bb = function (a, b, c) {
                    var d = A.createElement('script');
                    d.type = 'text/javascript';
                    d.async = !0;
                    var e, f = ab(), h = f ? f.createScriptURL(a) : a;
                    e = new eb(h, bb);
                    d.src = e instanceof eb && e.constructor === eb ? e.o : 'type_error:TrustedResourceUrl';
                    var k, l, n = (d.ownerDocument && d.ownerDocument.defaultView || window).document, p = null === (l = n.querySelector) || void 0 === l ? void 0 : l.call(n, 'script[nonce]');
                    (k = p ? p.nonce || p.getAttribute('nonce') || '' : '') && d.setAttribute('nonce', k);
                    Ab(d, b);
                    c && (d.onerror = c);
                    var q = A.getElementsByTagName('script')[0] || A.body || A.head;
                    q.parentNode.insertBefore(d, q);
                    return d;
                }, Cb = function () {
                    if (yb) {
                        var a = yb.toLowerCase();
                        if (0 === a.indexOf('https://'))
                            return 2;
                        if (0 === a.indexOf('http://'))
                            return 3;
                    }
                    return 1;
                }, Gb = function (a, b) {
                    var c = A.createElement('iframe');
                    c.height = '0';
                    c.width = '0';
                    c.style.display = 'none';
                    c.style.visibility = 'hidden';
                    var d = A.body && A.body.lastChild || A.body || A.head;
                    d.parentNode.insertBefore(c, d);
                    Ab(c, b);
                    void 0 !== a && (c.src = a);
                    return c;
                }, Hb = function (a, b, c) {
                    var d = new Image(1, 1);
                    d.onload = function () {
                        d.onload = null;
                        b && b();
                    };
                    d.onerror = function () {
                        d.onerror = null;
                        c && c();
                    };
                    d.src = a;
                    return d;
                }, Ib = function (a, b, c, d) {
                    a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent('on' + b, c);
                }, Jb = function (a, b, c) {
                    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent('on' + b, c);
                }, F = function (a) {
                    m.setTimeout(a, 0);
                }, Kb = function (a, b) {
                    return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
                }, Lb = function (a) {
                    var b = a.innerText || a.textContent || '';
                    b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''));
                    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
                    return b;
                }, Mb = function (a) {
                    var b = A.createElement('div'), c = rb('A<div>' + a + '</div>');
                    wb(b, c);
                    b = b.lastChild;
                    for (var d = []; b.firstChild;)
                        d.push(b.removeChild(b.firstChild));
                    return d;
                }, Nb = function (a, b, c) {
                    c = c || 100;
                    for (var d = {}, e = 0; e < b.length; e++)
                        d[b[e]] = !0;
                    for (var f = a, h = 0; f && h <= c; h++) {
                        if (d[String(f.tagName).toLowerCase()])
                            return f;
                        f = f.parentElement;
                    }
                    return null;
                }, Ob = function (a) {
                    xb.sendBeacon && xb.sendBeacon(a) || Hb(a);
                }, Tb = function (a, b) {
                    var c = a[b];
                    c && 'string' === typeof c.animVal && (c = c.animVal);
                    return c;
                }, Ub = function (a) {
                    var b = A.featurePolicy;
                    return b && va(b.features) ? -1 !== b.features().indexOf(a) : !1;
                };
            var Vb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Wb = function (a) {
                    if (null == a)
                        return String(a);
                    var b = Vb.exec(Object.prototype.toString.call(Object(a)));
                    return b ? b[1].toLowerCase() : 'object';
                }, Xb = function (a, b) {
                    return Object.prototype.hasOwnProperty.call(Object(a), b);
                }, Yb = function (a) {
                    if (!a || 'object' != Wb(a) || a.nodeType || a == a.window)
                        return !1;
                    try {
                        if (a.constructor && !Xb(a, 'constructor') && !Xb(a.constructor.prototype, 'isPrototypeOf'))
                            return !1;
                    } catch (c) {
                        return !1;
                    }
                    for (var b in a);
                    return void 0 === b || Xb(a, b);
                }, H = function (a, b) {
                    var c = b || ('array' == Wb(a) ? [] : {}), d;
                    for (d in a)
                        if (Xb(a, d)) {
                            var e = a[d];
                            'array' == Wb(e) ? ('array' != Wb(c[d]) && (c[d] = []), c[d] = H(e, c[d])) : Yb(e) ? (Yb(c[d]) || (c[d] = {}), c[d] = H(e, c[d])) : c[d] = e;
                        }
                    return c;
                };
            var Zb = function (a) {
                if (void 0 === a || xa(a) || Yb(a))
                    return !0;
                switch (typeof a) {
                case 'boolean':
                case 'number':
                case 'string':
                case 'function':
                    return !0;
                }
                return !1;
            };
            var $b = function () {
                var a = function (b) {
                    return {
                        toString: function () {
                            return b;
                        }
                    };
                };
                return {
                    Ig: a('consent'),
                    Jg: a('consent_always_fire'),
                    Re: a('convert_case_to'),
                    Se: a('convert_false_to'),
                    Te: a('convert_null_to'),
                    Ue: a('convert_true_to'),
                    Ve: a('convert_undefined_to'),
                    Ti: a('debug_mode_metadata'),
                    jb: a('function'),
                    wh: a('instance_name'),
                    yh: a('live_only'),
                    zh: a('malware_disabled'),
                    Ah: a('metadata'),
                    Wi: a('original_activity_id'),
                    Xi: a('original_vendor_template_id'),
                    Ch: a('once_per_event'),
                    yf: a('once_per_load'),
                    Zi: a('priority_override'),
                    $i: a('respected_consent_types'),
                    Cf: a('setup_tags'),
                    Df: a('tag_id'),
                    Ef: a('teardown_tags')
                };
            }();
            var wc;
            var Dc = [], Ec = [], Fc = [], Gc = [], Hc = [], Ic = {}, Jc, Kc, Lc, Mc = function (a, b) {
                    var c = a['function'];
                    if (!c)
                        throw Error('Error: No function name given for function call.');
                    var d = Ic[c], e = {}, f;
                    for (f in a)
                        if (a.hasOwnProperty(f))
                            if (0 === f.indexOf('vtp_'))
                                d && b && b.Pf && b.Pf(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f];
                            else if (f === $b.Jg.toString() && a[f]) {
                            }
                    d && b && b.Of && (e.vtp_gtmCachedValues = b.Of);
                    return void 0 !== d ? d(e) : wc(c, e, b);
                }, Oc = function (a, b, c) {
                    c = c || [];
                    var d = {}, e;
                    for (e in a)
                        a.hasOwnProperty(e) && (d[e] = Nc(a[e], b, c));
                    return d;
                }, Nc = function (a, b, c) {
                    if (xa(a)) {
                        var d;
                        switch (a[0]) {
                        case 'function_id':
                            return a[1];
                        case 'list':
                            d = [];
                            for (var e = 1; e < a.length; e++)
                                d.push(Nc(a[e], b, c));
                            return d;
                        case 'macro':
                            var f = a[1];
                            if (c[f])
                                return;
                            var h = Dc[f];
                            if (!h || b.ve(h))
                                return;
                            c[f] = !0;
                            try {
                                var k = Oc(h, b, c);
                                k.vtp_gtmEventId = b.id;
                                d = Mc(k, b);
                                Lc && (d = Lc.Rh(d, k));
                            } catch (y) {
                                b.fg && b.fg(y, Number(f)), d = !1;
                            }
                            c[f] = !1;
                            return d;
                        case 'map':
                            d = {};
                            for (var l = 1; l < a.length; l += 2)
                                d[Nc(a[l], b, c)] = Nc(a[l + 1], b, c);
                            return d;
                        case 'template':
                            d = [];
                            for (var n = !1, p = 1; p < a.length; p++) {
                                var q = Nc(a[p], b, c);
                                Kc && (n = n || q === Kc.Rc);
                                d.push(q);
                            }
                            return Kc && n ? Kc.Uh(d) : d.join('');
                        case 'escape':
                            d = Nc(a[1], b, c);
                            if (Kc && xa(a[1]) && 'macro' === a[1][0] && Kc.li(a))
                                return Kc.Ci(d);
                            d = String(d);
                            for (var r = 2; r < a.length; r++)
                                ac[a[r]] && (d = ac[a[r]](d));
                            return d;
                        case 'tag':
                            var u = a[1];
                            if (!Gc[u])
                                throw Error('Unable to resolve tag reference ' + u + '.');
                            return d = {
                                Yf: a[2],
                                index: u
                            };
                        case 'zb':
                            var t = {
                                arg0: a[2],
                                arg1: a[3],
                                ignore_case: a[5]
                            };
                            t['function'] = a[1];
                            var v = Pc(t, b, c), w = !!a[4];
                            return w || 2 !== v ? w !== (1 === v) : null;
                        default:
                            throw Error('Attempting to expand unknown Value type: ' + a[0] + '.');
                        }
                    }
                    return a;
                }, Pc = function (a, b, c) {
                    try {
                        return Jc(Oc(a, b, c));
                    } catch (d) {
                        JSON.stringify(a);
                    }
                    return 2;
                };
            var Sc = function (a) {
                    function b(r) {
                        for (var u = 0; u < r.length; u++)
                            d[r[u]] = !0;
                    }
                    for (var c = [], d = [], e = Qc(a), f = 0; f < Ec.length; f++) {
                        var h = Ec[f], k = Rc(h, e);
                        if (k) {
                            for (var l = h.add || [], n = 0; n < l.length; n++)
                                c[l[n]] = !0;
                            b(h.block || []);
                        } else
                            null === k && b(h.block || []);
                    }
                    for (var p = [], q = 0; q < Gc.length; q++)
                        c[q] && !d[q] && (p[q] = !0);
                    return p;
                }, Rc = function (a, b) {
                    for (var c = a['if'] || [], d = 0; d < c.length; d++) {
                        var e = b(c[d]);
                        if (0 === e)
                            return !1;
                        if (2 === e)
                            return null;
                    }
                    for (var f = a.unless || [], h = 0; h < f.length; h++) {
                        var k = b(f[h]);
                        if (2 === k)
                            return null;
                        if (1 === k)
                            return !1;
                    }
                    return !0;
                }, Qc = function (a) {
                    var b = [];
                    return function (c) {
                        void 0 === b[c] && (b[c] = Pc(Fc[c], a));
                        return b[c];
                    };
                };
            var Tc = {
                Rh: function (a, b) {
                    b[$b.Re] && 'string' === typeof a && (a = 1 == b[$b.Re] ? a.toLowerCase() : a.toUpperCase());
                    b.hasOwnProperty($b.Te) && null === a && (a = b[$b.Te]);
                    b.hasOwnProperty($b.Ve) && void 0 === a && (a = b[$b.Ve]);
                    b.hasOwnProperty($b.Ue) && !0 === a && (a = b[$b.Ue]);
                    b.hasOwnProperty($b.Se) && !1 === a && (a = b[$b.Se]);
                    return a;
                }
            };
            var K = {
                Yb: '_ee',
                Xc: '_syn_or_mod',
                aj: '_uei',
                Qd: '_eu',
                Yi: '_pci',
                xb: 'event_callback',
                Gc: 'event_timeout',
                Ca: 'gtag.config',
                Ka: 'gtag.get',
                va: 'purchase',
                vb: 'refund',
                $a: 'begin_checkout',
                sb: 'add_to_cart',
                tb: 'remove_from_cart',
                Sg: 'view_cart',
                Xe: 'add_to_wishlist',
                Ja: 'view_item',
                Ob: 'view_promotion',
                Cc: 'select_promotion',
                ud: 'select_item',
                ub: 'view_item_list',
                We: 'add_payment_info',
                Rg: 'add_shipping_info',
                Ma: 'value_key',
                Ua: 'value_callback',
                Da: 'allow_ad_personalization_signals',
                Ub: 'restricted_data_processing',
                Pb: 'allow_google_signals',
                Ga: 'cookie_expires',
                Qb: 'cookie_update',
                Wb: 'session_duration',
                Lc: 'session_engaged_time',
                Oa: 'user_properties',
                na: 'transport_url',
                R: 'ads_data_redaction',
                wa: 'user_data',
                Rb: 'first_party_collection',
                D: 'ad_storage',
                H: 'analytics_storage',
                Pe: 'region',
                Qe: 'wait_for_update',
                Fa: 'conversion_linker',
                Ea: 'conversion_cookie_prefix',
                fa: 'value',
                da: 'currency',
                sf: 'trip_type',
                X: 'items',
                jf: 'passengers',
                wd: 'allow_custom_scripts',
                Bb: 'session_id',
                qf: 'quantity',
                ib: 'transaction_id',
                fb: 'language',
                Fc: 'country',
                Dc: 'allow_enhanced_conversions',
                Bd: 'aw_merchant_id',
                zd: 'aw_feed_country',
                Ad: 'aw_feed_language',
                yd: 'discount',
                af: 'developer_id',
                Nc: 'delivery_postal_code',
                Hd: 'estimated_delivery_date',
                Fd: 'shipping',
                Od: 'new_customer',
                Cd: 'customer_lifetime_value',
                Gd: 'enhanced_conversions',
                wb: 'page_view',
                ma: 'linker',
                P: 'domains',
                zb: 'decorate_forms',
                ff: 'enhanced_conversions_automatic_settings',
                ah: 'auto_detection_enabled'
            };
            K.vf = [
                K.va,
                K.vb,
                K.$a,
                K.sb,
                K.tb,
                K.Sg,
                K.Xe,
                K.Ja,
                K.Ob,
                K.Cc,
                K.ub,
                K.ud,
                K.We,
                K.Rg
            ];
            K.uf = [
                K.Da,
                K.Pb,
                K.Qb
            ];
            K.wf = [
                K.Ga,
                K.Gc,
                K.Wb,
                K.Lc
            ];
            var wd = function (a) {
                sa('GTM', a);
            };
            var xd = function (a, b) {
                this.o = a;
                this.defaultValue = void 0 === b ? !1 : b;
            };
            var yd = new xd(1936, !0), zd = new xd(1933);
            var Bd = function () {
                var a = Ad;
                if (a.te && a.hasOwnProperty('te'))
                    return a.te;
                var b = new a();
                return a.te = b;
            };
            var Ad = function () {
                    var a = {};
                    this.o = function (b, c) {
                        return null != a[b] ? a[b] : c;
                    };
                    this.s = function () {
                        a[zd.o] = !0;
                    };
                }, Id = function (a) {
                    return Bd().o(a.o, a.defaultValue);
                };
            var Jd = [];
            function Kd() {
                var a = zb('google_tag_data', {});
                a.ics || (a.ics = {
                    entries: {},
                    set: Ld,
                    update: Md,
                    addListener: Nd,
                    notifyListeners: Od,
                    active: !1,
                    usedDefault: !1
                });
                return a.ics;
            }
            function Ld(a, b, c, d, e, f) {
                var h = Kd();
                h.active = !0;
                h.usedDefault = !0;
                if (void 0 != b) {
                    var k = h.entries, l = k[a] || {}, n = l.region, p = c && g(c) ? c.toUpperCase() : void 0;
                    d = d.toUpperCase();
                    e = e.toUpperCase();
                    if ('' === d || p === e || (p === d ? n !== e : !p && !n)) {
                        var q = !!(f && 0 < f && void 0 === l.update), r = {
                                region: p,
                                initial: 'granted' === b,
                                update: l.update,
                                quiet: q
                            };
                        if ('' !== d || !1 !== l.initial)
                            k[a] = r;
                        q && m.setTimeout(function () {
                            k[a] === r && r.quiet && (r.quiet = !1, Pd(a), Od(), sa('TAGGING', 2));
                        }, f);
                    }
                }
            }
            function Md(a, b) {
                var c = Kd();
                c.active = !0;
                if (void 0 != b) {
                    var d = Qd(a), e = c.entries, f = e[a] = e[a] || {};
                    f.update = 'granted' === b;
                    var h = Qd(a);
                    f.quiet ? (f.quiet = !1, Pd(a)) : h !== d && Pd(a);
                }
            }
            function Nd(a, b) {
                Jd.push({
                    he: a,
                    bi: b
                });
            }
            function Pd(a) {
                for (var b = 0; b < Jd.length; ++b) {
                    var c = Jd[b];
                    xa(c.he) && -1 !== c.he.indexOf(a) && (c.jg = !0);
                }
            }
            function Od(a) {
                for (var b = 0; b < Jd.length; ++b) {
                    var c = Jd[b];
                    if (c.jg) {
                        c.jg = !1;
                        try {
                            c.bi({ Qh: a });
                        } catch (d) {
                        }
                    }
                }
            }
            var Qd = function (a) {
                    var b = Kd().entries[a] || {};
                    return void 0 !== b.update ? b.update : b.initial;
                }, Rd = function (a) {
                    return (Kd().entries[a] || {}).initial;
                }, Sd = function (a) {
                    return !(Kd().entries[a] || {}).quiet;
                }, Td = function () {
                    return Id(zd) ? Kd().active : !1;
                }, Ud = function () {
                    return Kd().usedDefault;
                }, Vd = function (a, b) {
                    Kd().addListener(a, b);
                }, Wd = function (a) {
                    Kd().notifyListeners(a);
                }, Xd = function (a, b) {
                    function c() {
                        for (var e = 0; e < b.length; e++)
                            if (!Sd(b[e]))
                                return !0;
                        return !1;
                    }
                    if (c()) {
                        var d = !1;
                        Vd(b, function (e) {
                            d || c() || (d = !0, a(e));
                        });
                    } else
                        a({});
                }, Yd = function (a, b) {
                    function c() {
                        for (var f = [], h = 0; h < d.length; h++) {
                            var k = d[h];
                            !1 === Qd(k) || e[k] || (f.push(k), e[k] = !0);
                        }
                        return f;
                    }
                    var d = g(b) ? [b] : b, e = {};
                    c().length !== d.length && Vd(d, function (f) {
                        var h = c();
                        0 < h.length && (f.he = h, a(f));
                    });
                };
            function Zd(a) {
                for (var b = [], c = 0; c < $d.length; c++) {
                    var d = a($d[c]);
                    b[c] = !0 === d ? '1' : !1 === d ? '0' : '-';
                }
                return b.join('');
            }
            var $d = [
                    K.D,
                    K.H
                ], ae = function (a) {
                    var b = a[K.Pe];
                    b && wd(40);
                    var c = a[K.Qe];
                    c && wd(41);
                    for (var d = xa(b) ? b : [b], e = { Kb: 0 }; e.Kb < d.length; e = { Kb: e.Kb }, ++e.Kb)
                        Ja(a, function (f) {
                            return function (h, k) {
                                if (h !== K.Pe && h !== K.Qe) {
                                    var l = d[f.Kb];
                                    Kd().set(h, k, l, 'CA', 'CA-BC', c);
                                }
                            };
                        }(e));
                }, be = function (a, b) {
                    Ja(a, function (c, d) {
                        Kd().update(c, d);
                    });
                    Wd(b);
                }, L = function (a) {
                    var b = Qd(a);
                    return void 0 != b ? b : !0;
                }, ce = function () {
                    return 'G1' + Zd(Qd);
                }, de = function (a, b) {
                    Yd(a, b);
                }, ee = function (a, b) {
                    Xd(a, b);
                };
            var ge = function (a) {
                    return fe ? A.querySelectorAll(a) : null;
                }, he = function (a, b) {
                    if (!fe)
                        return null;
                    if (Element.prototype.closest)
                        try {
                            return a.closest(b);
                        } catch (e) {
                            return null;
                        }
                    var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector, d = a;
                    if (!A.documentElement.contains(d))
                        return null;
                    do {
                        try {
                            if (c.call(d, b))
                                return d;
                        } catch (e) {
                            break;
                        }
                        d = d.parentElement || d.parentNode;
                    } while (null !== d && 1 === d.nodeType);
                    return null;
                }, ie = !1;
            if (A.querySelectorAll)
                try {
                    var je = A.querySelectorAll(':root');
                    je && 1 == je.length && je[0] == A.documentElement && (ie = !0);
                } catch (a) {
                }
            var fe = ie;
            var ke, le = !1;
            var me = function (a) {
                if (A.hidden)
                    return !0;
                var b = a.getBoundingClientRect();
                if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
                    return !0;
                var c = m.getComputedStyle(a, null);
                if ('hidden' === c.visibility)
                    return !0;
                for (var d = a, e = c; d;) {
                    if ('none' === e.display)
                        return !0;
                    var f = e.opacity, h = e.filter;
                    if (h) {
                        var k = h.indexOf('opacity(');
                        0 <= k && (h = h.substring(k + 8, h.indexOf(')', k)), '%' == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h, f));
                    }
                    if (void 0 !== f && 0 >= f)
                        return !0;
                    (d = d.parentElement) && (e = m.getComputedStyle(d, null));
                }
                return !1;
            };
            var ve = /:[0-9]+$/, we = function (a, b, c) {
                    for (var d = a.split('&'), e = 0; e < d.length; e++) {
                        var f = d[e].split('=');
                        if (decodeURIComponent(f[0]).replace(/\+/g, ' ') === b) {
                            var h = f.slice(1).join('=');
                            return c ? h : decodeURIComponent(h).replace(/\+/g, ' ');
                        }
                    }
                }, ze = function (a, b, c, d, e) {
                    b && (b = String(b).toLowerCase());
                    if ('protocol' === b || 'port' === b)
                        a.protocol = xe(a.protocol) || xe(m.location.protocol);
                    'port' === b ? a.port = String(Number(a.hostname ? a.port : m.location.port) || ('http' == a.protocol ? 80 : 'https' == a.protocol ? 443 : '')) : 'host' === b && (a.hostname = (a.hostname || m.location.hostname).replace(ve, '').toLowerCase());
                    return ye(a, b, c, d, e);
                }, ye = function (a, b, c, d, e) {
                    var f, h = xe(a.protocol);
                    b && (b = String(b).toLowerCase());
                    switch (b) {
                    case 'url_no_fragment':
                        f = Ae(a);
                        break;
                    case 'protocol':
                        f = h;
                        break;
                    case 'host':
                        f = a.hostname.replace(ve, '').toLowerCase();
                        if (c) {
                            var k = /^www\d*\./.exec(f);
                            k && k[0] && (f = f.substr(k[0].length));
                        }
                        break;
                    case 'port':
                        f = String(Number(a.port) || ('http' == h ? 80 : 'https' == h ? 443 : ''));
                        break;
                    case 'path':
                        a.pathname || a.hostname || sa('TAGGING', 1);
                        f = '/' == a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
                        var l = f.split('/');
                        0 <= ya(d || [], l[l.length - 1]) && (l[l.length - 1] = '');
                        f = l.join('/');
                        break;
                    case 'query':
                        f = a.search.replace('?', '');
                        e && (f = we(f, e, void 0));
                        break;
                    case 'extension':
                        var n = a.pathname.split('.');
                        f = 1 < n.length ? n[n.length - 1] : '';
                        f = f.split('/')[0];
                        break;
                    case 'fragment':
                        f = a.hash.replace('#', '');
                        break;
                    default:
                        f = a && a.href;
                    }
                    return f;
                }, xe = function (a) {
                    return a ? a.replace(':', '').toLowerCase() : '';
                }, Ae = function (a) {
                    var b = '';
                    if (a && a.href) {
                        var c = a.href.indexOf('#');
                        b = 0 > c ? a.href : a.href.substr(0, c);
                    }
                    return b;
                }, Be = function (a) {
                    var b = A.createElement('a');
                    a && (b.href = a);
                    var c = b.pathname;
                    '/' !== c[0] && (a || sa('TAGGING', 1), c = '/' + c);
                    var d = b.hostname.replace(ve, '');
                    return {
                        href: b.href,
                        protocol: b.protocol,
                        host: b.host,
                        hostname: d,
                        pathname: c,
                        search: b.search,
                        hash: b.hash,
                        port: b.port
                    };
                }, Ce = function (a) {
                    function b(n) {
                        var p = n.split('=')[0];
                        return 0 > d.indexOf(p) ? n : p + '=0';
                    }
                    function c(n) {
                        return n.split('&').map(b).filter(function (p) {
                            return void 0 != p;
                        }).join('&');
                    }
                    var d = 'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(' '), e = Be(a), f = a.split(/[?#]/)[0], h = e.search, k = e.hash;
                    '?' === h[0] && (h = h.substring(1));
                    '#' === k[0] && (k = k.substring(1));
                    h = c(h);
                    k = c(k);
                    '' !== h && (h = '?' + h);
                    '' !== k && (k = '#' + k);
                    var l = '' + f + h + k;
                    '/' === l[l.length - 1] && (l = l.substring(0, l.length - 1));
                    return l;
                };
            var Le = {}, Me = !0, Ne = !1;
            Le.Gg = 'true';
            var Oe = function (a) {
                if ('false' === Le.Gg || !Me)
                    return !1;
                if (Ne)
                    return !0;
                var b, c = 'AW-' + a;
                if (!le) {
                    le = !0;
                    ke = ke || {};
                }
                b = ke[c];
                return !!b && !!b.preAutoPii;
            };
            var Pe = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i), Qe = new RegExp(/@(gmail|googlemail)\./i), Re = new RegExp(/support|noreply/i), Se = 'SCRIPT STYLE IMG SVG PATH BR'.split(' '), Te = ['BR'], Ue = {};
            function Ve(a) {
                var b;
                if (a === A.body)
                    b = 'body';
                else {
                    var c;
                    if (a.id)
                        c = '#' + a.id;
                    else {
                        var d;
                        if (a.parentElement) {
                            var e;
                            a: {
                                var f = a.parentElement;
                                if (f) {
                                    for (var h = 0; h < f.childElementCount; h++)
                                        if (f.children[h] === a) {
                                            e = h + 1;
                                            break a;
                                        }
                                    e = -1;
                                } else
                                    e = 1;
                            }
                            d = Ve(a.parentElement) + '>:nth-child(' + e + ')';
                        } else
                            d = '';
                        c = d;
                    }
                    b = c;
                }
                return b;
            }
            function We(a, b) {
                if (1 >= a.length)
                    return a;
                var c = a.filter(b);
                return 0 == c.length ? a : c;
            }
            function Xe(a) {
                if (0 == a.length)
                    return null;
                var b;
                b = We(a, function (c) {
                    return !Re.test(c.sa);
                });
                b = We(b, function (c) {
                    return 'INPUT' === c.element.tagName.toUpperCase();
                });
                b = We(b, function (c) {
                    return !me(c.element);
                });
                return b[0];
            }
            var Ye = function (a) {
                    a = a || {
                        qe: !0,
                        se: !0
                    };
                    a.Xa = a.Xa || {
                        email: !0,
                        phone: !0,
                        Mf: !0
                    };
                    var b, c = a, d = !!c.qe + '.' + !!c.se;
                    c && c.dd && c.dd.length && (d += '.' + c.dd.join('.'));
                    c && c.Xa && (d += '.' + c.Xa.email + '.' + c.Xa.phone + '.' + c.Xa.Mf);
                    b = d;
                    var e = Ue[b];
                    if (e && 200 > Ra() - e.timestamp)
                        return e.result;
                    var f;
                    var h = [], k = A.body;
                    if (k) {
                        for (var l = k.querySelectorAll('*'), n = 0; n < l.length && 10000 > n; n++) {
                            var p = l[n];
                            if (!(0 <= Se.indexOf(p.tagName.toUpperCase()))) {
                                for (var q = !1, r = 0; r < p.childElementCount && 10000 > r; r++)
                                    if (!(0 <= Te.indexOf(p.children[r].tagName.toUpperCase()))) {
                                        q = !0;
                                        break;
                                    }
                                q || h.push(p);
                            }
                        }
                        f = {
                            elements: h,
                            status: 10000 < l.length ? '2' : '1'
                        };
                    } else
                        f = {
                            elements: h,
                            status: '4'
                        };
                    var u = f, t = u.status, v;
                    if (a.Xa && a.Xa.email) {
                        for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
                            var z = w[x], B = z.textContent;
                            z.value && (B = z.value);
                            if (B) {
                                var D = B.match(Pe);
                                if (D) {
                                    var C = D[0], E;
                                    if (m.location) {
                                        var G = ye(m.location, 'host', !0);
                                        E = 0 <= C.toLowerCase().indexOf(G);
                                    } else
                                        E = !1;
                                    E || y.push({
                                        element: z,
                                        sa: C
                                    });
                                }
                            }
                        }
                        var P;
                        var M = a && a.dd;
                        if (M && 0 !== M.length) {
                            for (var N = [], S = 0; S < y.length; S++) {
                                for (var T = !0, I = 0; I < M.length; I++) {
                                    var Q = M[I];
                                    if (Q && he(y[S].element, Q)) {
                                        T = !1;
                                        break;
                                    }
                                }
                                T && N.push(y[S]);
                            }
                            P = N;
                        } else
                            P = y;
                        v = Xe(P);
                        10 < y.length && (t = '3');
                    }
                    var V = [];
                    if (v) {
                        var J = v.element, Y = {
                                sa: v.sa,
                                tagName: J.tagName,
                                type: 1
                            };
                        a.qe && (Y.querySelector = Ve(J));
                        a.se && (Y.isVisible = !me(J));
                        V.push(Y);
                    }
                    var ia = {
                        elements: V,
                        status: t
                    };
                    Ue[b] = {
                        timestamp: Ra(),
                        result: ia
                    };
                    return ia;
                }, Ze = function (a) {
                    return a.tagName + ':' + a.isVisible + ':' + a.sa.length + ':' + Qe.test(a.sa);
                };
            var $e = function (a) {
                    return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a);
                }, af = function (a) {
                    return void 0 === a || null === a ? '' : g(a) ? Pa(String(a)) : 'e0';
                }, cf = function (a) {
                    return a.replace(bf, '');
                }, ef = function (a) {
                    return df(a.replace(/\s/g, ''));
                }, df = function (a) {
                    return Pa(a.replace(ff, '').toLowerCase());
                }, hf = function (a) {
                    a = a.replace(/[\s-()/.]/g, '');
                    '+' !== a.charAt(0) && (a = '+' + a);
                    return gf.test(a) ? a : 'e0';
                }, kf = function (a) {
                    var b = a.toLowerCase().split('@');
                    if (2 == b.length) {
                        var c = b[0];
                        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ''));
                        c = c + '@' + b[1];
                        if (jf.test(c))
                            return c;
                    }
                    return 'e0';
                }, nf = function (a, b, c) {
                    window.Promise || c([], []);
                    Promise.all(a.map(function (d) {
                        return d.value && lf(d.name) ? mf(d.value).then(function (e) {
                            d.value = e;
                        }) : Promise.resolve();
                    })).then(function () {
                        c(a, b);
                    }).catch(function () {
                        c([], []);
                    });
                }, mf = function (a) {
                    if ('' === a || 'e0' === a)
                        return Promise.resolve(a);
                    if (m.crypto && m.crypto.subtle)
                        try {
                            var b = of(a);
                            return m.crypto.subtle.digest('SHA-256', b).then(function (c) {
                                var d = Array.from(new Uint8Array(c)).map(function (e) {
                                    return String.fromCharCode(e);
                                }).join('');
                                return m.btoa(d).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
                            }).catch(function () {
                                return 'e2';
                            });
                        } catch (c) {
                            return Promise.resolve('e2');
                        }
                    else
                        return Promise.resolve('e1');
                }, of = function (a) {
                    var b;
                    if (m.TextEncoder)
                        b = new m.TextEncoder('utf-8').encode(a);
                    else {
                        for (var c = [], d = 0; d < a.length; d++) {
                            var e = a.charCodeAt(d);
                            128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63));
                        }
                        b = new Uint8Array(c);
                    }
                    return b;
                }, ff = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g, jf = /^\S+@\S+\.\S+$/, gf = /^\+\d{11,15}$/, bf = /[.~]/g, pf = {}, qf = (pf.email = 'em', pf.phone_number = 'pn', pf.first_name = 'fn', pf.last_name = 'ln', pf.street = 'sa', pf.city = 'ct', pf.region = 'rg', pf.country = 'co', pf.postal_code = 'pc', pf.error_code = 'ec', pf), rf = function (a, b, c) {
                    function d(t, v, w) {
                        var y = t[v];
                        xa(y) || (y = [y]);
                        for (var x = 0; x < y.length; ++x) {
                            var z = af(y[x]);
                            '' !== z && h.push({
                                name: v,
                                value: w(z),
                                index: void 0
                            });
                        }
                    }
                    function e(t, v, w, y) {
                        var x = af(t[v]);
                        '' !== x && h.push({
                            name: v,
                            value: w(x),
                            index: y
                        });
                    }
                    function f(t) {
                        return function (v) {
                            wd(64);
                            return t(v);
                        };
                    }
                    var h = [], k = [];
                    if ('https:' === m.location.protocol) {
                        var l = function (t, v) {
                            var w = t[v];
                            xa(w) || (w = [w]);
                            for (var y = 0; y < w.length; ++y) {
                                var x = af(w[y]);
                                if ('' !== x)
                                    return x;
                            }
                            return null;
                        };
                        d(a, 'email', kf);
                        var n = l(a, 'email');
                        if (n)
                            for (var p = 0; p < b.length; p++)
                                k.push(b[p].sa.toLowerCase() === n.toLowerCase());
                        d(a, 'phone_number', hf);
                        d(a, 'first_name', f(ef));
                        d(a, 'last_name', f(ef));
                        var q = a.home_address || {};
                        d(q, 'street', f(df));
                        d(q, 'city', f(df));
                        d(q, 'postal_code', f(cf));
                        d(q, 'region', f(df));
                        d(q, 'country', f(cf));
                        var r = a.address || {};
                        xa(r) || (r = [r]);
                        for (var u = 0; u < r.length; u++)
                            e(r[u], 'first_name', ef, u), e(r[u], 'last_name', ef, u), e(r[u], 'street', df, u), e(r[u], 'city', df, u), e(r[u], 'postal_code', cf, u), e(r[u], 'region', df, u), e(r[u], 'country', cf, u);
                        nf(h, k, c);
                    } else
                        h.push({
                            name: 'error_code',
                            value: 'e3',
                            index: void 0
                        }), c(h, k);
                }, sf = function (a, b) {
                    rf(a, [], function (c, d) {
                        for (var e = ['tv.1'], f = 0; f < c.length; ++f) {
                            var h = c[f].name, k = c[f].value, l = c[f].index, n = qf[h];
                            n && k && (!lf(h) || $e(k)) && (void 0 !== l && (n += l), e.push(n + '.' + k));
                        }
                        b(encodeURIComponent(e.join('~')), d);
                    });
                }, tf = function (a, b) {
                    if (m.Promise)
                        try {
                            return new Promise(function (c) {
                                rf(a, b, function (d, e) {
                                    for (var f = ['tv.1'], h = 0; h < d.length; ++h) {
                                        var k = d[h].name, l = d[h].value, n = d[h].index, p = qf[k];
                                        p && l && (!lf(k) || $e(l)) && (void 0 !== n && (p += n), f.push(p + '.' + l));
                                    }
                                    c({
                                        qc: encodeURIComponent(f.join('~')),
                                        cc: e
                                    });
                                });
                            });
                        } catch (c) {
                        }
                }, lf = function (a) {
                    return -1 !== [
                        'email',
                        'phone_number',
                        'first_name',
                        'last_name',
                        'street'
                    ].indexOf(a);
                };
            var uf = {}, vf = null, wf = Math.random();
            uf.M = 'GTM-TZNXXBV';
            uf.Wc = '7s0';
            uf.Vi = '';
            uf.Lg = 'ChAI8KOJiAYQ77b7o/OBw8UiEiQAbrZ2G0ONTWQhCqJ6l4u0kd/1iM3Id9bpOfKLXxHKkSBkHo8aAouY';
            var xf = {
                    __cl: !0,
                    __ecl: !0,
                    __ehl: !0,
                    __evl: !0,
                    __fal: !0,
                    __fil: !0,
                    __fsl: !0,
                    __hl: !0,
                    __jel: !0,
                    __lcl: !0,
                    __sdl: !0,
                    __tl: !0,
                    __ytl: !0
                }, yf = {
                    __paused: !0,
                    __tg: !0
                }, zf;
            for (zf in xf)
                xf.hasOwnProperty(zf) && (yf[zf] = !0);
            var Af = 'www.googletagmanager.com/gtm.js';
            var Bf = Af, Cf = Na(''), Df = null, Ef = null, Ff = 'https://www.googletagmanager.com/a?id=' + uf.M + '&cv=52', Gf = {}, Hf = {}, If = function () {
                    var a = vf.sequence || 1;
                    vf.sequence = a + 1;
                    return a;
                };
            uf.Kg = '';
            var Jf = {}, Kf = new Da(), Lf = {}, Mf = {}, Pf = {
                    name: 'dataLayer',
                    set: function (a, b) {
                        H(Xa(a, b), Lf);
                        Nf();
                    },
                    get: function (a) {
                        return Of(a, 2);
                    },
                    reset: function () {
                        Kf = new Da();
                        Lf = {};
                        Nf();
                    }
                }, Of = function (a, b) {
                    return 2 != b ? Kf.get(a) : Qf(a);
                }, Qf = function (a) {
                    var b, c = a.split('.');
                    b = b || [];
                    for (var d = Lf, e = 0; e < c.length; e++) {
                        if (null === d)
                            return !1;
                        if (void 0 === d)
                            break;
                        d = d[c[e]];
                        if (-1 !== ya(b, d))
                            return;
                    }
                    return d;
                }, Rf = function (a, b) {
                    Mf.hasOwnProperty(a) || (Kf.set(a, b), H(Xa(a, b), Lf), Nf());
                }, Nf = function (a) {
                    Ja(Mf, function (b, c) {
                        Kf.set(b, c);
                        H(Xa(b, void 0), Lf);
                        H(Xa(b, c), Lf);
                        a && delete Mf[b];
                    });
                }, Tf = function (a, b, c) {
                    Jf[a] = Jf[a] || {};
                    Jf[a][b] = Sf(b, c);
                }, Sf = function (a, b) {
                    var c, d = 1 !== (void 0 === b ? 2 : b) ? Qf(a) : Kf.get(a);
                    'array' === Wb(d) || 'object' === Wb(d) ? c = H(d) : c = d;
                    return c;
                }, Uf = function (a, b) {
                    if (Jf[a])
                        return Jf[a][b];
                }, Vf = function (a, b) {
                    Jf[a] && delete Jf[a][b];
                };
            var Wf = function (a, b, c) {
                    if (c) {
                        var d = c.selector_type, e = String(c.value), f;
                        if ('js_variable' === d) {
                            e = e.replace(/\["?'?/g, '.').replace(/"?'?\]/g, '');
                            for (var h = e.split(','), k = 0; k < h.length; k++) {
                                var l = h[k].trim();
                                if (l) {
                                    if (0 === l.indexOf('dataLayer.'))
                                        f = Of(l.substring(10));
                                    else {
                                        var n = l.split('.');
                                        f = m[n.shift()];
                                        for (var p = 0; p < n.length; p++)
                                            f = f && f[n[p]];
                                    }
                                    if (void 0 !== f)
                                        break;
                                }
                            }
                        } else if ('css_selector' === d && fe) {
                            var q = ge(e);
                            q && 0 < q.length && (f = Lb(q[0]) || Pa(q[0].value));
                        }
                        f && (a[b] = f);
                    }
                }, Xf = function (a) {
                    if (a) {
                        var b = {};
                        Wf(b, 'email', a.email);
                        Wf(b, 'phone_number', a.phone);
                        b.address = [];
                        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                            var e = {};
                            Wf(e, 'first_name', c[d].first_name);
                            Wf(e, 'last_name', c[d].last_name);
                            Wf(e, 'street', c[d].street);
                            Wf(e, 'city', c[d].city);
                            Wf(e, 'region', c[d].region);
                            Wf(e, 'country', c[d].country);
                            Wf(e, 'postal_code', c[d].postal_code);
                            b.address.push(e);
                        }
                        return b;
                    }
                }, Yf = function (a) {
                    if (a)
                        switch (a.mode) {
                        case 'selectors':
                            return Xf(a.selectors);
                        case 'auto_detect':
                            var b;
                            var c = a.auto_detect;
                            if (c) {
                                var d = Ye({
                                        qe: !1,
                                        se: !1,
                                        dd: c.exclude_element_selectors,
                                        Xa: {
                                            email: !!c.email,
                                            phone: !!c.phone,
                                            Mf: !!c.address
                                        }
                                    }).elements, e = {};
                                if (0 < d.length)
                                    for (var f = 0; f < d.length; f++) {
                                        var h = d[f];
                                        if (1 === h.type) {
                                            e.email = h.sa;
                                            break;
                                        }
                                    }
                                b = e;
                            } else
                                b = void 0;
                            return b;
                        }
                }, Zf = function (a) {
                    switch (a.enhanced_conversions_mode) {
                    case 'manual':
                        var b = a.enhanced_conversions_manual_var;
                        return void 0 !== b ? b : m.enhanced_conversion_data;
                    case 'automatic':
                        return Xf(a[K.ff]);
                    }
                };
            var $f = {}, ag = function (a, b) {
                    if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
                        return m._gtmexpgrp[a];
                    void 0 === $f[a] && ($f[a] = Math.floor(Math.random() * b));
                    return $f[a];
                };
            function bg(a, b, c) {
                for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
                    var h = e[f].split('='), k = h[0].replace(/^\s*|\s*$/g, '');
                    if (k && k == a) {
                        var l = h.slice(1).join('=').replace(/^\s*|\s*$/g, '');
                        l && c && (l = decodeURIComponent(l));
                        d.push(l);
                    }
                }
                return d;
            }
            ;
            function cg(a) {
                return 'null' !== a.origin;
            }
            ;
            var fg = function (a, b, c, d) {
                    return dg(d) ? bg(a, String(b || eg()), c) : [];
                }, ig = function (a, b, c, d, e) {
                    if (dg(e)) {
                        var f = gg(a, d, e);
                        if (1 === f.length)
                            return f[0].id;
                        if (0 !== f.length) {
                            f = hg(f, function (h) {
                                return h.cd;
                            }, b);
                            if (1 === f.length)
                                return f[0].id;
                            f = hg(f, function (h) {
                                return h.sc;
                            }, c);
                            return f[0] ? f[0].id : void 0;
                        }
                    }
                };
            function jg(a, b, c, d) {
                var e = eg(), f = window;
                cg(f) && (f.document.cookie = a);
                var h = eg();
                return e != h || void 0 != c && 0 <= fg(b, h, !1, d).indexOf(c);
            }
            var ng = function (a, b, c) {
                    function d(u, t, v) {
                        if (null == v)
                            return delete h[t], u;
                        h[t] = v;
                        return u + '; ' + t + '=' + v;
                    }
                    function e(u, t) {
                        if (null == t)
                            return delete h[t], u;
                        h[t] = !0;
                        return u + '; ' + t;
                    }
                    if (!dg(c.Ra))
                        return 2;
                    var f;
                    void 0 == b ? f = a + '=deleted; expires=' + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = kg(b), f = a + '=' + b);
                    var h = {};
                    f = d(f, 'path', c.path);
                    var k;
                    c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = '' + c.expires);
                    f = d(f, 'expires', k);
                    f = d(f, 'max-age', c.fj);
                    f = d(f, 'samesite', c.gj);
                    c.ij && (f = e(f, 'secure'));
                    var l = c.domain;
                    if ('auto' === l) {
                        for (var n = lg(), p = 0; p < n.length; ++p) {
                            var q = 'none' !== n[p] ? n[p] : void 0, r = d(f, 'domain', q);
                            r = e(r, c.flags);
                            if (!mg(q, c.path) && jg(r, a, b, c.Ra))
                                return 0;
                        }
                        return 1;
                    }
                    l && 'none' !== l && (f = d(f, 'domain', l));
                    f = e(f, c.flags);
                    return mg(l, c.path) ? 1 : jg(f, a, b, c.Ra) ? 0 : 1;
                }, og = function (a, b, c) {
                    null == c.path && (c.path = '/');
                    c.domain || (c.domain = 'auto');
                    return ng(a, b, c);
                };
            function hg(a, b, c) {
                for (var d = [], e = [], f, h = 0; h < a.length; h++) {
                    var k = a[h], l = b(k);
                    l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k);
                }
                return 0 < d.length ? d : e;
            }
            function gg(a, b, c) {
                for (var d = [], e = fg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
                    var h = e[f].split('.'), k = h.shift();
                    if (!b || -1 !== b.indexOf(k)) {
                        var l = h.shift();
                        l && (l = l.split('-'), d.push({
                            id: h.join('.'),
                            cd: 1 * l[0] || 1,
                            sc: 1 * l[1] || 1
                        }));
                    }
                }
                return d;
            }
            var kg = function (a) {
                    a && 1200 < a.length && (a = a.substring(0, 1200));
                    return a;
                }, pg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, sg = /(^|\.)doubleclick\.net$/i, mg = function (a, b) {
                    return sg.test(window.document.location.hostname) || '/' === b && pg.test(a);
                }, eg = function () {
                    return cg(window) ? window.document.cookie : '';
                }, lg = function () {
                    var a = [], b = window.document.location.hostname.split('.');
                    if (4 === b.length) {
                        var c = b[b.length - 1];
                        if (parseInt(c, 10).toString() === c)
                            return ['none'];
                    }
                    for (var d = b.length - 2; 0 <= d; d--)
                        a.push(b.slice(d).join('.'));
                    var e = window.document.location.hostname;
                    sg.test(e) || pg.test(e) || a.push('none');
                    return a;
                }, dg = function (a) {
                    if (!Id(zd) || !a || !Td())
                        return !0;
                    if (!Sd(a))
                        return !1;
                    var b = Qd(a);
                    return null == b ? !0 : !!b;
                };
            var tg = function () {
                    return [
                        Math.round(2147483647 * Math.random()),
                        Math.round(Ra() / 1000)
                    ].join('.');
                }, wg = function (a, b, c, d, e) {
                    var f = ug(b);
                    return ig(a, f, vg(c), d, e);
                }, xg = function (a, b, c, d) {
                    var e = '' + ug(c), f = vg(d);
                    1 < f && (e += '-' + f);
                    return [
                        b,
                        e,
                        a
                    ].join('.');
                }, ug = function (a) {
                    if (!a)
                        return 1;
                    a = 0 === a.indexOf('.') ? a.substr(1) : a;
                    return a.split('.').length;
                }, vg = function (a) {
                    if (!a || '/' === a)
                        return 1;
                    '/' !== a[0] && (a = '/' + a);
                    '/' !== a[a.length - 1] && (a += '/');
                    return a.split('/').length - 1;
                };
            function yg(a, b, c) {
                var d, e = Number(null != a.mb ? a.mb : void 0);
                0 !== e && (d = new Date((b || Ra()) + 1000 * (e || 7776000)));
                return {
                    path: a.path,
                    domain: a.domain,
                    flags: a.flags,
                    encode: !!c,
                    expires: d
                };
            }
            ;
            var zg = ['1'], Ag = {}, Eg = function (a, b) {
                    b = void 0 === b ? !0 : b;
                    var c = Bg(a.prefix);
                    if (!Ag[c] && !Cg(c, a.path, a.domain) && b) {
                        var d = Bg(a.prefix), e = tg();
                        if (0 === Dg(d, e, a)) {
                            var f = zb('google_tag_data', {});
                            f._gcl_au ? sa('GTM', 57) : f._gcl_au = e;
                        }
                        Cg(c, a.path, a.domain);
                    }
                };
            function Dg(a, b, c) {
                var d = xg(b, '1', c.domain, c.path), e = yg(c);
                e.Ra = 'ad_storage';
                return og(a, d, e);
            }
            function Cg(a, b, c) {
                var d = wg(a, b, c, zg, 'ad_storage');
                d && (Ag[a] = d);
                return d;
            }
            function Bg(a) {
                return (a || '_gcl') + '_au';
            }
            ;
            var Fg = function (a) {
                for (var b = [], c = A.cookie.split(';'), d = new RegExp('^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$'), e = 0; e < c.length; e++) {
                    var f = c[e].match(d);
                    f && b.push({
                        Ke: f[1],
                        value: f[2],
                        timestamp: Number(f[2].split('.')[1]) || 0
                    });
                }
                b.sort(function (h, k) {
                    return k.timestamp - h.timestamp;
                });
                return b;
            };
            function Gg(a, b) {
                var c = Fg(a), d = {};
                if (!c || !c.length)
                    return d;
                for (var e = 0; e < c.length; e++) {
                    var f = c[e].value.split('.');
                    if (!('1' !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                        d[c[e].Ke] || (d[c[e].Ke] = []);
                        var h = {
                            version: f[0],
                            timestamp: 1000 * Number(f[1]),
                            Aa: f[2]
                        };
                        b && 3 < f.length && (h.labels = f.slice(3));
                        d[c[e].Ke].push(h);
                    }
                }
                return d;
            }
            ;
            function Hg() {
                for (var a = Ig, b = {}, c = 0; c < a.length; ++c)
                    b[a[c]] = c;
                return b;
            }
            function Jg() {
                var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                a += a.toLowerCase() + '0123456789-_';
                return a + '.';
            }
            var Ig, Kg;
            function Lg(a) {
                function b(l) {
                    for (; d < a.length;) {
                        var n = a.charAt(d++), p = Kg[n];
                        if (null != p)
                            return p;
                        if (!/^[\s\xa0]*$/.test(n))
                            throw Error('Unknown base64 encoding at char: ' + n);
                    }
                    return l;
                }
                Ig = Ig || Jg();
                Kg = Kg || Hg();
                for (var c = '', d = 0;;) {
                    var e = b(-1), f = b(0), h = b(64), k = b(64);
                    if (64 === k && -1 === e)
                        return c;
                    c += String.fromCharCode(e << 2 | f >> 4);
                    64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)));
                }
            }
            ;
            var Mg;
            var Qg = function () {
                    var a = Ng, b = Og, c = Pg(), d = function (h) {
                            a(h.target || h.srcElement || {});
                        }, e = function (h) {
                            b(h.target || h.srcElement || {});
                        };
                    if (!c.init) {
                        Ib(A, 'mousedown', d);
                        Ib(A, 'keyup', d);
                        Ib(A, 'submit', e);
                        var f = HTMLFormElement.prototype.submit;
                        HTMLFormElement.prototype.submit = function () {
                            b(this);
                            f.call(this);
                        };
                        c.init = !0;
                    }
                }, Rg = function (a, b, c, d, e) {
                    var f = {
                        callback: a,
                        domains: b,
                        fragment: 2 === c,
                        placement: c,
                        forms: d,
                        sameHost: e
                    };
                    Pg().decorators.push(f);
                }, Sg = function (a, b, c) {
                    for (var d = Pg().decorators, e = {}, f = 0; f < d.length; ++f) {
                        var h = d[f], k;
                        if (k = !c || h.forms)
                            a: {
                                var l = h.domains, n = a, p = !!h.sameHost;
                                if (l && (p || n !== A.location.hostname))
                                    for (var q = 0; q < l.length; q++)
                                        if (l[q] instanceof RegExp) {
                                            if (l[q].test(n)) {
                                                k = !0;
                                                break a;
                                            }
                                        } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                                            k = !0;
                                            break a;
                                        }
                                k = !1;
                            }
                        if (k) {
                            var r = h.placement;
                            void 0 == r && (r = h.fragment ? 2 : 1);
                            r === b && Ua(e, h.callback());
                        }
                    }
                    return e;
                }, Pg = function () {
                    var a = zb('google_tag_data', {}), b = a.gl;
                    b && b.decorators || (b = { decorators: [] }, a.gl = b);
                    return b;
                };
            var Tg = /(.*?)\*(.*?)\*(.*)/, Ug = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/, Vg = /^(?:www\.|m\.|amp\.)+/, Wg = /([^?#]+)(\?[^#]*)?(#.*)?/;
            function Xg(a) {
                return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)');
            }
            var Zg = function (a) {
                    var b = [], c;
                    for (c in a)
                        if (a.hasOwnProperty(c)) {
                            var d = a[c];
                            if (void 0 !== d && d === d && null !== d && '[object Object]' !== d.toString()) {
                                b.push(c);
                                var e = b, f = e.push, h, k = String(d);
                                Ig = Ig || Jg();
                                Kg = Kg || Hg();
                                for (var l = [], n = 0; n < k.length; n += 3) {
                                    var p = n + 1 < k.length, q = n + 2 < k.length, r = k.charCodeAt(n), u = p ? k.charCodeAt(n + 1) : 0, t = q ? k.charCodeAt(n + 2) : 0, v = r >> 2, w = (r & 3) << 4 | u >> 4, y = (u & 15) << 2 | t >> 6, x = t & 63;
                                    q || (x = 64, p || (y = 64));
                                    l.push(Ig[v], Ig[w], Ig[y], Ig[x]);
                                }
                                h = l.join('');
                                f.call(e, h);
                            }
                        }
                    var z = b.join('*');
                    return [
                        '1',
                        Yg(z),
                        z
                    ].join('*');
                }, Yg = function (a, b) {
                    var c = [
                            window.navigator.userAgent,
                            new Date().getTimezoneOffset(),
                            window.navigator.userLanguage || window.navigator.language,
                            Math.floor(new Date().getTime() / 60 / 1000) - (void 0 === b ? 0 : b),
                            a
                        ].join('*'), d;
                    if (!(d = Mg)) {
                        for (var e = Array(256), f = 0; 256 > f; f++) {
                            for (var h = f, k = 0; 8 > k; k++)
                                h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                            e[f] = h;
                        }
                        d = e;
                    }
                    Mg = d;
                    for (var l = 4294967295, n = 0; n < c.length; n++)
                        l = l >>> 8 ^ Mg[(l ^ c.charCodeAt(n)) & 255];
                    return ((l ^ -1) >>> 0).toString(36);
                }, ah = function () {
                    return function (a) {
                        var b = Be(m.location.href), c = b.search.replace('?', ''), d = we(c, '_gl', !0) || '';
                        a.query = $g(d) || {};
                        var e = ze(b, 'fragment').match(Xg('_gl'));
                        a.fragment = $g(e && e[3] || '') || {};
                    };
                }, bh = function (a) {
                    var b = ah(), c = Pg();
                    c.data || (c.data = {
                        query: {},
                        fragment: {}
                    }, b(c.data));
                    var d = {}, e = c.data;
                    e && (Ua(d, e.query), a && Ua(d, e.fragment));
                    return d;
                }, $g = function (a) {
                    var b;
                    b = void 0 === b ? 3 : b;
                    try {
                        if (a) {
                            var c;
                            a: {
                                for (var d = a, e = 0; 3 > e; ++e) {
                                    var f = Tg.exec(d);
                                    if (f) {
                                        c = f;
                                        break a;
                                    }
                                    d = decodeURIComponent(d);
                                }
                                c = void 0;
                            }
                            var h = c;
                            if (h && '1' === h[1]) {
                                var k = h[3], l;
                                a: {
                                    for (var n = h[2], p = 0; p < b; ++p)
                                        if (n === Yg(k, p)) {
                                            l = !0;
                                            break a;
                                        }
                                    l = !1;
                                }
                                if (l) {
                                    for (var q = {}, r = k ? k.split('*') : [], u = 0; u < r.length; u += 2)
                                        q[r[u]] = Lg(r[u + 1]);
                                    return q;
                                }
                            }
                        }
                    } catch (t) {
                    }
                };
            function ch(a, b, c, d) {
                function e(p) {
                    var q = p, r = Xg(a).exec(q), u = q;
                    if (r) {
                        var t = r[2], v = r[4];
                        u = r[1];
                        v && (u = u + t + v);
                    }
                    p = u;
                    var w = p.charAt(p.length - 1);
                    p && '&' !== w && (p += '&');
                    return p + n;
                }
                d = void 0 === d ? !1 : d;
                var f = Wg.exec(c);
                if (!f)
                    return '';
                var h = f[1], k = f[2] || '', l = f[3] || '', n = a + '=' + b;
                d ? l = '#' + e(l.substring(1)) : k = '?' + e(k.substring(1));
                return '' + h + k + l;
            }
            function dh(a, b) {
                var c = 'FORM' === (a.tagName || '').toUpperCase(), d = Sg(b, 1, c), e = Sg(b, 2, c), f = Sg(b, 3, c);
                if (Va(d)) {
                    var h = Zg(d);
                    c ? eh('_gl', h, a) : fh('_gl', h, a, !1);
                }
                if (!c && Va(e)) {
                    var k = Zg(e);
                    fh('_gl', k, a, !0);
                }
                for (var l in f)
                    if (f.hasOwnProperty(l))
                        a: {
                            var n = l, p = f[l], q = a;
                            if (q.tagName) {
                                if ('a' === q.tagName.toLowerCase()) {
                                    fh(n, p, q, void 0);
                                    break a;
                                }
                                if ('form' === q.tagName.toLowerCase()) {
                                    eh(n, p, q);
                                    break a;
                                }
                            }
                            'string' == typeof q && ch(n, p, q, void 0);
                        }
            }
            function fh(a, b, c, d) {
                if (c.href) {
                    var e = ch(a, b, c.href, void 0 === d ? !1 : d);
                    fb.test(e) && (c.href = e);
                }
            }
            function eh(a, b, c) {
                if (c && c.action) {
                    var d = (c.method || '').toLowerCase();
                    if ('get' === d) {
                        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                            var k = e[h];
                            if (k.name === a) {
                                k.setAttribute('value', b);
                                f = !0;
                                break;
                            }
                        }
                        if (!f) {
                            var l = A.createElement('input');
                            l.setAttribute('type', 'hidden');
                            l.setAttribute('name', a);
                            l.setAttribute('value', b);
                            c.appendChild(l);
                        }
                    } else if ('post' === d) {
                        var n = ch(a, b, c.action);
                        fb.test(n) && (c.action = n);
                    }
                }
            }
            var Ng = function (a) {
                    try {
                        var b;
                        a: {
                            for (var c = a, d = 100; c && 0 < d;) {
                                if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                                    b = c;
                                    break a;
                                }
                                c = c.parentNode;
                                d--;
                            }
                            b = null;
                        }
                        var e = b;
                        if (e) {
                            var f = e.protocol;
                            'http:' !== f && 'https:' !== f || dh(e, e.hostname);
                        }
                    } catch (h) {
                    }
                }, Og = function (a) {
                    try {
                        if (a.action) {
                            var b = ze(Be(a.action), 'host');
                            dh(a, b);
                        }
                    } catch (c) {
                    }
                }, gh = function (a, b, c, d) {
                    Qg();
                    Rg(a, b, 'fragment' === c ? 2 : 1, !!d, !1);
                }, hh = function (a, b) {
                    Qg();
                    Rg(a, [ye(m.location, 'host', !0)], b, !0, !0);
                }, ih = function () {
                    var a = A.location.hostname, b = Ug.exec(A.referrer);
                    if (!b)
                        return !1;
                    var c = b[2], d = b[1], e = '';
                    if (c) {
                        var f = c.split('/'), h = f[1];
                        e = 's' === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
                    } else if (d) {
                        if (0 === d.indexOf('xn--'))
                            return !1;
                        e = d.replace(/-/g, '.').replace(/\.\./g, '-');
                    }
                    var k = a.replace(Vg, ''), l = e.replace(Vg, ''), n;
                    if (!(n = k === l)) {
                        var p = '.' + l;
                        n = k.substring(k.length - p.length, k.length) === p;
                    }
                    return n;
                }, jh = function (a, b) {
                    return !1 === a ? !1 : a || b || ih();
                };
            var kh = {};
            var lh = /^\w+$/, mh = /^[\w-]+$/, nh = {
                    aw: '_aw',
                    dc: '_dc',
                    gf: '_gf',
                    ha: '_ha',
                    gp: '_gp',
                    gb: '_gb'
                }, oh = function () {
                    if (!Id(zd) || !Td())
                        return !0;
                    var a = Qd('ad_storage');
                    return null == a ? !0 : !!a;
                }, ph = function (a, b) {
                    Sd('ad_storage') ? oh() ? a() : Yd(a, 'ad_storage') : b ? sa('TAGGING', 3) : Xd(function () {
                        ph(a, !0);
                    }, ['ad_storage']);
                }, rh = function (a) {
                    return qh(a).map(function (b) {
                        return b.Aa;
                    });
                }, qh = function (a) {
                    var b = [];
                    if (!cg(m) || !A.cookie)
                        return b;
                    var c = fg(a, A.cookie, void 0, 'ad_storage');
                    if (!c || 0 == c.length)
                        return b;
                    for (var d = {}, e = 0; e < c.length; d = { zc: d.zc }, e++) {
                        var f = sh(c[e]);
                        if (null != f) {
                            var h = f, k = h.version;
                            d.zc = h.Aa;
                            var l = h.timestamp, n = h.labels, p = za(b, function (q) {
                                    return function (r) {
                                        return r.Aa === q.zc;
                                    };
                                }(d));
                            p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = th(p.labels, n || [])) : b.push({
                                version: k,
                                Aa: d.zc,
                                timestamp: l,
                                labels: n
                            });
                        }
                    }
                    b.sort(function (q, r) {
                        return r.timestamp - q.timestamp;
                    });
                    return uh(b);
                };
            function th(a, b) {
                for (var c = {}, d = [], e = 0; e < a.length; e++)
                    c[a[e]] = !0, d.push(a[e]);
                for (var f = 0; f < b.length; f++)
                    c[b[f]] || d.push(b[f]);
                return d;
            }
            function vh(a) {
                return a && 'string' == typeof a && a.match(lh) ? a : '_gcl';
            }
            var xh = function () {
                    var a = Be(m.location.href), b = ze(a, 'query', !1, void 0, 'gclid'), c = ze(a, 'query', !1, void 0, 'gclsrc'), d = ze(a, 'query', !1, void 0, 'wbraid'), e = ze(a, 'query', !1, void 0, 'dclid');
                    if (!b || !c || !d) {
                        var f = a.hash.replace('#', '');
                        b = b || we(f, 'gclid', void 0);
                        c = c || we(f, 'gclsrc', void 0);
                        d = d || we(f, 'wbraid', void 0);
                    }
                    return wh(b, c, e, d);
                }, wh = function (a, b, c, d) {
                    var e = {}, f = function (h, k) {
                            e[k] || (e[k] = []);
                            e[k].push(h);
                        };
                    e.gclid = a;
                    e.gclsrc = b;
                    e.dclid = c;
                    void 0 !== d && mh.test(d) && (e.gbraid = d, f(d, 'gb'));
                    if (void 0 !== a && a.match(mh))
                        switch (b) {
                        case void 0:
                            f(a, 'aw');
                            break;
                        case 'aw.ds':
                            f(a, 'aw');
                            f(a, 'dc');
                            break;
                        case 'ds':
                            f(a, 'dc');
                            break;
                        case '3p.ds':
                            f(a, 'dc');
                            break;
                        case 'gf':
                            f(a, 'gf');
                            break;
                        case 'ha':
                            f(a, 'ha');
                        }
                    c && f(c, 'dc');
                    return e;
                }, zh = function (a) {
                    var b = xh();
                    ph(function () {
                        yh(b, a);
                    });
                };
            function yh(a, b, c, d) {
                function e(p, q) {
                    var r = Ah(p, f);
                    r && (og(r, q, h), k = !0);
                }
                b = b || {};
                d = d || [];
                var f = vh(b.prefix);
                c = c || Ra();
                var h = yg(b, c, !0);
                h.Ra = 'ad_storage';
                var k = !1, l = Math.round(c / 1000), n = function (p) {
                        var q = [
                            'GCL',
                            l,
                            p
                        ];
                        0 < d.length && q.push(d.join('.'));
                        return q.join('.');
                    };
                a.aw && e('aw', n(a.aw[0]));
                a.dc && e('dc', n(a.dc[0]));
                a.gf && e('gf', n(a.gf[0]));
                a.ha && e('ha', n(a.ha[0]));
                a.gp && e('gp', n(a.gp[0]));
                (void 0 == kh.enable_gbraid_cookie_write ? 0 : kh.enable_gbraid_cookie_write) && !k && a.gb && e('gb', n(a.gb[0]));
            }
            var Ch = function (a, b) {
                    var c = bh(!0);
                    ph(function () {
                        for (var d = vh(b.prefix), e = 0; e < a.length; ++e) {
                            var f = a[e];
                            if (void 0 !== nh[f]) {
                                var h = Ah(f, d), k = c[h];
                                if (k) {
                                    var l = Math.min(Bh(k), Ra()), n;
                                    b: {
                                        var p = l;
                                        if (cg(m))
                                            for (var q = fg(h, A.cookie, void 0, 'ad_storage'), r = 0; r < q.length; ++r)
                                                if (Bh(q[r]) > p) {
                                                    n = !0;
                                                    break b;
                                                }
                                        n = !1;
                                    }
                                    if (!n) {
                                        var u = yg(b, l, !0);
                                        u.Ra = 'ad_storage';
                                        og(h, k, u);
                                    }
                                }
                            }
                        }
                        yh(wh(c.gclid, c.gclsrc), b);
                    });
                }, Ah = function (a, b) {
                    var c = nh[a];
                    if (void 0 !== c)
                        return b + c;
                }, Bh = function (a) {
                    return 0 !== Dh(a.split('.')).length ? 1000 * (Number(a.split('.')[1]) || 0) : 0;
                };
            function sh(a) {
                var b = Dh(a.split('.'));
                return 0 === b.length ? null : {
                    version: b[0],
                    Aa: b[2],
                    timestamp: 1000 * (Number(b[1]) || 0),
                    labels: b.slice(3)
                };
            }
            function Dh(a) {
                return 3 > a.length || 'GCL' !== a[0] && '1' !== a[0] || !/^\d+$/.test(a[1]) || !mh.test(a[2]) ? [] : a;
            }
            var Eh = function (a, b, c, d, e) {
                    if (xa(b) && cg(m)) {
                        var f = vh(e), h = function () {
                                for (var k = {}, l = 0; l < a.length; ++l) {
                                    var n = Ah(a[l], f);
                                    if (n) {
                                        var p = fg(n, A.cookie, void 0, 'ad_storage');
                                        p.length && (k[n] = p.sort()[p.length - 1]);
                                    }
                                }
                                return k;
                            };
                        ph(function () {
                            gh(h, b, c, d);
                        });
                    }
                }, uh = function (a) {
                    return a.filter(function (b) {
                        return mh.test(b.Aa);
                    });
                }, Fh = function (a, b) {
                    if (cg(m)) {
                        for (var c = vh(b.prefix), d = {}, e = 0; e < a.length; e++)
                            nh[a[e]] && (d[a[e]] = nh[a[e]]);
                        ph(function () {
                            Ja(d, function (f, h) {
                                var k = fg(c + h, A.cookie, void 0, 'ad_storage');
                                k.sort(function (u, t) {
                                    return Bh(t) - Bh(u);
                                });
                                if (k.length) {
                                    var l = k[0], n = Bh(l), p = 0 !== Dh(l.split('.')).length ? l.split('.').slice(3) : [], q = {}, r;
                                    r = 0 !== Dh(l.split('.')).length ? l.split('.')[2] : void 0;
                                    q[f] = [r];
                                    yh(q, b, n, p);
                                }
                            });
                        });
                    }
                };
            function Gh(a, b) {
                for (var c = 0; c < b.length; ++c)
                    if (a[b[c]])
                        return !0;
                return !1;
            }
            var Hh = function (a) {
                function b(e, f, h) {
                    h && (e[f] = h);
                }
                if (Td()) {
                    var c = xh();
                    if (Gh(c, a)) {
                        var d = {};
                        b(d, 'gclid', c.gclid);
                        b(d, 'dclid', c.dclid);
                        b(d, 'gclsrc', c.gclsrc);
                        b(d, 'wbraid', c.gbraid);
                        hh(function () {
                            return d;
                        }, 3);
                        hh(function () {
                            var e = {};
                            return e._up = '1', e;
                        }, 1);
                    }
                }
            };
            function Ih(a, b) {
                var c = vh(b), d = Ah(a, c);
                if (!d)
                    return 0;
                for (var e = qh(d), f = 0, h = 0; h < e.length; h++)
                    f = Math.max(f, e[h].timestamp);
                return f;
            }
            function Jh(a) {
                var b = 0, c;
                for (c in a)
                    for (var d = a[c], e = 0; e < d.length; e++)
                        b = Math.max(b, Number(d[e].timestamp));
                return b;
            }
            ;
            var Kh = /^\d+\.fls\.doubleclick\.net$/;
            function Lh(a, b) {
                Sd(K.D) ? L(K.D) ? a() : Yd(a, K.D) : b ? wd(42) : ee(function () {
                    Lh(a, !0);
                }, [K.D]);
            }
            function Mh(a) {
                var b = Be(m.location.href), c = ze(b, 'host', !1);
                if (c && c.match(Kh)) {
                    var d = ze(b, 'path').split(a + '=');
                    if (1 < d.length)
                        return d[1].split(';')[0].split('?')[0];
                }
            }
            function Nh(a, b, c) {
                if ('aw' === a || 'dc' === a || 'gb' === a) {
                    var d = Mh('gcl' + a);
                    if (d)
                        return d.split('.');
                }
                var e = vh(b);
                if ('_gcl' == e) {
                    c = void 0 === c ? !0 : c;
                    var f = !L(K.D) && c, h;
                    h = xh()[a] || [];
                    if (0 < h.length)
                        return f ? ['0'] : h;
                }
                var k = Ah(a, e);
                return k ? rh(k) : [];
            }
            var Oh = function (a, b) {
                    return Nh('aw', a, b);
                }, Ph = function (a, b) {
                    return Nh('dc', a, b);
                };
            function Qh(a) {
                var b = [];
                Ja(a, function (c, d) {
                    d = uh(d);
                    for (var e = [], f = 0; f < d.length; f++)
                        e.push(d[f].Aa);
                    e.length && b.push(c + ':' + e.join(','));
                });
                return b.join(';');
            }
            var Rh = function (a) {
                    var b = Mh('gac');
                    return b ? !L(K.D) && a ? '0' : decodeURIComponent(b) : Qh(oh() ? Gg() : {});
                }, Sh = function (a) {
                    var b = Mh('gacgb');
                    return b ? !L(K.D) && a ? '0' : decodeURIComponent(b) : Qh(oh() ? Gg('_gac_gb', !0) : {});
                }, Th = function (a, b) {
                    var c = xh(), d = [], e = c.gclid, f = c.dclid, h = c.gclsrc || 'aw';
                    !e || 'aw.ds' !== h && 'aw' !== h && 'ds' !== h || d.push({
                        Aa: e,
                        ke: h
                    });
                    f && d.push({
                        Aa: f,
                        ke: 'ds'
                    });
                    Lh(function () {
                        Eg(b);
                        var k = Ag[Bg(b.prefix)], l = !1;
                        if (k && 0 < d.length)
                            for (var n = vf.joined_auid = vf.joined_auid || {}, p = 0; p < d.length; p++) {
                                var q = d[p], r = q.Aa, u = q.ke, t = (b.prefix || '_gcl') + '.' + u + '.' + r;
                                if (!n[t]) {
                                    var v = 'https://adservice.google.com/pagead/regclk';
                                    v = 'gb' === u ? v + '?gbraid=' + r + '&auid=' + k : v + '?gclid=' + r + '&auid=' + k + '&gclsrc=' + u;
                                    Ob(v);
                                    l = n[t] = !0;
                                }
                            }
                        null == a && (a = l);
                        var w = !0;
                        w = !1;
                        if (w && a && k) {
                            var y = Bg(b.prefix), x = Ag[y];
                            x && Dg(y, x, b);
                        }
                    });
                }, Uh = function (a) {
                    var b;
                    if (Mh('gclaw') || Mh('gac') || 0 < (xh().aw || []).length)
                        b = !1;
                    else {
                        var c;
                        if (0 < (xh().gb || []).length)
                            c = !0;
                        else {
                            var d = Math.max(Ih('aw', a), Jh(oh() ? Gg() : {}));
                            c = Math.max(Ih('gb', a), Jh(oh() ? Gg('_gac_gb', !0) : {})) > d;
                        }
                        b = c;
                    }
                    return b;
                };
            var Vh = /[A-Z]+/, Wh = /\s/, Xh = function (a) {
                    if (g(a) && (a = Pa(a), !Wh.test(a))) {
                        var b = a.indexOf('-');
                        if (!(0 > b)) {
                            var c = a.substring(0, b);
                            if (Vh.test(c)) {
                                for (var d = a.substring(b + 1).split('/'), e = 0; e < d.length; e++)
                                    if (!d[e])
                                        return;
                                return {
                                    id: a,
                                    prefix: c,
                                    containerId: c + '-' + d[0],
                                    N: d
                                };
                            }
                        }
                    }
                }, Zh = function (a) {
                    for (var b = {}, c = 0; c < a.length; ++c) {
                        var d = Xh(a[c]);
                        d && (b[d.id] = d);
                    }
                    Yh(b);
                    var e = [];
                    Ja(b, function (f, h) {
                        e.push(h);
                    });
                    return e;
                };
            function Yh(a) {
                var b = [], c;
                for (c in a)
                    if (a.hasOwnProperty(c)) {
                        var d = a[c];
                        'AW' === d.prefix && d.N[1] && b.push(d.containerId);
                    }
                for (var e = 0; e < b.length; ++e)
                    delete a[b[e]];
            }
            ;
            var $h = function () {
                var a = !1;
                return a;
            };
            var bi = function (a, b, c, d) {
                    return (2 === ai() || d || 'http:' != m.location.protocol ? a : b) + c;
                }, ai = function () {
                    var a = Cb(), b;
                    if (1 === a)
                        a: {
                            var c = Bf;
                            c = c.toLowerCase();
                            for (var d = 'https://' + c, e = 'http://' + c, f = 1, h = A.getElementsByTagName('script'), k = 0; k < h.length && 100 > k; k++) {
                                var l = h[k].src;
                                if (l) {
                                    l = l.toLowerCase();
                                    if (0 === l.indexOf(e)) {
                                        b = 3;
                                        break a;
                                    }
                                    1 === f && 0 === l.indexOf(d) && (f = 2);
                                }
                            }
                            b = f;
                        }
                    else
                        b = a;
                    return b;
                };
            var ni = function (a, b) {
                var c = a ? Zf(a) : m.enhanced_conversion_data, d = (a || {}).enhanced_conversions_mode;
                if (m.Promise)
                    try {
                        return c ? tf(c, b).then(function (e) {
                            e.ee = d;
                            return e;
                        }) : Promise.resolve({
                            qc: '',
                            cc: [],
                            ee: d
                        });
                    } catch (e) {
                    }
            };
            var oi = function (a) {
                    if (L(K.D))
                        return a;
                    a = a.replace(/&url=([^&#]+)/, function (b, c) {
                        var d = Ce(decodeURIComponent(c));
                        return '&url=' + encodeURIComponent(d);
                    });
                    a = a.replace(/&ref=([^&#]+)/, function (b, c) {
                        var d = Ce(decodeURIComponent(c));
                        return '&ref=' + encodeURIComponent(d);
                    });
                    return a;
                }, pi = function () {
                    var a;
                    if (!(a = Cf)) {
                        var b;
                        if (!0 === m._gtmdgs)
                            b = !0;
                        else {
                            var c = xb && xb.userAgent || '';
                            b = 0 > c.indexOf('Safari') || /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) || 11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || '') ? !1 : !0;
                        }
                        a = !b;
                    }
                    if (a)
                        return -1;
                    var d = Ma('1');
                    return ag(1, 100) < d ? ag(2, 2) : -1;
                }, qi = function (a) {
                    var b;
                    if (!a || !a.length)
                        return;
                    for (var c = [], d = 0; d < a.length; ++d) {
                        var e = a[d];
                        e && e.estimated_delivery_date ? c.push('' + e.estimated_delivery_date) : c.push('');
                    }
                    b = c.join(',');
                    return b;
                };
            var ri = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), si = {
                    cl: ['ecl'],
                    customPixels: ['nonGooglePixels'],
                    ecl: ['cl'],
                    ehl: ['hl'],
                    hl: ['ehl'],
                    html: [
                        'customScripts',
                        'customPixels',
                        'nonGooglePixels',
                        'nonGoogleScripts',
                        'nonGoogleIframes'
                    ],
                    customScripts: [
                        'html',
                        'customPixels',
                        'nonGooglePixels',
                        'nonGoogleScripts',
                        'nonGoogleIframes'
                    ],
                    nonGooglePixels: [],
                    nonGoogleScripts: ['nonGooglePixels'],
                    nonGoogleIframes: ['nonGooglePixels']
                }, ti = {
                    cl: ['ecl'],
                    customPixels: [
                        'customScripts',
                        'html'
                    ],
                    ecl: ['cl'],
                    ehl: ['hl'],
                    hl: ['ehl'],
                    html: ['customScripts'],
                    customScripts: ['html'],
                    nonGooglePixels: [
                        'customPixels',
                        'customScripts',
                        'html',
                        'nonGoogleScripts',
                        'nonGoogleIframes'
                    ],
                    nonGoogleScripts: [
                        'customScripts',
                        'html'
                    ],
                    nonGoogleIframes: [
                        'customScripts',
                        'html',
                        'nonGoogleScripts'
                    ]
                }, ui = 'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(' ');
            var vi = function () {
                    var a = !1;
                    return a;
                }, xi = function (a) {
                    var b = Of('gtm.allowlist') || Of('gtm.whitelist');
                    b && wd(9);
                    vi() && (b = 'google gtagfl lcl zone oid op'.split(' '));
                    var c = b && Wa(Oa(b), si), d = Of('gtm.blocklist') || Of('gtm.blacklist');
                    d || (d = Of('tagTypeBlacklist')) && wd(3);
                    d ? wd(8) : d = [];
                    wi() && (d = Oa(d), d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'));
                    0 <= ya(Oa(d), 'google') && wd(2);
                    var e = d && Wa(Oa(d), ti), f = {};
                    return function (h) {
                        var k = h && h[$b.jb];
                        if (!k || 'string' != typeof k)
                            return !0;
                        k = k.replace(/^_*/, '');
                        if (void 0 !== f[k])
                            return f[k];
                        var l = Hf[k] || [], n = a(k, l);
                        if (b) {
                            var p;
                            if (p = n)
                                a: {
                                    if (0 > ya(c, k))
                                        if (l && 0 < l.length)
                                            for (var q = 0; q < l.length; q++) {
                                                if (0 > ya(c, l[q])) {
                                                    wd(11);
                                                    p = !1;
                                                    break a;
                                                }
                                            }
                                        else {
                                            p = !1;
                                            break a;
                                        }
                                    p = !0;
                                }
                            n = p;
                        }
                        var r = !1;
                        if (d) {
                            var u = 0 <= ya(e, k);
                            if (u)
                                r = u;
                            else {
                                var t = Ga(e, l || []);
                                t && wd(10);
                                r = t;
                            }
                        }
                        var v = !n || r;
                        v || !(0 <= ya(l, 'sandboxedScripts')) || c && -1 !== ya(c, 'sandboxedScripts') || (v = Ga(e, ui));
                        return f[k] = v;
                    };
                }, wi = function () {
                    return ri.test(m.location && m.location.hostname);
                };
            var yi = {
                    active: !0,
                    isAllowed: function () {
                        return !0;
                    }
                }, zi = function (a) {
                    var b = vf.zones;
                    return b ? b.checkState(uf.M, a) : yi;
                }, Ai = function (a) {
                    var b = vf.zones;
                    !b && a && (b = vf.zones = a());
                    return b;
                };
            var Bi = function () {
                }, Ci = function () {
                };
            var Di = !1, Ei = 0, Fi = [];
            function Gi(a) {
                if (!Di) {
                    var b = A.createEventObject, c = 'complete' == A.readyState, d = 'interactive' == A.readyState;
                    if (!a || 'readystatechange' != a.type || c || !b && d) {
                        Di = !0;
                        for (var e = 0; e < Fi.length; e++)
                            F(Fi[e]);
                    }
                    Fi.push = function () {
                        for (var f = 0; f < arguments.length; f++)
                            F(arguments[f]);
                        return 0;
                    };
                }
            }
            function Hi() {
                if (!Di && 140 > Ei) {
                    Ei++;
                    try {
                        A.documentElement.doScroll('left'), Gi();
                    } catch (a) {
                        m.setTimeout(Hi, 50);
                    }
                }
            }
            var Ii = function (a) {
                Di ? a() : Fi.push(a);
            };
            var Ki = function (a, b) {
                    this.o = !1;
                    this.F = [];
                    this.O = { tags: [] };
                    this.aa = !1;
                    this.s = this.C = 0;
                    Ji(this, a, b);
                }, Li = function (a, b, c, d) {
                    if (yf.hasOwnProperty(b) || '__zone' === b)
                        return -1;
                    var e = {};
                    Yb(d) && (e = H(d, e));
                    e.id = c;
                    e.status = 'timeout';
                    return a.O.tags.push(e) - 1;
                }, Mi = function (a, b, c, d) {
                    var e = a.O.tags[b];
                    e && (e.status = c, e.executionTime = d);
                }, Ni = function (a) {
                    if (!a.o) {
                        for (var b = a.F, c = 0; c < b.length; c++)
                            b[c]();
                        a.o = !0;
                        a.F.length = 0;
                    }
                }, Ji = function (a, b, c) {
                    va(b) && Oi(a, b);
                    c && m.setTimeout(function () {
                        return Ni(a);
                    }, Number(c));
                }, Oi = function (a, b) {
                    var c = Ta(function () {
                        return F(function () {
                            b(uf.M, a.O);
                        });
                    });
                    a.o ? c() : a.F.push(c);
                }, Pi = function (a) {
                    a.C++;
                    return Ta(function () {
                        a.s++;
                        a.aa && a.s >= a.C && Ni(a);
                    });
                };
            var Qi = function () {
                    function a(d) {
                        return !wa(d) || 0 > d ? 0 : d;
                    }
                    if (!vf._li && m.performance && m.performance.timing) {
                        var b = m.performance.timing.navigationStart, c = wa(Pf.get('gtm.start')) ? Pf.get('gtm.start') : 0;
                        vf._li = {
                            cst: a(c - b),
                            cbt: a(Ef - b)
                        };
                    }
                }, Ri = function (a) {
                    m.performance && m.performance.mark(uf.M + '_' + a + '_start');
                }, Si = function (a) {
                    if (m.performance) {
                        var b = uf.M + '_' + a + '_start', c = uf.M + '_' + a + '_duration';
                        m.performance.measure(c, b);
                        var d = m.performance.getEntriesByName(c)[0];
                        m.performance.clearMarks(b);
                        m.performance.clearMeasures(c);
                        var e = vf._p || {};
                        void 0 === e[a] && (e[a] = d.duration, vf._p = e);
                        return d.duration;
                    }
                }, Ti = function () {
                    if (m.performance && m.performance.now) {
                        var a = vf._p || {};
                        a.PAGEVIEW = m.performance.now();
                        vf._p = a;
                    }
                };
            var Ui = {}, Vi = function () {
                    return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
                }, Wi = !1;
            var cj = function (a) {
                }, bj = function () {
                    return m.GoogleAnalyticsObject || 'ga';
                }, dj = function (a, b) {
                    return function () {
                        var c = Vi(), d = c && c.getByName && c.getByName(a);
                        if (d) {
                            var e = d.get('sendHitTask');
                            d.set('sendHitTask', function (f) {
                                var h = f.get('hitPayload'), k = f.get('hitCallback'), l = 0 > h.indexOf('&tid=' + b);
                                l && (f.set('hitPayload', h.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b), !0), f.set('hitCallback', void 0, !0));
                                e(f);
                                l && (f.set('hitPayload', h, !0), f.set('hitCallback', k, !0), f.set('_x_19', void 0, !0), e(f));
                            });
                        }
                    };
                };
            var kj = function (a) {
                }, oj = function (a) {
                }, pj = function () {
                    return '&tc=' + Gc.filter(function (a) {
                        return a;
                    }).length;
                }, sj = function () {
                    2022 <= qj().length && rj();
                }, tj = function (a) {
                    return 0 === a.indexOf('gtm.') ? encodeURIComponent(a) : '*';
                }, vj = function () {
                    uj || (uj = m.setTimeout(rj, 500));
                }, rj = function () {
                    uj && (m.clearTimeout(uj), uj = void 0);
                    void 0 === wj || xj[wj] && !yj && !zj || (Aj[wj] || Bj.mi() || 0 >= Cj-- ? (wd(1), Aj[wj] = !0) : (Bj.Hi(), Hb(qj(!0)), xj[wj] = !0, Dj = Ej = Fj = zj = yj = ''));
                }, qj = function (a) {
                    var b = wj;
                    if (void 0 === b)
                        return '';
                    var c = ta('GTM'), d = ta('TAGGING');
                    return [
                        Gj,
                        xj[b] ? '' : '&es=1',
                        Hj[b],
                        kj(b),
                        c ? '&u=' + c : '',
                        d ? '&ut=' + d : '',
                        pj(),
                        yj,
                        zj,
                        Fj,
                        Ej,
                        oj(a),
                        Dj,
                        '&z=0'
                    ].join('');
                }, Jj = function () {
                    Gj = Ij();
                }, Ij = function () {
                    return [
                        Ff,
                        '&v=3&t=t',
                        '&pid=' + Ba(),
                        '&rv=' + uf.Wc
                    ].join('');
                }, nj = [
                    'L',
                    'S',
                    'Y'
                ], jj = [
                    'S',
                    'E'
                ], Kj = {
                    sampleRate: '0.005000',
                    Dg: '',
                    Cg: Number('5')
                }, Lj = 0 <= A.location.search.indexOf('?gtm_latency=') || 0 <= A.location.search.indexOf('&gtm_latency='), Mj;
            if (!(Mj = Lj)) {
                var Nj = Math.random(), Oj = Kj.sampleRate;
                Mj = Nj < Oj;
            }
            var Pj = Mj, Qj = {
                    label: uf.M + ' Container',
                    children: [{
                            label: 'Initialization',
                            children: []
                        }]
                }, Gj = Ij(), xj = {}, yj = '', zj = '', Dj = '', Ej = '', mj = {}, lj = !1, ij = {}, Rj = {}, Fj = '', wj = void 0, Hj = {}, Aj = {}, uj = void 0, Sj = 5;
            0 < Kj.Cg && (Sj = Kj.Cg);
            var Bj = function (a, b) {
                    for (var c = 0, d = [], e = 0; e < a; ++e)
                        d.push(0);
                    return {
                        mi: function () {
                            return c < a ? !1 : Ra() - d[c % a] < b;
                        },
                        Hi: function () {
                            var f = c++ % a;
                            d[f] = Ra();
                        }
                    };
                }(Sj, 1000), Cj = 1000, Uj = function (a, b) {
                    if (Pj && !Aj[a] && wj !== a) {
                        rj();
                        wj = a;
                        Dj = yj = '';
                        Hj[a] = '&e=' + tj(b) + '&eid=' + a;
                        vj();
                    }
                }, Vj = function (a, b, c, d) {
                    if (Pj && b) {
                        var e, f = String(b[$b.jb] || '').replace(/_/g, '');
                        0 === f.indexOf('cvt') && (f = 'cvt');
                        e = f;
                        var h = c + e;
                        if (!Aj[a]) {
                            a !== wj && (rj(), wj = a);
                            yj = yj ? yj + '.' + h : '&tr=' + h;
                            var k = b['function'];
                            if (!k)
                                throw Error('Error: No function name given for function call.');
                            var l = (Ic[k] ? '1' : '2') + e;
                            Dj = Dj ? Dj + '.' + l : '&ti=' + l;
                            vj();
                            sj();
                        }
                    }
                };
            var ck = function (a, b, c) {
                    if (Pj && !Aj[a]) {
                        a !== wj && (rj(), wj = a);
                        var d = c + b;
                        zj = zj ? zj + '.' + d : '&epr=' + d;
                        vj();
                        sj();
                    }
                }, dk = function (a, b, c) {
                };
            function ek(a, b, c, d) {
                var e = Gc[a], f = fk(a, b, c, d);
                if (!f)
                    return null;
                var h = Nc(e[$b.Cf], c, []);
                if (h && h.length) {
                    var k = h[0];
                    f = ek(k.index, {
                        onSuccess: f,
                        onFailure: 1 === k.Yf ? b.terminate : f,
                        terminate: b.terminate
                    }, c, d);
                }
                return f;
            }
            function fk(a, b, c, d) {
                function e() {
                    if (f[$b.zh])
                        k();
                    else {
                        var w = Oc(f, c, []);
                        var y = w[$b.Ig];
                        if (null != y)
                            for (var x = 0; x < y.length; x++)
                                if (!L(y[x])) {
                                    k();
                                    return;
                                }
                        var z = Li(c.kb, String(f[$b.jb]), Number(f[$b.Df]), w[$b.Ah]), B = !1;
                        w.vtp_gtmOnSuccess = function () {
                            if (!B) {
                                B = !0;
                                var E = Ra() - C;
                                Vj(c.id, Gc[a], '5', E);
                                Mi(c.kb, z, 'success', E);
                                h();
                            }
                        };
                        w.vtp_gtmOnFailure = function () {
                            if (!B) {
                                B = !0;
                                var E = Ra() - C;
                                Vj(c.id, Gc[a], '6', E);
                                Mi(c.kb, z, 'failure', E);
                                k();
                            }
                        };
                        w.vtp_gtmTagId = f.tag_id;
                        w.vtp_gtmEventId = c.id;
                        Vj(c.id, f, '1');
                        var D = function () {
                            var E = Ra() - C;
                            Vj(c.id, f, '7', E);
                            Mi(c.kb, z, 'exception', E);
                            B || (B = !0, k());
                        };
                        var C = Ra();
                        try {
                            Mc(w, c);
                        } catch (E) {
                            D(E);
                        }
                    }
                }
                var f = Gc[a], h = b.onSuccess, k = b.onFailure, l = b.terminate;
                if (c.ve(f))
                    return null;
                var n = Nc(f[$b.Ef], c, []);
                if (n && n.length) {
                    var p = n[0], q = ek(p.index, {
                            onSuccess: h,
                            onFailure: k,
                            terminate: l
                        }, c, d);
                    if (!q)
                        return null;
                    h = q;
                    k = 2 === p.Yf ? l : q;
                }
                if (f[$b.yf] || f[$b.Ch]) {
                    var r = f[$b.yf] ? Hc : c.Oi, u = h, t = k;
                    if (!r[a]) {
                        e = Ta(e);
                        var v = gk(a, r, e);
                        h = v.onSuccess;
                        k = v.onFailure;
                    }
                    return function () {
                        r[a](u, t);
                    };
                }
                return e;
            }
            function gk(a, b, c) {
                var d = [], e = [];
                b[a] = hk(d, e, c);
                return {
                    onSuccess: function () {
                        b[a] = ik;
                        for (var f = 0; f < d.length; f++)
                            d[f]();
                    },
                    onFailure: function () {
                        b[a] = jk;
                        for (var f = 0; f < e.length; f++)
                            e[f]();
                    }
                };
            }
            function hk(a, b, c) {
                return function (d, e) {
                    a.push(d);
                    b.push(e);
                    c();
                };
            }
            function ik(a) {
                a();
            }
            function jk(a, b) {
                b();
            }
            ;
            var mk = function (a, b) {
                for (var c = [], d = 0; d < Gc.length; d++)
                    if (a[d]) {
                        var e = Gc[d];
                        var f = Pi(b.kb);
                        try {
                            var h = ek(d, {
                                onSuccess: f,
                                onFailure: f,
                                terminate: f
                            }, b, d);
                            if (h) {
                                var k = c, l = k.push, n = d, p = e['function'];
                                if (!p)
                                    throw 'Error: No function name given for function call.';
                                var q = Ic[p];
                                l.call(k, {
                                    wg: n,
                                    kg: q ? q.priorityOverride || 0 : 0,
                                    ai: h
                                });
                            } else
                                kk(d, b), f();
                        } catch (t) {
                            f();
                        }
                    }
                var r = b.kb;
                r.aa = !0;
                r.s >= r.C && Ni(r);
                c.sort(lk);
                for (var u = 0; u < c.length; u++)
                    c[u].ai();
                return 0 < c.length;
            };
            function lk(a, b) {
                var c, d = b.kg, e = a.kg;
                c = d > e ? 1 : d < e ? -1 : 0;
                var f;
                if (0 !== c)
                    f = c;
                else {
                    var h = a.wg, k = b.wg;
                    f = h > k ? 1 : h < k ? -1 : 0;
                }
                return f;
            }
            function kk(a, b) {
                if (!Pj)
                    return;
                var c = function (d) {
                    var e = b.ve(Gc[d]) ? '3' : '4', f = Nc(Gc[d][$b.Cf], b, []);
                    f && f.length && c(f[0].index);
                    Vj(b.id, Gc[d], e);
                    var h = Nc(Gc[d][$b.Ef], b, []);
                    h && h.length && c(h[0].index);
                };
                c(a);
            }
            var nk = !1, tk = function (a) {
                    var b = Ra(), c = a['gtm.uniqueEventId'], d = a.event;
                    if ('gtm.js' === d) {
                        if (nk)
                            return !1;
                        nk = !0;
                    }
                    var h = zi(c), k = !1;
                    if (!h.active) {
                        if ('gtm.js' !== d)
                            return !1;
                        k = !0;
                        h = zi(Number.MAX_SAFE_INTEGER);
                    }
                    Uj(c, d);
                    var l = a.eventCallback, n = a.eventTimeout, p = l;
                    var q = {
                        id: c,
                        name: d,
                        ve: xi(h.isAllowed),
                        Oi: [],
                        fg: function () {
                            wd(6);
                        },
                        Pf: ok(c),
                        kb: new Ki(p, n)
                    };
                    q.Of = pk();
                    qk(c, q.kb);
                    var r = Sc(q);
                    k && (r = rk(r));
                    var u = mk(r, q);
                    'gtm.js' !== d && 'gtm.sync' !== d || cj(uf.M);
                    switch (d) {
                    case 'gtm.init':
                        u && wd(20);
                    }
                    return sk(r, u);
                };
            function ok(a) {
                return function (b) {
                    Pj && (Zb(b) || dk(a, 'input', b));
                };
            }
            function qk(a, b) {
                Tf(a, 'event', 1);
                Tf(a, 'ecommerce', 1);
                Tf(a, 'gtm');
                Tf(a, 'eventModel');
            }
            function pk() {
                var a = {};
                a.event = Sf('event', 1);
                a.ecommerce = Sf('ecommerce', 1);
                a.gtm = Sf('gtm');
                a.eventModel = Sf('eventModel');
                return a;
            }
            function rk(a) {
                for (var b = [], c = 0; c < a.length; c++)
                    a[c] && xf[String(Gc[c][$b.jb])] && (b[c] = !0);
                return b;
            }
            function sk(a, b) {
                if (!b)
                    return b;
                for (var c = 0; c < a.length; c++)
                    if (a[c] && Gc[c] && !yf[String(Gc[c][$b.jb])])
                        return !0;
                return !1;
            }
            function uk(a, b) {
                if (a) {
                    var c = '' + a;
                    0 !== c.indexOf('http://') && 0 !== c.indexOf('https://') && (c = 'https://' + c);
                    '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1));
                    return Be('' + c + b).href;
                }
            }
            function vk(a, b) {
                return wk() ? uk(a, b) : void 0;
            }
            function wk() {
                var a = !1;
                return a;
            }
            ;
            var xk = function () {
                    this.eventModel = {};
                    this.targetConfig = {};
                    this.containerConfig = {};
                    this.remoteConfig = {};
                    this.globalConfig = {};
                    this.onSuccess = function () {
                    };
                    this.onFailure = function () {
                    };
                    this.setContainerTypeLoaded = function () {
                    };
                    this.getContainerTypeLoaded = function () {
                    };
                    this.eventId = void 0;
                    this.isGtmEvent = !1;
                }, yk = function (a) {
                    var b = new xk();
                    b.eventModel = a;
                    return b;
                }, zk = function (a, b) {
                    a.targetConfig = b;
                    return a;
                }, Ak = function (a, b) {
                    a.containerConfig = b;
                    return a;
                }, Bk = function (a, b) {
                    a.remoteConfig = b;
                    return a;
                }, Ck = function (a, b) {
                    a.globalConfig = b;
                    return a;
                }, Dk = function (a, b) {
                    a.onSuccess = b;
                    return a;
                }, Ek = function (a, b) {
                    a.setContainerTypeLoaded = b;
                    return a;
                }, Fk = function (a, b) {
                    a.getContainerTypeLoaded = b;
                    return a;
                }, Gk = function (a, b) {
                    a.onFailure = b;
                    return a;
                };
            xk.prototype.getWithConfig = function (a) {
                if (void 0 !== this.eventModel[a])
                    return this.eventModel[a];
                if (void 0 !== this.targetConfig[a])
                    return this.targetConfig[a];
                if (void 0 !== this.containerConfig[a])
                    return this.containerConfig[a];
                if (void 0 !== this.remoteConfig[a])
                    return this.remoteConfig[a];
                if (void 0 !== this.globalConfig[a])
                    return this.globalConfig[a];
            };
            var Hk = function (a) {
                    function b(d) {
                        for (var e = Object.keys(d), f = 0; f < e.length; ++f)
                            c[e[f]] = 1;
                    }
                    var c = {};
                    b(a.eventModel);
                    b(a.targetConfig);
                    b(a.containerConfig);
                    b(a.globalConfig);
                    return Object.keys(c);
                }, Ik = function (a, b) {
                    function c(f) {
                        Yb(f) && Ja(f, function (h, k) {
                            e = !0;
                            d[h] = k;
                        });
                    }
                    var d = {}, e = !1;
                    c(a.globalConfig[b]);
                    c(a.remoteConfig[b]);
                    c(a.containerConfig[b]);
                    c(a.targetConfig[b]);
                    c(a.eventModel[b]);
                    return e ? d : void 0;
                };
            var Jk;
            if (3 === uf.Wc.length)
                Jk = 'g';
            else {
                var Kk = 'G';
                Jk = Kk;
            }
            var Lk = {
                    '': 'n',
                    UA: 'u',
                    AW: 'a',
                    DC: 'd',
                    G: 'e',
                    GF: 'f',
                    HA: 'h',
                    GTM: Jk,
                    OPT: 'o'
                }, Mk = function (a) {
                    var b = uf.M.split('-'), c = b[0].toUpperCase(), d = Lk[c] || 'i', e = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '', f;
                    if (3 === uf.Wc.length) {
                        var h = 'w';
                        f = '2' + h;
                    } else
                        f = '';
                    return f + d + uf.Wc + e;
                };
            function Nk(a, b) {
                if ('' === a)
                    return b;
                var c = Number(a);
                return isNaN(c) ? b : c;
            }
            ;
            var Ok = function (a, b) {
                a.addEventListener && a.addEventListener.call(a, 'message', b, !1);
            };
            var Pk = function () {
                return nb('iPhone') && !nb('iPod') && !nb('iPad');
            };
            nb('Opera');
            nb('Trident') || nb('MSIE');
            nb('Edge');
            !nb('Gecko') || -1 != gb.toLowerCase().indexOf('webkit') && !nb('Edge') || nb('Trident') || nb('MSIE') || nb('Edge');
            -1 != gb.toLowerCase().indexOf('webkit') && !nb('Edge') && nb('Mobile');
            nb('Macintosh');
            nb('Windows');
            nb('Linux') || nb('CrOS');
            var Qk = pa.navigator || null;
            Qk && (Qk.appVersion || '').indexOf('X11');
            nb('Android');
            Pk();
            nb('iPad');
            nb('iPod');
            Pk() || nb('iPad') || nb('iPod');
            gb.toLowerCase().indexOf('kaios');
            var Rk = function (a, b) {
                    for (var c = a, d = 0; 50 > d; ++d) {
                        var e;
                        try {
                            e = !(!c.frames || !c.frames[b]);
                        } catch (k) {
                            e = !1;
                        }
                        if (e)
                            return c;
                        var f;
                        a: {
                            try {
                                var h = c.parent;
                                if (h && h != c) {
                                    f = h;
                                    break a;
                                }
                            } catch (k) {
                            }
                            f = null;
                        }
                        if (!(c = f))
                            break;
                    }
                    return null;
                }, Sk = function (a) {
                    var b = A;
                    b = void 0 === b ? window.document : b;
                    if (!a || !b.head)
                        return null;
                    var c = document.createElement('meta');
                    b.head.appendChild(c);
                    c.httpEquiv = 'origin-trial';
                    c.content = a;
                    return c;
                };
            var Tk = function () {
            };
            var Uk = function (a) {
                    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
                    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
                    return void 0 !== a.tcString && 'string' !== typeof a.tcString || void 0 !== a.listenerId && 'number' !== typeof a.listenerId ? 2 : a.cmpStatus && 'error' !== a.cmpStatus ? 0 : 3;
                }, Vk = function (a, b) {
                    this.s = a;
                    this.o = null;
                    this.F = {};
                    this.aa = 0;
                    this.O = void 0 === b ? 500 : b;
                    this.C = null;
                };
            ma(Vk, Tk);
            var Xk = function (a) {
                return 'function' === typeof a.s.__tcfapi || null != Wk(a);
            };
            Vk.prototype.addEventListener = function (a) {
                var b = {}, c = ub(function () {
                        return a(b);
                    }), d = 0;
                -1 !== this.O && (d = setTimeout(function () {
                    b.tcString = 'tcunavailable';
                    b.internalErrorState = 1;
                    c();
                }, this.O));
                var e = function (f, h) {
                    clearTimeout(d);
                    f ? (b = f, b.internalErrorState = Uk(b), h && 0 === b.internalErrorState || (b.tcString = 'tcunavailable', h || (b.internalErrorState = 3))) : (b.tcString = 'tcunavailable', b.internalErrorState = 3);
                    a(b);
                };
                try {
                    Yk(this, 'addEventListener', e);
                } catch (f) {
                    b.tcString = 'tcunavailable', b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c();
                }
            };
            Vk.prototype.removeEventListener = function (a) {
                a && a.listenerId && Yk(this, 'removeEventListener', null, a.listenerId);
            };
            var $k = function (a, b, c) {
                    var d;
                    d = void 0 === d ? '755' : d;
                    var e;
                    a: {
                        if (a.publisher && a.publisher.restrictions) {
                            var f = a.publisher.restrictions[b];
                            if (void 0 !== f) {
                                e = f[void 0 === d ? '755' : d];
                                break a;
                            }
                        }
                        e = void 0;
                    }
                    var h = e;
                    if (0 === h)
                        return !1;
                    var k = c;
                    2 === c ? (k = 0, 2 === h && (k = 1)) : 3 === c && (k = 1, 1 === h && (k = 0));
                    var l;
                    if (0 === k)
                        if (a.purpose && a.vendor) {
                            var n = Zk(a.vendor.consents, void 0 === d ? '755' : d);
                            l = n && '1' === b && a.purposeOneTreatment && ('DE' === a.publisherCC || Id(yd) && 'CH' === a.publisherCC) ? !0 : n && Zk(a.purpose.consents, b);
                        } else
                            l = !0;
                    else
                        l = 1 === k ? a.purpose && a.vendor ? Zk(a.purpose.legitimateInterests, b) && Zk(a.vendor.legitimateInterests, void 0 === d ? '755' : d) : !0 : !0;
                    return l;
                }, Zk = function (a, b) {
                    return !(!a || !a[b]);
                }, Yk = function (a, b, c, d) {
                    c || (c = function () {
                    });
                    if ('function' === typeof a.s.__tcfapi) {
                        var e = a.s.__tcfapi;
                        e(b, 2, c, d);
                    } else if (Wk(a)) {
                        al(a);
                        var f = ++a.aa;
                        a.F[f] = c;
                        if (a.o) {
                            var h = {};
                            a.o.postMessage((h.__tcfapiCall = {
                                command: b,
                                version: 2,
                                callId: f,
                                parameter: d
                            }, h), '*');
                        }
                    } else
                        c({}, !1);
                }, Wk = function (a) {
                    if (a.o)
                        return a.o;
                    a.o = Rk(a.s, '__tcfapiLocator');
                    return a.o;
                }, al = function (a) {
                    a.C || (a.C = function (b) {
                        try {
                            var c;
                            c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                            a.F[c.callId](c.returnValue, c.success);
                        } catch (d) {
                        }
                    }, Ok(a.s, a.C));
                };
            var bl = !0;
            bl = !1;
            var cl = {
                    1: 0,
                    3: 0,
                    4: 0,
                    7: 3,
                    9: 3,
                    10: 3
                }, dl = Nk('', 550), el = Nk('', 500);
            function fl() {
                var a = vf.tcf || {};
                return vf.tcf = a;
            }
            var gl = function (a, b) {
                    this.C = a;
                    this.o = b;
                    this.s = Ra();
                }, hl = function (a) {
                }, il = function (a) {
                }, ol = function () {
                    var a = fl(), b = new Vk(m, bl ? 3000 : -1), c = new gl(b, a);
                    if ((jl() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) && !a.active && ('function' === typeof m.__tcfapi || Xk(b))) {
                        a.active = !0;
                        a.uc = {};
                        kl();
                        var d = null;
                        bl ? d = m.setTimeout(function () {
                            ll(a);
                            ml(a);
                            d = null;
                        }, el) : a.tcString = 'tcunavailable';
                        try {
                            b.addEventListener(function (e) {
                                d && (clearTimeout(d), d = null);
                                if (0 !== e.internalErrorState)
                                    ll(a), ml(a), hl(c);
                                else {
                                    var f;
                                    a.gdprApplies = e.gdprApplies;
                                    if (!1 === e.gdprApplies)
                                        f = nl(), b.removeEventListener(e);
                                    else if ('tcloaded' === e.eventStatus || 'useractioncomplete' === e.eventStatus || 'cmpuishown' === e.eventStatus) {
                                        var h = {}, k;
                                        for (k in cl)
                                            if (cl.hasOwnProperty(k))
                                                if ('1' === k) {
                                                    var l, n = e, p = !0;
                                                    p = void 0 === p ? !1 : p;
                                                    var q;
                                                    var r = n;
                                                    !1 === r.gdprApplies ? q = !0 : (void 0 === r.internalErrorState && (r.internalErrorState = Uk(r)), q = 'error' === r.cmpStatus || 0 !== r.internalErrorState || 'loaded' === r.cmpStatus && ('tcloaded' === r.eventStatus || 'useractioncomplete' === r.eventStatus) ? !0 : !1);
                                                    l = q ? !1 === n.gdprApplies || 'tcunavailable' === n.tcString || void 0 === n.gdprApplies && !p || 'string' !== typeof n.tcString || !n.tcString.length ? !0 : $k(n, '1', 0) : !1;
                                                    h['1'] = l;
                                                } else
                                                    h[k] = $k(e, k, cl[k]);
                                        f = h;
                                    }
                                    f && (a.tcString = e.tcString || 'tcempty', a.uc = f, ml(a), hl(c));
                                }
                            }), il(c);
                        } catch (e) {
                            d && (clearTimeout(d), d = null), ll(a), ml(a);
                        }
                    }
                };
            function ll(a) {
                a.type = 'e';
                a.tcString = 'tcunavailable';
                bl && (a.uc = nl());
            }
            function kl() {
                var a = {}, b = (a.ad_storage = 'denied', a.wait_for_update = dl, a);
                ae(b);
            }
            var jl = function () {
                var a = !1;
                a = !0;
                return a;
            };
            function nl() {
                var a = {}, b;
                for (b in cl)
                    cl.hasOwnProperty(b) && (a[b] = !0);
                return a;
            }
            function ml(a) {
                var b = {}, c = (b.ad_storage = a.uc['1'] ? 'granted' : 'denied', b);
                pl();
                be(c, 0);
            }
            var ql = function () {
                    var a = fl();
                    if (a.active && void 0 !== a.loadTime)
                        return Number(a.loadTime);
                }, pl = function () {
                    var a = fl();
                    return a.active ? a.tcString || '' : '';
                }, rl = function () {
                    var a = fl();
                    return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? '1' : '0' : '';
                }, sl = function (a) {
                    if (!cl.hasOwnProperty(String(a)))
                        return !0;
                    var b = fl();
                    return b.active && b.uc ? !!b.uc[String(a)] : !0;
                };
            function tl(a) {
                var b = String(m.location).split(/[?#]/)[0], c = uf.Lg || m._CONSENT_MODE_SALT, d;
                if (a) {
                    var e;
                    if (c) {
                        var f = b + a + c, h = 1, k, l, n;
                        if (f)
                            for (h = 0, l = f.length - 1; 0 <= l; l--)
                                n = f.charCodeAt(l), h = (h << 6 & 268435455) + n + (n << 14), k = h & 266338304, h = 0 != k ? h ^ k >> 21 : h;
                        e = String(h);
                    } else
                        e = '0';
                    d = e;
                } else
                    d = '';
                return d;
            }
            function ul(a) {
                function b(t) {
                    var v;
                    vf.reported_gclid || (vf.reported_gclid = {});
                    v = vf.reported_gclid;
                    var w;
                    w = !h || Td() && !L(K.D) ? l + (t ? 'gcu' : 'gcs') : l + '.' + (f.prefix || '_gcl') + (t ? 'gcu' : 'gcs');
                    if (!v[w]) {
                        v[w] = !0;
                        var y = [], x = {}, z = function (M, N) {
                                N && (y.push(M + '=' + encodeURIComponent(N)), x[M] = !0);
                            }, B = 'https://www.google.com';
                        if (Td()) {
                            var D = L(K.D);
                            z('gcs', ce());
                            t && z('gcu', '1');
                            Ud() && z('gcd', 'G1' + Zd(Rd));
                            vf.dedupe_gclid || (vf.dedupe_gclid = '' + tg());
                            z('rnd', vf.dedupe_gclid);
                            if ((!l || n && 'aw.ds' !== n) && L(K.D)) {
                                var C = rh('_gcl_aw');
                                z('gclaw', C.join('.'));
                            }
                            z('url', String(m.location).split(/[?#]/)[0]);
                            z('dclid', vl(d, p));
                            var E = !1;
                            E = !0;
                            D || !d && !E || (B = 'https://pagead2.googlesyndication.com');
                        }
                        z('gdpr_consent', pl()), z('gdpr', rl());
                        '1' === bh(!1)._up && z('gtm_up', '1');
                        z('gclid', vl(d, l));
                        z('gclsrc', n);
                        if (!(x.gclid || x.dclid || x.gclaw) && (z('gbraid', vl(d, q)), !x.gbraid && Td() && L(K.D))) {
                            var G = rh('_gcl_gb');
                            z('gclgb', G.join('.'));
                        }
                        z('gtm', Mk(!e));
                        h && L(K.D) && (Eg(f || {}), z('auid', Ag[Bg(f.prefix)] || ''));
                        a.Uf && z('did', a.Uf);
                        var P = B + '/pagead/landing?' + y.join('&');
                        Ob(P);
                    }
                }
                var c = !!a.fe, d = !!a.qa, e = a.T, f = void 0 === a.ad ? {} : a.ad, h = void 0 === a.hd ? !0 : a.hd, k = xh(), l = k.gclid || '', n = k.gclsrc, p = k.dclid || '', q = k.gbraid || '', r = !c && ((!l || n && 'aw.ds' !== n ? !1 : !0) || q), u = Td();
                if (r || u)
                    u ? ee(function () {
                        b();
                        L(K.D) || de(function (t) {
                            return b(!0, t.Qh);
                        }, K.D);
                    }, [K.D]) : b();
            }
            function vl(a, b) {
                var c = a && !L(K.D);
                return b && c ? '0' : b;
            }
            var wl = function () {
                    this.o = {};
                }, xl = function (a, b, c) {
                    null != c && (a.o[b] = c);
                }, yl = function (a) {
                    return Object.keys(a.o).map(function (b) {
                        return encodeURIComponent(b) + '=' + encodeURIComponent(a.o[b]);
                    }).join('&');
                }, Al = function (a, b, c, d) {
                };
            var Cl = !1, Dl = Number('200');
            function El() {
                if (!m.Promise)
                    return !1;
                va(A.interestCohort) || Cl || (Cl = !0, Sk('A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9'));
                return va(A.interestCohort);
            }
            function Fl() {
                var a = vf.floc;
                if (a) {
                    var b = a.ts, c = a.floc;
                    if (b && c && 1000 > Ra() - b)
                        return Promise.resolve(c);
                }
                var d = void 0;
                try {
                    d = Promise.race([
                        A.interestCohort().then(function (e) {
                            vf.floc = {
                                ts: Ra(),
                                floc: e
                            };
                            return e;
                        }),
                        new Promise(function (e) {
                            m.setTimeout(function () {
                                return e();
                            }, Dl);
                        })
                    ]).catch(function () {
                    });
                } catch (e) {
                    return;
                }
                return d;
            }
            var Gl = [
                'aw',
                'dc',
                'gb'
            ];
            function Hl(a, b, c, d) {
                var e = a.Bg, f = a.callback, h = a.gg;
                if ('function' === typeof f)
                    if (e === K.vd && void 0 === h) {
                        var k = d(b.prefix, c);
                        0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k);
                    } else
                        e === K.$g ? (Eg(b, !1), f(Ag[Bg(b.prefix)])) : f(h);
            }
            function Il(a, b) {
                var c = a.Rf, d = a.eg, e = a.yg;
                if (a.Gb) {
                    var f = void 0 === c ? !0 : !!c;
                    jh(d[K.yb], !!d[K.P]) && Ch(Gl, b);
                    zh(b);
                    Fh(Gl, b);
                    Th(f, b);
                }
                d[K.P] && Eh(Gl, d[K.P], d[K.Tb], !!d[K.zb], b.prefix);
                e && Hh([
                    'aw',
                    'dc',
                    'gb'
                ]);
            }
            ;
            var Cm = function () {
                    var a = !0;
                    sl(7) && sl(9) && sl(10) || (a = !1);
                    var b = !0;
                    b = !1;
                    b && !Bm() && (a = !1);
                    return a;
                }, Bm = function () {
                    var a = !0;
                    sl(3) && sl(4) || (a = !1);
                    return a;
                };
            var fn = !1;
            var gn = !1;
            gn = !0;
            function hn() {
                var a = vf;
                return a.gcq = a.gcq || new jn();
            }
            var kn = function (a, b, c) {
                    hn().register(a, b, c);
                }, ln = function (a, b, c, d) {
                    hn().push('event', [
                        b,
                        a
                    ], c, d);
                }, mn = function (a, b) {
                    hn().push('config', [a], b);
                }, nn = function (a, b, c, d) {
                    hn().push('get', [
                        a,
                        b
                    ], c, d);
                }, on = {}, pn = function () {
                    this.status = 1;
                    this.containerConfig = {};
                    this.targetConfig = {};
                    this.remoteConfig = {};
                    this.s = {};
                    this.C = null;
                    this.o = !1;
                }, qn = function (a, b, c, d, e) {
                    this.type = a;
                    this.C = b;
                    this.T = c || '';
                    this.o = d;
                    this.s = e;
                }, jn = function () {
                    this.s = {};
                    this.C = {};
                    this.o = [];
                    this.F = {
                        AW: !1,
                        UA: !1
                    };
                    this.enableDeferrableCommandAfterConfig = fn;
                }, rn = function (a, b) {
                    var c = Xh(b);
                    return a.s[c.containerId] = a.s[c.containerId] || new pn();
                }, sn = function (a, b, c) {
                    if (b) {
                        var d = Xh(b);
                        if (d && 1 === rn(a, b).status) {
                            rn(a, b).status = 2;
                            var e = {};
                            Pj && (e.timeoutId = m.setTimeout(function () {
                                wd(38);
                                vj();
                            }, 3000));
                            a.push('require', [e], d.containerId);
                            on[d.containerId] = Ra();
                            if ($h()) {
                            } else {
                                var h = '/gtag/js?id=' + encodeURIComponent(d.containerId) + '&l=dataLayer&cx=c', k = ('http:' != m.location.protocol ? 'https:' : 'http:') + ('//www.googletagmanager.com' + h), l = vk(c, h) || k;
                                Bb(l);
                            }
                        }
                    }
                }, tn = function (a, b, c, d) {
                    if (d.T) {
                        var e = rn(a, d.T), f = e.C;
                        if (f) {
                            var h = H(c), k = H(e.targetConfig[d.T]), l = H(e.containerConfig), n = H(e.remoteConfig), p = H(a.C), q = Of('gtm.uniqueEventId'), r = Xh(d.T).prefix, u = Ta(function () {
                                    var v = h[K.xb];
                                    v && F(v);
                                }), t = Fk(Ek(Gk(Dk(Ck(Bk(Ak(zk(yk(h), k), l), n), p), function () {
                                    ck(q, r, '2');
                                    gn && u();
                                }), function () {
                                    ck(q, r, '3');
                                    gn && u();
                                }), function (v, w) {
                                    a.F[v] = w;
                                }), function (v) {
                                    return a.F[v];
                                });
                            try {
                                ck(q, r, '1');
                                f(d.T, b, d.C, t);
                            } catch (v) {
                                ck(q, r, '4');
                            }
                        }
                    }
                };
            jn.prototype.register = function (a, b, c) {
                var d = rn(this, a);
                if (3 !== d.status) {
                    d.C = b;
                    d.status = 3;
                    if (c) {
                        H(d.remoteConfig, c);
                        d.remoteConfig = c;
                    }
                    var e = Xh(a), f = on[e.containerId];
                    if (void 0 !== f) {
                        var h = vf[e.containerId].bootstrap, k = e.prefix.toUpperCase();
                        vf[e.containerId]._spx && (k = k.toLowerCase());
                        var l = Of('gtm.uniqueEventId'), n = k, p = Ra() - h;
                        if (Pj && !Aj[l]) {
                            l !== wj && (rj(), wj = l);
                            var q = n + '.' + Math.floor(h - f) + '.' + Math.floor(p);
                            Ej = Ej ? Ej + ',' + q : '&cl=' + q;
                        }
                        delete on[e.containerId];
                    }
                    this.flush();
                }
            };
            jn.prototype.push = function (a, b, c, d) {
                var e = Math.floor(Ra() / 1000);
                sn(this, c, b[0][K.na] || this.C[K.na]);
                fn && c && rn(this, c).o && (d = !1);
                this.o.push(new qn(a, e, c, b, d));
                d || this.flush();
            };
            jn.prototype.insert = function (a, b, c) {
                var d = Math.floor(Ra() / 1000);
                0 < this.o.length ? this.o.splice(1, 0, new qn(a, d, c, b, !1)) : this.o.push(new qn(a, d, c, b, !1));
            };
            jn.prototype.flush = function (a) {
                for (var b = this, c = [], d = !1, e = {}; this.o.length;) {
                    var f = this.o[0];
                    if (f.s)
                        fn ? !f.T || rn(this, f.T).o ? (f.s = !1, this.o.push(f)) : c.push(f) : (f.s = !1, this.o.push(f)), this.o.shift();
                    else {
                        switch (f.type) {
                        case 'require':
                            if (3 !== rn(this, f.T).status && !a) {
                                fn && this.o.push.apply(this.o, c);
                                return;
                            }
                            Pj && m.clearTimeout(f.o[0].timeoutId);
                            break;
                        case 'set':
                            Ja(f.o[0], function (r, u) {
                                H(Xa(r, u), b.C);
                            });
                            break;
                        case 'config':
                            e.Ia = {};
                            Ja(f.o[0], function (r) {
                                return function (u, t) {
                                    H(Xa(u, t), r.Ia);
                                };
                            }(e));
                            var h = !!e.Ia[K.Oc];
                            delete e.Ia[K.Oc];
                            var k = rn(this, f.T), l = Xh(f.T), n = l.containerId === l.id;
                            h || (n ? k.containerConfig = {} : k.targetConfig[f.T] = {});
                            k.o && h || tn(this, K.Ca, e.Ia, f);
                            k.o = !0;
                            delete e.Ia[K.Yb];
                            n ? H(e.Ia, k.containerConfig) : H(e.Ia, k.targetConfig[f.T]);
                            fn && (d = !0);
                            break;
                        case 'event':
                            e.yc = {};
                            Ja(f.o[0], function (r) {
                                return function (u, t) {
                                    H(Xa(u, t), r.yc);
                                };
                            }(e));
                            tn(this, f.o[1], e.yc, f);
                            break;
                        case 'get':
                            var p = {}, q = (p[K.Ma] = f.o[0], p[K.Ua] = f.o[1], p);
                            tn(this, K.Ka, q, f);
                        }
                        this.o.shift();
                        un(this, f);
                    }
                    e = {
                        Ia: e.Ia,
                        yc: e.yc
                    };
                }
                fn && (this.o.push.apply(this.o, c), d && this.flush());
            };
            var un = function (a, b) {
                if ('require' !== b.type)
                    if (b.T)
                        for (var c = a.getCommandListeners(b.T)[b.type] || [], d = 0; d < c.length; d++)
                            c[d]();
                    else
                        for (var e in a.s)
                            if (a.s.hasOwnProperty(e)) {
                                var f = a.s[e];
                                if (f && f.s)
                                    for (var h = f.s[b.type] || [], k = 0; k < h.length; k++)
                                        h[k]();
                            }
            };
            jn.prototype.getRemoteConfig = function (a) {
                return rn(this, a).remoteConfig;
            };
            jn.prototype.getCommandListeners = function (a) {
                return rn(this, a).s;
            };
            var vn = function (a, b, c) {
                    var d = {
                        event: b,
                        'gtm.element': a,
                        'gtm.elementClasses': Tb(a, 'className'),
                        'gtm.elementId': a['for'] || Kb(a, 'id') || '',
                        'gtm.elementTarget': a.formTarget || Tb(a, 'target') || ''
                    };
                    c && (d['gtm.triggers'] = c.join(','));
                    d['gtm.elementUrl'] = (a.attributes && a.attributes.formaction ? a.formAction : '') || a.action || Tb(a, 'href') || a.src || a.code || a.codebase || '';
                    return d;
                }, wn = function (a) {
                    vf.hasOwnProperty('autoEventsSettings') || (vf.autoEventsSettings = {});
                    var b = vf.autoEventsSettings;
                    b.hasOwnProperty(a) || (b[a] = {});
                    return b[a];
                }, xn = function (a, b, c) {
                    wn(a)[b] = c;
                }, yn = function (a, b, c, d) {
                    var e = wn(a), f = Sa(e, b, d);
                    e[b] = c(f);
                }, zn = function (a, b, c) {
                    var d = wn(a);
                    return Sa(d, b, c);
                };
            var An = [
                    'input',
                    'select',
                    'textarea'
                ], Bn = [
                    'button',
                    'hidden',
                    'image',
                    'reset',
                    'submit'
                ], Cn = function (a) {
                    var b = a.tagName.toLowerCase();
                    return !za(An, function (c) {
                        return c === b;
                    }) || 'input' === b && za(Bn, function (c) {
                        return c === a.type.toLowerCase();
                    }) ? !1 : !0;
                }, Dn = function (a) {
                    return a.form ? a.form.tagName ? a.form : A.getElementById(a.form) : Nb(a, ['form'], 100);
                }, En = function (a, b, c) {
                    if (!a.elements)
                        return 0;
                    for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                        var h = a.elements[e];
                        if (Cn(h)) {
                            if (h.dataset[c] === d)
                                return f;
                            f++;
                        }
                    }
                    return 0;
                };
            var Fn = !!m.MutationObserver, Gn = void 0, Hn = function (a) {
                    if (!Gn) {
                        var b = function () {
                            var c = A.body;
                            if (c)
                                if (Fn)
                                    new MutationObserver(function () {
                                        for (var e = 0; e < Gn.length; e++)
                                            F(Gn[e]);
                                    }).observe(c, {
                                        childList: !0,
                                        subtree: !0
                                    });
                                else {
                                    var d = !1;
                                    Ib(c, 'DOMNodeInserted', function () {
                                        d || (d = !0, F(function () {
                                            d = !1;
                                            for (var e = 0; e < Gn.length; e++)
                                                F(Gn[e]);
                                        }));
                                    });
                                }
                        };
                        Gn = [];
                        A.body ? b() : F(b);
                    }
                    Gn.push(a);
                };
            var Jn = !1, Kn = [];
            function Ln() {
                if (!Jn) {
                    Jn = !0;
                    for (var a = 0; a < Kn.length; a++)
                        F(Kn[a]);
                }
            }
            var Mn = function (a) {
                Jn ? F(a) : Kn.push(a);
            };
            function Nn(a, b) {
                a = String(a);
                b = String(b);
                var c = a.length - b.length;
                return 0 <= c && a.indexOf(b, c) == c;
            }
            var On = new Da();
            function Pn(a, b, c) {
                var d = c ? 'i' : void 0;
                try {
                    var e = String(b) + d, f = On.get(e);
                    f || (f = new RegExp(b, d), On.set(e, f));
                    return f.test(a);
                } catch (h) {
                    return !1;
                }
            }
            function Qn(a, b) {
                function c(h) {
                    var k = Be(h), l = ze(k, 'protocol'), n = ze(k, 'host', !0), p = ze(k, 'port'), q = ze(k, 'path').toLowerCase().replace(/\/$/, '');
                    if (void 0 === l || 'http' == l && '80' == p || 'https' == l && '443' == p)
                        l = 'web', p = 'default';
                    return [
                        l,
                        n,
                        p,
                        q
                    ];
                }
                for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
                    if (d[f] !== e[f])
                        return !1;
                return !0;
            }
            function Rn(a) {
                return Sn(a) ? 1 : 0;
            }
            function Sn(a) {
                var b = a.arg0, c = a.arg1;
                if (a.any_of && xa(c)) {
                    for (var d = 0; d < c.length; d++) {
                        var e = H(a, {});
                        H({
                            arg1: c[d],
                            any_of: void 0
                        }, e);
                        if (Rn(e))
                            return !0;
                    }
                    return !1;
                }
                switch (a['function']) {
                case '_cn':
                    return 0 <= String(b).indexOf(String(c));
                case '_css':
                    var f;
                    a: {
                        if (b) {
                            var h = [
                                'matches',
                                'webkitMatchesSelector',
                                'mozMatchesSelector',
                                'msMatchesSelector',
                                'oMatchesSelector'
                            ];
                            try {
                                for (var k = 0; k < h.length; k++)
                                    if (b[h[k]]) {
                                        f = b[h[k]](c);
                                        break a;
                                    }
                            } catch (n) {
                            }
                        }
                        f = !1;
                    }
                    return f;
                case '_ew':
                    return Nn(b, c);
                case '_eq':
                    return String(b) == String(c);
                case '_ge':
                    return Number(b) >= Number(c);
                case '_gt':
                    return Number(b) > Number(c);
                case '_lc':
                    var l;
                    l = String(b).split(',');
                    return 0 <= ya(l, String(c));
                case '_le':
                    return Number(b) <= Number(c);
                case '_lt':
                    return Number(b) < Number(c);
                case '_re':
                    return Pn(b, c, a.ignore_case);
                case '_sw':
                    return 0 == String(b).indexOf(String(c));
                case '_um':
                    return Qn(b, c);
                }
                return !1;
            }
            ;
            Object.freeze({
                dl: 1,
                id: 1
            });
            var Tn = {}, Un = function (a, b) {
                    b = b.toString().split(',');
                    for (var c = 0; c < b.length; c++)
                        Tn[b[c]] = Tn[b[c]] || [], Tn[b[c]].push(a);
                }, Vn = function (a) {
                    Ja(Tn, function (b, c) {
                        var d = ya(c, a);
                        0 <= d && c.splice(d, 1);
                    });
                };
            var Wn = 'HA GF G UA AW DC'.split(' '), Xn = !1;
            Xn = !0;
            var Yn = !1, Zn = !1;
            function $n(a, b) {
                var c = { event: a };
                b && (c.eventModel = H(b), b[K.xb] && (c.eventCallback = b[K.xb]), b[K.Gc] && (c.eventTimeout = b[K.Gc]));
                return c;
            }
            function ao(a) {
                a.hasOwnProperty('gtm.uniqueEventId') || Object.defineProperty(a, 'gtm.uniqueEventId', { value: If() });
                return a['gtm.uniqueEventId'];
            }
            function bo() {
                return Yn;
            }
            var co = {
                    config: function (a) {
                        var b, c = ao(a);
                        return b;
                    },
                    consent: function (a) {
                        function b() {
                            bo() && H(a[2], { subcommand: a[1] });
                        }
                        if (3 === a.length) {
                            wd(39);
                            var c = If(), d = a[1];
                            'default' === d ? (b(), ae(a[2])) : 'update' === d && (b(), be(a[2], c));
                        }
                    },
                    event: function (a) {
                        var b = a[1];
                        if (!(2 > a.length) && g(b)) {
                            var c;
                            if (2 < a.length) {
                                if (!Yb(a[2]) && void 0 != a[2] || 3 < a.length)
                                    return;
                                c = a[2];
                            }
                            var d = $n(b, c), e = ao(a);
                            d['gtm.uniqueEventId'] = e;
                            return d;
                        }
                    },
                    get: function (a) {
                    },
                    js: function (a) {
                        if (2 == a.length && a[1].getTime) {
                            Zn = !0;
                            bo();
                            var b = {};
                            return b.event = 'gtm.js', b['gtm.start'] = a[1].getTime(), b['gtm.uniqueEventId'] = ao(a), b;
                        }
                    },
                    policy: function () {
                    },
                    set: function (a) {
                        var b;
                        2 == a.length && Yb(a[1]) ? b = H(a[1]) : 3 == a.length && g(a[1]) && (b = {}, Yb(a[2]) || xa(a[2]) ? b[a[1]] = H(a[2]) : b[a[1]] = a[2]);
                        if (b) {
                            b._clear = !0;
                            return b;
                        }
                    }
                }, eo = { policy: !0 };
            var fo = function (a, b) {
                    var c = a.hide;
                    if (c && void 0 !== c[b] && c.end) {
                        c[b] = !1;
                        var d = !0, e;
                        for (e in c)
                            if (c.hasOwnProperty(e) && !0 === c[e]) {
                                d = !1;
                                break;
                            }
                        d && (c.end(), c.end = null);
                    }
                }, ho = function (a) {
                    var b = go(), c = b && b.hide;
                    c && c.end && (c[a] = !0);
                };
            var yo = function (a) {
                if (xo(a))
                    return a;
                this.o = a;
            };
            yo.prototype.gi = function () {
                return this.o;
            };
            var xo = function (a) {
                return !a || 'object' !== Wb(a) || Yb(a) ? !1 : 'getUntrustedUpdateValue' in a;
            };
            yo.prototype.getUntrustedUpdateValue = yo.prototype.gi;
            var zo = [], Ao = !1, Bo = !1, Co = !1, Do = function (a) {
                    return m['dataLayer'].push(a);
                }, Eo = function (a) {
                    var b = vf['dataLayer'], c = b ? b.subscribers : 1, d = 0, e = a;
                    return function () {
                        ++d === c && (e(), e = null);
                    };
                };
            function Fo(a) {
                var b = a._clear;
                Ja(a, function (d, e) {
                    '_clear' !== d && (b && Rf(d, void 0), Rf(d, e));
                });
                Df || (Df = a['gtm.start']);
                var c = a['gtm.uniqueEventId'];
                if (!a.event)
                    return !1;
                c || (c = If(), a['gtm.uniqueEventId'] = c, Rf('gtm.uniqueEventId', c));
                return tk(a);
            }
            function Go() {
                var a = zo[0];
                if (null == a || 'object' !== typeof a)
                    return !1;
                if (a.event)
                    return !0;
                if (La(a)) {
                    var b = a[0];
                    if ('config' === b || 'event' === b || 'js' === b)
                        return !0;
                }
                return !1;
            }
            function Ho() {
                for (var a = !1; !Co && 0 < zo.length;) {
                    if (!Bo && Go()) {
                        var b = {};
                        zo.unshift((b.event = 'gtm.init', b));
                        Bo = !0;
                    }
                    if (!Ao && Go()) {
                        var c = {};
                        zo.unshift((c.event = 'gtm.init_consent', c));
                        Ao = !0;
                    }
                    Co = !0;
                    delete Lf.eventModel;
                    Nf();
                    var d = zo.shift();
                    if (null != d) {
                        var e = xo(d);
                        if (e) {
                            var f = d;
                            d = xo(f) ? f.getUntrustedUpdateValue() : void 0;
                            for (var h = [
                                        'gtm.allowlist',
                                        'gtm.blocklist',
                                        'gtm.whitelist',
                                        'gtm.blacklist',
                                        'tagTypeBlacklist'
                                    ], k = 0; k < h.length; k++) {
                                var l = h[k], n = Of(l, 1);
                                if (xa(n) || Yb(n))
                                    n = H(n);
                                Mf[l] = n;
                            }
                        }
                        try {
                            if (va(d))
                                try {
                                    d.call(Pf);
                                } catch (y) {
                                }
                            else if (xa(d)) {
                                var p = d;
                                if (g(p[0])) {
                                    var q = p[0].split('.'), r = q.pop(), u = p.slice(1), t = Of(q.join('.'), 2);
                                    if (void 0 !== t && null !== t)
                                        try {
                                            t[r].apply(t, u);
                                        } catch (y) {
                                        }
                                }
                            } else {
                                if (La(d)) {
                                    a: {
                                        var v = d;
                                        if (v.length && g(v[0])) {
                                            var w = co[v[0]];
                                            if (w && (!e || !eo[v[0]])) {
                                                d = w(v);
                                                break a;
                                            }
                                        }
                                        d = void 0;
                                    }
                                    if (!d) {
                                        Co = !1;
                                        continue;
                                    }
                                }
                                a = Fo(d) || a;
                            }
                        } finally {
                            e && Nf(!0);
                        }
                    }
                    Co = !1;
                }
                return !a;
            }
            function Io() {
                var b = Ho();
                try {
                    fo(m['dataLayer'], uf.M);
                } catch (c) {
                }
                return b;
            }
            var Ko = function () {
                    var a = zb('dataLayer', []), b = zb('google_tag_manager', {});
                    b = b['dataLayer'] = b['dataLayer'] || {};
                    Ii(function () {
                        b.gtmDom || (b.gtmDom = !0, a.push({ event: 'gtm.dom' }));
                    });
                    Mn(function () {
                        b.gtmLoad || (b.gtmLoad = !0, a.push({ event: 'gtm.load' }));
                    });
                    b.subscribers = (b.subscribers || 0) + 1;
                    var c = a.push;
                    a.push = function () {
                        var e;
                        if (0 < vf.SANDBOXED_JS_SEMAPHORE) {
                            e = [];
                            for (var f = 0; f < arguments.length; f++)
                                e[f] = new yo(arguments[f]);
                        } else
                            e = [].slice.call(arguments, 0);
                        var h = c.apply(a, e);
                        zo.push.apply(zo, e);
                        if (300 < this.length)
                            for (wd(4); 300 < this.length;)
                                this.shift();
                        var k = 'boolean' !== typeof h || h;
                        return Ho() && k;
                    };
                    var d = a.slice(0);
                    zo.push.apply(zo, d);
                    if (Jo()) {
                        F(Io);
                    }
                }, Jo = function () {
                    var a = !0;
                    return a;
                };
            var Lo = {};
            Lo.Rc = new String('undefined');
            var Mo = function (a) {
                this.o = function (b) {
                    for (var c = [], d = 0; d < a.length; d++)
                        c.push(a[d] === Lo.Rc ? b : a[d]);
                    return c.join('');
                };
            };
            Mo.prototype.toString = function () {
                return this.o('undefined');
            };
            Mo.prototype.valueOf = Mo.prototype.toString;
            Lo.Eh = Mo;
            Lo.Zd = {};
            Lo.Uh = function (a) {
                return new Mo(a);
            };
            var No = {};
            Lo.Ii = function (a, b) {
                var c = If();
                No[c] = [
                    a,
                    b
                ];
                return c;
            };
            Lo.Sf = function (a) {
                var b = a ? 0 : 1;
                return function (c) {
                    var d = No[c];
                    if (d && 'function' === typeof d[b])
                        d[b]();
                    No[c] = void 0;
                };
            };
            Lo.li = function (a) {
                for (var b = !1, c = !1, d = 2; d < a.length; d++)
                    b = b || 8 === a[d], c = c || 16 === a[d];
                return b && c;
            };
            Lo.Ci = function (a) {
                if (a === Lo.Rc)
                    return a;
                var b = If();
                Lo.Zd[b] = a;
                return 'google_tag_manager["' + uf.M + '"].macro(' + b + ')';
            };
            Lo.yi = function (a, b, c) {
                a instanceof Lo.Eh && (a = a.o(Lo.Ii(b, c)), b = ua);
                return {
                    hi: a,
                    onSuccess: b
                };
            };
            var Yo = m.clearTimeout, Zo = m.setTimeout, R = function (a, b, c) {
                    if ($h()) {
                        b && F(b);
                    } else
                        return Bb(a, b, c);
                }, $o = function () {
                    return new Date();
                }, ap = function () {
                    return m.location.href;
                }, bp = function (a) {
                    return ze(Be(a), 'fragment');
                }, cp = function (a) {
                    return Ae(Be(a));
                }, dp = function (a, b) {
                    return Of(a, b || 2);
                }, ep = function (a, b, c) {
                    var d;
                    b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Do(a)) : d = Do(a);
                    return d;
                }, fp = function (a, b) {
                    m[a] = b;
                }, U = function (a, b, c) {
                    b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
                    return m[a];
                }, gp = function (a, b, c) {
                    return fg(a, b, void 0 === c ? !0 : !!c);
                }, hp = function (a, b, c) {
                    return 0 === og(a, b, c);
                }, ip = function (a, b) {
                    if ($h()) {
                        b && F(b);
                    } else
                        Gb(a, b);
                }, jp = function (a) {
                    return !!zn(a, 'init', !1);
                }, kp = function (a) {
                    xn(a, 'init', !0);
                }, lp = function (a) {
                    var b = Bf + '?id=' + encodeURIComponent(a) + '&l=dataLayer';
                    R(bi('https://', 'http://', b));
                }, mp = function (a, b, c) {
                    Pj && (Zb(a) || dk(c, b, a));
                };
            var np = Lo.yi;
            var Kp = encodeURI, W = encodeURIComponent, Lp = Hb;
            var Mp = function (a, b) {
                if (!a)
                    return !1;
                var c = ze(Be(a), 'host');
                if (!c)
                    return !1;
                for (var d = 0; b && d < b.length; d++) {
                    var e = b[d] && b[d].toLowerCase();
                    if (e) {
                        var f = c.length - e.length;
                        0 < f && '.' != e.charAt(0) && (f--, e = '.' + e);
                        if (0 <= f && c.indexOf(e, f) == f)
                            return !0;
                    }
                }
                return !1;
            };
            var Np = function (a, b, c) {
                for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
                    a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
                return e ? d : null;
            };
            function tr() {
                return m.gaGlobal = m.gaGlobal || {};
            }
            var ur = function () {
                    var a = tr();
                    a.hid = a.hid || Ba();
                    return a.hid;
                }, vr = function (a, b) {
                    var c = tr();
                    if (void 0 == c.vid || b && !c.from_cookie)
                        c.vid = a, c.from_cookie = b;
                };
            var Wr = function () {
                if (va(m.__uspapi)) {
                    var a = '';
                    try {
                        m.__uspapi('getUSPData', 1, function (b, c) {
                            if (c && b) {
                                var d = b.uspString;
                                d && /^[\da-zA-Z-]{1,20}$/.test(d) && (a = d);
                            }
                        });
                    } catch (b) {
                    }
                    return a;
                }
            };
            var qs = window, rs = document, ss = function (a) {
                    var b = qs._gaUserPrefs;
                    if (b && b.ioo && b.ioo() || a && !0 === qs['ga-disable-' + a])
                        return !0;
                    try {
                        var c = qs.external;
                        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs)
                            return !0;
                    } catch (f) {
                    }
                    for (var d = bg('AMP_TOKEN', String(rs.cookie), !0), e = 0; e < d.length; e++)
                        if ('$OPT_OUT' == d[e])
                            return !0;
                    return rs.getElementById('__gaOptOutExtension') ? !0 : !1;
                };
            var ts = {};
            function ws(a) {
                delete a.eventModel[K.Yb];
                ys(a.eventModel);
            }
            var ys = function (a) {
                Ja(a, function (c) {
                    '_' === c.charAt(0) && delete a[c];
                });
                var b = a[K.Oa] || {};
                Ja(b, function (c) {
                    '_' === c.charAt(0) && delete b[c];
                });
            };
            var Bs = function (a, b, c) {
                    ln(b, c, a);
                }, Cs = function (a, b, c) {
                    ln(b, c, a, !0);
                }, Gs = function (a, b) {
                };
            function Ds(a, b) {
            }
            var X = { g: {} };
            X.g.e = ['google'], function () {
                (function (a) {
                    X.__e = a;
                    X.__e.h = 'e';
                    X.__e.m = !0;
                    X.__e.priorityOverride = 0;
                }(function (a) {
                    var b = String(Uf(a.vtp_gtmEventId, 'event'));
                    a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                    return b;
                }));
            }();
            X.g.f = ['google'], function () {
                (function (a) {
                    X.__f = a;
                    X.__f.h = 'f';
                    X.__f.m = !0;
                    X.__f.priorityOverride = 0;
                }(function (a) {
                    var b = dp('gtm.referrer', 1) || A.referrer;
                    return b ? a.vtp_component && 'URL' != a.vtp_component ? ze(Be(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : cp(String(b)) : String(b);
                }));
            }();
            X.g.u = ['google'], function () {
                var a = function (b) {
                    return {
                        toString: function () {
                            return b;
                        }
                    };
                };
                (function (b) {
                    X.__u = b;
                    X.__u.h = 'u';
                    X.__u.m = !0;
                    X.__u.priorityOverride = 0;
                }(function (b) {
                    var c;
                    c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : dp('gtm.url', 1)) || ap();
                    var d = b[a('vtp_component')];
                    if (!d || 'URL' == d)
                        return cp(String(c));
                    var e = Be(String(c)), f;
                    if ('QUERY' === d)
                        a: {
                            var h = b[a('vtp_multiQueryKeys').toString()], k = b[a('vtp_queryKey').toString()] || '', l = b[a('vtp_ignoreEmptyQueryParam').toString()], n;
                            h ? xa(k) ? n = k : n = String(k).replace(/\s+/g, '').split(',') : n = [String(k)];
                            for (var p = 0; p < n.length; p++) {
                                var q = ze(e, 'QUERY', void 0, void 0, n[p]);
                                if (void 0 != q && (!l || '' !== q)) {
                                    f = q;
                                    break a;
                                }
                            }
                            f = void 0;
                        }
                    else
                        f = ze(e, d, 'HOST' == d ? b[a('vtp_stripWww')] : void 0, 'PATH' == d ? b[a('vtp_defaultPages')] : void 0, void 0);
                    return f;
                }));
            }();
            X.g.paused = [], function () {
                (function (a) {
                    X.__paused = a;
                    X.__paused.h = 'paused';
                    X.__paused.m = !0;
                    X.__paused.priorityOverride = 0;
                }(function (a) {
                    F(a.vtp_gtmOnFailure);
                }));
            }();
            X.g.html = ['customScripts'], function () {
                function a(d, e, f, h) {
                    return function () {
                        const $___old_521321657d4e6ad7 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                        try {
                            if ($___old_521321657d4e6ad7)
                                ({}.constructor.defineProperty(window, 'localStorage', $___mock_0af09b6b8c778d41.localStorage));
                            return function () {
                                try {
                                    if (0 < e.length) {
                                        var k = e.shift(), l = a(d, e, f, h);
                                        if ('SCRIPT' == String(k.nodeName).toUpperCase() && 'text/gtmscript' == k.type) {
                                            var n = A.createElement('script');
                                            n.async = !1;
                                            n.type = 'text/javascript';
                                            n.id = k.id;
                                            n.text = k.text || k.textContent || k.innerHTML || '';
                                            k.charset && (n.charset = k.charset);
                                            var p = k.getAttribute('data-gtmsrc');
                                            p && (n.src = p, Ab(n, l));
                                            d.insertBefore(n, null);
                                            p || l();
                                        } else if (k.innerHTML && 0 <= k.innerHTML.toLowerCase().indexOf('<script')) {
                                            for (var q = []; k.firstChild;)
                                                q.push(k.removeChild(k.firstChild));
                                            d.insertBefore(k, null);
                                            a(k, q, l, h)();
                                        } else
                                            d.insertBefore(k, null), l();
                                    } else
                                        f();
                                } catch (r) {
                                    F(h);
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_521321657d4e6ad7)
                                ({}.constructor.defineProperty(window, 'localStorage', $___old_521321657d4e6ad7));
                        }
                    };
                }
                var c = function (d) {
                    if (A.body) {
                        var e = d.vtp_gtmOnFailure, f = np(d.vtp_html, d.vtp_gtmOnSuccess, e), h = f.hi, k = f.onSuccess;
                        if (d.vtp_useIframe) {
                        } else
                            d.vtp_supportDocumentWrite ? b(h, k, e) : a(A.body, Mb(h), k, e)();
                    } else
                        Zo(function () {
                            c(d);
                        }, 200);
                };
                X.__html = c;
                X.__html.h = 'html';
                X.__html.m = !0;
                X.__html.priorityOverride = 0;
            }();
            var Hs = {};
            Hs.macro = function (a) {
                if (Lo.Zd.hasOwnProperty(a))
                    return Lo.Zd[a];
            }, Hs.onHtmlSuccess = Lo.Sf(!0), Hs.onHtmlFailure = Lo.Sf(!1);
            Hs.dataLayer = Pf;
            Hs.callback = function (a) {
                Gf.hasOwnProperty(a) && va(Gf[a]) && Gf[a]();
                delete Gf[a];
            };
            Hs.bootstrap = 0;
            Hs._spx = !1;
            function Is() {
                vf[uf.M] = Hs;
                Ua(Hf, X.g);
                Kc = Kc || Lo;
                Lc = Tc;
            }
            function Js() {
                var a = !1;
                a && Ri('INIT');
                Bd().s();
                vf = m.google_tag_manager = m.google_tag_manager || {};
                ol();
                kh.enable_gbraid_cookie_write = !0;
                if (vf[uf.M]) {
                    var b = vf.zones;
                    b && b.unregisterChild(uf.M);
                } else {
                    for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++)
                        Dc.push(d[e]);
                    for (var f = c.tags || [], h = 0; h < f.length; h++)
                        Gc.push(f[h]);
                    for (var k = c.predicates || [], l = 0; l < k.length; l++)
                        Fc.push(k[l]);
                    for (var n = c.rules || [], p = 0; p < n.length; p++) {
                        for (var q = n[p], r = {}, u = 0; u < q.length; u++)
                            r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
                        Ec.push(r);
                    }
                    Ic = X;
                    Jc = Rn;
                    Is();
                    Ko();
                    Di = !1;
                    Ei = 0;
                    if ('interactive' == A.readyState && !A.createEventObject || 'complete' == A.readyState)
                        Gi();
                    else {
                        Ib(A, 'DOMContentLoaded', Gi);
                        Ib(A, 'readystatechange', Gi);
                        if (A.createEventObject && A.documentElement.doScroll) {
                            var t = !0;
                            try {
                                t = !m.frameElement;
                            } catch (z) {
                            }
                            t && Hi();
                        }
                        Ib(m, 'load', Gi);
                    }
                    Jn = !1;
                    'complete' === A.readyState ? Ln() : Ib(m, 'load', Ln);
                    Pj && m.setInterval(Jj, 86400000);
                    Ef = new Date().getTime();
                    if (a) {
                        var x = Si('INIT');
                    }
                }
            }
            (function (a) {
                if (!m['__TAGGY_INSTALLED']) {
                    var b = !1;
                    if (A.referrer) {
                        var c = Be(A.referrer);
                        b = 'cct.google' === ye(c, 'host');
                    }
                    if (!b) {
                        var d = fg('googTaggyReferrer');
                        b = d.length && d[0].length;
                    }
                    b && (m['__TAGGY_INSTALLED'] = !0, Bb('https://cct.google/taggy/agent.js'));
                }
                var f = function () {
                        var n = m['google.tagmanager.debugui2.queue'];
                        n || (n = [], m['google.tagmanager.debugui2.queue'] = n, Bb('https://www.googletagmanager.com/debug/bootstrap'));
                        var p = {
                            messageType: 'CONTAINER_STARTING',
                            data: {
                                scriptSource: yb,
                                containerProduct: 'GTM',
                                debug: !1
                            }
                        };
                        p.data.resume = function () {
                            a();
                        };
                        uf.Kg && (p.data.initialPublish = !0);
                        n.push(p);
                    }, h = 'x' === ze(m.location, 'query', !1, void 0, 'gtm_debug');
                if (!h && A.referrer) {
                    var k = Be(A.referrer);
                    h = 'tagassistant.google.com' === ye(k, 'host');
                }
                if (!h) {
                    var l = fg('__TAG_ASSISTANT');
                    h = l.length && l[0].length;
                }
                m.__TAG_ASSISTANT_API && (h = !0);
                h && yb ? f() : a();
            }(Js));
        }());
    }())
}