Visualforce Challenges for Revature Salesforce training

Challenge I -attempted
Create a Visualforce page that displays a single Account, specified as a parameter in the URL.

Challenge II -not complete
Modify your Visualforce page to display a paginated table of Accounts.

Challenge III -not complete
Modify your Visualforce page to display a single Account, but this time the Account should always be the same, regardless of the parameter in the URL. You may not use a Standard Controller.

Challenge IV -attempted
Add to your Visualforce page an About Me section. This should simply be a paragraph about yourself. However, this paragraph should be translated to Spanish if the current viewing user has their language set to Spanish. Download this creation as a PDF.


I.

public with sharing class AccountController {
    public Account account { get; private set; }

    public AccountController() {
        // Get the account ID from the URL
        Id accountId = ApexPages.currentPage().getParameters().get('id');

        // if the account ID is not null
        if (accountId != null) {
            // Query the Account record
            account = [SELECT Id, Name, Phone, Industry, BillingCity, BillingState FROM Account WHERE Id = :accountId LIMIT 1];
        } else {
            // If ID is not provided / invalid
            account = new Account();
        }
    }
}


## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

- https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm

- https://salesforcediaries.com/2019/09/16/passing-value-from-lwc-to-parent-aura-component/

- https://www.greytrix.com/blogs/salesforce/2021/02/12/using-aura-method-to-pass-value-from-child-component-to-parent-component-with-example/
