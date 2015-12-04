	function clickToEditField(fieldId,savePath) {
		fieldId = fieldId.toString();
		savePath = savePath.toString();
		var text = '';
		document.getElementById(fieldId).style.display = 'none';
		if (typeof document.getElementById(fieldId).innerHTML.toString() !== 'undefined') {
			var text = document.getElementById(fieldId).innerHTML.toString();
		}
		else if (typeof document.getElementById(fieldId).value.toString() !== 'undefined') {
			//Honestly, field values won't work right. The innerHTML is the replaced property, so ignore this code or remove it if it is troublesome.
			var text = document.getElementById(fieldId).value.toString();
		}
		$("#"+fieldId).after('<div id="'+fieldId+'-editbox"><input type="text" id="' + fieldId + '-edit"  value="' + text.toString() + '" /><br><input type="button" value="Save" onclick="clickToEditSave(\'' + fieldId + '\',\'' + savePath + '\')" /><input type="button" value="Cancel" onclick="clickToEditCancel(\'' + fieldId + '\')" /></div>');
	}

	function clickToEditSave(fieldId,savePath) {
		var text = document.getElementById(fieldId+'-edit').value;
		document.getElementById(fieldId).innerHTML = text;
		clickToEditCancel(fieldId);

	    $.post(savePath, {field: fieldId,value: text}, function(result){
	        alert(result);
	    });
	}
	function clickToEditCancel(fieldId) {
		$("#"+fieldId+'-editbox').remove();
		document.getElementById(fieldId).style.display = '';
	}
