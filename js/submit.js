	var input= document.createElement('input');

	var supports = {};

	supports.autofocus   = 'autofocus' in input;
    supports.required    = 'required' in input;
    supports.placeholder = 'placeholder' in input;
	
	if(!supports.autofocus){
		document.getElementById('contact-submit').focus();
	}
	if(!supports.required){
		alert("Name must be filled out");
        return false;
	}
	if(!supports.placeholder){
		return false;
	}
	