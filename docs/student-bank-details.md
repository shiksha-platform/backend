student bank details
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|student Id|ID of the student|int|Yes|Foreign Key|-||
|2|bank Id|ID of the bank where student account exists|int|Yes|Foreign Key|-||
|3|branch Id|IFSC code of the bank|str|Yes|Foreign Key|-||
|4|bankname|Name of the Bank|str|Yes|Master Codes|Bank Codes||
|5|branchname|Name of the Bank Branch|str|Yes|Master Codes|Branch Codes||
|6|accountno|Account Number|str|Yes|Filled|-||
|7|account type|Type of Account|str|Yes|Master Codes|Acc Type Codes||
|8|account holder name|Name of Account Holder|str|Yes|Filled|-||
