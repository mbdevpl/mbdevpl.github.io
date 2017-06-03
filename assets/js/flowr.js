(function(){flowr=function(elem,options){$this=elem;var extend=function(out){out=out||{};for(var i=1;i<arguments.length;i++){if(!arguments[i]){continue}for(var key in arguments[i]){if(arguments[i].hasOwnProperty(key)){out[key]=arguments[i][key]}}}return out};var data=(function(){var lastId=0,store={};return{set:function(element,info){var id;if(element.myCustomDataTag===undefined){id=lastId++;element.myCustomDataTag=id}else{id=element.myCustomDataTag}store[id]=extend(store[id],info)},get:function(element){return store[element.myCustomDataTag]||{}}}}());function reorderContent(){var _initialWidth=data.get($this).width;var _newWidth=$this.offsetWidth;var _change=_initialWidth-_newWidth;if(_initialWidth!=_newWidth){$this.innerHTML="";var _settings=data.get($this).lastSettings||{};_settings.data=data.get($this).data||{};_settings.maxWidth=$this.offsetWidth-1;flowr($this,_settings)}}var ROW_CLASS_NAME="flowr-row";var MAX_LAST_ROW_GAP=25;var NO_COPY_FIELDS=["complete","data","responsive"];var DEFAULTS={data:[],padding:5,height:240,render:null,append:false,widthAttr:"width",heightAttr:"height",maxScale:1.5,maxWidth:$this.offsetWidth-1,itemWidth:null,itemHeight:null,complete:null,rowClassName:ROW_CLASS_NAME,rows:-1,responsive:true};var settings=extend(DEFAULTS,options);if(settings.append&&data.get($this).lastSettings){lastSettings=data.get($this).lastSettings;for(attr in DEFAULTS){if(NO_COPY_FIELDS.indexOf(attr)<0&&settings[attr]==DEFAULTS[attr]){settings[attr]=lastSettings[attr]}}lastRow=data.get($this).lastRow;if(lastRow.data.length>0&&settings.maxWidth-lastRow.width>MAX_LAST_ROW_GAP){lastRowData=lastSettings.data.slice(lastSettings.data.length-lastRow.data.length-1);settings.data=lastRowData.concat(settings.data);$("."+settings.rowClassName+":last",$this).detach()}else{}}if(!settings.responsive&&!settings.append){$this.width($this.width())}if(!(settings.data instanceof Array)){return}if(typeof(settings.padding)!="number"){settings.padding=parseInt(settings.padding)}if(typeof(settings.itemWidth)!="function"){settings.itemWidth=function(data){return data[settings.widthAttr]}}if(typeof(settings.itemHeight)!="function"){settings.itemHeight=function(data){return data[settings.heightAttr]}}function getNextRow(data,settings){var itemIndex=0;var itemsLength=data.length;var lineItems=[];var lineWidth=0;var maxWidth=settings.maxWidth;var paddingSize=settings.padding;requiredPadding=function(){var extraPads=arguments.length==1?arguments[0]:0;return(lineItems.length-1+extraPads)*settings.padding};while(lineWidth+requiredPadding()<settings.maxWidth&&(itemIndex<itemsLength)){var itemData=data[itemIndex];var itemWidth=settings.itemWidth.call($this,itemData);var itemHeight=settings.itemHeight.call($this,itemData);var minHeight=settings.height;var minWidth=Math.floor(itemWidth*settings.height/itemHeight);if(minWidth>settings.maxWidth){minWidth=settings.maxWidth-1-requiredPadding(1);minHeight=settings.height*minHeight/minWidth}var newLineWidth=lineWidth+minWidth;if(newLineWidth<settings.maxWidth){lineItems.push({height:minHeight,width:minWidth,itemData:itemData});lineWidth+=minWidth;itemIndex++}else{break}}testWidth=0;if(lineWidth<settings.maxWidth){var fullScaleWidth=settings.maxWidth-requiredPadding()-10;var currScaleWidth=lineWidth;var scaleFactor=fullScaleWidth/currScaleWidth;if(scaleFactor>settings.maxScale){scaleFactor=1}var newHeight=Math.round(settings.height*scaleFactor);for(i=0;i<lineItems.length;i++){var lineItem=lineItems[i];lineItem.width=Math.floor(lineItem.width*scaleFactor);lineItem.height=newHeight;testWidth+=lineItem.width}}return{data:lineItems,width:testWidth+requiredPadding()}}if(settings.responsive&&!data.get($this).__responsive){window.addEventListener("resize",function(){initialWidth=data.get($this).width;newWidth=$this.offsetWidth;if(initialWidth!=newWidth){var task_id=data.get($this).task_id;if(task_id){task_id=clearTimeout(task_id);task_id=null}task_id=setTimeout(function(){reorderContent(data)},80);data.set($this,{task_id:task_id})}});data.set($this,{__responsive:true})}var _data=settings.data.slice(0);var rowData=null;var currentRow=0;var currentItem=0;var allData=[];for(i=0;i<_data.length;i++){allData.push(_data[i])}data.set($this,{data:allData});while((rowData=getNextRow(_data,settings))!=null&&rowData.data.length>0){if(settings.rows>0&&currentRow>=settings.rows){break}_data.splice(0,rowData.data.length);var $row=document.createElement("DIV");if($row.classList){$row.classList.add(settings.rowClassName)}else{$row.className+=" "+settings.rowClassName}var slack=$this.clientWidth-rowData.width-2*settings.padding;for(i=0;i<rowData.data.length;i++){var displayData=rowData.data[i];var displayObject=settings.render.call($this,displayData);extraw=Math.floor(slack/rowData.data.length);if(i==0){extraw+=slack%rowData.data.length}displayObject.style.width=displayData.width+extraw;displayObject.style.height=displayData.height;displayObject.style.marginBottom=settings.padding+"px";displayObject.style.marginLeft=i==0?"0":settings.padding+"px";$row.append(displayObject);currentItem++}$this.append($row);currentRow++;data.set($this,{lastRow:rowData})}data.set($this,{lastSettings:settings});if(typeof(settings.complete)=="function"){var completeData={renderedRows:currentRow,renderedItems:currentItem};settings.complete.call($this,completeData)}}})();