({
	callParentMethod : function(component, event, helper) {
        //Call Parent aura method
        var parentComponent = component.get("v.parent");                         
		parentComponent.greetingMethod('Happy coding','session')
    }

    

})