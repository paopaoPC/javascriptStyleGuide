function encode_id_with_array(a,b){for(var c=0,d=0;d<b.length;d++)c+=factor(a,b.length-d,b[d]);return c}function get_parent_id_with_array(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d]);c.pop();for(var e=0,d=0;d<c.length;d++)e+=factor(a,c.length-d,c[d]);return e}function factor(opts,count,current){if(1==count)return current;for(var str="",i=count-1;i>0;i--)str+=current*opts.step+"*";return eval(str+"1")}!function(a){function b(b){a(b.documment_selector).find(":header").each(function(){var c=parseInt(this.nodeName.substring(1),10);d(b,this,c),e(b,a(this))})}function c(b){var c=a(b._zTree);c=a.fn.zTree.init(c,b.ztreeSetting,b._header_nodes).expandAll(b.is_expand_all),a(b._zTree).css(b.ztreeStyle)}function d(b,c,d){if(b._headers.length==d)b._headers[d-1]++;else if(b._headers.length>d)b._headers=b._headers.slice(0,d),b._headers[d-1]++;else if(b._headers.length<d)for(var e=0;e<d-b._headers.length;e++)b._headers.push(1);1==b.is_auto_number&&(-1!=a(c).text().indexOf(b._headers.join("."))||a(c).text(b._headers.join(".")+". "+a(c).text()))}function e(b,c){var d=encode_id_with_array(b,b._headers),e=get_parent_id_with_array(b,b._headers);a(c).attr("id",d),h(a(c).text()),b._header_offsets.push(a(c).offset().top-b.highlight_offset),h("h offset ="+(a(c).offset().top-b.highlight_offset)),b._header_nodes.push({id:d,pId:e,name:a(c).text()||"null",open:!0,url:"#"+d,target:"_self"})}function f(b){var c,d=function(){c&&clearTimeout(c),c=setTimeout(function(){var c=a(window).scrollTop();b.debug&&console.log("top="+c);for(var d=0,e=b._header_offsets.length;e>d;d++)if(b._header_offsets[d]>=c+5){console.log("opts._header_offsets["+d+"] = "+b._header_offsets[d]),a("a").removeClass("curSelectedNode"),a("#tree_"+(d+1)+"_a").addClass("curSelectedNode");break}},b.refresh_scroll_time)};b.highlight_on_scroll&&(a(window).bind("scroll",d),d())}function g(b){b.highlight_offset=a(b.documment_selector).offset().top}function h(a){}a.fn.ztree_toc=function(d){var e=a.extend({},a.fn.ztree_toc.defaults,d);return this.each(function(){e._zTree=a(this),g(e),b(e),c(e),f(e)})},a.fn.ztree_toc.defaults={_zTree:null,_headers:[],_header_offsets:[],_header_nodes:[{id:1,pId:0,name:"Table of Content",open:!0}],debug:!0,highlight_offset:0,highlight_on_scroll:!0,refresh_scroll_time:50,documment_selector:"body",is_posion_top:!1,is_auto_number:!1,is_expand_all:!0,is_highlight_selected_line:!0,step:100,ztreeStyle:{width:"260px",overflow:"auto",position:"fixed","z-index":2147483647,border:"0px none",left:"0px",bottom:"0px"},ztreeSetting:{view:{dblClickExpand:!1,showLine:!0,showIcon:!1,selectedMulti:!1},data:{simpleData:{enable:!0,idKey:"id",pIdKey:"pId"}},callback:{beforeClick:function(b,c){a("a").removeClass("curSelectedNode"),1==c.id&&console.log("click root table of content"),1==a.fn.ztree_toc.defaults.is_highlight_selected_line&&a("#"+c.id).css("color","red").fadeOut("slow",function(){a(this).show().css("color","black")})},onRightClick:function(a,b,c){1==c.id&&console.log("right_click root table of content")}}}}}(jQuery);