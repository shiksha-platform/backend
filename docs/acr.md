Acr
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|ID of the ACR Record|int|Yes|Auto generated|-||
|2|teacher_Id|ID of the teacher for which ACR Record belongs to|int|Yes|Foreign Key|-||
|3|acad_year|Year for which ACR was added in|int|Yes|Master Codes|Acad Year Codes||
|4|rank|Rank graded by the official|str|Yes|Master Codes|Rank Codes||
|5|reporting_officer_Id|ID of the Reporting officer who uploaded acr record|int|Yes|Auto filled|-||
|6|comments|Comments marked by the Reporting officer|str|Yes|Filled|-||
