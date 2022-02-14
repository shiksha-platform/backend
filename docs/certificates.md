Certificates
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|certificateId|ID of the certificate generated|str|Yes|Auto generated|-||
|2|name|Name of the certificate|char|Yes|Filled|-||
|3|description|Description of the certificate|char|No|Filled|-||
|4|studentId|ID of the student receiving the certificate|str|Yes|Foreign Key|-||
|5|issueDate|Date when the certificate was issued|date|Yes|Auto filled|-|Link to content|
|6|expiryDate|Date when the certificate will expire|date|Yes|Filled|-|Auto generated based on the type of certificate and the issue date|
|7|certificateType|Type of the certificates|char|Yes|Master Codes|Certificate Type Codes|Will be based on a state certificate directory|
|8|issueAuthority|Authority responsible for issuing certificate|char|Yes|Filled|-||
