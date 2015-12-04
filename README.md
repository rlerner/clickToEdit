# clickToEdit
Javascript/jQuery Form Helper for Quick Field Editing

## Usage
```html
<div id="fieldname" onclick="clickToEditField(this.id,\"savepath.xxx?get=param\")">Text Value</div>
```

Usage Portion | Example Value | Description
--- | --- | ---
div id Field Name | id | Populated as the "field" variable in POST
Form Post Path | savepath.xxx | Form POST handler script
Optional GET Parameters | ?get=param | If needed, GET Parameters can also be sent out
Current Value | Text Value | The value of the field in the system. Will update after editing.



## Demo
The demo.html attached uses PHP. Once you edit a field, the data is stored to a log file. The HTML is not updated with the new edit information when you reload it.


