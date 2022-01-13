Parent
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|parentId|Parent ID as defined by the state registry|str|Yes|Auto generated|-||
|2|aadhaar|Aadhaar number of the parent|str|No|Registry|||
|3|parentType|Parent as the mother/ father/ guardian of the student|char|Yes|Master Codes|Parent codes||
|4|gender|Gender of the parent|char|Yes|Master Codes|Gender codes||
|5|firstName|First name of the parent|char|Yes|Filled|-||
|6|lastName|Last name of the parent|char|Yes|Filled|-||
|7|contactNumber|Most active mobile number of the parent|int|Yes|Filled|-||
|8|email|Most active email address of the parent|str|No|Filled|-||
|9|birthDate|Date of birth of the parent|date|No|Filled|-||
|10|socialCategory|Social category of the parent as defined by the state for providing benefits|char|No|Filled|-||
|11|address|Address of the parent|char|No|Filled|-||
|12|pincode|Pincodes as defined in the state location directory|str|No|Master Codes|Location codes|These IDs will be from the state location directory|
|13|villageId|Village ID as defined in the state location directory|str|No|Master Codes|Location codes|These IDs will be from the state location directory|
|14|blockId|Block ID as defined in the state location directory|str|No|Master Codes|Location codes|These IDs will be from the state location directory|
|15|districtId|District ID as defined in the state location directory|str|No|Master Codes|Location codes|These IDs will be from the state location directory|
|16|address|Address of the parent|str|No|Filled|-||
|17|studentId|Student ID/s of their child|str|Yes|Registry|Student registry||
|18|occupation|Occupation of the parent|char|No|Master Codes|Occupation codes||
|19|income|Income of the parent|int|No|Filled|-||
